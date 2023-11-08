"use server"

const fs = require("fs")

import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
})

export async function generateStorageTip(item) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Best storage advice for ${item}, limit response to 3 sentences.`,
      },
    ],
    model: "gpt-3.5-turbo",
  })

  return completion.choices[0].message.content
}

export async function receiptTest(imgFile) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Identify the items on this receipt as common grocery items. Exclude snacks and non-food items that you identify. Seperate each item with a comma. Make sure the items do not include any adjectives or qualifiers such as “organic” or “half gallon”. Make sure there are no repeated items on the list you give me. Make sure the vegetable and fruit items are plural, as long as it makes grammatical sense. Make sure all items are capitalized, and limited to one word if possible. Just give me the items, with no other words.",
          },
          {
            type: "image_url",
            image_url: `${imgFile}`,
          },
        ],
      },
    ],
    max_tokens: 300,
  })
  console.log(response.choices[0])
}

export async function veggiesTest(imgFile) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Can you list the vegetables and fruits in this picture, seperated by commas. Please capitalize each item and do not include any other words in your response. Please make sure items any sort of adjectives.",
          },
          {
            type: "image_url",
            image_url: `${imgFile}`,
          },
        ],
      },
    ],
    max_tokens: 300,
  })
  return response.choices[0]
}
