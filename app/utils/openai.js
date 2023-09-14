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
        content: `Tell me the best storage tips you can give me about ${item}, and make sure the answer is between 250 and 260 characters long, including spaces.`,
      },
    ],
    model: "gpt-3.5-turbo",
  })

  return completion.choices[0].message.content
}
