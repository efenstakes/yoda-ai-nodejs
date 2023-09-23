
import { OpenAI } from 'openai'

export const prompt = async(req, res)=> {

    // get user prompt
    const { prompt, } = req.body

    // initialize openai
    const openai = new OpenAI({
        apiKey: process.env.OPENAPI_KEY, // defaults to process.env["OPENAI_API_KEY"]
    })  
    const completion = await openai.chat.completions.create({
        messages: [
            {
                // role: 'user',
                role: 'system',
                content: prompt,
            }
        ],
        model: 'gpt-4', // 'gpt-3.5-turbo',
        max_tokens: 80,
    })

    // log
    console.log(completion.choices);

    // return
    res.json({
        prompt,
        reply: completion,
    })
}