//Install
import React, { Component } from "react";
//Install
import { Container, Row, Col } from "react-bootstrap";
//Install
import Breadcrumb from "../../Shortcode/Breadcrumb/Default";

//Element
class Application extends Component {
    //Element
    constructor(){
        //Element
        super()
        //Element
        this.state = {
            //Element
            name: "React"
        }
        //Element
        this.onChange = this.onChange.bind( this );
    }
    //Element
    onChange(event) {
        //Element
        this.setState({
            //Element
            Selected: event.target.value
        })
    }
    //Element
    componentDidMount(){
        //Element
        document.title = "Renga ®"
    }
    //Element
    render() {
        //Element
        const Content = React.createElement( "main", { className: "float-start w-100 p-0 m-0 k0885p" },
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 position-relative n4a725" },
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 u09dl7" },
                    //Element
                    React.createElement( Container, {},
                        //Element
                        React.createElement( Row, {},
                            //Element
                            React.createElement( Col, { md:12 },
                                //Element
                                React.createElement( "div", { className: "d-flex w-100 flex-column justify-content-center align-items-center p-0 m-0 v89t1n" },
                                    //Element
                                    React.createElement( "h1", { className: "float-start w-auto p-0 m-0 position-relative t4n1r0" },
                                        //Element
                                        "İnsan Kaynakları"
                                    ),
                                    //Element
                                    React.createElement( Breadcrumb, { ID: "0", Title: "İnsan Kaynakları", Target: "/insan-kaynaklari" } )
                                )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 t46604" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 y422cf" },
                                //Element
                                React.createElement( "h2", { className: "float-start w-100 p-0 m-0 mt-5 text-center lh-1 m8591s" },
                                    //Element
                                    "İş Başvuru Formu"
                                )
                            )
                        ),
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "form", { className: "float-start w-100 p-0 m-0 y422cf", method: "GET" },
                                //Element
                                React.createElement( "h2", { className: "float-start w-100 p-0 pb-2 m-0 mt-3 n90r54" },
                                    //Element
                                    "Kişisel Bilgiler"
                                ),
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 yf340s" },
                                    //Element
                                    React.createElement( Row, {},
                                        //Element
                                        React.createElement( Col, { md: "9 offset-md-3" },
                                            //Element
                                            React.createElement( Row, {},
                                                //Element
                                                React.createElement( Col, { md:6 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Adınız"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Person", name: "Career_Person", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:6 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Soyadınız"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Surname", name: "Career_Surname", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:6 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Adres"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Address0", name: "Career_Address0", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Address1", name: "Career_Address1", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-3 o306y5", type: "text", required: "required" } ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Address2", name: "Career_Address2", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-3 o306y5", type: "text", required: "required" } ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Address3", name: "Career_Address3", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-3 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:6 } ),
                                                //Element
                                                React.createElement( Col, { md:6 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "E-Posta"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_eMail", name: "Career_eMail", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "email", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:6 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Cep Telefon Numarası"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Phone", name: "Career_Phone", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "tel", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:6 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Cinsiyet"
                                                        ),
                                                        //Element
                                                        React.createElement( "fieldset", { className: "float-start w-100 p-0 m-0" },
                                                            //Element
                                                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-2 v264h0" },
                                                                //Element
                                                                React.createElement( "input", { id: "Career_Man_CheckBox", name: "Career_Man_CheckBox", className: "float-start w-auto p-0 m-0 c7p65m", value: "Bay", type: "radio", checked: this.state.Selected === "Bay", onChange: this.onChange } ),
                                                                //Element
                                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 kr332c", htmlFor: "Career_Man_CheckBox" },
                                                                    //Element
                                                                    "Bay"
                                                                )
                                                            ),
                                                            //Element
                                                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-2 v264h0" },
                                                                //Element
                                                                React.createElement( "input", { id: "Career_Woman_CheckBox", name: "Career_Woman_CheckBox", className: "float-start w-auto p-0 m-0", value: "Bayan", type: "radio", checked: this.state.Selected === "Bayan", onChange: this.onChange } ),
                                                                //Element
                                                                React.createElement( "label", { className: "float-start w-auto p-0 m-0 ms-2 lh-1 kr332c", htmlFor: "Career_Man_CheckBox" },
                                                                    //Element
                                                                    "Bayan"
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:6 } ),
                                                //Element
                                                React.createElement( Col, { md:6 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Doğum Yeri"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_BirthCity", name: "Career_BirthCity", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:6 } ),
                                                //Element
                                                React.createElement( Col, { md:6 },
                                                    //Element
                                                    React.createElement( Row, {},
                                                        //Element
                                                        React.createElement( Col, { md:12 },
                                                            //Element
                                                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                                //Element
                                                                React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                                    //Element
                                                                    "Doğum Tarihi"
                                                                )
                                                            )
                                                        ),
                                                        //Element
                                                        React.createElement( Col, { md:4 },
                                                            //Element
                                                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 gx436f" },
                                                                //Element
                                                                React.createElement( "input", { id: "Career_BirthMonth", name: "Career_BirthMonth", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", placeholder: "Ay", type: "text", required: "required" } )
                                                            )
                                                        ),
                                                        //Element
                                                        React.createElement( Col, { md:4 },
                                                            //Element
                                                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 gx436f" },
                                                                //Element
                                                                React.createElement( "input", { id: "Career_BirthDay", name: "Career_BirthDay", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", placeholder: "Gün", type: "text", required: "required" } )
                                                            )
                                                        ),
                                                        //Element
                                                        React.createElement( Col, { md:4 },
                                                            //Element
                                                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 gx436f" },
                                                                //Element
                                                                React.createElement( "input", { id: "Career_BirthYear", name: "Career_BirthYear", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", placeholder: "Yıl", type: "text", required: "required" } )
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                //Element
                                React.createElement( "h2", { className: "float-start w-100 p-0 pb-2 m-0 mt-3 n90r54" },
                                    //Element
                                    "Eğitim Bilgileri"
                                ),
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 yf340s" },
                                    //Element
                                    React.createElement( Row, {},
                                        //Element
                                        React.createElement( Col, { md: "9 offset-md-3" },
                                            //Element
                                            React.createElement( Row, {},
                                                //Element
                                                React.createElement( Col, { md:6 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "En Son Mezun Olduğunuz Okul"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Scholl", name: "Career_Scholl", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:6 } ),
                                                //Element
                                                React.createElement( Col, { md:6 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Bölüm"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Scholl_Department", name: "Career_Scholl_Department", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:6 } ),
                                                //Element
                                                React.createElement( Col, { md:2 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Yıl"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Scholl_Year", name: "Career_Scholl_Year", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                //Element
                                React.createElement( "h2", { className: "float-start w-100 p-0 pb-2 m-0 mt-3 n90r54" },
                                    //Element
                                    "İş Deneyimleri"
                                ),
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 yf340s" },
                                    //Element
                                    React.createElement( Row, {},
                                        //Element
                                        React.createElement( Col, { md: "9 offset-md-3" },
                                            //Element
                                            React.createElement( Row, {},
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Şirketin Adı"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Experience_name0", name: "Career_Experience_name0", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Pozisyon"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Position0", name: "Career_Position0", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Giriş Yılı"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Entry_Year0", name: "Career_Entry_Year0", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Çıkış Yılı"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Release_Year0", name: "Career_Release_Year0", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Şirketin Adı"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Experience_name1", name: "Career_Experience_name1", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Pozisyon"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Position1", name: "Career_Position1", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Giriş Yılı"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Entry_Year1", name: "Career_Entry_Year1", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Çıkış Yılı"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Release_Year1", name: "Career_Release_Year1", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Şirketin Adı"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Experience_name2", name: "Career_Experience_name2", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Pozisyon"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Position2", name: "Career_Position2", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Giriş Yılı"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Entry_Year2", name: "Career_Entry_Year2", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                ),
                                                //Element
                                                React.createElement( Col, { md:3 },
                                                    //Element
                                                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 gx436f" },
                                                        //Element
                                                        React.createElement( "span", { className: "float-start w-100 p-0 m-0 mb-1 b05r1e" },
                                                            //Element
                                                            "Çıkış Yılı"
                                                        ),
                                                        //Element
                                                        React.createElement( "input", { id: "Career_Release_Year2", name: "Career_Release_Year2", className: "float-start w-100 p-0 ps-3 pe-3 m-0 mt-2 o306y5", type: "text", required: "required" } )
                                                    )
                                                )
                                            )
                                        )
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
export default Application;