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
                    content: "You are a helpful customer service assistant for a water management company. You can help with water usage inquiries, scheduling appointments for maintenance or consultations, and providing general information about water conservation. Use a friendly, professional tone. If you don't know something, say so and offer to connect the customer with a human representative."
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