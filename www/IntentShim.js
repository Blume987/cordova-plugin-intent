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

window.IntentShim.startActivity = function (arg, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.startActivity', arguments);
    exec(successCallback, errorCallback, "IntentShim", "startActivity", [arg]);
};

window.IntentShim.startActivityForResult = function (arg, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.startActivityForResult', arguments);
    exec(successCallback, errorCallback, "IntentShim", "startActivityForResult", [arg]);
};

window.IntentShim.sendBroadcast = function (arg, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.sendBroadcast', arguments);
    exec(successCallback, errorCallback, "IntentShim", "sendBroadcast", [arg]);
};

window.IntentShim.startService = function (arg, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.startService', arguments);
    exec(successCallback, errorCallback, "IntentShim", "startService", [arg]);
};

window.IntentShim.registerBroadcastReceiver = function (arg, callback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.registerBroadcastReceiver', arguments);
    exec(callback, errorCallback, "IntentShim", "registerBroadcastReceiver", [arg]);
};

window.IntentShim.unregisterBroadcastReceiver = function (arg) {
    argscheck.checkArgs('s', 'IntentShim.unregisterBroadcastReceiver', arguments);
    exec(null, null, "IntentShim", "unregisterBroadcastReceiver", [arg || ""]);
};

window.IntentShim.onIntent = function (callback, errorCallback) {
    argscheck.checkArgs('ff', 'IntentShim.onIntent', arguments);
    exec(callback, errorCallback, "IntentShim", "onIntent", [callback]);
};

window.IntentShim.getIntent = function (successCallback, errorCallback) {
    argscheck.checkArgs('ff', 'IntentShim.getIntent', arguments);
    exec(successCallback, errorCallback, "IntentShim", "getIntent", []);
};

window.IntentShim.sendResult = function (arg, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.sendResult', arguments);
    exec(successCallback, errorCallback, "IntentShim", "sendResult", [arg]);
}

window.IntentShim.realPathFromUri = function (arg, successCallback, errorCallback) {
    argscheck.checkArgs('off', 'IntentShim.realPathFromUri', arguments);
    exec(successCallback, errorCallback, "IntentShim", "realPathFromUri", [arg]);
};

window.IntentShim.packageExists = function (packageName, successCallback, errorCallback) {
    argscheck.checkArgs('sff', 'IntentShim.packageExists', arguments);
    exec(successCallback, errorCallback, "IntentShim", "packageExists", [packageName]);
};
