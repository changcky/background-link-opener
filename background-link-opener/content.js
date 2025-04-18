document.addEventListener('click', function (e) {
  let link = e.target.closest('a');
  if (link && link.href) {
    let currentHost = window.location.hostname;
    let linkHost;
    
    // 尝试解析 link.href 的域名，处理可能的无效 URL
    try {
      linkHost = new URL(link.href, window.location.origin).hostname;
    } catch (error) {
      return; // 如果 URL 无效，直接跳过
    }

    // 检查是否为外部链接
    if (linkHost && linkHost !== currentHost && linkHost !== 'www.inoreader.com') {
      e.preventDefault();
      chrome.runtime.sendMessage({ url: link.href });
    }
    // 如果是内部链接（如 inoreader.com 的相对路径或同域名链接），不做处理
  }
}, false);