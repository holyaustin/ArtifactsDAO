"use strict";
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 9023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "theme-ui"
var external_theme_ui_ = __webpack_require__(8800);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__(8297);
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);
// EXTERNAL MODULE: ./src/components/image.js
var components_image = __webpack_require__(3530);
// EXTERNAL MODULE: ./src/components/topbar.js + 2 modules
var topbar = __webpack_require__(871);
// EXTERNAL MODULE: ./src/components/icons/lock.js
var lock = __webpack_require__(8509);
// EXTERNAL MODULE: ./src/components/hamburger.js
var hamburger = __webpack_require__(5986);
// EXTERNAL MODULE: ./src/components/link.js
var components_link = __webpack_require__(8055);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/header/header2.data.js
/* harmony default export */ const header2_data = ([
    {
        path: "/",
        label: "Home"
    },
    {
        path: "/explore",
        label: "News-On-Demand"
    },
    {
        path: "/publishnews",
        label: "Publish-News"
    },
    {
        path: "/streamlive",
        label: "Stream-Live"
    },
    {
        path: "/videoplayer",
        label: "Video-Player"
    },
    {
        path: "https://web3chat-kezayya.vercel.app/",
        label: "Chat"
    }, 
]);

;// CONCATENATED MODULE: ./src/components/header/navbar2.js
/** @jsxRuntime classic */ /** @jsx jsx */ 



const Navbar2 = ({ isSticky , isMobile , handleCloseMenu  })=>{
    const navigate = useRouter();
    return /*#__PURE__*/ jsx(Box, {
        as: "nav",
        sx: styles.navbar,
        className: `navbar${isMobile ? " is-mobile" : ""}${isSticky ? " is-sticky" : ""}`
    }, menuItems.map(({ path , label  }, i)=>/*#__PURE__*/ jsx(NavLink, {
            to: path,
            key: i,
            path: path,
            label: label,
            onClick: handleCloseMenu
        })));
};
/* harmony default export */ const navbar2 = ((/* unused pure expression or super */ null && (Navbar2)));
const styles = {
    navbar: {
        display: [
            null,
            null,
            null,
            null,
            null,
            "flex"
        ],
        alignItems: [
            null,
            null,
            null,
            "center"
        ],
        flexGrow: [
            null,
            null,
            null,
            1
        ],
        fontSize: [
            "10px",
            null,
            null,
            4
        ],
        a: {
            color: "white",
            cursor: "pointer",
            "+ a": {
                ml: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    6
                ]
            }
        },
        "@media only screen and (max-width: 1024px)": {
            position: "absolute",
            backgroundColor: "white",
            boxShadow: "0px 11px 30px rgba(51, 83, 145, 0.07)",
            width: "100%",
            left: 0,
            top: 70,
            opacity: 0,
            visibility: "hidden",
            transform: "scaleY(0)",
            transformOrigin: "top left 0",
            transition: "0.3s ease 0s",
            "&.is-sticky": {
                borderTop: "1px solid #f3f3f3"
            },
            "&.is-mobile": {
                opacity: 1,
                visibility: "visible",
                transform: "scaleY(1)"
            },
            a: {
                fontWeight: 500,
                lineHeight: 1,
                color: "textSecondary",
                display: "block",
                padding: 3,
                "+ a": {
                    borderTop: "1px solid #f3f3f3"
                }
            }
        },
        "&.is-sticky": {
            top: 60,
            a: {
                color: "blue"
            },
            ".active": {
                color: "primary"
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/components/header/header2.js
/** @jsxRuntime classic */ /** @jsx jsx */ 








function Header() {
    //  navigate = useRouter();
    const { 0: state , 1: setState  } = (0,external_react_.useState)({
        isMobileMenu: false,
        isSticky: false
    });
    const handleStateChange = (status)=>{
        status.status === (external_react_stickynode_default()).STATUS_FIXED ? setState({
            ...state,
            isSticky: true
        }) : setState({
            ...state,
            isSticky: false
        });
    };
    const toggleMobileMenu = ()=>{
        setState((prev)=>{
            return {
                ...prev,
                isMobileMenu: !prev.isMobileMenu
            };
        });
    };
    const handleCloseMenu = ()=>{
        setState({
            ...state,
            isMobileMenu: false
        });
    };
    const logout = async ()=>{
        navigate.push("/");
    };
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_react_.Fragment, null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(topbar/* default */.Z, null), /*#__PURE__*/ (0,external_theme_ui_.jsx)((external_react_stickynode_default()), {
        enabled: true,
        top: 0,
        activeClass: "is-sticky",
        innerZ: 100,
        onStateChange: handleStateChange
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Box, {
        as: "header",
        sx: header2_styles.header,
        className: state.isSticky ? "is-sticky" : ""
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Container, {
        sx: header2_styles.container
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(components_image/* default */.Z, {
        src: "/images/logo.png",
        loading: "lazy",
        sx: header2_styles.logo,
        alt: "logo"
    }), /*#__PURE__*/ (0,external_theme_ui_.jsx)("div", {
        sx: header2_styles.navbar,
        className: state.isSticky ? "is-sticky" : ""
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)((link_default()), {
        href: "/"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("a", null, "Home")), /*#__PURE__*/ (0,external_theme_ui_.jsx)((link_default()), {
        href: "/explore"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("a", null, "Dashboard")), /*#__PURE__*/ (0,external_theme_ui_.jsx)((link_default()), {
        href: "/preprint"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("a", null, "Preprints")), /*#__PURE__*/ (0,external_theme_ui_.jsx)((link_default()), {
        href: "/publish"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("a", null, "Publish")), /*#__PURE__*/ (0,external_theme_ui_.jsx)((link_default()), {
        href: "/streamlive"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("a", null, "Approved-Artifacts ")), /*#__PURE__*/ (0,external_theme_ui_.jsx)((link_default()), {
        href: "/videoplayer"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("a", null, " Video-Player")), /*#__PURE__*/ (0,external_theme_ui_.jsx)((link_default()), {
        href: "https://web3chat-kezayya.vercel.app/",
        target: "_blank"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("a", {
        target: "_blank"
    }, "Chat "))), /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Flex, {
        sx: header2_styles.buttonGroup
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)((link_default()), {
        href: "/"
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_theme_ui_.Button, {
        variant: "text",
        sx: {
            ...header2_styles.joinCommunity,
            backgroundColor: state.isSticky ? "primary" : "white",
            color: state.isSticky ? "white" : "primary"
        },
        onlick: logout
    }, /*#__PURE__*/ (0,external_theme_ui_.jsx)("a", null, "Logout ")))), /*#__PURE__*/ (0,external_theme_ui_.jsx)(hamburger/* default */.Z, {
        sx: header2_styles.hamburger,
        isSticky: state.isSticky,
        isOpen: state.isMobileMenu,
        toggleMobileMenu: toggleMobileMenu
    })))));
}
const header2_styles = {
    navbar: {
        display: [
            null,
            null,
            null,
            null,
            null,
            "flex"
        ],
        alignItems: [
            null,
            null,
            null,
            "center"
        ],
        flexGrow: [
            null,
            null,
            null,
            1
        ],
        fontSize: [
            "10px",
            null,
            null,
            5
        ],
        a: {
            color: "white",
            cursor: "pointer",
            "+ a": {
                ml: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    6
                ]
            }
        },
        "@media only screen and (max-width: 1024px)": {
            position: "absolute",
            backgroundColor: "white",
            boxShadow: "0px 11px 30px rgba(51, 83, 145, 0.07)",
            width: "100%",
            left: 0,
            top: 70,
            opacity: 0,
            visibility: "hidden",
            transform: "scaleY(0)",
            transformOrigin: "top left 0",
            transition: "0.3s ease 0s",
            "&.is-sticky": {
                borderTop: "1px solid #f3f3f3"
            },
            "&.is-mobile": {
                opacity: 1,
                visibility: "visible",
                transform: "scaleY(1)"
            },
            a: {
                fontWeight: 500,
                lineHeight: 1,
                color: "textSecondary",
                display: "block",
                padding: 3,
                "+ a": {
                    borderTop: "1px solid #f3f3f3"
                }
            }
        },
        "&.is-sticky": {
            top: 60,
            a: {
                color: "blue"
            },
            ".active": {
                color: "primary"
            }
        }
    },
    header: {
        position: "fixed",
        left: 0,
        right: 0,
        py: 4,
        transition: "all 0.3s ease-in-out 0s",
        "&.is-sticky": {
            backgroundColor: "white",
            boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
            paddingTop: "15px",
            paddingBottom: "15px"
        },
        "&.is-mobile-menu": {
            backgroundColor: "white"
        }
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        mr: [
            null,
            null,
            null,
            null,
            3,
            null,
            5
        ],
        height: [
            "25px",
            null,
            null,
            "75px"
        ]
    },
    buttonGroup: {
        alignItems: "center",
        marginLeft: "auto",
        button: {
            fontWeight: 500
        }
    },
    login: {
        display: [
            "none",
            null,
            null,
            null,
            "flex"
        ],
        color: "white",
        p: 0,
        mr: [
            null,
            null,
            null,
            null,
            5
        ],
        fontSize: [
            "10px",
            null,
            null,
            4
        ],
        svg: {
            mr: 2
        }
    },
    joinCommunity: {
        backgroundColor: "white",
        minHeight: [
            30,
            null,
            null,
            40
        ],
        p: [
            "0 12px",
            null,
            null,
            "0 14px"
        ],
        fontSize: [
            "10px",
            null,
            null,
            4
        ]
    },
    hamburger: {
        display: [
            null,
            null,
            null,
            null,
            null,
            "none"
        ]
    }
};

// EXTERNAL MODULE: ./src/components/footer/footer.js + 2 modules
var footer = __webpack_require__(3373);
;// CONCATENATED MODULE: ./src/components/layout2.js
/** @jsxRuntime classic */ /** @jsx jsx */ 



function Layout({ children  }) {
    return /*#__PURE__*/ (0,external_theme_ui_.jsx)(external_react_.Fragment, null, /*#__PURE__*/ (0,external_theme_ui_.jsx)(Header, null), /*#__PURE__*/ (0,external_theme_ui_.jsx)("main", {
        sx: {
            variant: "layout.main"
        }
    }, children), /*#__PURE__*/ (0,external_theme_ui_.jsx)(footer/* default */.Z, null));
}


/***/ })

};
;