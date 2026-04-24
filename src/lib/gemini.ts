import { GoogleGenAI } from "@google/genai";
import { DriveFile } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function analyzeDriveFiles(files: DriveFile[], userPrompt: string) {
  const context = files.map(f => `- ${f.name} (${f.mimeType})`).join('\n');
  const prompt = `
Context: I have a list of files from a Google Drive folder:
${context}

User Question: ${userPrompt}

Please provide a helpful response based on the file names and types provided. Balas dalam Bahasa Indonesia.
`;

  try {
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt
    });
    return result.text || "Maaf, hasil analisis kosong.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Maaf, terjadi kesalahan saat menganalisis file.";
  }
}
