Object.defineProperty(window, 'requestIdleCallback', {
    writable: true,
    value: function (cb: any) {
        const start = Date.now();
        const timeoutId = window.setTimeout(function () {
            cb({
                didTimeout: false,
                timeRemaining: function () {
                    return Math.max(0, 50 - (Date.now() - start));
                }
            });
        }, 1)

        return timeoutId;
    }
})