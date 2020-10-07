class Copmlaints {
    constructor() {
        this.copmlaints = []
    }

    reply(complaint) {}

    add(complaint) {
        this.copmlaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Copmlaints {
    reply({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Copmlaints {
    reply({id, customer, details}) {
        return `Service: ${id}: ${customer} (${details})`
    }
}

class ComplainRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint

        if (type === 'service') {
            complaint = new ServiceComplaints()
        } else {
            complaint = new ProductComplaints()
        }

        return complaint.add({id, customer, details})
    }
}

const registry = new ComplainRegistry()
console.log(registry.register('Daniel', 'Product', 'Snus unavailable'))