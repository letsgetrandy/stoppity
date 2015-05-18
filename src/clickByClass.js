
var classes = [
        'af-form-close-button'  // AWeber
    ];

module.exports = function() {
    var i, cl, nodes;
    for (cl = 0; cl < classes.length; cl++) {
        nodes = window.document.getElementsByClassName(classes[cl]);
        for (i = 0; i < nodes.length; i++) {
            // click the element
            nodes[i].click();

            // if Chrome, update the extension
            if (chrome && chrome.extension) {
                chrome.extension.sendRequest({'type':classes[cl]});
            }
        }
    }
}

