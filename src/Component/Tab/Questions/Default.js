//Install
import React, { Component } from "react";
//Install
import { Container, Row, Col } from "react-bootstrap";
//Install
import Breadcrumb from "../../Shortcode/Breadcrumb/Default";
//Install
import Question from "../../Shortcode/Question/Default";

//Element
class Default extends Component {
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
                React.createElement( "section", { className: "float-start w-100 p-0 m-0 u562ab" },
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
                                        "Renga S.S.S."
                                    ),
                                    //Element
                                    React.createElement( Breadcrumb, { ID: "0", Title: "S.S.S.", Target: "/sikca-sorulan-sorular" } )
                                )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 g1975z" },
                //Element
                React.createElement( "h2", { className: "float-start w-100 p-0 m-0 text-uppercase m9r502" },
                    //Element
                    "Sıkça Sorulan Sorular"
                ),
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 hj87o0" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 ps-5 pe-5 m-0 mt-5 md10b7" },
                                //Element
                                React.createElement( Question, { ID: "0", Title: "Plastik ürünler sağlığa zararlı mıdır?", Summary: "Tüm plastik ürünlerimiz uluslararası gıdaya uygunluk sertifikaları olan hammaddelerden üretilmiştir. Bu belgelere sitemizin sertifikalar kategorisinden ulaşabilirsiniz.", Target: "/" } ),
                                //Element
                                React.createElement( Question, { ID: "0", Title: "Plastik parçalı ürünler bulaşık makinesinde yıkanabilir mi?", Summary: "", Target: "/" } ),
                                //Element
                                React.createElement( Question, { ID: "0", Title: "Kimse matarayı tek kullanım için almıyordu. Ürünü kullandıktan sonra farkettim yoksa iade ederdim. Böyle bir durumda ne yapmalıyım?", Summary: "", Target: "/" } ),
                                //Element
                                React.createElement( Question, { ID: "0", Title: "Desenli ve boyalı ürünlerinizi bulaşık makinesinde yıkayabilir miyim?", Summary: "", Target: "/" } ),
                                //Element
                                React.createElement( Question, { ID: "0", Title: "Aradığım ürünleri nerelerde bulabilirim?", Summary: "", Target: "/" } )
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