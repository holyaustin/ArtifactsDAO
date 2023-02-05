"use strict";
(() => {
var exports = {};
exports.id = 699;
exports.ids = [699];
exports.modules = {

/***/ 4761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// eslint-disable-next-line import/no-anonymous-default-export
async function handler(req, res) {
    const { name  } = req.body;
    try {
        // Calling api and passing in the name of the asset from the 'uploadLocal' form
        const response = await fetch(`https://livepeer.studio/api/asset/request-upload`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name
            })
        });
        // Convert json response into JS object
        const data = await response.json();
        // console.log(data);
        return res.status(200).json(data);
    } catch (error) {
        // console.error(error)
        res.status(400).send("error");
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4761));
module.exports = __webpack_exports__;

})();