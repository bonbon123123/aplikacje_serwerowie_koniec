import com.google.gson.Gson
import org.eclipse.jetty.websocket.api.Session
import org.eclipse.jetty.websocket.api.WebSocketListener
import spark.Request
import spark.Response
import spark.Spark.*
import java.sql.DriverManager
import java.util.concurrent.ConcurrentHashMap
import java.io.File

data class Mach(
    var id: String,
    var title: String,
    var winningMoves: String,
    var losingMoves: String,

)


var id: Int = 1

object Clients {
    val clientsMap = ConcurrentHashMap<Session, String>()

    fun broadcastMessage(sender: String, message: String) {

        clientsMap.forEach{

            var client = it.key

            if(client.isOpen)
            {
                client.remote.sendString(
                    Gson().toJson(message)

                )
            }

        }
    }
}

fun main() {

    staticFiles.location("/public")
    webSocket("/testws/", ServerSocket::class.java)
    get("/") {req,res->"hello"}
    post("/post") { req, res -> postData(req, res) }
    post("/sendData") { req, res -> writeJson(req, res) }
    get("/getStage") { req, res -> readJson(req, res) }

}
fun writeJson(req: Request, res: Response) {
    print(req.body())
    File("json.txt").writeText(req.body())

    //File("json.txt").writeText("text 01 content")

}


fun readJson(req: Request, res: Response): String? {
    val text = File("json.txt").readText()
    println(text)
    res.type("application/json")
    return Gson().toJson(text)

}

class ServerSocket: WebSocketListener {
    override fun onWebSocketClose(p0: Int, p1: String?) {
        TODO("Not yet implemented")
    }

    override fun onWebSocketConnect(client: Session?) {
        if (client != null) {
            println("localAddress: " + client.localAddress)
            println("remoteAddress: " + client.remoteAddress)

            //println("remote: " + client.remote)
            println("isOpen: " + client.isOpen)
            println("isSecure: " + client.isSecure)
            println("idleTimeout: " + client.idleTimeout)
            val clientName = client.remoteAddress
            Clients.clientsMap[client] = clientName.toString()
            Clients.broadcastMessage("Server", "$id")
            id++
        }
    }

    override fun onWebSocketError(p0: Throwable?) {
        TODO("Not yet implemented")
    }

    override fun onWebSocketBinary(p0: ByteArray?, p1: Int, p2: Int) {
        TODO("Not yet implemented")
    }

    override fun onWebSocketText(message: String?) {
        println(message)
//        try {
//            val dataToInsert:Position= Gson().fromJson(message, Position::class.java)
//            println(dataToInsert.x)
//        }
//        catch (e:Exception){
//            print(e.message)
//        }



        if (message != null) {
            Clients.broadcastMessage("fromserver", message)
        }
    }

}

fun postData(req: Request, res: Response): String{


    val conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/bonbon", "postgres", "zaq1@WSX")

    val stmt = conn.createStatement()
    val dataToInsert:Mach= Gson().fromJson(req.body(), Mach::class.java)
    val myWinningMoves =dataToInsert.winningMoves
    val myLosingMoves =dataToInsert.losingMoves
    val myTitle =dataToInsert.title

    println(dataToInsert)

    stmt.execute("INSERT INTO maches (title, winningMoves,losingMoves) VALUES('$myTitle','$myWinningMoves','$myLosingMoves')")



    val rs = stmt.executeQuery("SELECT * FROM maches")

    val list= mutableListOf<Mach>()

    while (rs.next()) {
        list.add(Mach(rs.getString("id"),rs.getString("title"),rs.getString("winningMoves"),rs.getString("losingMoves")))

    }
    println(list)

    conn.close()

    res.type("application/json")
    return Gson().toJson(list)
}