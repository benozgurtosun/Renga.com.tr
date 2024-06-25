//Install
import React, { Component } from "react";
//Install
import { ReactComponent as Close } from "../../../Media/Icon/015.svg";
//Install
import { ReactComponent as Find } from "../../../Media/Icon/016.svg";

//Element
class Default extends Component {
    //Element
    Toggle = () => {
        //Element
        let Panel = document.getElementsByClassName( "p88d5z" )[0]
        //Element
        Panel.classList.toggle( "d-none" )
    }
    //Element
    render() {
        //Element
        const Content = React.createElement( "div", { className: "d-flex w-100 justify-content-start align-items-center p-0 m-0 u624o9" },
            //Element
            React.createElement( "form", { className: "float-start w-100 p-0 m-0 position-relative ct4473", method: "GET" },
                //Element
                React.createElement( "input", { id: "Header_Search_Box", name: "Header_Search_Box", className: "float-start w-100 p-0 ps-5 m-0 w9y28r", placeholder: "Ara", type: "text", required: "required" } ),
                //Element
                React.createElement( "button", { id: "Header_Search_Find", name: "Header_Search_Find", className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 position-absolute start-0 top-0 bg-transparent border-0 xi072j", type: "submit" },
                    //Element
                    React.createElement( Find, {} )
                ),
                //Element
                React.createElement( "button", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 position-absolute end-0 top-0 bg-transparent border-0 h8o8y9", type: "button", onClick: this.Toggle },
                    //Element
                    React.createElement( Close, {} )
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
export default Default;