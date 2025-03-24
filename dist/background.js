chrome.commands.onCommand.addListener(function (command) {
  if (command === "open_omnibarx") {
    chrome.action.openPopup();
  }
});