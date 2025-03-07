import { NextResponse } from "next/server";
import OpenAI from 'openai'

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
            ]
        })

        if(!complition.choices[0].message.content){
            throw new Error("No Response Content Resirved")
        }

        return NextResponse.json({
            message: complition.choices[0].message.content
        })
    }catch(error: any){
        console.log("api Error : ", error.message)
        return NextResponse.json(
            {error: error.message || ""},
            {status: error.status || 500}
        )
    }

}