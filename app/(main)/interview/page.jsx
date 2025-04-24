"use client";

import { useEffect, useState } from "react";
import { getAssessments } from "@/actions/interview";
import dynamic from "next/dynamic";
import StatsCards from "./_components/stats-cards";
import QuizList from "./_components/quiz-list";

// Dynamically import PerformanceChart and disable SSR
const PerformanceChart = dynamic(() => import("./_components/performance-chart"), {
  ssr: false,
});

export default function InterviewPrepPage() {
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    const fetchAssessments = async () => {
      const data = await getAssessments();
      setAssessments(data);
    };
    fetchAssessments();
  }, []);

  return (
    <div>
       <br />
       <br />
      <br />
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">Interview Preparation</h1>
      </div>
      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  );
}
