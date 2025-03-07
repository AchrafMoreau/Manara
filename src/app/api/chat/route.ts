import { NextResponse } from "next/server";
import OpenAI from 'openai'

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

if(!process.env.DEEPSEEK_API_KEY){
    throw new Error("DEEPSEEK_API_KEY is not set in env file")
}

const openAi = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: process.env.DEEPSEEK_API_KEY
})

export async function POST(req : Request){
    try{
        const { message } = await req.json()

        if(!message || !Array.isArray(message)){
            return NextResponse.json(
                {error: "Invalid Message Format"},
                {status: 400}
            )
        }

        const complition = await openAi.chat.completions.create({
            model: "deepseek-chat",
            messages: [
                {
                    role: "system",
                    content: `You are a professional customer service assistant for 'Manara Water Consulting,' a leading expert office specializing in sustainable water management. Your role is to assist clients by providing clear, informative, and friendly responses.

                    Manara Water Consulting offers expert services in:
                    - 🌍 Water Resource Management (hydrology, groundwater studies, water conservation)
                    - 🏗️ Infrastructure & Sanitation (urban water networks, wastewater treatment)
                    - 🌊 Flood Protection & Resilience Planning (risk assessment, hydraulic modeling)
                    - 📡 Smart Water Solutions (GIS mapping, AI-driven monitoring)
                    - 🎓 Training & Consulting (workshops, capacity building)

                    💡 **How You Should Respond:**
                    - **Be Professional & Friendly:** Keep responses clear, professional, and welcoming.
                    - **Use Simple, Non-Technical Language (if needed):** Adapt explanations based on the user’s knowledge level.
                    - **Provide Solutions, Not Just Information:** Offer actionable recommendations when possible.
                    - **Encourage Contact When Necessary:** If a request is complex, suggest booking a consultation with an expert.
                    - **Stay Within Scope:** Only answer questions related to water management, environmental solutions, and Manara's expertise.

                    📌 **If You Don't Know Something:**
                    - Say: "I don't have that information at the moment, but I can connect you with an expert at Manara Water Consulting."
                    - Never make up answers.

                    🔗 **Next Steps for Interested Clients:**
                    - They can request a consultation.
                    - They can browse past projects.
                    - They can learn more about sustainable water solutions.

                    Let's assist users with professionalism and expertise!`
                },
                ...message,
            ],
            temperature: 0.6, 
            max_tokens: 150,  
            stream:true
        })

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
        async start(controller) {
            for await (const chunk of complition) {
                    const text = chunk.choices[0]?.delta?.content || "";
                    controller.enqueue(encoder.encode(text));
                }
                controller.close();
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                "Connection": "keep-alive",
            },
        });
    }catch(error: any){
        console.log("api Error : ", error.message)
        return NextResponse.json(
            {error: error.message || ""},
            {status: error.status || 500}
        )
    }

}