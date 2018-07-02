// Initialize the variables
var chatNr = 0;
var allChatrooms = Array();

// Gets all the pins/chatrooms with their content
function getAllChatRooms(){
    return allChatrooms;
}

// Add the Data into the arrays from the form
function addIntoRepo(name, message, time_date){
    var msg = {name:name, message:message, time_date:time_date};

    if(allChatrooms[id_chatroom] == null)
        allChatrooms[id_chatroom] = Array();

    allChatrooms[id_chatroom].push(msg);
}
