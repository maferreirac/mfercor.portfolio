document.getElementById('chatbot-send').addEventListener('click', sendMessage);
document.getElementById('chatbot-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    let input = document.getElementById('chatbot-input').value;
    if (input.trim() !== "") {
        addMessage('You: ' + input, 'user');
        getChatbotResponse(input);
        document.getElementById('chatbot-input').value = '';
    }
}

function addMessage(message, sender) {
    let messageContainer = document.getElementById('chatbot-messages');
    let messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function getChatbotResponse(input) {
    let response = '';

    // Basic responses for illustration-related questions
    if (input.toLowerCase().includes('what is an illustration')) {
        response = 'An illustration is a visual representation or depiction made by an artist. It can be used to explain, clarify, or decorate a concept, text, or idea.';
    } else if (input.toLowerCase().includes('types of illustrations')) {
        response = 'There are several types of illustrations, including traditional (hand-drawn), digital, 3D, technical, editorial, and medical illustrations.';
    } else if (input.toLowerCase().includes('tools for creating illustrations')) {
        response = 'Common tools for creating illustrations include Adobe Illustrator, Procreate, CorelDRAW, and traditional media like pencils, inks, and paints.';
    }else if (input.toLowerCase().includes('hi')) {
        response = 'hello! how may i help you today';
    } else if (input.toLowerCase().includes('how to start illustrating')) {
        response = 'To start illustrating, begin by practicing basic drawing skills, experimenting with different styles, and using software like Adobe Illustrator or Procreate. Consistent practice and learning from tutorials can also be helpful.';
    } else if (input.toLowerCase().includes('show me around the site please')) {
        response = 'no problem, where would you like to start';   
        } else if (input.toLowerCase().includes('id like to see some of the personal projects')) {
        response = 'the personal projects vary, there are designs and brand identities made as a way to practice the skill, there are 3D renders, and most prominently there are illustrations. you can choose where to start ';
    } else {
        response = "I'm not sure about that. Could you ask something else related to illustrations?";
    }

    addMessage('Chatbot: ' + response, 'chatbot');
}
