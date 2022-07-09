
function myFunction() {
    var name = document.getElementById("name").value
    var cards = document.getElementsByName("Cards");
    var card

    for (var i = 0; i < cards.length; i++) {
        if (cards[i].checked) {
            alert(cards[i].value);
            card = cards[i].value
            break;
        }
    }

    var img = document.getElementById(card);
    img.setAttribute('crossorigin', 'anonymous'); // works for me 

    var name = document.getElementById("name").value

    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', '900');
    canvas.setAttribute('height', '700');

    var imgFinal = new Image();

    imgFinal.src = card + ".png";

    imgFinal.className = "my-5";
    var context = canvas.getContext('2d');
    context.strokeRect(0, 0, canvas.width, canvas.height);


    context.drawImage(imgFinal, 0, 0);
    context.fillStyle = "#fff";
    context.font = "bold 30px serif";
    context.textAlign = "center";
    context.fillText(name, canvas.width / 2, 550);

    var container = document.getElementById("img")
    container.parentNode.insertBefore(imgFinal, container.nextSibling);

    img.removeAttribute("crossorigin"); // works for me
    var form = document.getElementById("form")
    form.remove()

}



function generateImage() {
    var cards = document.getElementsByName("Cards");
    var card

    for (var i = 0; i < cards.length; i++) {
        if (cards[i].checked) {
            // alert(cards[i].value);
            card = cards[i].value
            break;
        }
    }

    var imgPrev = document.getElementById(card);
    imgPrev.setAttribute('crossorigin', 'anonymous'); // works for me 

    var name = document.getElementById("name").value
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.setAttribute('width', '900');
    canvas.setAttribute('height', '700');
    context.drawImage(imgPrev, 0, 0);
    context.font = "bold 30px serif";
    context.fillStyle = "#fff";
    context.textAlign = "center";
    context.fillText(name, canvas.width / 2, 550);
    context.strokeRect(0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL();
    var imgFinal = new Image();
    imgFinal.src = dataURL;
    
    var container = document.getElementById("img")
    container.parentNode.insertBefore(imgFinal, container.nextSibling);

    img.removeAttribute("crossorigin"); // works for me
    var form = document.getElementById("form")
    form.remove()

}


// var context = canvas.getContext("2d");
// var imageObj = new Image();
// imageObj.onload = function () {
//     context.drawImage(imageObj, 10, 10);
//     context.font = "40pt Calibri";
//     context.fillText("My TEXT!", 20, 20);
// };
// imageObj.src = "darth-vader.jpg"; 