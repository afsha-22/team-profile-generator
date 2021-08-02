const Manager = require('../lib/Manager')

describe("Phone number", () => {
    it("Phone", () => {
        const testPhone = "0412345678"
        const empInstance = new Manager("Maya", 3, "maya@email.com", testPhone)
        expect(empInstance.officenumber).toBe(testPhone)
    })
})