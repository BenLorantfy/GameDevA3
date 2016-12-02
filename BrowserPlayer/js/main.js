var blocks = ["ground","ground"];


function renderBlocks(){
    for(var i = 0; i < blocks.length; i++){
        var template = $("#" + blocks[i] + "Template").html();
        var el = $(template);
        $("#map").append(el);
        el.css("left",i * 200);
        
    }
}

renderBlocks();

//    var ip = prompt("Please enter IP of computer running the Unity Game");
//    var port = prompt("Please enter port server is running on");
//    
var ip = "192.168.0.25";
var port = "8989";


// [ Create socket ]
var socket = new WebSocket("ws://" + ip + ":" + port);
socket.onmessage = function(event){
    var json = event.data;
    var data = JSON.parse(json);
    
    $("#map").css({
         "left":data.x * 50 + 10
        ,"top":data.y * 100 - 80
    })
    
//    log.innerHTML = log.innerHTML + "<div class='message'>" + escapeHtml(event.data) + "</div>";
}

//send.onclick = function(){
//    var msg = textbox.value;
//    socket.send(msg);
//}