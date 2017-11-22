browser.tabs.query({ active: true }).then(tabs => {
  console.log(tabs[0].url);
  new QRCode("qrcode", {
    text: tabs[0].url,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
});
