var clickByClass = require('../src/clickByClass');

describe('clickByClass', function() {

    beforeEach(function() {
        global.window = {
            document: {
                getElementsByClassName: function() {
                    return [];
                }
            }
        };
    });

    it('should ...', function() {
        clickByClass();
    });
});

