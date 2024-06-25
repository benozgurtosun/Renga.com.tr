//Install
import React, { Component } from "react";
//Install
import { Container, Row, Col } from "react-bootstrap";
//Install
import Brand from "./Footer/Brand";
//Install
import Menu from "./Footer/Menu";
//Install
import Information from "./Footer/Information";
//Install
import Submenu from "./Footer/Submenu";
//Install
import Copyright from "./Footer/Copyright";

//Element
class Footer extends Component {
    //Element
    render() {
        //Element
        const Content = React.createElement( "footer", { className: "float-start w-100 p-0 m-0 ibv050" },
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-5 t52n6q" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:3 },
                            //Element
                            React.createElement( Brand, { ID: "0", Title: "Renga", Facebook: "/", X: "/", Instagram: "/", Youtube: "/", Linkedin: "/", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:4 },
                            //Element
                            React.createElement( Information, {} )
                        ),
                        //Element
                        React.createElement( Col, { md:5 },
                            //Element
                            React.createElement( Menu, {} )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 s8cw73" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:6 },
                            //Element
                            React.createElement( Copyright, { ID: "0", Title: "© 2024 Renga All Rights Reserved.", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:6 },
                            //Element
                            React.createElement( Submenu, {} )
                        )
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
export default Footer;