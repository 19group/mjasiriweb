import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "'Open Sans', Helvetica, Arial, sans-serif",
        "fontSize": 13,
        "fontWeight": "400",
        "overflowX": "hidden",
        "backgroundColor": "#FBDFC3"
    },
    "a": {
        "transition": "all 0.3s ease"
    },
    "button": {
        "transition": "all 0.3s ease"
    },
    "a:hover": {
        "textDecoration": "none",
        "outline": "none"
    },
    "a:focus": {
        "textDecoration": "none",
        "outline": "none"
    },
    "tm-position-relative": {
        "position": "relative"
    },
    "tm-flex-align-center": {
        "alignItems": "center"
    },
    "tm-fa-6x": {
        "fontSize": 6
    },
    "tm-margin-b-0": {
        "marginBottom": 0
    },
    "tm-margin-b-20": {
        "marginBottom": 20
    },
    "tm-p-4": {
        "paddingTop": "2rem!important",
        "paddingRight": "2rem!important",
        "paddingBottom": "2rem!important",
        "paddingLeft": "2rem!important"
    },
    "tm-color-white": {
        "color": "white"
    },
    "tm-color-primary": {
        "color": "#ee5057"
    },
    "tm-bg-primary": {
        "background": "#ee5057"
    },
    "tm-bg-gray": {
        "background": "#F4F4F4"
    },
    "tm-bg-white": {
        "background": "#FBDFC3"
    },
    "tm-bg-dark-blue": {
        "background": "#1f3646"
    },
    "tm-bg-white-shadow": {
        "WebkitBoxShadow": "0px 0px 7px 0px rgba(214,214,214,1)",
        "MozBoxShadow": "0px 0px 7px 0px rgba(214,214,214,1)",
        "boxShadow": "0px 0px 7px 0px rgba(214,214,214,1)"
    },
    "tm-section-pad": {
        "paddingTop": 30,
        "paddingRight": 50,
        "paddingBottom": 30,
        "paddingLeft": 50
    },
    "tm-section-pad-2": {
        "paddingTop": 30,
        "paddingRight": 40,
        "paddingBottom": 30,
        "paddingLeft": 40
    },
    "tm-article-pad": {
        "paddingTop": 28,
        "paddingRight": 28,
        "paddingBottom": 28,
        "paddingLeft": 28
    },
    "tm-sidebar-pad": {
        "paddingTop": 15,
        "paddingRight": 20,
        "paddingBottom": 15,
        "paddingLeft": 20
    },
    "tm-sidebar-pad-2": {
        "paddingTop": 21,
        "paddingRight": 20,
        "paddingBottom": 21,
        "paddingLeft": 20
    },
    "tm-pad": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "atm-color-primary:hover": {
        "color": "#d53239"
    },
    "atm-color-primary:active": {
        "color": "#d53239"
    },
    "tm-font-light": {
        "fontWeight": "300"
    },
    "tm-font-normal": {
        "fontWeight": "400"
    },
    "tm-font-semibold": {
        "fontWeight": "600"
    },
    "p": {
        "color": "#898989",
        "lineHeight": 1.9
    },
    "navbar": {
        "width": "100%",
        "paddingTop": 0,
        "paddingBottom": 0
    },
    "navbar-brand": {
        "fontSize": 1.8,
        "fontWeight": "700"
    },
    "navbar a": {
        "color": "black"
    },
    "navbar-toggler-icon": {
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(238, 80, 87, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");}.navbar-toggler {\tborder-color: rgb(238, 80, 87);\tcursor: pointer;}.nav-item {\tbackground: transparent;\tborder-left: 1px solid #ccc;\tcursor: pointer;\tfont-size: 0.8rem;\tfont-weight: 300;    text-transform: uppercase;    padding: 0;    transition: all 0.5s ease;}.nav-item:last-child { border-right: 1px solid #ccc; }.nav-link.active,.nav-link:hover {\tcolor: white;\tbackground: #ee5057;}.tm-top-bar .navbar-expand-lg .navbar-nav .nav-link { padding: 30px 35px; }.tm-top-bar {    position: fixed;    top: 0;    left: 0;    width: 100%;    padding: 0;    z-index: 10000;    transition: all 0.2s ease-in-out;    height: 79px;    background: #FBDFC3;}.tm-top-bar.active {\theight: 79px;\tbox-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);}.tm-top-bar.active .navbar-expand-lg .navbar-nav .nav-link { padding: 30px 35px; }.tm-top-bar-bg { height: 79px; }.tm-section { min-height: 515px; }.tm-section-pad {\tpadding-top: 80px;\tpadding-bottom: 80px;}#tm-section-1 {\tbackground-image: url('../img/bg-img-1.jpg');\theight: 515px;}#tm-section-5 { background-image: url('../img/bg-img-2.jpg'); }#tm-section-6 {\tbackground-image: url('../img/bg-img-3.jpg');\tbackground-position: top center;\tpadding-top: 120px;\tpadding-bottom: 60px;}.tm-bg-img {\tbackground-position: center center;\tbackground-repeat: no-repeat;\tbackground-size: cover;\tdisplay: -webkit-box;\tdisplay: -webkit-flex;\tdisplay: -ms-flexbox;\tdisplay: flex;    -webkit-box-align: center;    -webkit-align-items: center;    -ms-flex-align: center;            align-items: center;    -webkit-box-pack: center;    -webkit-justify-content: center;    -ms-flex-pack: center;            justify-content: center}.qs-datepicker {\tfont-family:  'Open Sans', Helvetica, Arial, sans-serif",
        "fontSize": 0.8
    },
    "form-control": {
        "borderRadius": 0,
        "paddingTop": 0.6,
        "paddingRight": 0.75,
        "paddingBottom": 0.6,
        "paddingLeft": 0.75
    },
    "form-control:focus": {
        "borderColor": "#ee5057",
        "boxShadow": "0 0 0 0.2rem rgba(238,80,87,.25)"
    },
    "btn-primary": {
        "backgroundColor": "#ee5057",
        "borderColor": "#ee5057",
        "borderRadius": 0,
        "cursor": "pointer",
        "fontSize": 0.7,
        "fontWeight": "600",
        "paddingTop": 13,
        "paddingRight": 30,
        "paddingBottom": 13,
        "paddingLeft": 30,
        "textTransform": "uppercase"
    },
    "btn-primary:hover": {
        "backgroundColor": "#d53239",
        "borderColor": "#d53239"
    },
    "btn-primary:focus": {
        "backgroundColor": "#d53239",
        "borderColor": "#d53239"
    },
    "btn-primary:active": {
        "backgroundColor": "#d53239",
        "borderColor": "#d53239"
    },
    "tm-search-form tm-form-element": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "width": "33.3333%"
    },
    "tm-form-element": {
        "position": "relative"
    },
    "tm-form-element:last-child": {
        "marginRight": 0
    },
    "tm-form-element-icon": {
        "color": "#ee5057",
        "position": "absolute",
        "top": 10,
        "left": 15
    },
    "tm-form-element-icon-small": {
        "top": 16,
        "left": 18
    },
    "selecttm-selectform-control:not([size]):not([multiple])": {
        "height": "100%"
    },
    "select:not([multiple])": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "backgroundPosition": "right 50%",
        "backgroundRepeat": "no-repeat",
        "backgroundImage": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=)",
        "paddingTop": 0.5,
        "paddingRight": 1.5,
        "paddingBottom": 0.5,
        "paddingLeft": 0.5
    },
    "selecttm-select::-ms-expand": {
        "display": "none"
    },
    "tm-select": {
        "borderRadius": 0,
        "color": "#858789"
    },
    "tm-search-form form-control": {
        "fontSize": 0.8,
        "paddingTop": 0.75,
        "paddingRight": 0.75,
        "paddingBottom": 0.75,
        "paddingLeft": 45
    },
    "tm-search-form tm-form-element-2": {
        "width": "25%"
    },
    "tm-search-form-row": {
        "width": 900
    },
    "tm-btn-search": {
        "width": "100%"
    },
    "tm-section-down-arrow": {
        "position": "absolute",
        "top": -1,
        "width": "100%",
        "height": 100
    },
    "tm-pt-5": {
        "paddingTop": 150
    },
    "tm-pb-4": {
        "paddingBottom": 100
    },
    "tm-section-2": {
        "background": "#ee5057",
        "paddingTop": 50,
        "position": "relative"
    },
    "tm-section-title": {
        "color": "white",
        "fontSize": 3
    },
    "tm-section-title-2": {
        "fontSize": 3.2,
        "fontWeight": "600"
    },
    "tm-section-subtitle": {
        "fontSize": 1,
        "fontWeight": "300",
        "marginBottom": 25
    },
    "tm-section-subtitle-2": {
        "fontSize": 1.8
    },
    "tm-btn-white-bordered": {
        "display": "inline-block",
        "paddingTop": 10,
        "paddingRight": 25,
        "paddingBottom": 10,
        "paddingLeft": 25,
        "border": "2px solid white",
        "background": "transparent",
        "textTransform": "uppercase"
    },
    "tm-btn-white-bordered:hover": {
        "color": "#ee5057",
        "background": "white"
    },
    "tm-btn-white-bordered:focus": {
        "color": "#ee5057",
        "background": "white"
    },
    "slick-dots": {
        "bottom": -35
    },
    "tm-article": {
        "paddingTop": 40,
        "paddingRight": 40,
        "paddingBottom": 40,
        "paddingLeft": 40,
        "transition": "all 0.3s ease"
    },
    "tm-article:hover": {
        "WebkitBoxShadow": "0px 0px 7px 0px rgba(214,214,214,1)",
        "MozBoxShadow": "0px 0px 7px 0px rgba(214,214,214,1)",
        "boxShadow": "0px 0px 7px 0px rgba(214,214,214,1)",
        "transform": "scale(1.1)"
    },
    "tm-article-title-1": {
        "fontSize": 1.3,
        "fontWeight": "600",
        "marginBottom": 20
    },
    "tm-article-title-2": {
        "fontSize": 1,
        "fontWeight": "700",
        "letterSpacing": 1
    },
    "tm-article-title-3": {
        "fontSize": 1.1
    },
    "tm-btn-primary": {
        "display": "block",
        "width": "100%",
        "textAlign": "center",
        "marginLeft": "auto",
        "marginRight": "auto",
        "fontSize": 0.75
    },
    "tm-sidebar-title": {
        "fontSize": 1.3,
        "marginBottom": 5
    },
    "tm-sidebar-item-title": {
        "fontSize": 1.2,
        "letterSpacing": 1,
        "marginBottom": 0
    },
    "tm-recommended-item tm-bg-gray": {
        "transition": "all 0.3s ease"
    },
    "tm-recommended-item:hover tm-bg-gray": {
        "background": "#DDD"
    },
    "tm-recommended-item h4": {
        "color": "black",
        "transition": "all 0.3s ease"
    },
    "tm-recommended-item:hover h4": {
        "color": "#ee5057"
    },
    "tm-media": {
        "alignItems": "stretch",
        "marginBottom": 15
    },
    "tm-media-1": {
        "marginBottom": 15
    },
    "tm-media:last-child": {
        "marginBottom": 0
    },
    "tm-media-1:last-child": {
        "marginBottom": 0
    },
    "tm-media-body": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "paddingLeft": 25
    },
    "tm-media-body-1": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "paddingLeft": 25
    },
    "tm-media-body-v-center": {
        "display": "flex",
        "WebkitBoxOrient": "vertical",
        "WebkitBoxDirection": "normal",
        "WebkitFlexDirection": "column",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "WebkitBoxPack": "center",
        "WebkitJustifyContent": "center",
        "MsFlexPack": "center",
        "justifyContent": "center",
        "alignItems": "flex-start"
    },
    "overlay": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": 515,
        "zIndex": 1,
        "backgroundColor": "rgba(0,0,0,0.75)",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    },
    "tm-bg-video": {
        "position": "relative",
        "paddingTop": 515
    },
    "video": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "minWidth": "100%",
        "minHeight": "100%",
        "width": "auto",
        "height": "auto",
        "zIndex": -100,
        "transform": "translateX(-50%) translateY(-50%)",
        "backgroundSize": "cover",
        "transition": "1s opacity"
    },
    "tm-btn-pause": {
        "display": "none",
        "color": "rgba(255,255,255,0.5)",
        "cursor": "pointer"
    },
    "tm-btn-play": {
        "color": "rgba(255,255,255,0.5)",
        "cursor": "pointer"
    },
    "tm-media-container": {
        "maxWidth": 772
    },
    "google-map": {
        "height": 479,
        "width": "100%"
    },
    "contact-form form-control": {
        "backgroundColor": "#F4F4F4",
        "border": "none",
        "fontSize": 0.8,
        "fontWeight": "300"
    },
    "clearfix:after": {
        "content": " ",
        "visibility": "hidden",
        "display": "block",
        "height": 0,
        "clear": "both"
    }
});