import { annoyingKidReplies } from "../server/controllers/botReplies";

// Bot timer
let botReplyTimer;

// friendly bot by default
const currentBot = friendlyBot;

// class for messages
class Message {
    constructor (author, content, timestamp) {
        this.author = author, 
        this.content = content,
        this.timestamp = timestamp;
    }
}

// Friendly Bot clicked
$('#friendly-bot').on('click', function() {
    currentBot = friendlyBot;

    // Reset the text area to placeholder and refocus
    $('#chat-input').val('').blur().focus();

    // clear out reply timer to avoid wrong bot reply
    if(botReplyTimer !== undefined) {
        clearTimeout(botReplyTimer);
    }

    // Clear out previous bot 
    $('.message').remove();
    
    // Loop through chat history extract and create message
    let history = chatHistory.friendlyBotHistory;
    history.forEach((message) => {
        addMessage(message);
    });
            
    // Change header name and icon
    $('#header-icon').attr('src', 'static/android.png');
    $('#header-name').text('Friendly Bot');
})

// Unfriendly Bot clicked
$('#unfriendly-bot').on('click', function() {
    currentBot = unfriendlyBot;

    // Reset the text area to placeholder and refocus
    $('#chat-input').val('').blur().focus();

    // clear out reply timer to avoid wrong bot reply
    if(botReplyTimer !== undefined) {
        clearTimeout(botReplyTimer);
    }

    // Clear out previous bot 
    $('.message').remove();

    // Loop through chat history extract and create message
    let history = chatHistory.unfriendlyBotHistory;
    history.forEach((message) => {
        addMessage(message);
    });

    // Change header name and icon
    $('#header-icon').attr('src', 'static/bad.png');
    $('#header-name').text('Rude Bot');
})

// Annoying Kid Bot clicked
$('#kid-bot').on('click', function() {
    currentBot = annoyingKid;

    // Reset the text area to placeholder and refocus
    $('#chat-input').val('').blur().focus();
    
    // clear out reply timer to avoid wrong bot reply
    if(botReplyTimer !== undefined) {
        clearTimeout(botReplyTimer);
    }
    
    // Clear out previous bot 
    $('.message').remove();

    // Loop through chat history extract and create message
    let history = chatHistory.annoyingKidHistory;
    history.forEach((message) => {
        addMessage(message);
    });

    // Change header name and icon
    $('#header-icon').attr('src', 'static/annoying.png');
    $('#header-name').text('Annoying Kid Bot');
})

// Messaging

// Send new message on enter
$('#chat-input').on('keypress', function(event) {
    // Check it was enter key clicked
    if(event.keyCode === 13) {
        // Get user message 
        let userInput = $('#chat-input').val();
        
        // Check it's not empty
        if(userInput === '') {
            return;
        }
                
        //Check if the bot is replying and if so clear timer so it's not one reply per msg
        if(botReplyTimer !== undefined) {
            clearTimeout(botReplyTimer);
        }
        
        let dateTime = getDatetime();

        const newMessage = new Message('user', userInput, dateTime);
        displayMessage(newMessage);

        // Reset the text area to placeholder and refocus
        $('#chat-input').val('').blur().focus();

        // Scroll down
        scrollDown();

        // Trigger bot repsonse
        botReplyTimer = setTimeout(() => {
            // get reply and display
            const reply = getBotReply(currentBot);

        },1500)
    }
})

function getDatetime () {
    // Get current date and time for tag
    let now = new Date();
    let date = now.getDate() + '/' + (now.getMonth() +1) + '/' + now.getFullYear();
    let hours = now.getHours();
    let mins = now.getMinutes();
    if(mins <= 9) {
        mins = '0' + mins;
    }
    let time = hours + ':' + mins;
    return date + ' ' + time;
}

async function getBotReply (bot) {
    try {
        const response = await fetch('/botreply', {
            method: 'GET',
            headers : { bot: bot }
        });
        if (!response.ok) {
            throw new Error (`HTTP error! status: ${response.status}`);
        }
        const reply = await response.json();
        return reply;
    } catch (error) {
        console.error(error);
    }
}

// Set chats to always scroll down
function scrollDown() {
    console.log('scrollDown');
    let $chatsinner = $('#chats');
    $chatsinner.scrollTop($chatsinner[0].scrollHeight);  
}

// Add message function for populating chat history
function displayMessage(message) {

    const type = message.author === 'user' ? 'user' : 'bot';
    let $tag = $('<div>')
        .addClass('tag')
        .text(`${message.timestamp}`);       
    
    let $newMess = $('<div>')
        .addClass('message')
        .addClass(`message-${type}`);

    let $p = $('<p>')
        .text(`${message.content}`)
        .append($tag)
    
        // User icon
    let $iconContainer = $('<div>')
        .addClass('chat-icon-container');
    
    let $icon = $('<img>')
        .addClass('chat-icon')
        .attr('src', `static/${message.user}.png`);
    
    
    $iconContainer.append($icon);
    $newMess.append($p)
    $newMess.append($iconContainer)
    $newMess.appendTo('#chats');

    // Scroll down
    scrollDown();
};
            

       
       


