//Install
import React, { Component } from "react";
//Install
import { ReactComponent as Find } from "../../Media/Icon/016.svg";

//Element
class Submenu extends Component {
    //Element
    render() {
        //Element
        const Content = React.createElement( "nav", { className: "float-start w-100 p-0 ps-3 pe-3 m-0 position-absolute h991s2" },
            //Element
            React.createElement( "div", { className: "d-flex w-100 justify-content-start align-items-center p-0 m-0 mt-4 o228cv" },
                //Element
                React.createElement( "form", { className: "float-start w-100 p-0 m-0 position-relative ct4473", method: "GET" },
                    //Element
                    React.createElement( "input", { id: "Submenu_Search_Box", name: "Submenu_Search_Box", className: "float-start w-100 p-0 ps-5 m-0 t321d2", placeholder: "Ara", type: "text", required: "required" } ),
                    //Element
                    React.createElement( "button", { id: "Submenu_Search_Find", name: "Submenu_Search_Find", className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 position-absolute start-0 top-0 bg-transparent border-0 n308io", type: "submit" },
                        //Element
                        React.createElement( Find, {} )
                    )
                )
            ),
            //Element
            React.createElement( "menu", { className: "float-start w-100 p-0 m-0 mt-2 o4509q" },
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "a", { className: "float-start w-100 p-0 m-0", href: "/kurumsal" },
                        //Element
                        "Kurumsal"
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-100 position-relative" },
                    //Element
                    React.createElement( "a", { className: "float-start w-100 p-0 m-0", href: "/urunler" },
                        //Element
                        "Ürünler"
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "a", { className: "float-start w-100 p-0 m-0", href: "/blog" },
                        //Element
                        "Blog"
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "a", { className: "float-start w-100 p-0 m-0", href: "/" },
                        //Element
                        "E-Katalog"
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "a", { className: "float-start w-100 p-0 m-0", href: "/iletisim-bilgileri" },
                        //Element
                        "İletişim"
                    )
                )
            ),
            //Element
            React.createElement( "a", { className: "float-start w-100 p-0 m-0 mt-4 text-center c3234r", href: "/" },
                //Element
                "English"
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