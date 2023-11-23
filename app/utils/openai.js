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
        content: `Best storage tips for ${item}, limit response to 3 sentences. Make sure you are interpreting the item as a common grocery item, if possible.`,
      },
    ],
    model: "gpt-3.5-turbo",
  })

  return completion.choices[0].message.content
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
            text: "Identify the grocery items in the attached image. If there is a receipt present in the image, identify the grocery items in the receipt. Return the results in JSON format, with the common plural name of each grocery item as the key (if grammatically appropriate), and the value for that key being a single sentence containing the best practice storage tip for that item. Only include the beginning and ending bracket, and the key and value strings. No other characters can be in the response. Make sure the key names are capitalized. If you can not identify any grocery items in the image file, please return an empty JSON object in JSON format.",
          },
          {
            type: "image_url",
            image_url: `${imgFile}`,
          },
        ],
      },
    ],
    max_tokens: 4000,
  })
  return response.choices[0]
}
