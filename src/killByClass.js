
var classes = [
    'popup-dom-lightbox-wrapper',   // popup domination
    'jqmWindow',                    // jqueryModal
    'jqmOverlay'                    // jqueryModal Overlay
];

module.exports = function() {
    var i, cl, nodes;
    for (cl = 0; cl < classes.length; cl++) {
        nodes = window.document.getElementsByClassName(classes[cl]);
        for (i = 0; i < nodes.length; i++) {
            // remove the element
            nodes[i].parentNode.removeChild(nodes[i]);

            // if Chrome, update the extension
            if (chrome && chrome.extension) {
                chrome.extension.sendRequest({'type':classes[cl]});
            }
        }
    }
}

