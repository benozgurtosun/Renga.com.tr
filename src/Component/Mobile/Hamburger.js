//Install
import React, { Component } from "react";
//Install
import { ReactComponent as Navbar } from "../../Media/Icon/026.svg";
//Install
import { ReactComponent as Close } from "../../Media/Icon/027.svg";

//Element
class Hamburger extends Component {
    //Element
    Toggle = () => {
        //Element
        let Body   = document.getElementsByTagName( "body" )[0]
        //Element
        let Navbar = document.getElementsByClassName( "s2w751" )[0]
        //Element
        let Close  = document.getElementsByClassName( "b65ms1" )[0]
        //Element
        let Sub    = document.getElementsByClassName( "k79693" )[0]
        //Element
        Navbar.classList.toggle( "d-none" )
        //Element
        Close.classList.toggle( "d-none" )
        //Element
        Body.classList.toggle( "overflow-hidden" )
        //Element
        Sub.classList.toggle( "d-none" )
    }
    //Element
    render() {
        //Element
        const Content = React.createElement( "div", { className: "d-flex w-auto justify-content-center align-items-center w-auto p-0 m-0 tg05l6" },
            //Element
            React.createElement( "button", { className: "d-flex w-auto justify-content-center align-items-center p-0 m-0 bg-transparent border-0 s2w751", type: "button", onClick: this.Toggle },
                //Element
                React.createElement( Navbar, {} )
            ),
            //Element
            React.createElement( "button", { className: "d-flex w-auto justify-content-center align-items-center p-0 m-0 bg-transparent border-0 d-none b65ms1", type: "button", onClick: this.Toggle },
                //Element
                React.createElement( Close, {} )
            )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
export default Hamburger;