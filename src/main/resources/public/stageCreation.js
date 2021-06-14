function initiate() {
    myMoves = 0
    enemyFinished = 0
    iFinished = 0
    canClick = true
    enemyRematch = false
    myRematch = false

    fetch("/getStage", {
        method: "GET",
        mode: "no-cors"

    }).then((res) => res.json())
        .then((data) => {
            let json = JSON.parse(data)
            // downloadBoard(json.content)
            // tab = json.content
            tab = []
            for (let j = 0; j <= 11; j++) {
                tab.push([])
                for (let i = 0; i <= 11; i++) {
                    if (j <= 0 || j >= 11 || i <= 0 || i >= 11) {
                        tab[j].push(1)
                    }
                    else {

                        tab[j].push(json[j][i])
                    }
                }
            }
            createStage(tab, board1)
            createStage(tab, board2)
        })


}

initiate()




function createStage(jsonStage, playBoard) {
    playBoard.innerHTML = "";
    for (let i = 0; i <= 10; i++) {

        for (let j = 0; j <= 10; j++) {
            //console.log(jsonStage)    
            if (j <= 0 || j >= 11 || i <= 0 || i >= 11) {

            }
            else {
                let type = jsonStage[i][j].type

                if (type == "empty") {
                }

                else {

                    let block = new Block(`${type}`, i, j, jsonStage[i][j].id, playBoard)
                    tab[i][j] = block
                    block.spawn()

                }
            }
        }
    }
}
function createEnemyStage(jsonStage, playBoard) {
    playBoard.innerHTML = "";
    for (let i = 0; i <= 10; i++) {

        for (let j = 0; j <= 10; j++) {
            //console.log(jsonStage)    
            if (j <= 0 || j >= 11 || i <= 0 || i >= 11) {

            }
            else {
                let type = jsonStage[i][j].type

                if (type == "empty") {
                }

                else {

                    let block = new Block(`${type}`, i, j, jsonStage[i][j].id, playBoard)
                    block.spawn()

                }
            }
        }
    }
}

