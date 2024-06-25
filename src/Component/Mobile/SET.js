//Install
import React, { Component } from "react";
//Install
import { ReactComponent as User } from "../../Media/Icon/002.svg";
//Install
import { ReactComponent as Search } from "../../Media/Icon/003.svg";

//Element
class SET extends Component {
    //Element
    Find = () => {
        //Element
        let Panel = document.getElementsByClassName( "p88d5z" )[0]
        //Element
        Panel.classList.toggle( "d-none" )
    }
    //Element
    Login = () => {
        //Element
        let Body  = document.getElementsByTagName( "body" )[0]
        //Element
        let Panel = document.getElementsByClassName( "v95986" )[0]
        //Element
        Panel.classList.toggle( "d-none" )
        //Element
        Body.classList.toggle( "overflow-hidden" )
    }
    //Element
    render() {
        //Element
        const Content = React.createElement( "div", { className: "d-flex w-auto justify-content-center align-items-center w-auto p-0 m-0 n1l26e" },
            //Element
            React.createElement( "button", { className: "d-flex w-auto justify-content-center align-items-center p-0 m-0 me-2 bg-transparent border-0 z0y4q7", type: "button", onClick: this.Find },
                //Element
                React.createElement( Search, {} )
            ),
            //Element
            React.createElement( "button", { className: "d-flex w-auto justify-content-center align-items-center p-0 m-0 bg-transparent border-0 pu7644", type: "button", onClick: this.Login },
                //Element
                React.createElement( User, {} )
            )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
export default SET;