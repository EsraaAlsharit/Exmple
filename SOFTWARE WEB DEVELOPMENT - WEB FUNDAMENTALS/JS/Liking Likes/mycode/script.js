

function AddLike(e) {
    var likes = e.parentElement.querySelector("p #likes");
    let numlike = parseInt(likes.innerText);
    likes.innerText = numlike + 1;

    //old code
    //var likes = document.querySelector("#likes");
}