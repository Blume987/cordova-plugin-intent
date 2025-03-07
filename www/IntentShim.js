var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');


/**
 * This represents a thin shim layer over the Android Intent implementation
 * @constructor
 */
window.IntentShim = {};

window.IntentShim.ACTION_SEND = "android.intent.action.SEND";
window.IntentShim.ACTION_VIEW = "android.intent.action.VIEW";
window.IntentShim.ACTION_INSTALL_PACKAGE = "android.intent.action.INSTALL_PACKAGE";
window.IntentShim.ACTION_UNINSTALL_PACKAGE = "android.intent.action.UNINSTALL_PACKAGE";
window.IntentShim.EXTRA_TEXT = "android.intent.extra.TEXT";
window.IntentShim.EXTRA_SUBJECT = "android.intent.extra.SUBJECT";
window.IntentShim.EXTRA_STREAM = "android.intent.extra.STREAM";
window.IntentShim.EXTRA_EMAIL = "android.intent.extra.EMAIL";
window.IntentShim.ACTION_CALL = "android.intent.action.CALL";
window.IntentShim.ACTION_SENDTO = "android.intent.action.SENDTO";
//  StartActivityForResult
window.IntentShim.ACTION_GET_CONTENT = "android.intent.action.GET_CONTENT";
window.IntentShim.ACTION_PICK = "android.intent.action.PICK";
window.IntentShim.RESULT_CANCELED = 0; //  Activity.RESULT_CANCELED
window.IntentShim.RESULT_OK = -1; //  Activity.RESULT_OK

window.IntentShim.startActivity = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.startActivity', arguments);
    exec(successCallback, errorCallback, "IntentShim", "startActivity", [params]);
};

window.IntentShim.startActivityForResult = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.startActivityForResult', arguments);
    exec(successCallback, errorCallback, "IntentShim", "startActivityForResult", [params]);
};

window.IntentShim.sendBroadcast = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.sendBroadcast', arguments);
    exec(successCallback, errorCallback, "IntentShim", "sendBroadcast", [params]);
};

window.IntentShim.startService = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.startService', arguments);
    exec(successCallback, errorCallback, "IntentShim", "startService", [params]);
};

window.IntentShim.registerBroadcastReceiver = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.registerBroadcastReceiver', arguments);
    exec(successCallback, errorCallback, "IntentShim", "registerBroadcastReceiver", [params]);
};

window.IntentShim.unregisterBroadcastReceiver = function (params) {
    exec(null, null, "IntentShim", "unregisterBroadcastReceiver", params ? [params] : []);
};

window.IntentShim.onIntent = function (callback) {
    argscheck.checkArgs('f', 'IntentShim.onIntent', arguments);
    exec(callback, null, "IntentShim", "onIntent", [callback]);
};

window.IntentShim.getIntent = function (successCallback, errorCallback) {
    argscheck.checkArgs('ff', 'IntentShim.getIntent', arguments);
    exec(successCallback, errorCallback, "IntentShim", "getIntent", []);
};

window.IntentShim.sendResult = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.sendResult', arguments);
    exec(successCallback, errorCallback, "IntentShim", "sendResult", [params]);
}

window.IntentShim.realPathFromUri = function (params, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.realPathFromUri', arguments);
    exec(successCallback, errorCallback, "IntentShim", "realPathFromUri", [params]);
};

window.IntentShim.packageExists = function (packageName, successCallback, errorCallback) {
    argscheck.checkArgs('sff', 'IntentShim.packageExists', arguments);
    exec(successCallback, errorCallback, "IntentShim", "packageExists", [packageName]);
};
