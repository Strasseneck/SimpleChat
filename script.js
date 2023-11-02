// Variables

// Bot response objects

// Friendly bot

const friendlyBotResponses = {

    1: 'response one',
    2: 'response two',
    3: 'response three',
    4: 'response four',
    5: 'response five'
};

// Unfriendly bot

const unfriendlyBotResponses = {

    1: 'response one',
    2: 'response two',
    3: 'response three',
    4: 'response four',
    5: 'response five'
};

// Messaging

// Send new message on click
$('#user-message-button').on('click', function() {
    // create user message and display 
    let userInput = $('#user-message-compose').val();
    $('<div>')
    .addClass('user-message')
    .text(userInput)
    .appendTo('#messages');

    // reset the text area to placeholder
    $('#user-message-compose').val('').blur();

    // trigger bot repsonse
    setTimeout(() => {
        botRespondingAnimation();
    },1000)
})

function botRespondingAnimation() {
    // show bot typing animation
    $('<p>').addClass('bot-replying')
    .text('...')
    .appendTo('#messages');

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
     $('#bot-replying').remove();

     // create bot message and display 
    $('<div>')
    .addClass('bot-message')
    .text(randomReply)
    .appendTo('#messages');

     
}

   


            
            

       
       


