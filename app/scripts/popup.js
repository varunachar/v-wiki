'use strict';

chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    if (tabs[0].url.indexOf('wikipedia.org') > -1) {
        chrome.tabs.sendMessage(tabs[0].id, {
            action: 'title'
        }, function(response) {
            document.getElementById('title').innerHTML = response.title;
        });
    }
});