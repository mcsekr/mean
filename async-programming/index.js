





//----------------------------------------------------------------
// coffe-shop
//----------------------------------------------------------------

const coffeShop = {
    getCoffee() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("CAPI");
            }, 2000);
        })
        return promise
    }
}


//----------------------------------------------------------------
// customer
//----------------------------------------------------------------
const customer = {
    doSomething() {
        const promise = coffeShop.getCoffee()
        promise
            .then((coffee) => {
                console.log("customer having coffee: " + coffee);
            })
            .catch((error) => {
                console.log("customer having error: " + error);
            })
        console.log("customer with other if exists");
    }
}

customer.doSomething();