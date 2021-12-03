"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Handle promise inline
 */
function goPromise(fn) {
    return new Promise((resolve) => {
        fn
            .then(data => {
            resolve([null, data]);
        })
            .catch(err => {
            resolve([err]);
        });
    });
}
exports.default = goPromise;
