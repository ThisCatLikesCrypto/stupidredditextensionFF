function replaceText(find, replace) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let node;
  
  while (node = walker.nextNode()) {
    node.nodeValue = node.nodeValue.replace(find, replace);
  }
}

function replaceWords() {
  replaceText(/share/gi, 'spreddit');
  replaceText(/delete/gi, 'shreddit');
  replaceText(/karma/gi, 'creddit');
}

// Observe changes in the DOM to handle dynamic content
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => replaceWords());
});

// Start observing the document
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial replacement
replaceWords();
