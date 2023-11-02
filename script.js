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

// Message compose elements and function

// Send new message on click
$('#user-message-button').on('click', function() {
    // inner message content

    let content = $('#user-message-compose').val();
    let innerP = $('<p>').addClass('message-content').text(content);

    // message div
    $('<div>').addClass('user-message').append(innerP).appendTo('#messages');
    
})

// 