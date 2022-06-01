//var cardsDiv = document.querySelector("#card");
var currentname;
function getUsername(e) {
    console.log(e.value);
    currentname = e.value;
}
function makecard(data) {
    var res = `<div class="card">
                    <img src="${data.avatar_url}" >
                    <div class="info">
                        <h3>${data.login} - ${data.name}</h3>
                        <p>Location:${data.location}</p>
                        <p>Repositories: ${data.public_repos}</p>
                    </div>
                </div>`
    console.log(data);
    return res;
}
//async to make js wait the response 
async function search() {
    var cardsDiv = document.querySelector("#card");
    var resp = await fetch("https://api.github.com/users/" + currentname);
    var data = await resp.json();
    // cardsDiv.innerText = "";
    cardsDiv.innerHTML = makecard(data) + cardsDiv.innerHTML;

}