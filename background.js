function invokeToggleDark() {
    browser.tabs.executeScript({
        file: 'toggle-dark-mode.js'
    });
}
browser.browserAction.onClicked.addListener(invokeToggleDark);
