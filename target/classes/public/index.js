
let json
// [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, { "id": 0, "x": 1, "y": 1, "type": "wall" }, { "id": 1, "x": 2, "y": 1, "type": "wall" }, { "id": 2, "x": 3, "y": 1, "type": "wall" }, { "id": 3, "x": 4, "y": 1, "type": "wall" }, { "id": 4, "x": 5, "y": 1, "type": "wall" }, { "id": 5, "x": 6, "y": 1, "type": "wall" }, { "id": 6, "x": 7, "y": 1, "type": "wall" }, { "id": 7, "x": 8, "y": 1, "type": "wall" }, { "id": 8, "x": 9, "y": 1, "type": "wall" }, { "id": 9, "x": 10, "y": 1, "type": "wall" }, 1], [1, { "id": 10, "x": 1, "y": 2, "type": "wall" }, { "id": 11, "x": 2, "y": 2, "type": "hero" }, { "id": 12, "x": 3, "y": 2, "type": "empty" }, { "id": 13, "x": 4, "y": 2, "type": "empty" }, { "id": 14, "x": 5, "y": 2, "type": "empty" }, { "id": 15, "x": 6, "y": 2, "type": "empty" }, { "id": 16, "x": 7, "y": 2, "type": "empty" }, { "id": 17, "x": 8, "y": 2, "type": "empty" }, { "id": 18, "x": 9, "y": 2, "type": "empty" }, { "id": 19, "x": 10, "y": 2, "type": "wall" }, 1], [1, { "id": 20, "x": 1, "y": 3, "type": "wall" }, { "id": 21, "x": 2, "y": 3, "type": "empty" }, { "id": 22, "x": 3, "y": 3, "type": "empty" }, { "id": 23, "x": 4, "y": 3, "type": "enemy" }, { "id": 24, "x": 5, "y": 3, "type": "empty" }, { "id": 25, "x": 6, "y": 3, "type": "empty" }, { "id": 26, "x": 7, "y": 3, "type": "movingWall" }, { "id": 27, "x": 8, "y": 3, "type": "empty" }, { "id": 28, "x": 9, "y": 3, "type": "empty" }, { "id": 29, "x": 10, "y": 3, "type": "wall" }, 1], [1, { "id": 30, "x": 1, "y": 4, "type": "wall" }, { "id": 31, "x": 2, "y": 4, "type": "empty" }, { "id": 32, "x": 3, "y": 4, "type": "enemy" }, { "id": 33, "x": 4, "y": 4, "type": "empty" }, { "id": 34, "x": 5, "y": 4, "type": "empty" }, { "id": 35, "x": 6, "y": 4, "type": "movingWall" }, { "id": 36, "x": 7, "y": 4, "type": "empty" }, { "id": 37, "x": 8, "y": 4, "type": "empty" }, { "id": 38, "x": 9, "y": 4, "type": "empty" }, { "id": 39, "x": 10, "y": 4, "type": "wall" }, 1], [1, { "id": 40, "x": 1, "y": 5, "type": "wall" }, { "id": 41, "x": 2, "y": 5, "type": "empty" }, { "id": 42, "x": 3, "y": 5, "type": "empty" }, { "id": 43, "x": 4, "y": 5, "type": "empty" }, { "id": 44, "x": 5, "y": 5, "type": "movingWall" }, { "id": 45, "x": 6, "y": 5, "type": "empty" }, { "id": 46, "x": 7, "y": 5, "type": "enemy" }, { "id": 47, "x": 8, "y": 5, "type": "empty" }, { "id": 48, "x": 9, "y": 5, "type": "empty" }, { "id": 49, "x": 10, "y": 5, "type": "wall" }, 1], [1, { "id": 50, "x": 1, "y": 6, "type": "wall" }, { "id": 51, "x": 2, "y": 6, "type": "empty" }, { "id": 52, "x": 3, "y": 6, "type": "empty" }, { "id": 53, "x": 4, "y": 6, "type": "movingWall" }, { "id": 54, "x": 5, "y": 6, "type": "empty" }, { "id": 55, "x": 6, "y": 6, "type": "enemy" }, { "id": 56, "x": 7, "y": 6, "type": "empty" }, { "id": 57, "x": 8, "y": 6, "type": "enemy" }, { "id": 58, "x": 9, "y": 6, "type": "empty" }, { "id": 59, "x": 10, "y": 6, "type": "wall" }, 1], [1, { "id": 60, "x": 1, "y": 7, "type": "wall" }, { "id": 61, "x": 2, "y": 7, "type": "empty" }, { "id": 62, "x": 3, "y": 7, "type": "movingWall" }, { "id": 63, "x": 4, "y": 7, "type": "empty" }, { "id": 64, "x": 5, "y": 7, "type": "empty" }, { "id": 65, "x": 6, "y": 7, "type": "empty" }, { "id": 66, "x": 7, "y": 7, "type": "enemy" }, { "id": 67, "x": 8, "y": 7, "type": "empty" }, { "id": 68, "x": 9, "y": 7, "type": "empty" }, { "id": 69, "x": 10, "y": 7, "type": "wall" }, 1], [1, { "id": 70, "x": 1, "y": 8, "type": "wall" }, { "id": 71, "x": 2, "y": 8, "type": "empty" }, { "id": 72, "x": 3, "y": 8, "type": "empty" }, { "id": 73, "x": 4, "y": 8, "type": "empty" }, { "id": 74, "x": 5, "y": 8, "type": "empty" }, { "id": 75, "x": 6, "y": 8, "type": "empty" }, { "id": 76, "x": 7, "y": 8, "type": "empty" }, { "id": 77, "x": 8, "y": 8, "type": "empty" }, { "id": 78, "x": 9, "y": 8, "type": "goal" }, { "id": 79, "x": 10, "y": 8, "type": "wall" }, 1], [1, { "id": 80, "x": 1, "y": 9, "type": "wall" }, { "id": 81, "x": 2, "y": 9, "type": "empty" }, { "id": 82, "x": 3, "y": 9, "type": "empty" }, { "id": 83, "x": 4, "y": 9, "type": "empty" }, { "id": 84, "x": 5, "y": 9, "type": "empty" }, { "id": 85, "x": 6, "y": 9, "type": "empty" }, { "id": 86, "x": 7, "y": 9, "type": "empty" }, { "id": 87, "x": 8, "y": 9, "type": "empty" }, { "id": 88, "x": 9, "y": 9, "type": "empty" }, { "id": 89, "x": 10, "y": 9, "type": "wall" }, 1], [1, { "id": 90, "x": 1, "y": 10, "type": "wall" }, { "id": 91, "x": 2, "y": 10, "type": "wall" }, { "id": 92, "x": 3, "y": 10, "type": "wall" }, { "id": 93, "x": 4, "y": 10, "type": "wall" }, { "id": 94, "x": 5, "y": 10, "type": "wall" }, { "id": 95, "x": 6, "y": 10, "type": "wall" }, { "id": 96, "x": 7, "y": 10, "type": "wall" }, { "id": 97, "x": 8, "y": 10, "type": "wall" }, { "id": 98, "x": 9, "y": 10, "type": "wall" }, { "id": 99, "x": 10, "y": 10, "type": "wall" }, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]
let board1 = document.getElementById("board1")
let board2 = document.getElementById("board2")
let myMoves = 0
let enemyFinished = 0
let iFinished = 0
let enemyRematch = false
let myRematch = false
let canClick = true
let tab = []

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


const ws = new WebSocket("ws://" + location.hostname + ":" + location.port + "/testws/");
ws.onopen = function () {
  setCookie("playerID", 0, 365)
  //ws.send('websocket klient podlaczyl sie do serwera');
}

ws.onmessage = function (e) {
  var elem = document.createElement('p');
  elem.innerText = `${e.data}`
  //document.body.append(elem)
  console.log(e.data)
  if (getCookie("playerID") == 0) {
    setCookie("playerID", e.data[1], 365)
    //console.log(parseInt(e.data[1]))
    if (parseInt(e.data[1]) % 2 == 1) {
      setCookie("enemyID", parseInt(e.data[1]) + 1, 365)
    }
    else {
      setCookie("enemyID", parseInt(e.data[1]) - 1, 365)

    }
  }
  if (e.data[4] == "w" && e.data[5] == "i") {
    let l1 = JSON.parse(e.data)
    let l2 = JSON.parse(String(l1))

    if (l2.win == getCookie("playerID")) {
      iFinished = String(l2.moves)
      if (enemyFinished != 0) {
        winningScreen(iFinished, enemyFinished)
        
      }
    }
    if (l2.win == getCookie("enemyID")) {
      enemyFinished = String(l2.moves)
      if (iFinished != 0) {
        winningScreen(iFinished, enemyFinished)
      }
    }
  }
  if (e.data[4] == "i" && e.data[5] == "d") {
    let l1 = JSON.parse(e.data)
    let l2 = JSON.parse(String(l1))

    if (l2.id == getCookie("playerID")) {
      createStage(l2.tab, board1)
    }
    if (l2.id == getCookie("enemyID")) {
      createEnemyStage(l2.tab, board2)
    }
  }

  if (e.data[4] == "r" && e.data[5] == "e") {
    let l1 = JSON.parse(e.data)
    let l2 = JSON.parse(String(l1))

    if (l2.rematch == getCookie("playerID")) {
      myRematch = true
      if (enemyRematch) {
        document.getElementById("winingScreen").remove();
        initiate()

      }
    }
    if (l2.rematch == getCookie("enemyID")) {
      enemyRematch = true
      if (myRematch) {
        document.getElementById("winingScreen").remove();
        initiate()
      }
    }
  }
}




const KEYS = {
  "left": 97,
  "up": 119,
  "right": 100,
  "down": 115
};



document.onkeypress = function (e) {

  e = e || window.event;
  let saveX
  let saveY
  if (canClick) {
    canClick = false
    for (let j = 0; j <= 11; j++) {

      for (let i = 0; i <= 11; i++) {

        if (tab[j][i].type == "hero") {
          saveY = j
          saveX = i
        }
      }

    }

    console.log(tab[saveY][saveX].type)
    switch (e.keyCode) {
      case KEYS.up:
        console.log("up");
        tab[saveY][saveX].goUp()
        break;
      case KEYS.left:
        console.log("left");
        tab[saveY][saveX].goLeft()
        break;
      case KEYS.right:
        console.log("right");
        tab[saveY][saveX].goRight()
        break;
      case KEYS.down:
        console.log("down");
        tab[saveY][saveX].goDown()
        break
    }
    setTimeout(function () { canClick = true }, 300);
  }
};




// window.addEventListener("load", function () {

//     /**
//      * adres i port na którym działa serwer websocket kotlina
//      */

//     

//     /**
//       * wysłanie danych na serwer przy podłączeniu klienta do serwera
//       */



//     /**
//       * odebranie danych z serwera i reakcja na nie
//       */



//     /**
//       * obsługa błędów
//       */

//     ws.onerror = function (e) {
//         console.log(e.message);
//     };

//     /**
//       * zamknięcie połaczenia
//       */

//     ws.onclose = function (e) {

//         console.log(e.code, e.reason);
//     };

//     /**
//       * celem ćwiczenia jest poruszanie myszą po ekranie
//       * i wysyłanie do serwera danych o pozycji
//       * potem serwer odsyła te dane do wszystkich podłączonych klientów
//       * funkcja ws.send("message")
//       */

//     document.onmousemove = function(event) {
//         pointerX = event.pageX;
//         pointerY = event.pageY;
//         // ws.send(`${pointerX}/${pointerY}`);

//         ws.send(`{"x":${pointerX}, "y":${pointerY}}`)
//     }

// })

