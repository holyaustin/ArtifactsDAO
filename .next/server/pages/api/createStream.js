"use strict";
(() => {
var exports = {};
exports.id = 145;
exports.ids = [145];
exports.modules = {

/***/ 3904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    const { name , profiles  } = req.body;
    try {
        const response = await fetch(`https://livepeer.studio/api/stream`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                profiles
            })
        });
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3904));
module.exports = __webpack_exports__;

})();