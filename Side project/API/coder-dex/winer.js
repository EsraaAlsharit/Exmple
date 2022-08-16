class Programer {
    constructor(img, name, repo) {
        this.img = img;
        this.name = name;
        this.repo = repo;
    }

}
var list = []

var currentname;
function getUsername(e) {
    console.log(e.value);
    currentname = e.value;
}
function Insert(data) {
    console.log(data)
    list.push(new Programer(data.avatar_url, data.name, data.public_repos));
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
                        <h3>${element.name}</h3>
                    </div>
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
    var list = Insert(data);
    cardsDiv.innerHTML = makecard(list) + cardsDiv.innerHTML;

}