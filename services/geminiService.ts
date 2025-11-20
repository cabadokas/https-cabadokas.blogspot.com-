import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; 

// Note: In a real production app, you would proxy this through a backend
// to keep the key secure. For this frontend-only demo, we use the env var directly.

export const generateWellnessTip = async (topic: string): Promise<string> => {
  if (!apiKey) {
    return "API Key not configured. Please set process.env.API_KEY.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    
    const prompt = `
      You are a friendly, expert wellness coach for women named "Cabadokas". 
      Provide a short, encouraging, and actionable tip (max 50 words) about: ${topic}.
      Focus on health, beauty, or self-care. 
      Do not provide medical advice, but rather general wellness guidance.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Stay healthy and beautiful!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Could not fetch a tip right now. Remember to drink water!";
  }
};

export const askWellnessAssistant = async (question: string): Promise<string> => {
  if (!apiKey) {
      return "API Key missing.";
  }
  try {
    const ai = new GoogleGenAI({ apiKey });
    // Enhanced prompt for SEO and Social Media searching
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `
            You are "Cabadokas", a helpful AI assistant for a women's health and beauty blog.
            
            If the user asks for **Social Media Groups** (e.g. "Find Facebook groups for weight loss"):
            - List 3-5 popular or trending types of groups they should search for.
            - Suggest specific search terms/keywords they can use on Facebook, Reddit, or LinkedIn.
            - Do not invent fake URLs, but describe the communities accurately.

            If the user asks for **Hashtags**:
            - Provide a list of 10-15 high-traffic, relevant hashtags for Instagram/TikTok.

            If the user asks about Health/Beauty:
            - Answer the question concisely (under 100 words).

            User Question: ${question}
        `
    });
    return response.text || "I'm sorry, I didn't get that.";
  } catch (error) {
      console.error(error);
      return "Sorry, I'm having trouble connecting to my brain right now.";
  }
}