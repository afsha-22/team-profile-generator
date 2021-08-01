const Employee = require('./Employee')

class Manager{
    constructor(name, id, email, officenumber){
        super(name, id, email)
        this.officenumber = officenumber
    }
    getRole() {
        return "Manager"
    }
    getOfficenumber() {
        this.officenumber = this.officenumber
    }
}

module.exports = Manager