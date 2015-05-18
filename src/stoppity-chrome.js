
require('./killBySRC');

var clickByClass = require('./clickByClass'),
    killByID = require('./killByID'),
    killByChildID = require('./killByChildID'),
    killByClass = require('./killByClass');

//var cryptic_ids = [
//    'popForm'
//];

window.setInterval (function () {
    clickByClass();
    killByID();
    killByChildID();
    killByClass();

    //// kill elements even with cryptic IDs
    //for (id=0; id<cryptic_ids.length; id++) {
    //    nodes = document.querySelectorAll('[id^='+cryptic_ids[id]+']');
    //    for (i=0; i<nodes.length; i++) {
    //        nodes[i].parentNode.removeChild(nodes[i]);
    //        chrome.extension.sendRequest({'type':cryptic_ids[id]});
    //    }
    //}
}, 500);
