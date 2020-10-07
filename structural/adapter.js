class OldClac {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }
    }
}

class NewClac {
    add(t1, t2) {
        return t1 + t2
    }

    sub(t1, t2) {
        return t1 - t2
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewClac()
    }

    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1, t2)
            default: return NaN
        }
    }
}   


const oldClac = new OldClac()
console.log(oldClac.operations(22, 26, 'add'))

const newCalc = new NewClac()
console.log(newCalc.add(22, 26))

const adapter = CalcAdapter()
console.log(adapter.operation(22, 26, 'add'))