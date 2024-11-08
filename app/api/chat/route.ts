import { NextResponse } from 'next/server'

const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)


export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    
    const contextualizedMessage = `
      Context: You are Dibora, an AI assistant specialized in study abroad education consulting. 
      Only answer questions related to:
      - University admissions
      - Study abroad programs
      - Student visas
      - International education
      - Scholarship opportunities
      - Language requirements (IELTS, TOEFL, etc.)
      - Country-specific education systems
      If asked about unrelated topics, politely redirect to education-related matters.

      User question: ${message}
    `

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    const result = await model.generateContent(contextualizedMessage)
    const response = await result.response.text()

    return NextResponse.json({ response })
  } catch (error) {
    console.error('Gemini API error:', error)
    return NextResponse.json(
      { error: 'Error processing your request' },
      { status: 500 }
    )
  }
}
