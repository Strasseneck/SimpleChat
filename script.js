// Variables

// Bot response objects

// Friendly bot

const friendlyBotResponses = {

    1: 'responseone',
    2: 'responsetwo',
    3: 'responsethree',
    4: 'responsefour',
    5: 'responsefive'
};

// Unfriendly bot

const unfriendlyBotResponses = {

    1: 'responseone',
    2: 'responsetwo',
    3: 'responsethree',
    4: 'responsefour',
    5: 'responsefive'
};

// Messaging

// Send new message on click
$('#user-message-button').on('click', function() {
    // inner message content 
    let userInput = $('#user-message-compose').val();
    let messageText = $('<p>').addClass('user-message-content').text(userInput);

    // message div add to messages 
    $('<div>').addClass('user-message').append(messageText).appendTo('#messages');

    // reset the text area to placeholder
    $('#user-message-compose').val('').blur();

    // trigger bot repsonse
    setTimeout(() => {
        botRespondingAnimation();
    },1000)
})

function botRespondingAnimation() {
    // show bot typing animation
    let $replyAnimation = $('<p>').addClass('bot-message-replying');
    let $replyDiv = $('<div>').addClass('bot-message');

    // show typing animation
    $replyAnimation.text('...');
    $replyDiv.append($replyAnimation).appendTo('#messages');

    // trigger actual reply
    setTimeout(() => {
        botReply();
    },2000)
}


function botReply() {
     // generate random reply from options
     let replyIndex = Math.floor(Math.random() * 5);
     let randomReply = friendlyBotResponses[replyIndex];
    
     // remove animation
     let $replyAnimation = $('#bot-message-replying');
     $replyAnimation.remove();
     
     // get the last message text content
     let $lastReply = $('#messages');
     console.log($lastReply[0]);
}

   


            
            

       
       


