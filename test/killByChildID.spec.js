var killByChildID = require('../src/killByChildID');

describe('killByChildID', function() {

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


