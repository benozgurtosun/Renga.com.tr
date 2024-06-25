//Install
import React, { Component } from "react";
//Install
import Social from "../../Shortcode/Contact/Social";

//Element
class Default extends Component {
    //Element
    componentDidMount(){
        //Element
        document.title = "Renga ®"
        //Element
        this.Shadow()
        //Element
        this.Space()
    }
    //Element
    Shadow = () => {
        //Element
        let Header = document.getElementsByClassName( "g283uf" )[0]
        //Element
        Header.classList.add( "q31v3i" )
    }
    Space  = () => {
        //Element
        let Footer = document.getElementsByClassName( "t52n6q" )[0]
        //Element
        Footer.classList.remove( "mt-5" )
    }
    //Element
    render() {
        //Element
        const Content = React.createElement( "main", { className: "float-start w-100 p-0 m-0 k0885p" },
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 hiu984" },
                //Element
                React.createElement( "div", { className: "float-start w-50 p-0 m-0 m79508" },
                    //Element
                    React.createElement( "iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.058059802605!2d28.628383999999993!3d41.045859400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f4e55ab929d%3A0xb7b57929ff7a0e76!2sRenga-Mercanlar%20Mutfak%20E%C5%9Fyalar%C4%B1%20-%20Merkez%20Ofis!5e0!3m2!1str!2str!4v1715768588998!5m2!1str!2str" } )
                ),
                //Element
                React.createElement( "div", { className: "float-start w-50 p-0 m-0 z63h38" },
                    //Element
                    React.createElement( "div", { className: "d-flex w-100 h-100 flex-column justify-content-center align-items-start p-0 ps-5 m-0 aq93o2" },
                        //Element
                        React.createElement( "h3", { className: "float-start w-auto p-0 m-0 lh-1 at81s3" },
                            //Element
                            "Adres :"
                        ),
                        //Element
                        React.createElement( "p", { className: "float-start w-auto p-0 m-0 mt-2 u0k73r" },
                            //Element
                            "Osmangazi Mah. Hadımköy Yolu Cad. No: 38 Doğa Plaza A Blok, 2.Kat Ofis Numara: 9",
                            //Element
                            React.createElement( "br", {} ),
                            //Element
                            "34538 Esenyurt/İstanbul"
                        ),
                        //Element
                        React.createElement( "h3", { className: "float-start w-auto p-0 m-0 mt-3 lh-1 at81s3" },
                            //Element
                            "Telefon :"
                        ),
                        //Element
                        React.createElement( "p", { className: "float-start w-auto p-0 m-0 mt-2 u0k73r" },
                            //Element
                            "+90 (212) 875 44 55"
                        ),
                        //Element
                        React.createElement( "h3", { className: "float-start w-auto p-0 m-0 mt-3 lh-1 at81s3" },
                            //Element
                            "Fax :"
                        ),
                        //Element
                        React.createElement( "p", { className: "float-start w-auto p-0 m-0 mt-2 u0k73r" },
                            //Element
                            "+90 (212) 876 67 42"
                        ),
                        //Element
                        React.createElement( "h3", { className: "float-start w-auto p-0 m-0 mt-3 lh-1 at81s3" },
                            //Element
                            "E-Posta :"
                        ),
                        //Element
                        React.createElement( "p", { className: "float-start w-auto p-0 m-0 mt-2 u0k73r" },
                            //Element
                            "info@renga.com.tr"
                        ),
                        //Element
                        React.createElement( Social, {} )
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
export default Default;