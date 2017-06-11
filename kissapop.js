function popout() {
    console.log("here");
}

var buttonOpen = $("<button>", {
    text:"Open in new tab",
    id: "popout",
});

buttonOpen.click(function() {
    var url = ""
    if(location.href.indexOf("&s=") != -1) {
        url = $("#divContentVideo").find("iframe").attr("src");
    } else {
        url = $("#my_video_1_html5_api").attr("src");
    }
    browser.runtime.sendMessage({url:url});
})

$(document).ready(function() {
    $(buttonOpen).appendTo($("#selectServer").parent()).trigger("create");
});

