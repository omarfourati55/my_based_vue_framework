export class TBIShortcutManager {
    constructor() {
        this.shortcuts = {};
        this.keydownListener = () => {};
    }

    registerShortcut(keyCombination, callback) {
        const formatShortcut = (shortcut) => shortcut.replaceAll(' ', '').toLowerCase();
        const formattedShortcut = formatShortcut(keyCombination);

        this.shortcuts[formattedShortcut] = callback;
    }

    unregisterShortcuts() {
        Object.keys(this.shortcuts).forEach((keys) => {
            delete this.shortcuts[keys];
        });
    }

    addEventListener() {
        this.keydownListener = (event) => this.handleKeyPress(event);
        document.addEventListener('keydown', this.keydownListener);
    }

    removeEventListener() {
        document.removeEventListener('keydown', this.keydownListener);
    }

    handleKeyPress(event) {
        const keyCombination = [];

        if (event.altKey) {
            keyCombination.push('alt');
        }

        if (event.ctrlKey) {
            keyCombination.push('ctrl');
        }

        if (event.shiftKey) {
            keyCombination.push('shift');
        }

        keyCombination.push(event.key);

        const keys = keyCombination.join('+');

        if (this.shortcuts[keys]) {
            this.shortcuts[keys]();
        }
    }
}
