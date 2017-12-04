'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FabricCrashlytics = (function () {
    function FabricCrashlytics() {
        _classCallCheck(this, FabricCrashlytics);
    }

    _createClass(FabricCrashlytics, [{
        key: 'addLog',
        value: function addLog(message) {
            window.cordovaFabricIoPlugin.core.execPlugin('addLog', [message]);
        }
    }, {
        key: 'sendCrash',
        value: function sendCrash() {
            window.cordovaFabricIoPlugin.core.execPlugin('sendCrash', []);
        }
    }, {
        key: 'sendNonFatalCrash',
        value: function sendNonFatalCrash(message, trace) {
            var params = [message];

            if (trace) {
                // validate trace (easier here)
                var tmp = [];

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = trace[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var entry = _step.value;

                        tmp.push({
                            functionName: entry.functionName || 'unknown',
                            fileName: entry.fileName || 'unknown',
                            lineNumber: entry.lineNumber || 0
                        });
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                if (tmp.length > 0) {
                    params.push(tmp);
                }
            }

            window.cordovaFabricIoPlugin.core.execPlugin('sendNonFatalCrash', params);
        }
    }, {
        key: 'recordError',
        value: function recordError(message, code) {
            window.cordovaFabricIoPlugin.core.execPlugin('recordError', [message, code]);
        }
    }, {
        key: 'setUserIdentifier',
        value: function setUserIdentifier(userIdentifier) {
            window.cordovaFabricIoPlugin.core.execPlugin('setUserIdentifier', [userIdentifier]);
        }
    }, {
        key: 'setUserName',
        value: function setUserName(userName) {
            window.cordovaFabricIoPlugin.core.execPlugin('setUserName', [userName]);
        }
    }, {
        key: 'setUserEmail',
        value: function setUserEmail(userEmail) {
            window.cordovaFabricIoPlugin.core.execPlugin('setUserEmail', [userEmail]);
        }
    }, {
        key: 'setStringValueForKey',
        value: function setStringValueForKey(value, key) {
            window.cordovaFabricIoPlugin.core.execPlugin('setStringValueForKey', [value, key]);
        }
    }, {
        key: 'setIntValueForKey',
        value: function setIntValueForKey(value, key) {
            window.cordovaFabricIoPlugin.core.execPlugin('setIntValueForKey', [value, key]);
        }
    }, {
        key: 'setBoolValueForKey',
        value: function setBoolValueForKey(value, key) {
            window.cordovaFabricIoPlugin.core.execPlugin('setBoolValueForKey', [value, key]);
        }
    }, {
        key: 'setFloatValueForKey',
        value: function setFloatValueForKey(value, key) {
            window.cordovaFabricIoPlugin.core.execPlugin('setFloatValueForKey', [value, key]);
        }
    }]);

    return FabricCrashlytics;
})();

module.exports = new FabricCrashlytics();