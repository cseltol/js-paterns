class Subject {
    constructor() {
        this.observer = []
    }

    subcribe(observer) {
        this.observer.push(observer)
    }

    unsubscribe(observer) {
        this.observer = this.observer.filter(obs => obs !== observer)
    }
    
    fire(action) {
        this.observer.forEach(observer => {
            observer.update(action)
        })
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state
        this.initState = state
    }

    update(action) {
        switch (action.type) {
            case 'INCREMENT':
                this.state = ++this.state
                break;
            case 'DECREMENT':
                this.state = --this.state
                break;
            case 'ADD':
                this.state += action.payload
                break;
            default:
                this.state = this.initialState
        }
    }
}

const stream$ = new Subject()

const observer1 = new Observer()
const observer2 = new Observer(42)

stream$.subcribe(observer1)
stream$.subcribe(observer2)

stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'INCREMENT'})
stream$.fire({type: 'DECREMENT'})
stream$.fire({type: 'ADD', payload: 10})

console.log(observer1.state)
console.log(observer2.state)