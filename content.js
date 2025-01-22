function removeShortsSections() {
    const shortsShelves = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]');

    shortsShelves.forEach(shelf => {
        shelf.remove();
    });
}


removeShortsSections();


const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
            removeShortsSections();
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});