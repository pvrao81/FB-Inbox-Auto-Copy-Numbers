// Regex for phone numbers: 10+ digits, optional country code (+XX), spaces/hyphens/parentheses/dot separators
const phoneRegex = /(?:(?:\+?\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4,})+/g;

// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).catch(err => console.error('Failed to copy: ', err));
}

// MutationObserver to watch for new messages
function setupObserver() {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            // Look for message text containers (adjust selectors based on page structure)
            const messageElements = node.querySelectorAll('[role="gridcell"], .x1lliihq, .x193iq5w'); // Common FB message classes; inspect page to refine
            messageElements.forEach(el => {
              const text = el.textContent.trim();
              const matches = text.match(phoneRegex);
              if (matches) {
                // Check if enabled
                chrome.storage.sync.get('enabled', (data) => {
                  if (data.enabled) {
                    matches.forEach(phone => {
                      copyToClipboard(phone); // Copy each detected number
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  });

  // Target the chat container (adjust selector: inspect the inbox page for the main chat list or conversation wrapper)
  const targetNode = document.querySelector('[role="main"], .x1n2onr6, .x78zum5'); // Common FB wrappers; refine via dev tools
  if (targetNode) {
    observer.observe(targetNode, { childList: true, subtree: true });
  } else {
    console.log('Chat container not found. Retrying...');
    setTimeout(setupObserver, 1000); // Retry if not loaded yet
  }
}

// Initialize when page is ready
document.addEventListener('DOMContentLoaded', setupObserver);
setupObserver(); // Run immediately in case already loaded