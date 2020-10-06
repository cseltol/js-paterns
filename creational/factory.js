// class SimpleSubscription {
//     constructor(name) {
//         this.name = name
//         this.cost = 5
//     }
// }

// class RegularSubscription {
//     constructor(name) {
//         this.name = name
//         this.cost = 15
//     }
// }

// class PremiumSubscription {
//     constructor(name) {
//         this.name = name
//         this.cost = 50
//     }
// }

class SubscriptionFactory {
    static list = {
        simple: SimpleSubscription,
        regular: RegularSubscription,
        premium: PremiumSubscription,
    }
    create(name, type = 'simple') {
        const Subscription = SubscriptionFactory.list[type] || SubscriptionFactory.list.simple
        const sub = new Subscription(name)
        sub.type = type
        sub.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return sub
    }  
}

const factory = new SubscriptionFactory()

const sub = [
    factory.create('Daniel', 'Simple'),
    factory.create('Katya', 'Premium'),
    factory.create('Bogdan', 'Regular'),
    factory.create('Ivan', 'Premium'),
    factory.create('Peter')
]

sub.forEach(m => {
    m.define()
})