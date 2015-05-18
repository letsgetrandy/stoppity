var killByClass = require('../src/killByClass');

describe('killByClass', function() {
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

