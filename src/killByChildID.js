
var childIDs = [
    'rm_modal',        // ringtone maker
    'altsocial_splash'
];

module.exports = function() {
    var id, el;
    for (id = 0; id < childIDs.length; id++) {
        el = window.document.getElementById(childIDs[id]);
        if (el) {
            // remove the element
            el = el.parentNode;
            el.parentNode.removeChild(el);

            // for Chrome, update the counter
            if (chrome && chrome.extension) {
                chrome.extension.sendRequest({'type': childIDs[id]});
            }
        }
    }
}

