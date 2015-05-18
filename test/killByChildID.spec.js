var killByChildID = require('../src/killByChildID');

describe('killByChildID', function() {

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
        killByChildID();
    });
});


