class Server {
    constructor(ip, port) {
        this.ip = ip
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAWS = true
    server.port = this.port
    server.awsInfo = function() {
        return server.url
    }

    return server
}

function azure(server) {
    server.isAzure = true
    server.port += 700
    server.azureInfo = function() {
        return server.url
    }
}

const sv1 = aws(new Server('191.1.1.1', 1000))
console.log(sv1.isAWS)
console.log(sv1.awsInfo)

const sv2 = azure(new Server('192.2.2.2', 2000))
console.log(sv2.isAzure)
console.log(sv2.port)
console.log(sv2.azureInfo)