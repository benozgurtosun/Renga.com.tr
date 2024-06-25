//Install
import React, { Component } from "react";

//Element
class Login extends Component {
    //Element
    render() {
        //Element
        const Content = React.createElement( "div", { className: "float-start w-100 p-0 m-0 position-absolute nj004v" },
            //Element
            React.createElement( "label", { className: "float-start w-100 p-0 m-0 mt-4 text-center j5q4b9" },
                //Element
                "Giriş Yap"
            ),
            //Element
            React.createElement( "form", { className: "float-start w-100 p-0 ps-4 pe-4 m-0 mt-4 p364si", method: "GET" },
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 c508n8" },
                    //Element
                    React.createElement( "span", { className: "float-start w-100 p-0 m-0 x5h6d7" },
                        //Element
                        "E-Posta"
                    ),
                    //Element
                    React.createElement( "input", { className: "float-start w-100 p-0 ps-3 pe-4 m-0 mt-2 i7k0n4", type: "text", required: "required" } )
                ),
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 c508n8" },
                    //Element
                    React.createElement( "span", { className: "float-start w-100 p-0 m-0 x5h6d7" },
                        //Element
                        "Şifre"
                    ),
                    //Element
                    React.createElement( "input", { className: "float-start w-100 p-0 ps-3 pe-4 m-0 mt-2 i7k0n4", type: "password", required: "required" } )
                ),
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 text-end v7w84r" },
                    //Element
                    React.createElement( "a", { className: "float-end w-auto p-0 m-0 mt-2 x3x6y5", href: "/" },
                        //Element
                        "Şifremi Unuttum"
                    )
                ),
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 pb-5 m-0 mt-3 t417hd" },
                    //Element
                    React.createElement( "button", { className: "float-start w-100 p-0 m-0 x6a1b1", type: "button" },
                        //Element
                        "Giriş Yap"
                    ),
                    //Element
                    React.createElement( "label", { className: "float-start w-100 p-0 m-0 mt-2 wo638n" },
                        //Element
                        "Henüz bir hesabınız yok mu?"
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
export default Login;