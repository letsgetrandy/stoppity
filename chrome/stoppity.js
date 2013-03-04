// remove script tags matching the following patterns
var patterns = [
    'wp-content/plugins/pippity',   // pippity poppity
    'clickfuse.com'                 // clickfuse
];
var scripts = window.document.getElementsByTagName('script');
for (scriptfile in scripts) {
    for (pattern in patterns) {
        var rx = new RegExp(pattern);
        if (rx.text(scriptfile.src))
            scriptfile.src = '';
    }
}

var classes = [
	'popup-dom-lightbox-wrapper',	// popup domination
	'jqmWindow'				        // jqm ads
];
var ids = [
	'pty_pkg',				        // pippity poppity
	'mod_wrapper',			        // modal wrapper
	'AdSpotMovie',			        // AdSpot
	'shortTail_D30_modal'	        // short tail
];
var childids = [
	'rm_modal',				        // ringtone maker
];

window.setInterval (function () {

    // check for the specified IDs and kill them
	for (id=0; id<ids.length; id++) {
		var el = window.document.getElementById(ids[id]);
		if (el) {
			el.parentNode.removeChild(el);
			chrome.extension.sendRequest ({'type':ids[id]}, function(response){} );
		}
	}
    // kill anything containing the specified child ID
	for (id=0; id<childids.length; id++) {
		var el = window.document.getElementById(childids[id]);
		if (el) {
			el = el.parentNode;
			el.parentNode.removeChild(el);
			chrome.extension.sendRequest ({'type':childids[id]}, function(response){} );
		}
	}
    // kill anything with the specified CSS class
	for (cl=0; cl<classes.length; cl++) {
		var nodes = window.document.getElementsByClassName(classes[cl]);
		for (i=0; i<nodes.length; i++) {
			nodes[i].parentNode.removeChild(nodes[i]);
			chrome.extension.sendRequest ({'type':classes[cl]}, function(response){} );
		}
	}

}, 500);
