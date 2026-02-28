import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  const { type, content, keyword } = await req.json();
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  let prompt = "";

  if (type === "rewrite") {
    prompt = `Rewrite professionally and include keyword "${keyword}": ${content}`;
  }

  if (type === "analyze") {
    prompt = `Extract top 10 ATS keywords from this Job Description as comma separated list:\n${content}`;
  }

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  return NextResponse.json({ result: text });
}