"use strict";
(() => {
var exports = {};
exports.id = 316;
exports.ids = [316];
exports.modules = {

/***/ 9771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// eslint-disable-next-line import/no-anonymous-default-export
async function handler(req, res) {
    // Getting the name and URL from body of the request
    const { name , url  } = req.body;
    // Calling api and passing in the name and download URL of the asset from the 'uploadURL' form
    try {
        const response = await fetch(`https://livepeer.studio/api/asset/import`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                url
            })
        });
        // Convert json response into JS object
        const data = await response.json();
        // console.log(data);
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9771));
module.exports = __webpack_exports__;

})();