var clickByClass = require('../src/clickByClass');

describe('clickByClass', function() {

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

