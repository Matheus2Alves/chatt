const rules = {
    "hello": "Hi there! How can I assist you?",
    "how are you": "I'm just a bot, but I'm here to help!",
    "what's your name": "I am your friendly rule-based chatbot.",
    "bye": "Goodbye! Have a great day!",
    // Add more rules as needed
};

const pedidoCliente = {
    nome: "",
    servico: "",
};

const chatbox = document.getElementById('chatbox');
const submitButton = document.getElementById('submitButton');
const inputField = document.getElementById('userInput');

function getResponse(userInput) {
    userInput = userInput.toLowerCase();
    return rules[userInput] || "I'm sorry, I don't understand that.";
}


let userInput = '';

function handleInput(event) {
    if (event.key === 'Enter' || event.type === 'click') {

        userInput = inputField.value;
        if(userInput.trim() === '') {
            chatbox.innerHTML += `<div class="bot"><p>Por gentileza, escreva algo!</p></div>`;
        } else {

        pedidoCliente.nome = userInput;    
            
        // Display user input
        chatbox.innerHTML += `<div class="user">${userInput}</div>`;
        
        // Get bot response
        //const botResponse = getResponse(userInput);
        
        // Display bot response
        //chatbox.innerHTML += `<div class="bot">${botResponse}</div>`;
        
        // Clear the input field
        inputField.value = '';
        
        // Scroll to the bottom of the chatbox
        chatbox.scrollTop = chatbox.scrollHeight;
        };

    }
}

inputField.addEventListener('keydown', handleInput);
submitButton.addEventListener('click', handleInput);

window.onload = function() {
    displayWelcome();
};

function displayWelcome() {
    const greetingMessage = "A <strong>Clínica Aline Alves Podologia </strong> oferece cuidados especializados para a saúde dos seus pés. Estamos localizados na <strong>Av. São Paulo, Nº 49, no bairro Vila Jordanopolis, em São Bernardo do Campo - SP.</strong> <br>Ofereçemos servicos como: <br><strong>1-Podologia</strong> <br><strong>2-cílios</strong> <br><strong>3-sobrancelha</strong>. <br>Se você deseja marcar uma consulta, escolha um serviço desejado. <br> Para mais informações,<strong> acesse nosso site pressionando o botão 'site'</strong>";
    chatbox.innerHTML += `<div class="bot">${greetingMessage}</div>`;
    showOptions();
}; 

function showOptions() {
    chatbox.innerHTML += `<div class="box-options"> <button onclick="podologia()" class="options"><p>Podologia</p></button> <button onclick="myFunction()" class="options"><p>Cílios</p></button> <button onclick="myFunction()" class="options"><p>Sobrancelha</p></button> <button class="options"><p>Site</p></button> </div>`;
    console.log(pedidoCliente)
};

function podologia() {
    userInput = inputField.value;
    pedidoCliente.servico = "Podologia";
    let infoCliente = "Olá, meu nome é " + pedidoCliente.nome + ". Gostaria de marcar uma consulta de " + pedidoCliente.servico + ". Qual o preço do atendimento? e os horários disponíveis porfavor!";
    chatbox.innerHTML += `<div class="user"><p>Podologia</p></div>`;
    chatbox.innerHTML += `<div class="bot"><p>Excelente escolha. No entanto, antes, poderia me informar seu nome?`;
    if(pedidoCliente.nome) {
        chatbox.innerHTML += `<div class="bot"><p>Ótima escolha. Clique no link para acessar o WhatsApp da Clínica Aline Alves Podologia e solicitar um orçamento. Agradecemos pelo seu contato!<br><a target="blank"  href="https://wa.me/5511983284301?text=${encodeURIComponent(infoCliente)}>ir para o Whatsapp</a>`;     
    }
}





