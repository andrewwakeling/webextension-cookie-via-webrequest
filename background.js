browser.webRequest.onBeforeSendHeaders.addListener((details = {}) => {
    let headers = details.requestHeaders;
    if (Array.isArray(headers)) {
    const cookieHeader = headers.find(header => header.name === 'Cookie');
    console.dir(`Cookies are: ${cookieHeader.value}`);
    return {};
    }
}, {urls: ['<all_urls>']}, ['blocking', 'requestHeaders']);