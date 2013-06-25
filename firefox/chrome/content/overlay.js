var stoppity = {
    onLoad: function() {
        // initialization code
        this.initialized = true;
        this.strings = document.getElementById("stoppity-strings");

        var appcontent=window.document.getElementById("appcontent");
        if (appcontent) {
          appcontent.addEventListener("DOMContentLoaded", stoppity.contentLoad, true);
        }
    },

    onUnload: function() {
        // remove event listeners when the page unloads
        window.removeEventListener('load', stoppity.onLoad, false);
        window.removeEventListener('unload', stoppity.onUnload, false);
    },

    contentLoad: function (event) {
        var doc = event.originalTarget;
        var wnd = doc.defaultView;

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
            'popup-dom-lightbox-wrapper',   // popup domination
            'jqmWindow'                     // jqm ads
        ];
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
        var childids = [
            'rm_modal'                      // ringtone maker
        ];

        window.setInterval (function () {

            for (id=0; id<ids.length; id++) {
                var el = window.content.document.getElementById(ids[id]);
                if (el) el.parentNode.removeChild(el);
            }
            for (id=0; id<childids.length; id++) {
                var el = window.content.document.getElementById(childids[id]);
                if (el) {
                    el = el.parentNode;
                    el.parentNode.removeChild(el);
                }
            }
            for (cl=0; cl<classes.length; cl++) {
                var nodes = window.content.document.getElementsByClassName(classes[cl]);
                for (i=0; i<nodes.length; i++) {
                    nodes[i].parentNode.removeChild(nodes[i]);
                }
            }
        }, 500);

    },

    onMenuItemCommand: function(e) {
        var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
        promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));
    },

    onToolbarButtonCommand: function(e) {
        // just reuse the function above.  you can change this, obviously!
        stoppity.onMenuItemCommand(e);
    }
};

window.addEventListener("load", function () { stoppity.onLoad(); }, false);
window.addEventListener('unload', function () { stoppity.onUnload(); }, false);
