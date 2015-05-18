var killByID = require('../src/killByID');

describe('killByID', function() {

    beforeEach(function() {
        global.window = {
            document: {
                getElementByClassName: function() {
                    return [];
                }
            }
        };
    });
    it('should ...', function() {
        //
    });
});

