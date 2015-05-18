
describe('killBySRC', function() {

    it('should ...', function() {
        global.window = {
            document: {
                getElementsByTagName: function(s) {
                    return ['a', 'b'];
                }
            }
        };

        var killBySRC = require('../src/killBySRC');
        //
    });
});

