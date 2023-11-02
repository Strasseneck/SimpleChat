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

    // get current date and time for tag
    let now = new Date();
    let date = now.getDate() + '/' + (now.getMonth() +1) + '/' + now.getFullYear();
    let time = now.getHours() + ':' + now.getMinutes();
    let dateTime = date + ' ' + time;
    let tag = $('<span>').addClass('tag').text(dateTime);

    $('<div>')
    .addClass('user-message')
    .text(userInput)
    .append(tag)
    .appendTo('#messages')

    // reset the text area to placeholder
    $('#user-message-compose').val('').blur();

    // trigger bot repsonse
    setTimeout(() => {
        botReply();
    },2000)
})

function botReply() {
    console.log()
    // generate random reply from options
     let replyIndex = Math.floor(Math.random() * 5);
     let randomReply = friendlyBotResponses[replyIndex];
    
    // get current date and time for tag
    let now = new Date();
    let date = now.getDate() + '/' + (now.getMonth() +1) + '/' + now.getFullYear();
    let time = now.getHours() + ':' + now.getMinutes();
    let dateTime = date + ' ' + time;
    let tag = $('<span>').addClass('tag').text(dateTime);

    // create bot message and display 
    $('<div>')
    .addClass('bot-message')
    .text(randomReply)
    .append(tag)
    .appendTo('#messages');    
}

   


            
            

       
       


