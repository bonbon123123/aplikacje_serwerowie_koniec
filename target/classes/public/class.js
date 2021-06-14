// let enemy = document.createElement("div")

// enemy.style.top = `${50 * i}px`
// enemy.style.left = `${50 * j}px`
// enemy.className = "enemy"
// enemy.style.position = "absolute"
// enemy.style.width = "50px"
// enemy.style.height = "50px"
// enemy.style.backgroundColor = "tomato"
// stage.appendChild(enemy);

class Block {
    constructor(type, yPos, xPos, id, gameboard) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.type = type;
        this.id = id;
        this.gameBoard = gameboard;
        this.onScreen;
    };
    spawn() {
        let block = document.createElement("div")
        block.className = "gameBlock"
        block.style.left = `${(this.xPos - 1) * 50}px`
        block.style.top = `${(this.yPos - 1) * 50}px`
        block.style.width = "50px"
        block.style.height = "50px"
        block.style.position = "absolute"
        if (this.type == "enemy") {
            block.className = "enemy"
            block.style.backgroundColor = "tomato"

        }
        else if (this.type == "wall") {
            block.className = "wall"
            block.style.backgroundColor = "grey"

        }
        else if (this.type == "movingWall") {
            block.className = "movingWall"
            block.style.backgroundColor = "#d47fff"

        }
        else if (this.type == "goal") {
            block.className = "goal"
            block.style.backgroundColor = "#eaff7f"

        }

        else if (this.type == "hero") {
            block.id = "hero"
            block.style.backgroundColor = "#ADFF2F"

        }
        this.onScreen = block
        this.gameBoard.appendChild(this.onScreen)

    }
    move(oldY, oldX, newY, newX) {
        tab[oldY][oldX].yPos = newY;
        tab[oldY][oldX].xPos = newX;
        let buffor = tab[newY][newX];
        tab[newY][newX] = tab[oldY][oldX];
        tab[oldY][oldX] = buffor;
        myMoves++
        ws.send(JSON.stringify({ "id": getCookie("playerID"), "tab": tab }));
    };
    goDown() {
        console.log(tab[this.yPos + 1][this.xPos])
        if (tab[this.yPos + 1][this.xPos] == 0 || tab[this.yPos + 1][this.xPos].type == "empty") {
            this.move(this.yPos, this.xPos, this.yPos + 1, this.xPos)


        }
        else if (tab[this.yPos + 1][this.xPos].type == "movingWall") {
            tab[this.yPos + 1][this.xPos].goDown()

        }
        else if (tab[this.yPos + 1][this.xPos].type == "goal") {
            if (this.type == "hero") {
                //this.move(this.yPos, this.xPos, this.yPos + 1, this.xPos)
                ws.send(JSON.stringify({ "win": getCookie("playerID"), "moves": myMoves }));
            }
        }
        else {
            if (this.type == "hero") {
                canClick = true
            }
        }
    }
    goLeft() {
        console.log(tab[this.yPos][this.xPos - 1])
        if (tab[this.yPos][this.xPos - 1] == 0 || tab[this.yPos][this.xPos - 1].type == "empty") {
            this.move(this.yPos, this.xPos, this.yPos, this.xPos - 1)

        }
        else if (tab[this.yPos][this.xPos - 1].type == "movingWall") {
            tab[this.yPos][this.xPos - 1].goLeft()
        }
        else if (tab[this.yPos][this.xPos - 1].type == "goal") {
            if (this.type == "hero") {
                //this.move(this.yPos, this.xPos, this.yPos, this.xPos - 1)
                ws.send(JSON.stringify({ "win": getCookie("playerID"), "moves": myMoves }));
            }
        }
        else {
            if (this.type == "hero") {
                canClick = true
            }
        }
    }
    goRight() {
        console.log(tab[this.yPos][this.xPos + 1])
        if (tab[this.yPos][this.xPos + 1] == 0 || tab[this.yPos][this.xPos + 1].type == "empty") {
            this.move(this.yPos, this.xPos, this.yPos, this.xPos + 1)

        }
        else if (tab[this.yPos][this.xPos + 1].type == "movingWall") {
            tab[this.yPos][this.xPos + 1].goRight()
        }
        if (tab[this.yPos][this.xPos + 1].type == "goal") {
            if (this.type == "hero") {
                //this.move(this.yPos, this.xPos, this.yPos, this.xPos + 1)
                ws.send(JSON.stringify({ "win": getCookie("playerID"), "moves": myMoves }));
            }
        }
        else {
            if (this.type == "hero") {
                canClick = true
            }
        }
    }
    goUp() {
        console.log(tab[this.yPos - 1][this.xPos])
        if (tab[this.yPos - 1][this.xPos] == 0 || tab[this.yPos - 1][this.xPos].type == "empty") {
            this.move(this.yPos, this.xPos, this.yPos - 1, this.xPos)


        }
        else if (tab[this.yPos - 1][this.xPos].type == "movingWall") {
            tab[this.yPos - 1][this.xPos].goUp()

        }
        if (tab[this.yPos - 1][this.xPos].type == "goal") {
            if (this.type == "hero") {
                //this.move(this.yPos, this.xPos, this.yPos - 1, this.xPos)
                ws.send(JSON.stringify({ "win": getCookie("playerID"), "moves": myMoves }));
            }
        }
        else {
            if (this.type == "hero") {
                canClick = true
            }
        }
    }


    delete() {
        let fill = document.createElement("div")
        let orient = "o"
        if (this.pillorientation == "virus") { orient = "x" }
        this.fillAfterDeletion(fill, this.color, orient, this.yPos, this.xPos, 16, 16)
        this.onScreen.remove()
        tab[this.yPos][this.xPos] = 0
    }


}