
class FabricCrashlytics {
    constructor() {}

    addLog(message) {
        window.fabricIO.core.execPlugin('addLog', [
            message
        ]);
    }

    sendCrash() {
        window.fabricIO.core.execPlugin('sendCrash', [
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

        window.fabricIO.core.execPlugin('sendNonFatalCrash', params);
    }

    recordError(message, code) {
        window.fabricIO.core.execPlugin('recordError', [
            message,
            code
        ]);
    }

    setUserIdentifier(userIdentifier) {
        window.fabricIO.core.execPlugin('setUserIdentifier', [
            userIdentifier
        ]);
    }

    setUserName(userName) {
        window.fabricIO.core.execPlugin('setUserName', [
            userName
        ]);
    }

    setUserEmail(userEmail) {
        window.fabricIO.core.execPlugin('setUserEmail', [
            userEmail
        ]);
    }

    setStringValueForKey(value, key) {
        window.fabricIO.core.execPlugin('setStringValueForKey', [
            value,
            key
        ]);
    }

    setIntValueForKey(value, key) {
        window.fabricIO.core.execPlugin('setIntValueForKey', [
            value,
            key
        ]);
    }

    setBoolValueForKey(value, key) {
        window.fabricIO.core.execPlugin('setBoolValueForKey', [
            value,
            key
        ]);
    }

    setFloatValueForKey(value, key) {
        window.fabricIO.core.execPlugin('setFloatValueForKey', [
            value,
            key
        ]);
    }

}

module.exports = new FabricCrashlytics();
