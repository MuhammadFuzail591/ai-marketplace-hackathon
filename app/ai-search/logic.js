// getSuggestions.js

import { GoogleGenerativeAI } from '@google/generative-ai'
import { readFileSync } from 'fs'

// It's best practice to use environment variables for your API key
const API_KEY = 'AIzaSyA0PYUazS1UvN837JHh_2JuzOwncE_3ZCo'
if (!API_KEY) {
  throw new Error('API_KEY environment variable not set')
}

const genAI = new GoogleGenerativeAI(API_KEY)

async function main (userQuery) {
  // For this example, we'll use the Gemini 1.5 Flash model
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

  // 1. Load your product data from a file into a string.
  // This is how you'll provide the context to the model every time.
  const productsJsonString = readFileSync('./data.json', 'utf-8')
  //   const userQuery = 'I am looking for a sleek, modern chair for my home office.'

  // 2. Define the exact JSON schema for the output.
  // This tells the model precisely how to structure its response.
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

  // 3. Construct the prompt with clear instructions.
  // We embed the entire product catalog (as a string) inside the prompt.
  const prompt = `
    You are an expert product recommendation engine. Your task is to analyze the user's query and gove friendly message and suggest relevant products from the provided JSON data.

    Here is the complete catalog of products:
    ${productsJsonString}

    Here is the user's request: "${userQuery}"

    Please find up to 3 products that best match the user's request.
    Your response MUST be a valid JSON object that adheres to the provided schema. Do not include any text before or after the JSON object.
  `

  // 4. Set the generation configuration to use JSON Mode.
  const generationConfig = {
    response_mime_type: 'application/json',
    response_schema: schema
  }

  // 5. Make the API call.
  const result = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig
  })

  const response = result.response

  // The response is already a JSON object because of the MIME type setting.
  const responseObject = JSON.parse(response.text())

  // 6. Log the structured output.
  console.log(JSON.stringify(responseObject, null, 2))

  return JSON.stringify(responseObject, null, 2)
}

main('I am looking for a sleek, modern chair for my home office.')
