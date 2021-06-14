let mainDiv = document.getElementById("editor")
mainDiv.style.height = "500px"
mainDiv.style.width = "500px"
mainDiv.style.top = "30px"
mainDiv.style.left = "30px"
mainDiv.style.position = "absolute"
let tab = []
let type = "enemy"
let id = 0


for (i = 0; i <= 11; i++) {
    tab.push([])
    for (j = 0; j <= 11; j++) {
        if (j == 0 || j == 11 || i == 0 || i == 11) {
            tab[i].push(1)
        }
        else {
            let square = {
                "id": id,
                "x": j,
                "y": i,
                "type": "empty"
            }
            tab[i].push(square)
            let div = document.createElement("div")
            // div.setAttribute("class", "block")
            div.addEventListener("click", function (e) {
                let y = parseInt(this.id.slice(0, 1)) + 1
                let x = parseInt(this.id.slice(1, 2)) + 1
                console.log(parseInt(y), x)
                console.log(tab[y][x])
                console.log(tab[y][x])

                if (type == "enemy") {
                    div.style.backgroundColor = "red"
                    square.type = "enemy"
                    tab[y][x] = square
                }
                else if (type == "wall") {
                    div.style.backgroundColor = "black"
                    square.type = "wall"
                    tab[y][x] = square
                }
                else if (type == "movingWall") {
                    div.style.backgroundColor = "yellow"
                    square.type = "movingWall"
                    tab[y][x] = square
                }
                else if (type == "goal") {
                    div.style.backgroundColor = "lightblue"
                    square.type = "goal"
                    tab[y][x] = square
                }
                else if (type == "hero") {
                    square.type = "hero"
                    tab[y][x] = square
                    div.style.backgroundColor = "#ADFF2F"
                }
                else if (type == "empty") {
                    square.type = "empty"
                    tab[y][x] = square
                    div.style.backgroundColor = "white"
                }
                console.log(tab)
            })
            div.style.position = "absolute";
            div.style.left = `${50 * j}px`;
            div.style.top = `${50 * i}px`;
            div.style.outline = "1px solid blue";
            div.style.background = "white";
            div.style.width = "50px";
            div.style.height = "50px";
            div.id = `${i - 1}${j - 1}`
            mainDiv.append(div)
            id++
        }
    }
}

console.log(tab)
function downloadBoard(board) {
    tab = board
    for (i = 0; i <= 10; i++) {

        for (j = 0; j < 10; j++) {
            let div = document.getElementById(`${i}${j}`)
            let type = tab[i + 1][j + 1].type
            if (type == "enemy") {
                div.style.backgroundColor = "red"
            }
            else if (type == "wall") {
                div.style.backgroundColor = "black"
            }
            else if (type == "movingWall") {
                div.style.backgroundColor = "yellow"
            }
            else if (type == "goal") {
                div.style.backgroundColor = "lightblue"
            }
            else if (type == "empty") {
                div.style.backgroundColor = "white"
            }
            else if (type == "hero") {
                div.style.backgroundColor = "#ADFF2F"
            }
        }
    }
}
let enemy = document.createElement("div")
enemy.addEventListener("click", function () {
    type = "enemy"
})
enemy.style.position = "absolute"
enemy.style.left = `550px`
enemy.style.top = "30px"
enemy.style.border = "2px; black;"
enemy.style.background = "red"
enemy.style.width = "250px"
enemy.style.height = "50px"
enemy.innerText = "enemy"
document.body.append(enemy)

let movingWall = document.createElement("div")
movingWall.addEventListener("click", function () {
    type = "movingWall"
})
movingWall.style.position = "absolute"
movingWall.style.left = `550px`
movingWall.style.top = "130px"
movingWall.style.border = "2px; black;"
movingWall.style.background = "yellow"
movingWall.style.width = "250px"
movingWall.style.height = "50px"
movingWall.innerText = "movingWall"
document.body.append(movingWall)


let wall = document.createElement("div")
wall.addEventListener("click", function () {
    type = "wall"
})
wall.style.position = "absolute"
wall.style.left = `550px`
wall.style.top = "80px"
wall.style.border = "2px; black;"
wall.style.background = "black"
wall.style.width = "250px"
wall.style.height = "50px"
wall.innerText = "wall"
wall.style.color = "white"
document.body.append(wall)

let goal = document.createElement("div")
goal.addEventListener("click", function () {
    type = "goal"
})
goal.style.position = "absolute"
goal.style.left = `550px`
goal.style.top = "180px"
goal.style.background = "lightblue"
goal.style.width = "250px"
goal.style.height = "50px"
goal.innerText = "goal"
document.body.append(goal)

let hero = document.createElement("div")
hero.addEventListener("click", function () {
    type = "hero"
})
hero.style.position = "absolute"
hero.style.left = `550px`
hero.style.top = "230px"
hero.style.background = "#ADFF2F"
hero.style.width = "250px"
hero.style.height = "50px"
hero.innerText = "hero"
document.body.append(hero)


let delet = document.createElement("div")
delet.addEventListener("click", function () {
    type = "empty"
})
delet.style.position = "absolute"
delet.style.left = `550px`
delet.style.top = "280px"
delet.style.outline = "1px solid blue";
delet.style.background = "white"
delet.style.width = "250px"
delet.style.height = "50px"
delet.innerText = "delete"
document.body.append(delet)


let save = document.createElement("div")
save.addEventListener("click", function () {

    let board = {
        "content": tab
    }
    console.log(tab)
    fetch("/sendData", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(tab),
        headers: {
            "Content-type": "application/json; charset=UTD-8",
        }
    })

    // .then((res) => res.json())
    //     .then((data) => {
    //     });

})
save.style.position = "absolute"
save.style.left = `550px`
save.style.top = "330px"
save.style.outline = "1px solid blue";
save.style.background = "white"
save.style.width = "250px"
save.style.height = "50px"
save.innerText = "save"
document.body.append(save)

let load = document.createElement("div")
load.addEventListener("click", function () {

    fetch("/getStage", {
        method: "GET",
        mode: "no-cors"

    }).then((res) => res.json())
        .then((data) => {

            console.log(JSON.parse(data))
            downloadBoard(JSON.parse(data))
        });

})
load.style.position = "absolute"
load.style.left = `550px`
load.style.top = "380px"
load.style.outline = "1px solid blue";
load.style.background = "white"
load.style.width = "250px"
load.style.height = "50px"
load.innerText = "load"
document.body.append(load)