// remove script tags matching the following patterns
var patterns = [
    'wp-content/plugins/pippity',   // pippity poppity
    'clickfuse.com'                 // clickfuse
];
var scripts = window.document.getElementsByTagName('script');
for (var scriptfile in scripts) {
    for (var pattern in patterns) {
        var rx = new RegExp(pattern);
        if (rx.test(scriptfile.src))
            scriptfile.src = '';
    }
}

var classes = [
    'popup-dom-lightbox-wrapper',   // popup domination
    'jqmWindow',                    // jqueryModal
    'jqmOverlay'                    // jqueryModal Overlay
];
var ids = [
    'pty_pkg',                      // pippity poppity
    'mod_wrapper',                  // modal wrapper
    'AdSpotMovie',                  // AdSpot
    'shortTail_D30_modal',          // short tail
    'cf_slideout_container'         //
];
var childids = [
    'rm_modal'                      // ringtone maker
];
//var cryptic_ids = [
//    'popForm'
//];

window.setInterval (function () {
    var i, el, id, cl, nodes;
    // check for the specified IDs and kill them
    for (id=0; id<ids.length; id++) {
        el = window.document.getElementById(ids[id]);
        if (el) {
            el.parentNode.removeChild(el);
            chrome.extension.sendRequest({'type':ids[id]});
        }
    }
    // kill anything containing the specified child ID
    for (id=0; id<childids.length; id++) {
        el = window.document.getElementById(childids[id]);
        if (el) {
            el = el.parentNode;
            el.parentNode.removeChild(el);
            chrome.extension.sendRequest({'type':childids[id]});
        }
    }
    // kill anything with the specified CSS class
    for (cl=0; cl<classes.length; cl++) {
        nodes = window.document.getElementsByClassName(classes[cl]);
        for (i=0; i<nodes.length; i++) {
            nodes[i].parentNode.removeChild(nodes[i]);
            chrome.extension.sendRequest({'type':classes[cl]});
        }
    }
    //// kill elements even with cryptic IDs
    //for (id=0; id<cryptic_ids.length; id++) {
    //    nodes = document.querySelectorAll('[id^='+cryptic_ids[id]+']');
    //    for (i=0; i<nodes.length; i++) {
    //        nodes[i].parentNode.removeChild(nodes[i]);
    //        chrome.extension.sendRequest({'type':cryptic_ids[id]});
    //    }
    //}

    // aWeber
    nodes = document.getElementsByClassName('af-form-close-button');
    if (nodes.length) {
        nodes[0].click();
    }
}, 500);
