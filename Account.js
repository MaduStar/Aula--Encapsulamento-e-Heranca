// ENCAPSULAMENTO   14/08

class Account {
  // validações ========
    #password 
    #balance
    constructor(email, password) {
        this.email = email
        this.#password = password
        this.#balanco = 0
    }
    getBalance(email, password){
        if (this.#authenticate(email, password)){
            return this.#balance
        } else {
            return null
        }
    }
    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }
}

//instância =======
const myAccount = new Account('john@email.com' , '1234')
console.log(myAccount.getBalance ('john@email.email', '1234') )

