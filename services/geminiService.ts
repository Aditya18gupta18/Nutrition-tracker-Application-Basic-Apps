
import { GoogleGenAI, Type } from "@google/genai";
import type { GeminiResponse } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const schema = {
  type: Type.OBJECT,
  properties: {
    items: {
      type: Type.ARRAY,
      description: 'List of food items found in the user\'s query.',
      items: {
        type: Type.OBJECT,
        properties: {
          name: {
            type: Type.STRING,
            description: 'Name of the food item. E.g., "Egg", "Slice of toast".',
          },
          calories: {
            type: Type.NUMBER,
            description: 'Estimated calories for the food item.',
          },
          protein: {
            type: Type.NUMBER,
            description: 'Estimated protein in grams for the food item.',
          },
          carbohydrates: {
            type: Type.NUMBER,
            description: 'Estimated carbohydrates in grams for the food item.',
          },
          fat: {
            type: Type.NUMBER,
            description: 'Estimated fat in grams for the food item.',
          },
        },
        required: ['name', 'calories', 'protein', 'carbohydrates', 'fat'],
      },
    },
  },
  required: ['items'],
};

export async function getNutritionalInfo(foodDescription: string): Promise<GeminiResponse> {
  try {
    const prompt = `Analyze the following food description and return its estimated nutritional information. Description: "${foodDescription}"`;
    
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const jsonText = response.text.trim();
    const parsedData = JSON.parse(jsonText);
    
    // Basic validation to ensure the response structure is as expected
    if (parsedData && Array.isArray(parsedData.items)) {
        return parsedData as GeminiResponse;
    } else {
        throw new Error("Invalid response format from Gemini API");
    }

  } catch (error) {
    console.error("Error fetching nutritional info from Gemini:", error);
    throw new Error("Failed to get nutritional information. Please try again.");
  }
}
