
function removeShortsElements() {
    document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]').forEach(e => e.remove());
    
    document.querySelectorAll('ytd-guide-entry-renderer a[title="Shorts"]').forEach(e => {
        const entry = e.closest('ytd-guide-entry-renderer');
        entry?.remove();
    });
}

function blockShortsPage() {
    if (window.location.pathname.includes('/shorts/')) {
        document.body.innerHTML = `
            <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
                <h1>404 Not Found</h1>
                <p>YouTube Shorts have been blocked by your extension.</p>
                <a href="/">Return to YouTube Home</a>
            </div>
        `;
        window.stop();
    }
}

blockShortsPage();
removeShortsElements();

const observer = new MutationObserver((mutations) => {
    if (document.body) {
        blockShortsPage();
        removeShortsElements();
    }
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});

window.addEventListener('popstate', () => {
    blockShortsPage();
    removeShortsElements();
});