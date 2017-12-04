
class FabricAnswers {
    constructor() {}

    sendPurchase(itemPrice, currency, success, itemName, itemType, itemId, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendPurchase', [
            itemPrice,
            currency,
            success,
            itemName,
            itemType,
            itemId,
            attributes
        ]);
    }

    sendAddToCart(itemPrice, currency, itemName, itemType, itemId, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendAddToCart', [
            itemPrice,
            currency,
            itemName,
            itemType,
            itemId,
            attributes
        ]);
    }

    sendStartCheckout(totalPrice, currency, itemCount, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendStartCheckout', [
            totalPrice,
            currency,
            itemCount,
            attributes
        ]);
    }

    sendSearch(query, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendSearch', [
            query,
            attributes
        ]);
    }

    sendShare(method, contentName, contentType, contentId, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendShare', [
            method,
            contentName,
            contentType,
            contentId,
            attributes
        ]);
    }

    sendRatedContent(rating, contentName, contentType, contentId, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendRatedContent', [
            rating,
            contentName,
            contentType,
            contentId,
            attributes
        ]);
    }

    sendSignUp(method, success, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendSignUp', [
            method,
            success,
            attributes
        ]);
    }

    sendLogIn(method, success, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendLogIn', [
            method,
            success,
            attributes
        ]);
    }

    sendInvite(method, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendInvite', [
            method,
            attributes
        ]);
    }

    sendLevelStart(levelName, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendLevelStart', [
            levelName,
            attributes
        ]);
    }

    sendLevelEnd(levelName, score, success, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendLevelEnd', [
            levelName,
            score,
            success,
            attributes
        ]);
    }

    sendContentView(name, type, id, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendContentView', [
            name,
            type,
            id,
            attributes
        ]);
    }

    sendScreenView(name, id, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendContentView', [
            name,
            "Screen",
            id,
            attributes
        ]);
    }

    sendCustomEvent(name, attributes) {
        window.cordovaFabricIoPlugin.core.execPlugin('sendCustomEvent', [
            name,
            attributes
        ]);
    }
}

module.exports = new FabricAnswers();
