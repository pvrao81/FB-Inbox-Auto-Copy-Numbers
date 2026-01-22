document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle');

  // Load and initialize saved state if undefined
  chrome.storage.sync.get('enabled', (data) => {
    let enabled = data.enabled;
    if (enabled === undefined) {
      enabled = false;
      chrome.storage.sync.set({ enabled: false });
    }
    updateButton(enabled);
  });

  // Toggle on click
  toggleButton.addEventListener('click', () => {
    chrome.storage.sync.get('enabled', (data) => {
      const newState = !data.enabled;
      chrome.storage.sync.set({ enabled: newState });
      updateButton(newState);
    });
  });

  function updateButton(enabled) {
    toggleButton.textContent = enabled ? 'Off' : 'On';
    toggleButton.className = enabled ? 'off' : 'on';
  }
});