(function () {
    'use strict';

    mocha.setup({ ui: 'bdd' });
    window.expect = chai.expect;
    window.onload = function () {
        window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
    };

    describe('Tinkerer\'s Workshop', function () {

        var gyrocoptorSteps = [
            { parts: { gear: 2, washer: 1 }, description: "Attach 2 gears with a washer." },
            { parts: { gear: 1, wire: 4 }, description: "Senselessly wrap 4 wires around another gear." }
        ];

        var copterParts = { gear: 3, washer: 1, wire: 4 };
        
        describe('Workshop', function () {

            var inventory = {gear: 3};
            var workshop = new Workshop(inventory);

            it('should have an inventory of parts on hand', function () {
                expect(workshop.inventory).to.eql(inventory);
            });
        });

        describe('Blueprint', function () {
            
            var gyrocoptorBlueprint = new Blueprint(gyrocoptorSteps)

            it('FIXME 1. Should return an instance of a Blueprint', function () {
  
                var newBlueprint = new Blueprint(gyrocoptorSteps)
                expect(newBlueprint.partsList).to.eql(copterParts);

            });

            it('FIXME 2. Should remove parts from the given supply', function () {
                var newParts = Object.assign({}, gyrocoptorBlueprint.partsList)
                var workshop = new Workshop(newParts);
                
                gyrocoptorBlueprint.build(workshop.inventory)

                expect(workshop.inventory).to.eql({ gear: 0, washer: 0, wire: 0 });
            });


            it('FIXME 3. Should not build a gizmo when there are not enough parts', function () {
                var workshop = new Workshop({ gear: 3, washer: 1});
                var orgiginalInventory = Object.assign({}, workshop.inventory)
                var gizmoRequiredParts = { gear: 3, washer: 1, wire: 4 };
                var remainingParts = gyrocoptorBlueprint.build(workshop.inventory)

                expect(gyrocoptorBlueprint.partsList).to.eql(gizmoRequiredParts);
                expect(remainingParts).to.equal(orgiginalInventory);

            });

            it('Should build when it has enough parts', function () {
                var newParts = Object.assign({}, gyrocoptorBlueprint.partsList)
                var remainingParts = gyrocoptorBlueprint.build(newParts)

                expect(remainingParts).to.eql(newParts)
            });

            
        });

        describe('createPartsList', function() {
            var partsList = createPartsList(gyrocoptorSteps);

            expect(partsList).to.eql(copterParts);
        })
    });

}());

