
class FabricCrashlytics {
    constructor() {}

    addLog(message) {
        window.cordovaFabricIoPlugin.core.execPlugin('addLog', [
            message
        ]);
    }

    sendCrash() {
        window.cordovaFabricIoPlugin.core.execPlugin('sendCrash', [
        ]);
    }

    sendNonFatalCrash(message, trace) {
        let params = [message];

        if (trace) {
            // validate trace (easier here)
            let tmp = [];

            for (let entry of trace) {
                tmp.push({
                    functionName: entry.functionName || 'unknown',
                    fileName: entry.fileName || 'unknown',
                    lineNumber: entry.lineNumber || 0
                });
            }

            if (tmp.length > 0) {
                params.push(tmp);
            }
        }

        window.cordovaFabricIoPlugin.core.execPlugin('sendNonFatalCrash', params);
    }

    recordError(message, code) {
        window.cordovaFabricIoPlugin.core.execPlugin('recordError', [
            message,
            code
        ]);
    }

    setUserIdentifier(userIdentifier) {
        window.cordovaFabricIoPlugin.core.execPlugin('setUserIdentifier', [
            userIdentifier
        ]);
    }

    setUserName(userName) {
        window.cordovaFabricIoPlugin.core.execPlugin('setUserName', [
            userName
        ]);
    }

    setUserEmail(userEmail) {
        window.cordovaFabricIoPlugin.core.execPlugin('setUserEmail', [
            userEmail
        ]);
    }

    setStringValueForKey(value, key) {
        window.cordovaFabricIoPlugin.core.execPlugin('setStringValueForKey', [
            value,
            key
        ]);
    }

    setIntValueForKey(value, key) {
        window.cordovaFabricIoPlugin.core.execPlugin('setIntValueForKey', [
            value,
            key
        ]);
    }

    setBoolValueForKey(value, key) {
        window.cordovaFabricIoPlugin.core.execPlugin('setBoolValueForKey', [
            value,
            key
        ]);
    }

    setFloatValueForKey(value, key) {
        window.cordovaFabricIoPlugin.core.execPlugin('setFloatValueForKey', [
            value,
            key
        ]);
    }

}

module.exports = new FabricCrashlytics();
