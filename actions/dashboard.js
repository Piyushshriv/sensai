"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

// Enum mapping helpers
const mapDemandLevel = (input) => {
  const val = input?.toLowerCase();
  if (val.includes("high")) return "HIGH";
  if (val.includes("medium")) return "MEDIUM";
  if (val.includes("low")) return "LOW";
  return "MEDIUM"; // fallback
};

const mapMarketOutlook = (input) => {
  const val = input?.toLowerCase();
  if (val.includes("positive")) return "POSITIVE";
  if (val.includes("neutral")) return "NEUTRAL";
  if (val.includes("negative")) return "NEGATIVE";
  return "NEUTRAL"; // fallback
};

export const generateAIInsights = async (industry) => {
  const prompt = `
    Analyze the current state of the ${industry} industry and provide insights in ONLY the following JSON format without any additional notes or explanations:
    {
      "salaryRanges": [
        { "role": "string", "min": number, "max": number, "median": number, "location": "string" }
      ],
      "growthRate": number,
      "demandLevel": "High" | "Medium" | "Low",
      "topSkills": ["skill1", "skill2"],
      "marketOutlook": "Positive" | "Neutral" | "Negative",
      "keyTrends": ["trend1", "trend2"],
      "recommendedSkills": ["skill1", "skill2"]
    }

    IMPORTANT: Return ONLY the JSON. No additional text, notes, or markdown formatting.
    Include at least 5 common roles for salary ranges.
    Growth rate should be a percentage.
    Include at least 5 skills and trends.
  `;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const rawText = response.text();

  // Remove backticks/formatting
  const cleanedText = rawText.replace(/```(?:json)?\n?/g, "").trim();

  try {
    const parsed = JSON.parse(cleanedText);

    // Normalize enum values
    parsed.demandLevel = mapDemandLevel(parsed.demandLevel);
    parsed.marketOutlook = mapMarketOutlook(parsed.marketOutlook);

    return parsed;
  } catch (err) {
    console.error("Failed to parse AI response:", err);
    throw new Error("AI response was not valid JSON.");
  }
};

export async function getIndustryInsights() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
    include: { industryInsight: true },
  });

  if (!user) throw new Error("User not found");

  if (!user.industryInsight) {
    const insights = await generateAIInsights(user.industry);

    insights.demandLevel = insights.demandLevel.toUpperCase(); // 'HIGH', 'MEDIUM', 'LOW'
    insights.marketOutlook = insights.marketOutlook.toUpperCase(); // 'POSITIVE', etc.
    
    await db.industryInsight.update({
      where: { industry: user.industry },
      data: {
        ...insights,
        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });
    

    return industryInsight;
  }

  return user.industryInsight;
}
