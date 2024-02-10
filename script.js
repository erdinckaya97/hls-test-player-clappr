$('#frm').submit(function(e){
    e.preventDefault();
    let url = $('#url').val();
    if (url == '') {
        alert("Ooops! I don't see any URL to load!");
        return;
    }
    var playerElement = document.getElementById("player");
    var player = new Clappr.Player({
        source: url,
        parentId: "#player",
        autoPlay: "true",
        mute: "true",
        mimeType: "application/x-mpegURL"
    });
});
