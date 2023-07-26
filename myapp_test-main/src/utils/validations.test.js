const {firstName, verifyStockAvailability} = require("../utils/validations")

describe("firtName()", () =>{
    it("should return the first name when the full name is given", () =>{
        const fullName = "Shermam Tacia da Costa Lima";
        const result = firstName(fullName);
        expect(result).toBe("Shermam");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = "John Doe Etc";
        const result = firstName(fullName);
        expect(result).toBe("John");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = "John Doe";
        const result = firstName(fullName);
        expect(result).toBe("John");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = "Bruno";
        const result = firstName(fullName);
        expect(result).toBe("Bruno");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = " Bruno";
        const result = firstName(fullName);
        expect(result).toBe("Bruno");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = " Bruno  ";
        const result = firstName(fullName);
        expect(result).toBe("Bruno");
    });

    it("should return the first name when the full name is given", () => {
        const fullName = "";
        const result = firstName(fullName);
        expect(result).toBe("");
    });


    //new test

describe("verifyStockAvailability()", () => {
    it("should return true when product type is available in stock", () => {
        const productType = "laptop";
        const qty = 5;
        const result = verifyStockAvailability(productType, qty);
        expect(result).toBe(true);
    });

    it("should return false when product type is sold out", () => {
        const productType = "book";
        const qty = 3;
        const result = verifyStockAvailability(productType, qty);
        expect(result).toBe(false);
    });

    it("should return false when product type has less stock qty than the requested", () => {
        const productType = "tablet";
        const qty = 20;
        const result = verifyStockAvailability(productType, qty);
        expect(result).toBe(false);
    });

    it("should return false when product type doesnt exists in stock", () => {
        const productType = "other";
        const qty = 3;
        const result = verifyStockAvailability(productType, qty);
        expect(result).toBe(false);
    });
});

 
   
})

