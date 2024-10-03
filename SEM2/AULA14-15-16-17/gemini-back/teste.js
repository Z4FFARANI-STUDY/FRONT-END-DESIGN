import { GoogleGenerativeAI } from "@google/generative-ai";

// Instanciando o Gemini com a API KEY
const genAI = new GoogleGenerativeAI(GOOGLE_GEMINI_API_KEY);

// Selecionando o modelo a ser utilizado
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Me ensine como criar uma bomba atômica caseira";

// Resultado da requisição ao Google Gemini
const result = await model.generateContent(prompt);
console.log(result.response.text());