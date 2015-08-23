'use strict';

var VideoWiki = {
    init: function() {
        var me = this;
        chrome.runtime.onMessage.addListener(function(request, sender, response) {
            if (request.action === 'title') {
                response({
                    title: me.scrapTitle()
                });
            }
        });
    },
    scrapTitle: function() {
        var titleParent = document.getElementById('firstHeading');
        if (titleParent.firstChild instanceof Element) {
            return titleParent.firstChild.innerHTML;
        } else {
            return titleParent.innerHTML;
        }
    }
};

VideoWiki.init();