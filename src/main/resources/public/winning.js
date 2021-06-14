
function winningScreen(myScore, enemyScore) {
    let win = document.createElement("div")
    win.id = "winingScreen"
    if (myScore < enemyScore) {
        let winText = document.createElement("div")
        winText.id = "winText"
        winText.innerText = `Wygrałeś!!! Twoje ruchy:${myScore} ruchy Przeciwnika:${enemyScore}.`
        win.append(winText)

        let dataToSend = {
            "title": `zwycięzca to:${getCookie("playerID")} po walce z:${getCookie("enemyID")}`,
            "winningMoves": myScore,
            "losingMoves": enemyScore
        }

        fetch("/post", {

            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(dataToSend),
            headers: {
                "Content-type": "application/json; charset=UTD-8",
            }
        }).then((res) => res.json()).then((data) => {
            console.log((data))
        });
    }
    else if (myScore > enemyScore) {
        let winText = document.createElement("div")
        winText.id = "winText"
        winText.innerText = `Przegrałeś!!! Twoje ruchy:${myScore} ruchy Przeciwnika:${enemyScore}.`
        win.append(winText)
    }
    else {
        let winText = document.createElement("div")
        winText.id = "winText"
        winText.innerText = `Remis!!! Wasze ruchy:${myScore}.`
        win.append(winText)
    }
    let rematch = document.createElement("div")
    rematch.addEventListener("click", function () {
        ws.send(JSON.stringify({ "rematch": getCookie("playerID") }));

    })
    rematch.id = "rematch"
    rematch.innerText = `Wyślij Proźbę o rewanż`
    win.append(rematch)
    document.body.append(win)

}
