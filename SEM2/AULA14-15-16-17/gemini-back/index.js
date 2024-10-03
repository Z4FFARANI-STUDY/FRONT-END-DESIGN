import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Configurar o endpoint
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


app.post("/sendMessage", async (req, res) => {
    const { messages } = req.body;
    
    // Instanciando o Gemini com a API KEY
    const genAI = new GoogleGenerativeAI("AIzaSyCcg-PzORpKv43BzkRsxBWWX8-4ABhJGu4");
    
    // Selecionando o modelo a ser utilizado
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = messages[0].parts[0].text;

    // Resultado da requisição ao Google Gemini
    const result = await model.generateContent(prompt);

    res.json({
        chat_completion: result.response.text()
    })
});

app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://locahost:${port}`);
});