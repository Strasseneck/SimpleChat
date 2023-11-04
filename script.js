// Variables

// Bot response objects

// Friendly bot

const friendlyBotResponses = {

    1: 'That\'s really nice of you, I feel the same!',
    2: 'Well I just think you\'re the best!',
    3: 'I really like talking to you, you\'re so intelligent!',
    4: 'A great idea! Let\s do it!',
    5: 'I\'m so happy to hear you say that!'
};

// Unfriendly bot

const unfriendlyBotResponses = {

    1: 'That\'s one of the stupidest things I\'ve ever heard anyone say!',
    2: 'BORING! BORING!',
    3: 'Oh no, it\'s you again, don\'t you have any other friends!',
    4: 'Did you hear the one about the loser who spends all their time talking to a bot?',
    5: 'How embarrassing! You really are the worst!'
};

// Annoying kid bot

const annoyingKidResponses = {
   
    1: 'dUh!',
    2: 'WATeva!!!',
    3: 'LOLOLOLOLOLZZZZZ!!!!',
    4: 'stooooPIiiiiiDDDDD!!!',
    5: 'nanananananana'
};

// Light or Dark

// Which bot?

// Bot initial states, friendly as default

let friendlyBot = true;
let unfriendlyBot = false;
let annoyingKid = false;

// Bot selection

// Friendly Bot clicked
$('#friendly-bot-btn').on('click', function() {
    friendlyBot = true;
    unfriendlyBot = false;
    annoyingKid = false;
})

// Unfriendly Bot clicked
$('#unfriendly-bot-btn').on('click', function() {
    friendlyBot = false;
    unfriendlyBot = true;
    annoyingKid = false;
})

// Annoying Kid Bot clicked
$('#annoying-kid-bot-btn').on('click', function() {
    friendlyBot = false;
    unfriendlyBot = false;
    annoyingKid = true;
})

// Messaging

// Send new message on enter
$('#chat-input').on('keypress', function(event) {

    // Check it was enter key clicked
    if(event.keyCode === 13) {

        // Create user message and display 
        let userInput = $('#chat-input').val();

        // Get current date and time for tag
        let now = new Date();
        let date = now.getDate() + '/' + (now.getMonth() +1) + '/' + now.getFullYear();
        let time = now.getHours() + ':' + now.getMinutes();
        let dateTime = date + ' ' + time;
        let $tag = $('<div>').addClass('tag').text(dateTime);

        // Create the message and display
        let $newMess = $('<div>');
        $newMess.addClass('message');
        $newMess.addClass('message-user');

        let $p = $('<p>').text(userInput);
        
        $newMess.append($p)
        $newMess.append($tag);
        $newMess.appendTo('#chats');

        // Reset the text area to placeholder
        $('#chat-input').val('').blur();

        // Trigger bot repsonse
        setTimeout(() => {
            botReply(userInput);
        },2000)
    }
})

function botReply(userInput) {
    // Generate random reply from options make sure not 0
     let replyIndex = Math.floor(Math.random() * 5);
     while(replyIndex === 0) {
        replyIndex = Math.floor(Math.random() * 5);
     }
    
     console.log(replyIndex);
     let randomReply = 'Something has gone wrong!';

     if(friendlyBot === true) {
        // Case friendly bot
        randomReply = friendlyBotResponses[replyIndex];
     }
     else if(unfriendlyBot === true) {
        // Case unfriendly bot
        randomReply = unfriendlyBotResponses[replyIndex];
     }
     else {
        // Case annoying child
        randomReply = userInput + ' ' + annoyingKidResponses[replyIndex];
     }
    
    // Get current date and time for tag
    let now = new Date();
    let date = now.getDate() + '/' + (now.getMonth() +1) + '/' + now.getFullYear();
    let time = now.getHours() + ':' + now.getMinutes();
    let dateTime = date + ' ' + time;
    let tag = $('<div>').addClass('tag').html(dateTime);

    // Create bot message and display 
    $('<div>')
    .addClass('message')
    .addClass('message-bot')
    .text(randomReply)
    .append(tag)
    .appendTo('#chats');    
}

   


            
            

       
       


