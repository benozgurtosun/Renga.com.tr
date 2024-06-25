//Install
import React, { Component } from "react";
//Install
import { ReactComponent as Prev } from "../../../Media/Icon/012.svg";
//Install
import { ReactComponent as Next } from "../../../Media/Icon/013.svg";

//Element
class Navigation extends Component {
    //Element
    render() {
        //Element
        const Content = React.createElement( "div", { className: "d-flex w-100 justify-content-end align-items-end p-0 m-0 w569a3" },
            //Element
            React.createElement( "button", { id: "Video_BlockPrev", name: "Video_BlockPrev", className: "float-start w-auto p-0 m-0 bg-transparent border-0 n1w525", type: "button" },
                //Element
                React.createElement( Prev, {} )
            ),
            //Element
            React.createElement( "button", { id: "Video_BlockNext", name: "Video_BlockNext", className: "float-start w-auto p-0 m-0 bg-transparent border-0 n1w525", type: "button" },
                //Element
                React.createElement( Next, {} )
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