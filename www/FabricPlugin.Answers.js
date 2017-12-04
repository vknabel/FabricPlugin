'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FabricAnswers = (function () {
    function FabricAnswers() {
        _classCallCheck(this, FabricAnswers);
    }

    _createClass(FabricAnswers, [{
        key: 'sendPurchase',
        value: function sendPurchase(itemPrice, currency, success, itemName, itemType, itemId, attributes) {
            window.fabricIO.core.execPlugin('sendPurchase', [itemPrice, currency, success, itemName, itemType, itemId, attributes]);
        }
    }, {
        key: 'sendAddToCart',
        value: function sendAddToCart(itemPrice, currency, itemName, itemType, itemId, attributes) {
            window.fabricIO.core.execPlugin('sendAddToCart', [itemPrice, currency, itemName, itemType, itemId, attributes]);
        }
    }, {
        key: 'sendStartCheckout',
        value: function sendStartCheckout(totalPrice, currency, itemCount, attributes) {
            window.fabricIO.core.execPlugin('sendStartCheckout', [totalPrice, currency, itemCount, attributes]);
        }
    }, {
        key: 'sendSearch',
        value: function sendSearch(query, attributes) {
            window.fabricIO.core.execPlugin('sendSearch', [query, attributes]);
        }
    }, {
        key: 'sendShare',
        value: function sendShare(method, contentName, contentType, contentId, attributes) {
            window.fabricIO.core.execPlugin('sendShare', [method, contentName, contentType, contentId, attributes]);
        }
    }, {
        key: 'sendRatedContent',
        value: function sendRatedContent(rating, contentName, contentType, contentId, attributes) {
            window.fabricIO.core.execPlugin('sendRatedContent', [rating, contentName, contentType, contentId, attributes]);
        }
    }, {
        key: 'sendSignUp',
        value: function sendSignUp(method, success, attributes) {
            window.fabricIO.core.execPlugin('sendSignUp', [method, success, attributes]);
        }
    }, {
        key: 'sendLogIn',
        value: function sendLogIn(method, success, attributes) {
            window.fabricIO.core.execPlugin('sendLogIn', [method, success, attributes]);
        }
    }, {
        key: 'sendInvite',
        value: function sendInvite(method, attributes) {
            window.fabricIO.core.execPlugin('sendInvite', [method, attributes]);
        }
    }, {
        key: 'sendLevelStart',
        value: function sendLevelStart(levelName, attributes) {
            window.fabricIO.core.execPlugin('sendLevelStart', [levelName, attributes]);
        }
    }, {
        key: 'sendLevelEnd',
        value: function sendLevelEnd(levelName, score, success, attributes) {
            window.fabricIO.core.execPlugin('sendLevelEnd', [levelName, score, success, attributes]);
        }
    }, {
        key: 'sendContentView',
        value: function sendContentView(name, type, id, attributes) {
            window.fabricIO.core.execPlugin('sendContentView', [name, type, id, attributes]);
        }
    }, {
        key: 'sendScreenView',
        value: function sendScreenView(name, id, attributes) {
            window.fabricIO.core.execPlugin('sendContentView', [name, "Screen", id, attributes]);
        }
    }, {
        key: 'sendCustomEvent',
        value: function sendCustomEvent(name, attributes) {
            window.fabricIO.core.execPlugin('sendCustomEvent', [name, attributes]);
        }
    }]);

    return FabricAnswers;
})();

module.exports = new FabricAnswers();