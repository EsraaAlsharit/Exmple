function hide(e) {
    e.parentElement.parentElement.remove();
    var Requests = document.querySelector("#Requests");
    console.log(Requests.innerText);
    let numReq = parseInt(Requests.innerText);
    Requests.innerText = numReq - 1;
    if (e.alt == "accept") {
        var Con = document.querySelector("#Connections");
        let numCon = parseInt(Con.innerText);
        Con.innerText = numCon + 1;
    }

}

function edit(e) {
    e.parentElement.parentElement.querySelector("h1").innerText = "Esraa Alsharit";

}
