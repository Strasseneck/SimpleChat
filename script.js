// Variables

// Chat History obj and arrays

const chatHistory = {

    friendlyBotHistory: [],
    unfriendlyBotHistory: [],
    annoyingKidHistory: [],
}

// Bot timer
let botReplyTimer;

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

// Bot initial states, friendly as default

let friendlyBot = true;
let unfriendlyBot = false;
let annoyingKid = false;

// Bot selection

// Friendly Bot clicked
$('#friendly-bot').on('click', function() {
    friendlyBot = true;
    unfriendlyBot = false;
    annoyingKid = false;

    // Change header name and icon
    $('#header-icon').attr('src', 'android.png');
    $('#header-name').text('Friendly Bot');
})

// Unfriendly Bot clicked
$('#unfriendly-bot').on('click', function() {
    friendlyBot = false;
    unfriendlyBot = true;
    annoyingKid = false;

    // Change header name and icon
    $('#header-icon').attr('src', 'bad.png');
    $('#header-name').text('Rude Bot');
})

// Annoying Kid Bot clicked
$('#kid-bot').on('click', function() {
    friendlyBot = false;
    unfriendlyBot = false;
    annoyingKid = true;

    // Change header name and icon
    $('#header-icon').attr('src', 'annoying.png');
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

        // Get current date and time for tag
        let now = new Date();
        let date = now.getDate() + '/' + (now.getMonth() +1) + '/' + now.getFullYear();
        let hours = now.getHours();
        let mins = now.getMinutes();
        if(mins <= 9) {
            mins = '0' + mins;
        }
        let time = hours + ':' + mins;
        let dateTime = date + ' ' + time;
        let $tag = $('<div>').addClass('tag').text(dateTime);
        
        // Create the message and display
        let $newMess = $('<div>');
        $newMess.addClass('message');
        $newMess.addClass('message-user');

        // Add text content
        let $p = $('<p>').text(userInput).append($tag)

        // User icon
        let $iconContainer = $('<div>').addClass('chat-icon-container');
        let $icon = $('<img>').addClass('chat-icon').attr('src', 'user.png');
        $iconContainer.append($icon);
        
        $newMess.append($p)
        $newMess.append($iconContainer)
        $newMess.appendTo('#chats');

        // Store message in history
        let messageInfo = { 
            user: 'user',
            content: userInput,
            tag: dateTime,    
        };

        // Determine which bot and store history
        if(friendlyBot === true) {
            chatHistory.friendlyBotHistory.push(messageInfo);
        }
        else if (unfriendlyBot === true) {
            chatHistory.unfriendlyBotHistory.push(messageInfo);
        }
        else {
            chatHistory.annoyingKidHistory.push(messageInfo)
        }

        console.log(chatHistory)

        // Reset the text area to placeholder and refocus
        $('#chat-input').val('').blur().focus();

        // Scroll down
        scrollDown();

        // Trigger bot repsonse
        botReplyTimer = setTimeout(() => {
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
    let hours = now.getHours();
    let mins = now.getMinutes();
    if(mins <= 9) {
        mins = '0' + mins;
    }
    let time = hours + ':' + mins;
    let dateTime = date + ' ' + time;
    let $btag = $('<div>').addClass('tag').text(dateTime);

    // Create bot message and display 
    let $botMess = $('<div>')
    $botMess.addClass('message')
    $botMess.addClass('message-bot')

    // Add text content
    let $botp = $('<p>').text(randomReply).append($btag);

    // Bot icon
    let $biconContainer = $('<div>').addClass('chat-icon-container');
    let $bicon = $('<img>').addClass('chat-icon')
    
    // Select correct bot icon

    if(friendlyBot === true) {
        // Case friendly bot
        $bicon.attr('src', 'android.png');
     }
     else if(unfriendlyBot === true) {
        // Case unfriendly bot
        $bicon.attr('src', 'bad.png');
     }
     else {
        // Case annoying child
        $bicon.attr('src', 'annoying.png');
     }
    $biconContainer.append($bicon);

    $botMess.append($botp);
    $botMess.prepend($biconContainer);
    $botMess.appendTo('#chats'); 

     // Store message in history
     let messageInfo = { 
        user: 'bot',
        content: randomReply,
        tag: dateTime,    
    };

     // Determine which bot and store history
     if(friendlyBot === true) {
        chatHistory.friendlyBotHistory.push(messageInfo);
    }
    else if (unfriendlyBot === true) {
        chatHistory.unfriendlyBotHistory.push(messageInfo);
    }
    else {
        chatHistory.annoyingKidHistory.push(messageInfo)
    }

    console.log(chatHistory);

    // Scrolldown
    scrollDown();
}

// Set chats to always scroll down
function scrollDown() {
    console.log('scrollDown');
    let $chatsinner = $('#chats');
    $chatsinner.scrollTop($chatsinner[0].scrollHeight);  
}


            

       
       


