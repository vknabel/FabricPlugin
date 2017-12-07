
class FabricCrashlytics {
    constructor() {}

    addLog(message) {
        window.cordovaPluginFabric.core.execPlugin('addLog', [
            message
        ]);
    }

    sendCrash() {
        window.cordovaPluginFabric.core.execPlugin('sendCrash', [
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

        window.cordovaPluginFabric.core.execPlugin('sendNonFatalCrash', params);
    }

    recordError(message, code) {
        window.cordovaPluginFabric.core.execPlugin('recordError', [
            message,
            code
        ]);
    }

    setUserIdentifier(userIdentifier) {
        window.cordovaPluginFabric.core.execPlugin('setUserIdentifier', [
            userIdentifier
        ]);
    }

    setUserName(userName) {
        window.cordovaPluginFabric.core.execPlugin('setUserName', [
            userName
        ]);
    }

    setUserEmail(userEmail) {
        window.cordovaPluginFabric.core.execPlugin('setUserEmail', [
            userEmail
        ]);
    }

    setStringValueForKey(value, key) {
        window.cordovaPluginFabric.core.execPlugin('setStringValueForKey', [
            value,
            key
        ]);
    }

    setIntValueForKey(value, key) {
        window.cordovaPluginFabric.core.execPlugin('setIntValueForKey', [
            value,
            key
        ]);
    }

    setBoolValueForKey(value, key) {
        window.cordovaPluginFabric.core.execPlugin('setBoolValueForKey', [
            value,
            key
        ]);
    }

    setFloatValueForKey(value, key) {
        window.cordovaPluginFabric.core.execPlugin('setFloatValueForKey', [
            value,
            key
        ]);
    }

}

module.exports = new FabricCrashlytics();
