//Install
import React, { Component } from "react";
//Install
import { ReactComponent as Icon } from "../../Media/Icon/001.svg";

//Element
class Logo extends Component {
    //Element
    Home = () => {
        //Element
        window.location.href = "/"
    }
    //Element
    render() {
        //Element
        const Content = React.createElement( "div", { className: "d-flex w-auto justify-content-start align-items-center p-0 m-0 ms-1 x487gf" },
            //Element
            React.createElement( "button", { className: "d-flex w-auto justify-content-center align-items-center p-0 m-0 bg-transparent border-0 r9220t", type: "button", onClick: this.Home },
                //Element
                React.createElement( Icon, {} )
            )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
export default Logo;