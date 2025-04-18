chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.url) {
    // 在后台创建新标签页
    chrome.tabs.create({
      url: message.url,
      active: false // 不激活新标签页，保持当前页面焦点
    });
  }
});