console.log("page loaded...");
function demoPlayon(e) {
    //document.getElementById("myVideo").autoplay;
    e.muted = true;
    e.play();

}
function demoPlayoff(e) {
    e.pause();
    e.muted = false;
}