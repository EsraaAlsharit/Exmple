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

var currentname;
function getUsername(e) {
    console.log(e.value);
    currentname = e.value;
}
function Insert(data) {
    // var resp = await fetch(data.subscriptions_url);//API
    // var dataSubs = await resp.json();
    // console.log(dataSubs)
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
                    <div class="info">
                        <h3>${element.name} - ${element.username}</h3>
                    </div>
                </div>`
    });
    console.log(res);
    return res;
}

// function luck(){
    
// }

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
                        <h3>${data.name} - ${data.login}</h3>
                        <p>Repositories: ${data.repo}</p>
                    </div>
                </div>`
        return res;
    }

}