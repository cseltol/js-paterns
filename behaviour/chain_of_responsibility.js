class MySum {
    constructor(initValue = 42) {
        this.sum = initValue
    }

    add(value) {
        this.sum += value
        return this
    }
}

const sum_1 = new MySum()
console.log(sum_1.add(22).add(26).add(42).add(7))

const sum_2 = new MySum(0)
console.log(sum_1.add(2).add(4).add(6).add(8))