(function() {

'use strict';

const NIX_OS = [
    'aix',
    'darwin',
    'freebsd',
    'linux',
    'openbsd',
    'sunos',
    'android'
];

function getPlatform() {
    return process.platform;
}

function isWin() {
    return (getPlatform() === 'win32');
}

function isNix() {
    return (NIX_OS.indexOf(getPlatform()) > -1);
}

function isMac() {
    return (getPlatform() === 'darwin');
}

function isLinux() {
    return (getPlatform() === 'linux');
}

function isBsd() {
    return ((getPlatform() === 'freebsd') || (getPlatform() === 'openbsd'));
}

function isMac() {
    return (getPlatform() === 'darwin');
}

function isAndroid() {
    return (getPlatform() === 'android');
}

function isOS(os) {
    return (getPlatform() === os);
}

module.exports.getPlatform = getPlatform;
module.exports.isWin = isWin;
module.exports.isNix = isNix;
module.exports.isMac = isMac;
module.exports.isBsd = isBsd;
module.exports.isLinux = isLinux;
module.exports.isAndroid = isAndroid;
module.exports.isOS = isOS;

})();
