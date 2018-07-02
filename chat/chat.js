// This function opens the proper chat room and passes the id to the displayChat function
function getValues(text) {
    id_chatroom = text.split(" ")[1];

    document.getElementById("id_chatroom").value = id_chatroom;
    document.getElementById("chatBox").style.display = "block";
    document.getElementById("title").innerHTML = "<h4> Chatroom " + id_chatroom + "</h3>";

    displayChat(id_chatroom);
}

// This function takes the name and message from the form and passes it into an Array 
function btnSubmitMessage() {
    var id_chatroom = document.getElementById('id_chatroom').value;
    var name = document.getElementById('name_chatroom').value;
    var message = document.getElementById('message_chatroom').value;
    var time_date = getTimeAndDate();


    addIntoRepo(name, message, time_date);
    displayChat(id_chatroom);
}

// This function takes the room id and shows the proper messages of the room on the chatBox
function displayChat(room_id) {
    var content = "";

    allChatrooms = getAllChatRooms();
    if (allChatrooms != null) {
        if (allChatrooms[room_id] != null) {
            for (var i = 0; i < allChatrooms[room_id].length; i++) {
                content += "<div style='float: left; margin-left: 2px;' <h5 style='display: inline-block'>" + allChatrooms[room_id][i].name + "</h5>" + ":  " + "<p style='display: inline-block'>" + allChatrooms[room_id][i].message + " </p></div> " + "<p style='font-size: 12px; float: right; margin-right: 2px;'>" + allChatrooms[room_id][i].time_date + "</p><br><hr>";
            }
        }
    }
    document.getElementById("messages").innerHTML = content;
}

// This function takes the date from the moment of submition of the message
function getTimeAndDate() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ampm;
}