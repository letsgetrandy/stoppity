var killByClass = require('../src/killByClass');

describe('killByClass', function() {
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
        killByClass();
    });
});

