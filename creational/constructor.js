// function Server(name, ip) {
//     this.name = name
//     this.ip = ip
// }

// Server.prototype.getUrl = function() {
//     return `https://${this.ip}:8000`
// }

// const aws = new Server('AWS Germany', '128.3.3.4')

class Server {
    constructor(name, ip) {
        this.name = name
        this.ip = ip
    }

    getUrl() {
        return `https://${this.ip}:8000`
    }
}

const aws = new Server('AWS Germany', '128.3.3.4')