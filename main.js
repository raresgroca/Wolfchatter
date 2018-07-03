
/* Chat Section -- Start */
// Initialize the chat component
function onInit() {
    loadChat();
}

// Call the initialization function
onInit();

// Ajax Call for the Chat 
function loadChat() {
    $.ajax({
        type: "GET",
        url: "chat/chat.html",
        dataType: 'html',
        cache: false,
        success: function (html) {
            $('#chat_content').html(html);
        }
    });
}
/* Chat Section -- End */


/* Map Section -- Start */
// Initialize the map and assign it to a variable for later use
var map = L.map('map', {
    // Set latitude and longitude of the map center (required)
    center: [46.7712, 23.6236],
    // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
    zoom: 5,
});

// Create a Tile Layer and add it to the map
var tiles = new L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png').addTo(map);

// This one adds a pin on map click
var chatNr = 0;

function onMapClick(e) {
    L.marker(e.latlng).addTo(map).bindPopup("Chatroom: " + chatNr).openPopup();
    chatNr++;
    document.getElementById("infoBox").style.display = "none";
}

map.on('popupopen', function (e) {
    getValues(e.popup._content);
});

map.on('click', onMapClick);
/* Map Section -- End */