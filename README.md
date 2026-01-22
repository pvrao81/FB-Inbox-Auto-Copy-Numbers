**#Auto Copy Phone Numbers from FB DMs Chrome Extension**
**Description**
  - This Chrome extension automatically detects and copies phone numbers from direct messages (DMs) in the Facebook Business Suite Inbox. It supports various phone number formats (10+ digits, with/without country codes, spaces, hyphens, etc.) and copies them to the clipboard without manual intervention. Includes an On/Off toggle for privacy consent and keyboard shortcuts for quick control.
Features

**Auto-Copy Phone Numbers:**
Scans new incoming DMs for phone numbers using regex and copies them to the clipboard if enabled.
- **Toggle Button:** Popup with a button to enable/disable the feature (starts disabled by default).
- **Keyboard Shortcuts:** Ctrl+Shift+O to turn ON, Ctrl+Shift+F to turn OFF (customizable in chrome://extensions/shortcuts).
- **Privacy-Focused:** Only active on the specified Facebook page; no data storage or external transmissions.
- **Smooth Operation:** No notifications; uses MutationObserver for real-time message detection.

**Installation**
- Download or clone the extension files into a folder (e.g., fb-dm-autocopy).
- Open Chrome and navigate to chrome://extensions/.
- Enable "Developer mode" in the top right.
- Click "Load unpacked" and select the folder containing the files: manifest.json, popup.html, popup.js, content.js, background.js.

**Usage**
- Load the extension as above.
- Visit https://business.facebook.com/latest/inbox/all/.
- Click the extension icon to open the popup.
- Click the green "On" button to enable auto-copy (it turns red "Off" when active).
- **Use shortcuts:** Ctrl+Shift+O (On), Ctrl+Shift+F (Off).
- When a new DM contains a phone number, it's auto-copied—paste anywhere to use.

**Files**
- **manifest.json:** Extension configuration.
- **popup.html & popup.js:** Toggle UI and logic.
- **content.js:** Content script for DM monitoring and copying.
- **background.js:** Handles keyboard shortcuts.

**Notes**
- **Customization:** Inspect Facebook page elements to refine selectors in content.js if classes change.
- **Permissions:** Requires storage, clipboardWrite, and scripting on business.facebook.com.
- **Limitations:** Clipboard access may need page focus; multiple numbers in one message copy sequentially (last overwrites).

**License**
- MIT License - Free to use and modify.
