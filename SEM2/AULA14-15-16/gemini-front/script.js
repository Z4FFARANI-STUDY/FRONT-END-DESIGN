// Input da mensagem digitada pelo usuário <input>
let inputMessage = document.getElementById('message');

// Div onde irei exibir as mensagens do usuário e do Gemini
let chatLog = document.getElementById('chat-log');

// Array que irá salvar o histórico de mensagens trocadas com Gemini
let messages = [];

// Formulário (querySelector pega o elemento por classes, ids etc.)
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    // Evitando reset de página
    event.preventDefault();

    let messageText = inputMessage.value; // Texto digitado pelo usuário
    
    let structuredMessage = {
        "role": "user",
        "parts": [{"text": messageText}]
    };

    messages.push(structuredMessage);
    console.log(messages)

    inputMessage.value = "";

    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add("message--sent");
    messageElement.innerHTML = `
        <div class="message__text">${messageText}</div>
    `;

    chatLog.appendChild(messageElement);

    // Requisição para API local
    fetch("http://localhost:3000/sendMessage/", {
        method: "POST",
        // Estrutura o tipo de conteúdo
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            messages
        })
    });

});