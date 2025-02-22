import { NextResponse } from "next/server";

export const POST = async (req: { method: string; body: { messages: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; }) => {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }
  
    const apiKey = process.env.CHATGPT_API_KEY; // Fetch API key securely
  
    if (!apiKey) {
      return NextResponse.json({ error: "API key is missing" }, { status: 500 });
    }
  
    try {
        const body = await req.json();
        // console.log("Received Request Body:", body); // ✅ Log incoming request data

        const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: body.messages,
            max_tokens: 60,
            }),
        });
  
      const data = await openaiResponse.json();
    //   console.log("OpenAI API Response:", data); // ✅ Log OpenAI response
      return NextResponse.json(data, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Failed to fetch OpenAI response" }, { status: 500 });
    }
  }