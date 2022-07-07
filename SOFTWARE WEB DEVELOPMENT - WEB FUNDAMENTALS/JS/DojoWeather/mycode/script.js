function report() {
    alert("Loading weather report...");
}

function hide(e) {
    e.parentElement.remove();
}

function convert(e) {
    console.log(e.value);
    var degrees = document.querySelectorAll("span");
    // console.log(degrees[1]);

    // for (let index = 0; index < degrees.length; index++) {
    //     if (e.value == "F") {
    //         // C to F
    //         degrees[index].innerText = parseInt((parseInt(degrees[index].innerText) * 9 / 5) + 32);
    //     } else {
    //         //f to c
    //         degrees[index].innerText = parseInt((parseInt(degrees[index].innerText) - 32) * 5 / 9);
    //     }
    // }
    document.getElementsByClassName

    degrees.forEach(degrees => {
        if (e.value == "F") {
            // C to F
            //Math.round
            degrees.innerText = Math.round((parseInt(degrees.innerText) * 9 / 5) + 32);
        } else {
            //f to c
            degrees.innerText = Math.round((parseInt(degrees.innerText) - 32) * 5 / 9);
        }
    });


}