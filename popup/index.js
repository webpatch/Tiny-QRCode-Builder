function create(url) {
  new QRCode("qrcode", {
    text: url,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.L
  });
}

if (typeof browser !== 'undefined') {
  browser.tabs.query({ active: true }).then(tabs => create(tabs[0].url));
} else if (typeof chrome !== 'undefined') {
  chrome.tabs.query({ active: true }, tabs => create(tabs[0].url));
}

