// lib/inngest/client.js
import { Inngest } from "inngest";

export const inngest = new Inngest({
     id:"sensai",
      name: "sensai",
      creadentials:{
        gemini:{
            apiKey: process.env.GEMINI_API_KEY,
      },
    },
    });
