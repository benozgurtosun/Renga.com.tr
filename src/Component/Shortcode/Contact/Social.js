//Install
import React, { Component } from "react";
//Install
import { ReactComponent as Facebook } from "../../../Media/Icon/019.svg";
//Install
import { ReactComponent as Twitter } from "../../../Media/Icon/020.svg";
//Install
import { ReactComponent as Linkedin } from "../../../Media/Icon/021.svg";
//Install
import { ReactComponent as Instagram } from "../../../Media/Icon/022.svg";
//Install
import { ReactComponent as Youtube } from "../../../Media/Icon/023.svg";

//Element
class Social extends Component {
    //Element
    render() {
        //Element
        const Content = React.createElement( "ul", { className: "d-flex w-100 justify-content-start align-items-center p-0 m-0 r7jl46" },
            //Element
            React.createElement( "li", { className: "float-start w-auto" },
                //Element
                React.createElement( "a", { className: "float-start w-auto p-0 m-0 mt-3", href: "/" },
                    //Element
                    React.createElement( Facebook, {} )     
                )
            ),
            //Element
            React.createElement( "li", { className: "float-start w-auto" },
                //Element
                React.createElement( "a", { className: "float-start w-auto p-0 m-0 mt-3 ms-4", href: "/" },
                    //Element
                    React.createElement( Twitter, {} )                    
                )
            ),
            //Element
            React.createElement( "li", { className: "float-start w-auto" },
                //Element
                React.createElement( "a", { className: "float-start w-auto p-0 m-0 mt-3 ms-4", href: "/" },
                    //Element
                    React.createElement( Linkedin, {} )                    
                )
            ),
            //Element
            React.createElement( "li", { className: "float-start w-auto" },
                //Element
                React.createElement( "a", { className: "float-start w-auto p-0 m-0 mt-3 ms-4", href: "/" },
                    //Element
                    React.createElement( Instagram, {} )                   
                )
            ),
            //Element
            React.createElement( "li", { className: "float-start w-auto" },
                //Element
                React.createElement( "a", { className: "float-start w-auto p-0 m-0 mt-3 ms-4", href: "/" },
                    //Element
                    React.createElement( Youtube, {} )                    
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
export default Social;