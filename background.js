chrome.webNavigation.onBeforeNavigate.addListener(details => {
    if (details.url.includes('/shorts/')) {
        chrome.tabs.update(details.tabId, {
            url: chrome.runtime.getURL('blocked.html')
        });
    }
});