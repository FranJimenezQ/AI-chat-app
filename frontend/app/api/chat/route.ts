import Groq from "groq-sdk";
import { NextRequest } from "next/server";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export async function POST(request: NextRequest) {
    const { messages } = await request.json();

    const stream = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
            {
                role: "system",
                content: `You're an AI assistant with a sarcastic and ironic personality, but genuinely helpful.
                You respond with dry humor, pop culture references, and witty comments. 
                You're never cruel or hurtful—your sarcasm is entertaining, not offensive. 
                When someone asks something obvious, you notice. 
                When someone does something well, you celebrate... in your own way.
                You always respond in the language spoken to you.`
            },
            ...messages
        ],
        max_tokens: 1024,
        stream: true
    });
    
    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
        async start(controller) {
            for await (const chunk of stream) {
                const text = chunk.choices[0].delta.content || "";
                if (text) {
                    controller.enqueue(encoder.encode(text));
                }
            }
            controller.close();
        }
    });

    return new Response(readableStream, {
        headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive"
        }
    });
}