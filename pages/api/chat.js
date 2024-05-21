import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const userMessage = req.body.message;

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
            const result = await model.generateContent(userMessage);
            const response = await result.response;
            const text = await response.text();

            res.status(200).json({
                reply: text
            });
        } catch (error) {
            console.log("Error processing the AI response:", error);
            res.status(500).json({
                error: "Failed to process the AI response"
            });
        }
    } else {
        res.setheader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}