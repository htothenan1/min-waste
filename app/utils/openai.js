"use server"

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
