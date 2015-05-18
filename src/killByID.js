
var ids = [
    'pty_pkg',                      // pippity poppity
    'mod_wrapper',                  // modal wrapper
    'AdSpotMovie',                  // AdSpot
    'shortTail_D30_modal',          // short tail
    'cf_slideout_container',        //
    'lbOverlay',
    'lbCenter',
    'lbBottomContainer',
    'TB_window',
    'TB_overlay'
];

module.exports = function() {
    var el;
    for (id = 0; id < ids.length; id++) {
        el = window.document.getElementById(ids[id]);
        if (el) {
            // remove the element
            el.parentNode.removeChild(el);

            // for Chrome, update the counter
            if (chrome && chrome.extension) {
                chrome.extension.sendRequest({'type':ids[id]});
            }
        }
    }
}

