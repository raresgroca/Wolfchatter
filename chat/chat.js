// This function opens the proper chat room and passes the id to the displayChat function.
function getValues(text) {
    id_chatroom = text.split(" ")[1];

    document.getElementById("id_chatroom").value = id_chatroom;
    document.getElementById("chatBox").style.display = "block";
    document.getElementById("title").innerHTML = "<h3> Chatroom " + id_chatroom + "</h3>";

    displayChat(id_chatroom);
}

// This function takes the chatroom name, username, message and time from the form and passes it to the API.
function btnSubmitMessage() {
    var id_chatroom = document.getElementById('id_chatroom').value;
    var name = document.getElementById('name_chatroom').value;
    var message = document.getElementById('message_chatroom').value;
    var time_date = getTimeAndDate();

    // Send message to the API 
    $.post("/api/addChatroomMessage", {
        chatroom_name: "Chatroom " + id_chatroom,
        username: name,
        message: message,
        date: time_date

    }, function () {
        displayChat(id_chatroom);
    });
}

// This function takes the room id and retrieves from the API the correct messages.
// After that shows them in the chatBox.
function displayChat(room_id) {
    var content = "";

    // Get chat messages from the API 
    $.post("/api/getChatroom", {
        name: "Chatroom " + room_id
    }, function (data) {
        var messages = JSON.parse(data);
        for (var messageid in messages) {
            content += "<div style='float: left;'" + "<h4 style='display: inline-block'>" + messages[messageid][2] + "</h4>" + ":  " + "<p style='display: inline-block'>" + messages[messageid][3] + "</p>" + "</div>" + "<br>" + "<p style='font-size: 12px; float: right; margin-right: 2px;'>" + messages[messageid][4] + "</p><br><br><hr>";
        }

        document.getElementById("messages").innerHTML = content;
    });
}

// This function takes the date and time from the moment of submition of the message.
function getTimeAndDate() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ampm;
}

// This functiion resets the chatroom, so users can talk.
window.setInterval(function () {
    var id_chatroom = document.getElementById('id_chatroom').value;
    displayChat(id_chatroom);
}, 1000);