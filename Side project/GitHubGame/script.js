class Programer {
    constructor(img, name, repo, username) {
        this.img = img;
        this.name = name;
        this.username = username;
        this.repo = repo;
    }

    levelUp() {
        var max =10;
        var min=-10;
        this.repo += Math.floor(Math.random() * (max - min)) + min;
    }

}
var list = []
document.getElementById("Winner").style.visibility = "hidden";

var currentname;
function getUsername(e) {
    console.log(e.value);
    currentname = e.value;
}
function Insert(data) {
    console.log(data)
    list.push(new Programer(data.avatar_url, data.name, data.public_repos, data.login));
    return list;
}

var currentname;
function getUsername(e) {
    console.log(e.value);
    currentname = e.value;
}
function makecard(listData) {

    console.log(listData[0]);
    listData.forEach(element => {
        res = `<div class="card">
                    <img src="${element.img}" >
                        <h4>${element.name} - ${element.username}</h4>
                </div>`
    });
    console.log(res);
    return res;
}

//async to make js wait the response 
async function search() {
    var cardsDiv = document.querySelector("#card");//html
    var resp = await fetch("https://api.github.com/users/" + currentname);//API
    var data = await resp.json();
    if (data.login != null) {
        var list = Insert(data);
        cardsDiv.innerHTML = makecard(list) + cardsDiv.innerHTML;
    }
}
function myFunction() {

    document.getElementById("Winner").style.visibility = "visible";
    var cardsDiv = document.querySelector("#form");
    cardsDiv.remove();
    var winnerCard = document.querySelector("#Winner");//html
    var winner = WinnerCard();
    winnerCard.innerHTML = makeWinnerCard(winner);

    function WinnerCard() {
        var max = list[0];
        list.forEach(element => {
            if (element.repo > max.repo) {
                max = element;
            }
        })
        return max;
    }

    function makeWinnerCard(data) {
        console.log(list)
        var res = `<div class="card">
                    <img src="${data.img}" >
                    <div class="info">
                        <h3>${data.name} - ${data.username}</h3>
                        <p>Repositories: ${data.repo}</p>
                    </div>
                </div>`
        return res;
    }
    


}