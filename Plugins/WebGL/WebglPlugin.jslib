mergeInto(LibraryManager.library, {
    Vibrate: function (){
        const navigatorVibrate =
            navigator.vibrate ||
            navigator.webkitVibrate ||
            navigator.mozVibrate ||
            navigator.msVibrate;

        if (navigatorVibrate) {
            navigatorVibrate.call(navigator, [15]);
        } else {
            if (window.Telegram &&
                window.Telegram.WebApp &&
                window.Telegram.WebApp.HapticFeedback &&
                typeof window.Telegram.WebApp.HapticFeedback.impactOccurred === 'function') {
                window.Telegram.WebApp.HapticFeedback.impactOccurred('light');
            }
        }
    }
});
