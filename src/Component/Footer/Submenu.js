//Install
import React, { Component } from "react";

//Element
class Submenu extends Component {
    //Element
    render() {
        //Element
        const Content = React.createElement( "div", { className: "float-start w-100 p-0 m-0 d01de3" },
            //Element
            React.createElement( "menu", { className: "d-flex w-100 justify-content-end align-items-center p-0 m-0 z39r83" },
                //Element
                React.createElement( "li", { className: "float-start w-auto" },
                    //Element
                    React.createElement( "a", { className: "float-start w-auto p-0 m-0 me-4", href: "/" },
                        //Element
                        "Gizlilik & Çerez Politikası"
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-auto" },
                    //Element
                    React.createElement( "a", { className: "float-start w-auto p-0 m-0", href: "/" },
                        //Element
                        "Hizmet Koşulları"
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
export default Submenu;