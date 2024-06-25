//Install
import React, { Component } from "react";
//Install
import { ReactComponent as V684XX } from "../../../Media/Icon/012.svg";
//Install
import { ReactComponent as B3981M } from "../../../Media/Icon/013.svg";

//Element
class Navigation extends Component {
    //Element
    render() {
        //Element
        const Content = React.createElement( "div", { className: "d-flex w-100 justify-content-between align-items-center p-0 m-0 mt-4 position-absolute start-0 top-0 m8519d" },
            //Element
            React.createElement( "button", { id: "Blog_Prev", name: "Blog_Prev", className: "float-start w-100 p-0 m-0 bg-transparent border-0 b0v73r", type: "button" },
                //Element
                React.createElement( V684XX, {} )
            ),
            //Element
            React.createElement( "button", { id: "Blog_Next", name: "Blog_Next", className: "float-start w-100 p-0 m-0 bg-transparent border-0 v6233g", type: "button" },
                //Element
                React.createElement( B3981M, {} )
            )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
export default Navigation;