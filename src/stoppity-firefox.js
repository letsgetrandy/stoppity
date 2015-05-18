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

        require('killBySRC');

        var clickByClass = require('clickByClass'),
            killByID = require('killByID'),
            killByChildID = require('killByChildID'),
            killByClass = require('killByClass');

        window.setInterval (function () {
            clickByClass();
            killByID();
            killByChildID();
            killByClass();
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
