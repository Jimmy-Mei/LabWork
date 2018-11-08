class Product {
    title: string;
    price: number;
    id: number;

    constructor(id: number) {
        this.id = id
    }

    printDetails() {
        console.log(`Title: ${this.title}`)
        console.log(`ID: ${this.id}`)
        console.log(`Price: ${this.price}`)
    }
}

interface Bookable {
    availableDates: [Date]
}

interface Cancelable {
    cancelationFee: number
}

interface ConfigOption {
    directory: string
    file: string
    maxSize?: number
}

class Tour extends Product implements Bookable, Cancelable {
    duration: string;
    availableDates: [Date]
    cancelationFee: number

    constructor(id: number, duration: string) {
        super(id);

        this.duration = duration
    }

    printDetails() {
        super.printDetails()

        console.log(`Duration: ${this.duration}`)
    }
}

class Dining extends Product {
    cuisine: string;
    childPrice: number;

    constructor(id: number, cuisine: string, childPrice: number) {
        super(id);

        this.cuisine = cuisine
        this.childPrice = childPrice
    }

    printDetails() {
        super.printDetails()

        console.log(`Cuisine: ${this.cuisine}`)
        console.log(`Child Price: ${this.childPrice}`)
    }
}

function test(p: Product) {
    p.printDetails()
}

function cancelBooking(c: Cancelable) {
    console.log("Canceling booking. Charges: %d", c.cancelationFee)
}

function cancelBooking2<T extends Cancelable & Product>(c: T) {
    console.log("Canceling: %s (%d)", c.title, c.id)
    console.log("Price: %d", c.price)
    console.log("Cancelation fee: %d", c.cancelationFee)
    console.log("Total refund: %d", c.price - c.cancelationFee)
}


function configSomething (op: ConfigOption) {
    op.maxSize = op.maxSize || 1024

    console.log("Directory: %s", op.directory)
    console.log("File: %s", op.file)
    console.log("Max Size: %s", op.maxSize)
}

var t = new Tour(1, "8 hours")

t.title = "Trip to the Taj Mahal"
t.price = 1200.00
t.cancelationFee = 100.00

//cancelBooking(t)
//cancelBooking2(t);
configSomething({
    directory: "/dir1",
    file: "persons.json"
})
