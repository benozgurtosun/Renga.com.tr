//Install
import React, { Component } from "react";
//Install
import { Container, Row, Col } from "react-bootstrap";
//Install
import Card from "../../Shortcode/Product/Card";
//Install
import Featured from "../../Shortcode/Product/Featured";

//Element
class Default extends Component {
    //Element
    screenSize = () => {
        //Element
        let Variety = document.getElementById( "productFilter_Variety" )
        //Element
        let Bottle  = document.getElementById( "productFilter_Bottle" )
        //Element
        let Volume  = document.getElementById( "productFilter_Volume" )
        //Element
        let Color   = document.getElementById( "productFilter_Color" )
        //Element
        if( window.innerWidth <= 991 ){
            //Element
            Variety.classList.add( "d-none" )
            //Element
            Bottle.classList.add( "d-none" )
            //Element
            Volume.classList.add( "d-none" )
            //Element
            Color.classList.add( "d-none" )
        }
    }
    //Element
    Variety = () => {
        //Element
        let Column = document.getElementById( "productFilter_Variety" )
        //Element
        let Icon   = document.querySelector( "#productFilter_VarietyBtn" )
        //Element
        Column.classList.toggle( "d-none" )
        //Element
        Icon.classList.toggle( "u611zr" )
    }
    //Element
    Bottle = () => {
        //Element
        let Column = document.getElementById( "productFilter_Bottle" )
        //Element
        let Icon   = document.querySelector( "#productFilter_BottleBtn" )
        //Element
        Column.classList.toggle( "d-none" )
        //Element
        Icon.classList.toggle( "u611zr" )
    }
    //Element
    Volume = () => {
        //Element
        let Column = document.getElementById( "productFilter_Volume" )
        //Element
        let Icon   = document.querySelector( "#productFilter_VolumeBtn" )
        //Element
        Column.classList.toggle( "d-none" )
        //Element
        Icon.classList.toggle( "u611zr" )
    }
    //Element
    Color = () => {
        //Element
        let Column = document.getElementById( "productFilter_Color" )
        //Element
        let Icon   = document.querySelector( "#productFilter_ColorBtn" )
        //Element
        Column.classList.toggle( "d-none" )
        //Element
        Icon.classList.toggle( "u611zr" )
    }
    //Element
    componentDidMount(){
        //Element
        document.title = "Renga ®"
        //Element
        this.screenSize()
    }
    //Element
    render() {
        //Element
        const Content = React.createElement( "main", { className: "float-start w-100 p-0 m-0 k0885p" },
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 position-relative n4a725" },
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 h11360" } )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 j563d9" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:3 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-5 n49nl9" },
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 v7w666" } ),
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 h3x768" },
                                    //Element
                                    React.createElement( "button", { id: "productFilter_VarietyBtn", name: "productFilter_VarietyBtn", className: "d-flex w-100 justify-content-between align-items-center p-0 m-0 text-start lh-1 t301rl", type: "button", onClick: this.Variety },
                                        //Element
                                        "Ürün Çeşiti"
                                    ),
                                    //Element
                                    React.createElement( "div", { id: "productFilter_Variety", className: "float-start w-100 p-0 m-0 mt-3 position-relative w32343" },
                                        //Element
                                        React.createElement( "div", { className: "float-start w-100 p-0 m-0 x2qb85" },
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Mataralar (14)"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Şişeler ve İçecek Grubu (32)"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Taşınabilir Ürünler (9)"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Çocuk Ürünleri (17)"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Bebek Ürünleri (7)"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Lisanslı Ürünler (4)"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Özel Desenli Seri (3)"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Çok Amaçlı Ürünler (2)"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Şişeler ve İçecek Grubu (32)"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Taşınabilir Ürünler (9)"
                                                )
                                            )
                                        )
                                    )
                                ),
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 h3x768" },
                                    //Element
                                    React.createElement( "button", { id: "productFilter_BottleBtn", name: "productFilter_BottleBtn", className: "d-flex w-100 justify-content-between align-items-center p-0 m-0 text-start lh-1 t301rl", type: "button", onClick: this.Bottle },
                                        //Element
                                        "Mataralar"
                                    ),
                                    //Element
                                    React.createElement( "div", { id: "productFilter_Bottle", className: "float-start w-100 p-0 m-0 mt-3 position-relative w32343" },
                                        //Element
                                        React.createElement( "div", { className: "float-start w-100 p-0 m-0 x2qb85" },
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Atlas"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Black Edition"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Cross"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Ege"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Falcon"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Felix"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Juno"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Atlas"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Black Edition"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Cross"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Ege"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Falcon"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Felix"
                                                )
                                            )
                                        )
                                    )
                                ),
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 h3x768" },
                                    //Element
                                    React.createElement( "button", { id: "productFilter_VolumeBtn", name: "productFilter_VolumeBtn", className: "d-flex w-100 justify-content-between align-items-center p-0 m-0 text-start lh-1 t301rl", type: "button", onClick: this.Volume },
                                        //Element
                                        "Hacim"
                                    ),
                                    //Element
                                    React.createElement( "div", { id: "productFilter_Volume", className: "float-start w-100 p-0 m-0 mt-3 position-relative w32343" },
                                        //Element
                                        React.createElement( "div", { className: "float-start w-100 p-0 m-0 x2qb85" },
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "300 CC"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "450 CC"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "500 CC"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "630 CC"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "670 CC"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "670 CC"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "730 CC"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "750 CC"
                                                )
                                            )
                                        )
                                    )
                                ),
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 h3x768" },
                                    //Element
                                    React.createElement( "button", { id: "productFilter_ColorBtn", name: "productFilter_ColorBtn", className: "d-flex w-100 justify-content-between align-items-center p-0 m-0 text-start lh-1 t301rl", type: "button", onClick: this.Color },
                                        //Element
                                        "Renk"
                                    ),
                                    //Element
                                    React.createElement( "div", { id: "productFilter_Color", className: "float-start w-100 p-0 m-0 mt-3 position-relative w32343" },
                                        //Element
                                        React.createElement( "div", { className: "float-start w-100 p-0 m-0 x2qb85" },
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Siyah"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Bej"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Fusya"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Mavi"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Turuncu"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Lila"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Turkuaz"
                                                )
                                            ),
                                            //Element
                                            React.createElement( "div", { className: "float-start w-100 p-0 pt-1 m-0 mt-2 j2jf75" },
                                                //Element
                                                React.createElement( "input", { id: "", name: "", className: "float-start w-auto p-0 m-0 r6845x", value: "", type: "radio" } ),
                                                //Element
                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 fd9k67", htmlFor: "" },
                                                    //Element
                                                    "Kırmızı"
                                                )
                                            )
                                        )
                                    )
                                ),
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 h3x768" },
                                    //Element
                                    React.createElement( "button", { id: "productFilter_MaterielBtn", name: "productFilter_MaterielBtn", className: "d-flex w-100 justify-content-between align-items-center p-0 m-0 text-start lh-1 u611zr", type: "button" },
                                        //Element
                                        "Materyal"
                                    )
                                )
                            )
                        ),
                        //Element
                        React.createElement( Col, { md:9 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-5 iwb979" },
                                //Element
                                React.createElement( Row, {},
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( "button", { id: "Product_Filter", name: "Product_Filter", className: "float-start w-100 p-0 m-0 bg-transparent border-0 position-relative a610tx", type: "button" },
                                            //Element
                                            React.createElement( "picture", { className: "float-start w-100 p-0 m-0 s95uv3" },
                                                //Element
                                                React.createElement( "img", { alt: "Mataralar", title: "Mataralar", src: "https://cdn.rengademo.site/images/052.png", width: "223", height: "99" } )
                                            ),
                                            //Element
                                            React.createElement( "h3", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 position-absolute start-0 top-0 q9754e" },
                                                //Element
                                                "Mataralar"
                                            )
                                        )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( "button", { id: "Product_Filter", name: "Product_Filter", className: "float-start w-100 p-0 m-0 bg-transparent border-0 position-relative a610tx", type: "button" },
                                            //Element
                                            React.createElement( "picture", { className: "float-start w-100 p-0 m-0 s95uv3" },
                                                //Element
                                                React.createElement( "img", { alt: "Mutfak Eşyaları", title: "Mutfak Eşyaları", src: "https://cdn.rengademo.site/images/053.png", width: "223", height: "99" } )
                                            ),
                                            //Element
                                            React.createElement( "h3", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 position-absolute start-0 top-0 q9754e" },
                                                //Element
                                                "Mutfak Eşyaları"
                                            )
                                        )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( "button", { id: "Product_Filter", name: "Product_Filter", className: "float-start w-100 p-0 m-0 bg-transparent border-0 position-relative a610tx", type: "button" },
                                            //Element
                                            React.createElement( "picture", { className: "float-start w-100 p-0 m-0 s95uv3" },
                                                //Element
                                                React.createElement( "img", { alt: "Bebek Ürünleri", title: "Bebek Ürünleri", src: "https://cdn.rengademo.site/images/054.png", width: "223", height: "99" } )
                                            ),
                                            //Element
                                            React.createElement( "h3", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 position-absolute start-0 top-0 q9754e" },
                                                //Element
                                                "Bebek Ürünleri"
                                            )
                                        )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( "button", { id: "Product_Filter", name: "Product_Filter", className: "float-start w-100 p-0 m-0 bg-transparent border-0 position-relative a610tx", type: "button" },
                                            //Element
                                            React.createElement( "picture", { className: "float-start w-100 p-0 m-0 s95uv3" },
                                                //Element
                                                React.createElement( "img", { alt: "Çocuk Ürünleri", title: "Çocuk Ürünleri", src: "https://cdn.rengademo.site/images/055.png", width: "223", height: "99" } )
                                            ),
                                            //Element
                                            React.createElement( "h3", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 position-absolute start-0 top-0 q9754e" },
                                                //Element
                                                "Çocuk Ürünleri"
                                            )
                                        )
                                    )
                                )
                            ),
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 od8w32" },
                                //Element
                                React.createElement( Row, {},
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Silikon Giydirmeli Matara", Image: "061.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Buz Hazneli Matara", Image: "061.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Atlas 630 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Silikon Giydirmeli Matara", Image: "061.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Buz Hazneli Matara", Image: "061.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Atlas 630 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:6 },
                                        //Element
                                        React.createElement( Featured, { ID: "0", Title: "Falcon 630 cc", Summary: "Boyalı Desenli Pipetli Matara", Image: "066.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:6 },
                                        //Element
                                        React.createElement( Row, {},
                                            //Element
                                            React.createElement( Col, { md:6 },
                                                //Element
                                                React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                            ),
                                            //Element
                                            React.createElement( Col, { md:6 },
                                                //Element
                                                React.createElement( Card, { ID: "0", Title: "Atlas 630 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                            ),
                                            //Element
                                            React.createElement( Col, { md:6 },
                                                //Element
                                                React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                            ),
                                            //Element
                                            React.createElement( Col, { md:6 },
                                                //Element
                                                React.createElement( Card, { ID: "0", Title: "Atlas 630 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                            )
                                        )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( Col, { md:3 },
                                        //Element
                                        React.createElement( Card, { ID: "0", Title: "Atlas 630 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                    )
                                )
                            )
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
export default Default;