"use strict";
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 3373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(2042);
// EXTERNAL MODULE: ./src/components/link.js
var components_link = __webpack_require__(8055);
// EXTERNAL MODULE: ./src/components/image.js
var components_image = __webpack_require__(3530);
;// CONCATENATED MODULE: ./src/components/footer/widget.js
/** @jsxRuntime classic */ /** @jsx jsx */ 


const Widget = ({ title , items  })=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: styles.footerWidget
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Heading, {
        as: "h3"
    }, title), /*#__PURE__*/ (0,external_theme_ui_.jsx)("ul", null, items.map(({ path , label , icon  }, i)=>/*#__PURE__*/ (0,external_theme_ui_.jsx)("li", {
            key: i
        }, icon && /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Image, {
            src: icon,
            alt: label
        }), /*#__PURE__*/ (0,external_theme_ui_.jsx)(components_link/* Link */.rU, {
            path: path,
            key: i,
            label: label,
            variant: "footer"
        })))));
};
/* harmony default export */ const widget = (Widget);
const styles = {
    footerWidget: {
        h3: {
            color: "heading",
            fontFamily: "body",
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: 1.68,
            letterSpacing: "heading"
        },
        ul: {
            listStyle: "none",
            margin: "28px 0 0",
            padding: 0,
            li: {
                display: "flex",
                alignItems: "center",
                img: {
                    mr: "15px"
                }
            },
            a: {
                fontSize: "15px",
                color: (0,external_polished_.rgba)("#02073E", 0.8),
                lineHeight: 2.5
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/components/footer/footer.data.js
//import facebook from '../assets/images/icons/facebook.png';
//import twitter from '../assets/images/icons/twitter.png';
//import github from '../assets/images/icons/github.png';
//import dribbble from '../assets/images/icons/dribbble.png';
const menuItems = [
    {
        id: 2,
        title: "About Us",
        items: [
            {
                path: "#!",
                label: "Support Center"
            },
            {
                path: "#!",
                label: "Customer Support"
            },
            {
                path: "#!",
                label: "About Us"
            },
            {
                path: "#!",
                label: "Copyright"
            },
            {
                path: "#!",
                label: "Popular Campaign"
            }, 
        ]
    },
    {
        id: 3,
        title: "Our Information",
        items: [
            {
                path: "#!",
                label: "Return Policy "
            },
            {
                path: "#!",
                label: "Privacy Policy"
            },
            {
                path: "#!",
                label: "Terms & Conditions"
            },
            {
                path: "#!",
                label: "Site Map"
            },
            {
                path: "#!",
                label: "Store Hours"
            }, 
        ]
    },
    {
        id: 4,
        title: "My Account",
        items: [
            {
                path: "#!",
                label: "Press inquiries"
            },
            {
                path: "#!",
                label: "Social media "
            },
            {
                path: "#!",
                label: "directories"
            },
            {
                path: "#!",
                label: "Images & B-roll"
            },
            {
                path: "#!",
                label: "Permissions"
            }, 
        ]
    },
    {
        id: 5,
        title: "Connect",
        items: [
            {
                path: "#!",
                icon: "/images/icons/facebook.png",
                label: "Facebook"
            },
            {
                path: "#!",
                icon: "/images/icons/twitter.png",
                label: "Twitter"
            },
            {
                path: "#!",
                icon: "/images/icons/github.png",
                label: "Github"
            },
            {
                path: "#!",
                icon: "/images/icons/dribbble.png",
                label: "Dribbble"
            }, 
        ]
    }, 
];
const footerNav = [
    {
        path: "#!",
        label: "Home"
    },
    {
        path: "#!",
        label: "Advertise"
    },
    {
        path: "#!",
        label: "Supports"
    },
    {
        path: "#!",
        label: "Marketing"
    },
    {
        path: "#!",
        label: "FAQ"
    }, 
];

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/footer/footer.js
/** @jsxRuntime classic */ /** @jsx jsx */ 

//import Logo from '../../components/icons/logo';

// import CallToAction from 'sections/call-to-action';




function Footer() {
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_react_.Fragment, null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "footer",
        sx: footer_styles.footer
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Container, null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: footer_styles.footerTopInner
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: footer_styles.about
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: footer_styles.logo
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(components_image/* default */.Z, {
        src: "/images/logolong.png",
        loading: "lazy",
        sx: footer_styles.logo,
        alt: "logo"
    })), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: footer_styles.terms
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(components_link/* Link */.rU, {
        path: "#!"
    }, "Terms of use"), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
        as: "span"
    }, "|"), /*#__PURE__*/ (0,external_theme_ui_.jsx)(components_link/* Link */.rU, {
        path: "#!"
    }, "Privacy")), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
        as: "p",
        sx: footer_styles.copyright
    }, "Copyright by ", new Date().getFullYear(), " ArtifactsDAO")), menuItems.map(({ id , title , items  })=>/*#__PURE__*/ (0,external_theme_ui_.jsx)(widget, {
            key: id,
            title: title,
            items: items
        }))))));
}
const footer_styles = {
    footer: {
        backgroundColor: "#FFE0DF",
        pt: [
            8,
            null,
            null,
            10
        ],
        pb: [
            8,
            null,
            null,
            15
        ]
    },
    footerTopInner: {
        gap: [
            30,
            null,
            50,
            "20px 50px",
            17,
            50
        ],
        display: [
            "grid"
        ],
        gridTemplateColumns: [
            "repeat(2, 1fr)",
            null,
            null,
            "repeat(4, 1fr)",
            "repeat(5, 1fr)", 
        ]
    },
    footerInner: {
        borderTop: `1px solid #D9E0E7`,
        display: [
            "block",
            null,
            "flex"
        ],
        alignItems: "center",
        justifyContent: "space-between",
        padding: "35px 0 40px"
    },
    about: {
        display: [
            null,
            null,
            null,
            "grid",
            "block"
        ],
        gridTemplateColumns: "205px 1fr 1fr",
        alignItems: [
            "center"
        ],
        gridRow: [
            "3/4",
            null,
            "1/1",
            "3/4",
            "unset"
        ],
        gridColumn: [
            "1/3",
            null,
            "1/2",
            "1/5",
            "unset"
        ]
    },
    logo: {
        display: [
            "flex"
        ],
        justifyContent: [
            "center",
            null,
            null,
            "unset"
        ],
        gridColumn: "1/2"
    },
    terms: {
        display: [
            "flex"
        ],
        gridColumn: "3/4",
        alignItems: [
            "center",
            null,
            null,
            null,
            "flex-start",
            "center"
        ],
        flexDirection: [
            "row",
            null,
            null,
            null,
            "column",
            "row"
        ],
        justifyContent: [
            "center",
            null,
            "flex-start",
            "center",
            null,
            "flex-start", 
        ],
        mt: [
            4,
            null,
            null,
            0,
            4
        ],
        a: {
            color: "heading"
        },
        span: {
            display: [
                "inline-flex",
                null,
                null,
                null,
                "none",
                "inline-flex"
            ],
            m: [
                "0 10px"
            ]
        }
    },
    copyright: {
        color: (0,external_polished_.rgba)("#0F2137", 0.6),
        fontSize: [
            "14px"
        ],
        mt: [
            3,
            null,
            null,
            -31,
            3
        ],
        mr: [
            null,
            null,
            null,
            "auto",
            "unset"
        ],
        gridColumn: "2/3",
        textAlign: [
            "center",
            null,
            "left",
            "center",
            "left"
        ]
    }
};


/***/ }),

/***/ 5986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/** @jsxRuntime classic */ /** @jsx jsx */ 
const Bar = ({ isSticky  })=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "span",
        className: "bar",
        sx: {
            backgroundColor: isSticky ? "text" : "white"
        }
    });
};
const HamburgerMenu = ({ isOpen , isSticky , toggleMobileMenu , ...props })=>{
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", Object.assign({
        sx: styles.button,
        onClick: toggleMobileMenu,
        className: isOpen ? "open" : ""
    }, props), [
        1,
        2,
        3,
        4
    ].map((bar, i)=>/*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(Bar, {
            key: i,
            isSticky: isSticky
        })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_0__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_0__.Text, {
        as: "span",
        variant: "styles.srOnly"
    }, "Menu"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HamburgerMenu);
const styles = {
    button: {
        backgroundColor: "transparent",
        border: 0,
        p: 0,
        width: 20,
        height: 14,
        position: "relative",
        transform: "rotate(0deg)",
        transition: ".5s ease-in-out",
        cursor: "pointer",
        outline: 0,
        ml: [
            4,
            null,
            6
        ],
        ".bar": {
            display: "block",
            position: "absolute",
            height: "2px",
            width: "100%",
            borderRadius: 9,
            opacity: 1,
            left: 0,
            transform: "rotate(0deg)",
            transition: ".25s ease-in-out",
            ":nth-of-type(1)": {
                top: 0
            },
            ":nth-of-type(2),:nth-of-type(3)": {
                top: "6px"
            },
            ":nth-of-type(4)": {
                top: "12px"
            }
        },
        "&.open": {
            ".bar": {
                ":nth-of-type(1)": {
                    top: "6px",
                    width: "0%",
                    left: "50%"
                },
                ":nth-of-type(2)": {
                    transform: "rotate(45deg)"
                },
                ":nth-of-type(3)": {
                    transform: "rotate(-45deg)"
                },
                ":nth-of-type(4)": {
                    top: "6px",
                    width: "0%",
                    left: "50%"
                }
            }
        }
    }
};


/***/ }),

/***/ 8509:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Lock({ fill , width , height , ...props }) {
    return /*#__PURE__*/ _jsxs("svg", {
        width: width ?? 16,
        height: height ?? 20,
        viewBox: "0 0 16 20",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M15.156 16.893v-6.811a2.237 2.237 0 00-2.232-2.233h-.562V4.707A4.713 4.713 0 007.654 0a4.712 4.712 0 00-4.703 4.707v.543c0 .37.3.667.667.667.367 0 .672-.3.672-.667v-.543A3.372 3.372 0 017.658 1.34a3.372 3.372 0 013.369 3.368V7.85H2.389c-1.23 0-2.233 1-2.233 2.233v6.811a2.237 2.237 0 002.233 2.233h10.538a2.236 2.236 0 002.23-2.233zm-13.657 0v-6.811c0-.492.402-.894.894-.894h10.535c.491 0 .893.402.893.894v6.811a.896.896 0 01-.893.894H2.388a.895.895 0 01-.889-.894z",
                fill: fill ?? "#fff"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M7.657 11.99a.67.67 0 00-.672.668v1.73c0 .37.3.667.672.667.37 0 .667-.3.667-.668v-1.729a.667.667 0 00-.667-.667z",
                fill: fill ?? "#fff"
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Lock)));


/***/ }),

/***/ 3530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);



function Image({ src , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Image, {
        src: src,
        ...rest
    });
}


/***/ }),

/***/ 8055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OL": () => (/* binding */ NavLink),
/* harmony export */   "rU": () => (/* binding */ Link)
/* harmony export */ });
/* unused harmony export LearnMore */
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8800);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4751);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6709);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/** @jsxRuntime classic */ /** @jsx jsx */ 




function NavLink({ path , label , children , ...rest }) {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, Object.assign({
        to: path,
        spy: true,
        offset: -70,
        smooth: true,
        duration: 500,
        className: "nav-item",
        activeClass: "active"
    }, rest), label);
}
function Link({ path , label , children , ...rest }) {
    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: path,
        to: path
    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Link, Object.assign({}, rest), children ? children : label));
}
function LearnMore({ path , label , children , ...rest }) {
    return /*#__PURE__*/ jsx(NextLink, {
        to: path,
        href: path
    }, /*#__PURE__*/ jsx(A, Object.assign({
        sx: styles.learnMore
    }, rest), label ?? "Learn More", " ", /*#__PURE__*/ jsx(IoIosArrowForward, {
        size: "16px"
    })));
}
const fadeRight = _emotion_core__WEBPACK_IMPORTED_MODULE_4__.keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to: {
    opacity: 1;
  }
`;
const styles = {
    learnMore: {
        color: "link",
        cursor: "pointer",
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
        svg: {
            transform: "translateX(3px)"
        },
        ":hover": {
            svg: {
                animation: `${fadeRight} 0.5s linear`
            }
        }
    }
};


/***/ }),

/***/ 4961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



function SEO({ description ="kezayya file storage and sharing description" , author ="HolyAustin Dev" , meta , title ="kezayya" ,  }) {
    const metaData = [
        {
            name: `description`,
            content: description
        },
        {
            property: `og:title`,
            content: title
        },
        {
            property: `og:description`,
            content: description
        },
        {
            property: `og:type`,
            content: `website`
        },
        {
            name: `twitter:card`,
            content: `summary`
        },
        {
            name: `twitter:creator`,
            content: author
        },
        {
            name: `twitter:title`,
            content: title
        },
        {
            name: `twitter:description`,
            content: description
        }, 
    ].concat(meta);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            metaData.map(({ name , content  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: name,
                    content: content
                }, i))
        ]
    });
}
SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``
};


/***/ }),

/***/ 871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ topbar)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/icons/right-arrow.js


function RightArrow({ fill , width , height , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: width ?? 15,
        height: height ?? 11,
        viewBox: "0 0 15 11",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.897 4.876L9.352.213a.698.698 0 00-1.004 0 .742.742 0 000 1.03l3.333 3.42H.816a.72.72 0 00-.71.728.72.72 0 00.71.728H11.68L8.348 9.538a.741.741 0 000 1.03.7.7 0 001.004 0l4.545-4.663a.741.741 0 000-1.03z",
            fill: fill ?? "#87A9FF"
        })
    });
}
/* harmony default export */ const right_arrow = (RightArrow);

;// CONCATENATED MODULE: ./src/components/icons/gift-box.js


function GiftBox(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: 26,
        height: 26,
        viewBox: "0 0 26 26",
        fill: "none",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M.813 6.905L13 13l12.188-6.094v13L13 26 .812 19.905v-13z",
                fill: "#DB5449"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M.813 8.124v3.798l12.146 5.952 12.228-5.972V8.124L13 14.096.812 8.124z",
                fill: "#C54B42"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M13 26V13L1.625 7.311H.812v12.593L13 26z",
                fill: "#D05045"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M.813 8.124v3.798l12.146 5.952.041-.02v-3.778.02L.812 8.124z",
                fill: "#BB483E"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 6.48L13 0l13 6.48v.853l-13 6.48-13-6.46V6.48z",
                fill: "#EB6258"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M20.455 2.05c-.427-.771-1.34-1.238-2.417-1.238-2.458 0-4.185 2.295-5.038 3.757C12.147 3.107 10.4.832 7.963.832c-1.565 0-2.682.955-2.682 2.255 0 2.315 2.54 3.818 7.638 3.818s7.8-1.93 7.8-3.798c0-.366-.082-.731-.264-1.056zM8.49 4.55c-.57-.387-.772-.813-.772-1.098 0-.345.325-.609.792-.609 1.097 0 1.97 1.442 2.458 2.437-1.28-.101-2.031-.446-2.478-.73zm9.018 0c-.447.284-1.198.629-2.478.73.467-.995 1.34-2.437 2.458-2.437.467 0 .792.264.792.61 0 .284-.203.71-.772 1.096z",
                fill: "#EFEFEF"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M0 6.5l13 6.357 13-6.358v4.205l-13.04 6.358L0 10.704V6.499z",
                fill: "#E2574C"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.875 11.029v-.467L13 7.92l-4.875 2.64v.468l-3.25-1.422v-.65l7.963-4.205.162.082.162-.082 7.963 4.185v.65l-3.25 1.442z",
                fill: "#EFEFEF"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.875 10.562v12.98l3.25-1.626V8.936l-3.25 1.626z",
                fill: "#DCDCDC"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4.875 21.937l3.25 1.625v-12.98l-3.25-1.645v13z",
                fill: "#D1D1D1"
            })
        ]
    });
}
/* harmony default export */ const gift_box = (GiftBox);

;// CONCATENATED MODULE: ./src/components/topbar.js
/** @jsxRuntime classic */ /** @jsx jsx */ 


const TopBar = ()=>{
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "section",
        sx: styles.topbar
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        sx: styles.content
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Text, {
        as: "span",
        className: "caption"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(gift_box, null), " Want to know when new features are added, just follow us on Twitter"), /*#__PURE__*/ (0,external_theme_ui_.jsx)("a", {
        href: "https://twitter.com",
        target: "_blank"
    }, "Follow us here ", /*#__PURE__*/ (0,external_theme_ui_.jsx)(right_arrow, null))));
};
/* harmony default export */ const topbar = (TopBar);
const styles = {
    topbar: {
        backgroundColor: "#080111",
        px: [
            6,
            null,
            null,
            null,
            0
        ],
        py: [
            "12px"
        ]
    },
    content: {
        display: [
            "flex"
        ],
        alignItems: [
            "center"
        ],
        justifyContent: [
            null,
            null,
            null,
            "center",
            "unset"
        ],
        color: "white",
        fontSize: [
            1
        ],
        fontWeight: 500,
        maxWidth: 780,
        m: "0 auto",
        textAlign: "center",
        span: {
            "+ span": {
                ml: [
                    4
                ]
            }
        },
        ".caption": {
            display: "inline-flex",
            alignItems: "center",
            width: [
                199,
                null,
                null,
                "auto"
            ],
            overflow: [
                "hidden",
                null,
                null,
                "unset"
            ],
            whiteSpace: [
                "nowrap",
                null,
                null,
                "unset"
            ],
            svg: {
                mr: [
                    2,
                    null,
                    null,
                    3
                ],
                minWidth: 20
            }
        },
        ".tlds": {
            display: [
                "none",
                null,
                null,
                null,
                "block"
            ]
        },
        strong: {
            fontWeight: 700,
            textTransform: "uppercase",
            "+ strong": {
                ml: 3
            }
        },
        a: {
            color: "#87A9FF",
            cursor: "pointer",
            fontSize: [
                "13px",
                null,
                null,
                1,
                2
            ],
            fontWeight: 700,
            alignItems: "center",
            display: "inline-flex",
            ml: [
                2,
                null,
                null,
                null,
                10,
                13
            ],
            svg: {
                ml: 1
            }
        }
    }
};


/***/ }),

/***/ 6690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // example colors with dark mode
    colors: {
        text: "#343D48",
        textSecondary: "#02073E",
        heading: "#0F2137",
        headingSecondary: "#343D48",
        background: "#FFFFFF",
        backgroundSecondary: "#F9FAFC",
        borderColor: "#EDEFF6",
        primary: "#808080",
        secondary: "#FFC059",
        muted: "#7B8188",
        accent: "#609",
        dark: "#10132D",
        link: "#3183FF",
        // highlight	a background color for highlighting text
        modes: {
            dark: {
                text: "#fff",
                background: "#000",
                primary: "#0cf",
                secondary: "#09c",
                muted: "#111"
            }
        }
    },
    fonts: {
        body: "DM Sans, sans-serif",
        // body:
        //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: "DM Sans, sans-serif",
        monospace: "Menlo, monospace"
    },
    fontSizes: [
        12,
        14,
        16,
        18,
        20,
        22,
        24,
        26,
        28,
        30,
        32,
        36,
        40,
        42,
        48,
        52,
        64
    ],
    fontWeights: {
        body: "normal",
        // body: 400,
        heading: 500,
        // heading: 700,
        bold: 700
    },
    lineHeights: {
        body: 1.5,
        // body: 1.5,
        heading: 1.25
    },
    letterSpacings: {
        body: "normal",
        caps: "0.2em",
        heading: "-0.5px"
    },
    space: [
        0,
        5,
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50,
        55,
        60,
        65,
        70,
        80,
        90,
        100,
        110,
        120,
        130,
        140,
        150,
        160
    ],
    sizes: {},
    breakpoints: [
        "480px",
        "640px",
        "768px",
        "1024px",
        "1260px",
        "1367px",
        "1440px",
        "1600px", 
    ],
    // variants can use custom, user-defined names
    layout: {
        container: {
            maxWidth: [
                "100%",
                null,
                null,
                "720px",
                "970px",
                "1140px",
                "1260px",
                "1366px", 
            ],
            paddingLeft: [
                6
            ],
            paddingRight: [
                6
            ],
            m: "0 auto"
        },
        main: {}
    },
    text: {
        heading: {
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading"
        }
    },
    links: {},
    images: {
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 99999
        }
    },
    // variants for buttons
    buttons: {
        default: {
            backgroundColor: "transparent",
            fontFamily: "body",
            fontWeight: "bold",
            borderRadius: "5px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.3s ease-in-out 0s",
            whiteSpace: "nowrap"
        },
        primary: {
            variant: "buttons.default",
            color: "white",
            bg: "primary",
            minHeight: "60px",
            padding: "0 30px",
            "&:hover": {
                bg: "red"
            }
        },
        primaryMd: {
            variant: "buttons.primary",
            minHeight: "50px",
            px: "25px"
        },
        secondary: {
            variant: "buttons.primary",
            color: "white",
            bg: "secondary"
        },
        muted: {
            variant: "buttons.default",
            backgroundColor: "#EDF0F2",
            color: "text",
            ":hover": {
                backgroundColor: "primary",
                color: "#fff"
            }
        },
        white: {
            variant: "buttons.default",
            backgroundColor: "white",
            color: "#020718"
        },
        text: {
            variant: "buttons.default",
            color: "text"
        }
    },
    cards: {
        primary: {
            padding: 2,
            borderRadius: 4
        },
        offer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: [
                "1 1 calc(50% - 16px)",
                "1 1 20%"
            ],
            minHeight: 130,
            m: 2,
            background: "#FFFFFF",
            border: "1px solid #EDEFF6",
            borderRadius: 5
        },
        featureCard: {
            display: "flex",
            alignItems: [
                "center",
                "flex-start"
            ],
            flexDirection: [
                "column",
                "row"
            ],
            p: [
                0,
                3
            ]
        }
    },
    forms: {
        label: {
            fontSize: 1,
            fontWeight: "bold"
        },
        input: {
            borderRadius: 8,
            borderColor: "borderColor",
            fontFamily: "body",
            px: 5,
            py: 0,
            minHeight: 60,
            "&:focus": {
                borderColor: "primary",
                boxShadow: (t)=>`0 0 0 2px ${t.colors.primary}`,
                outline: "none"
            }
        }
    },
    badges: {
        primary: {
            color: "background",
            bg: "#28A5FF",
            borderRadius: 30,
            p: "3px 11px",
            fontSize: 1,
            letterSpacing: "-0.5px"
        },
        outline: {
            color: "primary",
            bg: "transparent",
            boxShadow: "inset 0 0 0 1px"
        }
    },
    styles: {
        // To add base, top-level styles to the <body> element, use theme.styles.root.
        root: {
            fontFamily: "body",
            lineHeight: "body",
            fontWeight: "body"
        },
        // h1-h6 Heading styles
        h1: {
        },
        h2: {
        },
        h3: {
            variant: "text.heading",
            fontSize: 4
        },
        h4: {
            variant: "text.heading",
            fontSize: 3
        },
        h5: {
            variant: "text.heading",
            fontSize: 2
        },
        h6: {
            variant: "text.heading",
            fontSize: 1
        },
        // Divider styles
        hr: {
            border: 0,
            borderBottom: "1px solid",
            borderColor: "#D9E0E7"
        },
        // also you can use other HTML elements style here
        ul: {
            listStyle: "none"
        },
        srOnly: {
            border: "0 !important",
            clip: "rect(1px, 1px, 1px, 1px) !important",
            clipPath: "inset(50%) !important",
            height: "1px !important",
            margin: "-1px !important",
            overflow: "hidden !important",
            padding: "0 !important",
            position: "absolute !important",
            width: "1px !important",
            whiteSpace: "nowrap !important"
        }
    }
});


/***/ })

};
;