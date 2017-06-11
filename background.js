browser.runtime.onMessage.addListener(listener);

function listener(message) {
    browser.tabs.create({url: message.url});
}