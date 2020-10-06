const cart = {
    items: 2,

    init() {
        console.log(`You have ${this.items} in your cart at ${this.store}!`)
    }
}


const shopCart = Object.create(cart, {
    shopName: 'Dvoechka'
})

console.log(shopCart.__proto__ === cart)

shopName.init()