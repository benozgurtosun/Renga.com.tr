//Install
import React, { Component } from "react";
//Install
import { Container, Row, Col } from "react-bootstrap";
//Install
import Menu from "./Header/Menu";
//Install
import User from "./Header/User";
//Install
import Brand from "./Header/Brand";
//Install
import Search from "./Header/Search";
//Install
import Language from "./Header/Language";
//Install
import SET from "./Mobile/SET";
//Install
import Logo from "./Mobile/Logo";
//Install
import Submenu from "./Mobile/Submenu";
//Install
import Hamburger from "./Mobile/Hamburger";
//Install
import Login from "./Shortcode/User/Login";
//Install
import Panel from "./Shortcode/Search/Default";

//Element
class Header extends Component {
    //Element
    render() {
        //Element
        const Content = React.createElement( "header", { className: "float-start w-100 p-0 m-0 ue701k" },
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 g283uf" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Brand, { ID: "0", Title: "Renga", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:8 },
                            //Element
                            React.createElement( Menu, {} )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( "div", { className: "d-flex w-100 justify-content-end align-items-center p-0 m-0 p034lp" },
                                //Element
                                React.createElement( Search, { ID: "0", Title: "", Target: "/" } ),
                                //Element
                                React.createElement( User, { ID: "0", Title: "", Target: "/" } ),
                                //Element
                                React.createElement( Language, { ID: "0", Title: "Tr", Target: "/" } )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 a3480a" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:6 },
                            //Element
                            React.createElement( "div", { className: "d-flex w-100 justify-content-start align-items-center p-0 m-0 n26e4l" },
                                //Element
                                React.createElement( Hamburger, {} ),
                                //Element
                                React.createElement( Logo, {} )
                            )
                        ),
                        //Element
                        React.createElement( Col, { md:6 },
                            //Element
                            React.createElement( "div", { className: "d-flex w-100 justify-content-end align-items-center p-0 m-0 n26e4l" },
                                //Element
                                React.createElement( SET, {} )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 d-none p88d5z" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md: "8 offset-md-2" },
                            //Element
                            React.createElement( Panel, {} )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 position-absolute d-none v95986" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 position-relative ju168r" },
                                //Element
                                React.createElement( Login, {} )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 d-none k79693" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:12 },
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
export default Header;