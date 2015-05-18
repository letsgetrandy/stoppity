var killByID = require('../src/killByID');

describe('killByID', function() {

    beforeEach(function() {
        global.window = {
            document: {
                getElementById: function() {
                    return null;
                }
            }
        };
    });
    it('should ...', function() {
        killByID();
    });
});

