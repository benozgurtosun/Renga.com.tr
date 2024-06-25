//Install
import React, { Component } from "react";
//Install
import { ReactComponent as Icon } from "../../Media/Icon/001.svg";
//Install
import { ReactComponent as Facebook_Icon } from "../../Media/Icon/004.svg";
//Install
import { ReactComponent as X_Icon } from "../../Media/Icon/005.svg";
//Install
import { ReactComponent as Instagram_Icon } from "../../Media/Icon/006.svg";
//Install
import { ReactComponent as Youtube_Icon } from "../../Media/Icon/007.svg";
//Install
import { ReactComponent as Linkedin_Icon } from "../../Media/Icon/008.svg";
//Install
import propTypes from "prop-types";

//Element
class Brand extends Component {
    //Element
    Home = () => {
        //Element
        const { Target } = this.props
        //Element
        window.location.href = Target
    }
    //Element
    render() {
        //Element
        const { ID, Title, Facebook, X, Instagram, Youtube, Linkedin } = this.props
        //Element
        const Content = React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-5 q1587e" },
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-5 fgb299" },
                //Element
                React.createElement( "button", { id: "Footer_Brand", name: "Footer_Brand", className: "float-start w-100 p-0 m-0 bg-transparent border-0 text-start q0r658", title: Title, type: "button", onClick: this.Home },
                    //Element
                    React.createElement( Icon, {} )
                )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 d5h7i9" },
                //Element
                React.createElement( "menu", { className: "float-start w-100 p-0 m-0 z801en" },
                    //Element
                    React.createElement( "li", { className: "float-start w-auto" },
                        //Element
                        React.createElement( "a", { className: "float-start w-auto p-0 m-0", href: Facebook },
                            //Element
                            React.createElement( Facebook_Icon, {} )
                        )
                    ),
                    //Element
                    React.createElement( "li", { className: "float-start w-auto" },
                        //Element
                        React.createElement( "a", { className: "float-start w-auto p-0 m-0 ms-4", href: X },
                            //Element
                            React.createElement( X_Icon, {} )
                        )
                    ),
                    //Element
                    React.createElement( "li", { className: "float-start w-auto" },
                        //Element
                        React.createElement( "a", { className: "float-start w-auto p-0 m-0 ms-4", href: Instagram },
                            //Element
                            React.createElement( Instagram_Icon, {} )
                        )
                    ),
                    //Element
                    React.createElement( "li", { className: "float-start w-auto" },
                        //Element
                        React.createElement( "a", { className: "float-start w-auto p-0 m-0 ms-4", href: Youtube },
                            //Element
                            React.createElement( Youtube_Icon , {} )
                        )
                    ),
                    //Element
                    React.createElement( "li", { className: "float-start w-auto" },
                        //Element
                        React.createElement( "a", { className: "float-start w-auto p-0 m-0 ms-4", href: Linkedin },
                            //Element
                            React.createElement( Linkedin_Icon, {} )
                        )
                    )
                )
            )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
Brand.propTypes = {
    ID        : propTypes.string.isRequired,
    Title     : propTypes.string.isRequired,
    Facebook  : propTypes.string.isRequired,
    X         : propTypes.string.isRequired,
    Instagram : propTypes.string.isRequired,
    Youtube   : propTypes.string.isRequired,
    Linkedin  : propTypes.string.isRequired,
    Target    : propTypes.string.isRequired
}
//Element
export default Brand;