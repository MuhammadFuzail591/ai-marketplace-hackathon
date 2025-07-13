// app/api/suggest/route.js

import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { promises as fs } from 'fs'
import path from 'path'

// Get the API key from environment variables
const API_KEY = process.env.API_KEY
if (!API_KEY) {
  throw new Error('API_KEY environment variable not set')
}

const genAI = new GoogleGenerativeAI(API_KEY)

// This is the main function for the POST request
export async function POST (request) {
  try {
    // 1. Get the user's query from the request body
    const { query } = await request.json()

    if (!query) {
      return NextResponse.json({ error: 'Query is required.' }, { status: 400 })
    }
    console.log(`Received query for suggestions: "${query}"`)

    // 2. Load the product data from the local JSON file
    // process.cwd() gives the root of the project
    const filePath = path.join(process.cwd(), 'data.json')
    const productsJsonString = await fs.readFile(filePath, 'utf-8')

    // The rest of your Gemini logic is almost identical
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const schema = {
      type: 'object',
      properties: {
        message: { type: 'string' },
        suggested_products: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'number' },
              title: { type: 'string' },
              price: { type: 'number' },
              description: { type: 'string' },
              image: { type: 'string' }
            },
            required: ['id', 'title', 'price', 'description', 'image']
          }
        }
      },
      required: ['suggested_products']
    }

    const prompt = `
      You are an expert product recommendation engine. Your task is to analyze the user's query and give a friendly message and suggest relevant products from the provided JSON data.
      Here is the complete catalog of products: ${productsJsonString}
      Here is the user's request: "${query}"
      Please find up to 3 products that best match the user's request.
      Your response MUST be a valid JSON object that adheres to the provided schema. Do not include any text before or after the JSON object.
    `

    const generationConfig = {
      response_mime_type: 'application/json',
      response_schema: schema
    }

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig
    })

    const response = result.response
    const responseObject = JSON.parse(response.text())

    // 3. Return a successful response
    return NextResponse.json(responseObject)
  } catch (error) {
    // 4. Handle any errors
    console.error('Error in /api/suggest:', error)
    return NextResponse.json(
      { error: 'Failed to fetch suggestions.' },
      { status: 500 }
    )
  }
}
