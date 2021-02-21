let expect    = require("chai").expect;
let calculator = require("../app/calculator");


    describe("Coolitude scores", function () {
        it("d should return 0", function () {
            let result = calculator.stringToIntHash("d");
            expect(result).to.equal(0);
        });
        it("Sammy should return 19", function () {
            let result = calculator.stringToIntHash("d");
            expect(result).to.equal(0);
        });

    });

    describe("Full text result verification", function () {
        it("Sammy should return wahou or something", function () {
            let result = calculator.score("Sammy");
            expect(result).to.contain("wahou");
        });
        it("François should return 25/20", function () {
            let result = calculator.score("François");
            expect(result).to.contain("25/20");
        });
        it("if name emptie it should ask your name", function () {
            let result = calculator.score("");
            expect(result).to.contain("Entrer votre nom s'il vous plait.");
        })
        it("if name absent it should ask your name", function () {
            let result = calculator.score(null);
            expect(result).to.contain("Entrer votre nom s'il vous plait.");
        })
    });




