class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const egor = new User('Egor')
const gelya = new User('Angelina')
const no = new User('')

const room = new ChatRoom()

room.register(egor)
room.register(gelya)
room.register(no)

egor.send('Salam', gelya)
gelya.send('Hi!', no)
no.send('', gelya)