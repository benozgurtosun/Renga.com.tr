//Install
import React, { Component } from "react";
//Install
import { Container, Row, Col } from "react-bootstrap";
//Install
import { Swiper, SwiperSlide } from "swiper/react";
//Install
import { Navigation, Pagination, Autoplay } from "swiper/modules";
//Install
import { ReactComponent as Prev } from "../../../Media/Icon/017.svg";
//Install
import { ReactComponent as Next } from "../../../Media/Icon/018.svg";
//Install
import Breadcrumb from "../../Shortcode/Breadcrumb/Default";
//Install
import Image from "../../Shortcode/Factory/Default";

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
        const Slider = {
            //Element
            spaceBetween         : "0",
            //Element
            slidesPerView        : "3",
            //Element
            navigation           : {
                //Element
                nextEl           : ".q3836l",
                //Element
                prevEl           : ".m5v463"
            },
            //Element
            centeredSlides       : true,
            //Element
            roundLengths         : true,
            //Element
            loop                 : true,
            //Element
            initialSlide         : 3,
            //Element
            breakpoints     : {
                //Element
                320:{
                    //Element
                    slidesPerView  : 1,
                    //Element
                    initialSlide   : 1,
                    //Element
                    centeredSlides : false,
                    //Element
                    roundLengths   : false
                },
                //Element
                360:{
                    //Element
                    slidesPerView  : 1,
                    //Element
                    initialSlide   : 1,
                    //Element
                    centeredSlides : false,
                    //Element
                    roundLengths   : false
                },
                //Element
                480:{
                    //Element
                    slidesPerView  : 1,
                    //Element
                    initialSlide   : 1,
                    //Element
                    centeredSlides : false,
                    //Element
                    roundLengths   : false
                },
                //Element
                504:{
                    //Element
                    slidesPerView  : 1,
                    //Element
                    initialSlide   : 1,
                    //Element
                    centeredSlides : false,
                    //Element
                    roundLengths   : false
                },
                //Element
                600:{
                    //Element
                    slidesPerView  : 1,
                    //Element
                    initialSlide   : 1,
                    //Element
                    centeredSlides : false,
                    //Element
                    roundLengths   : false
                },
                //Element
                720:{
                    //Element
                    slidesPerView  : 2,
                    //Element
                    initialSlide   : 2,
                    //Element
                    centeredSlides : false,
                    //Element
                    roundLengths   : false
                },
                //Element
                768:{
                    //Element
                    slidesPerView  : 2,
                    //Element
                    initialSlide   : 2,
                    //Element
                    centeredSlides : false,
                    //Element
                    roundLengths   : false
                },
                //Element
                1024:{
                    //Element
                    slidesPerView  : 2,
                    //Element
                    initialSlide   : 2,
                    //Element
                    centeredSlides : false,
                    //Element
                    roundLengths   : false
                },
                //Element
                1280:{
                    //Element
                    slidesPerView : 3
                }
            },
            //Element
            modules              : [ Navigation, Pagination, Autoplay ]
        }
        //Element
        const Content = React.createElement( "main", { className: "float-start w-100 p-0 m-0 k0885p" },
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 position-relative n4a725" },
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 x8r65r" },
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
                                        "Renga Fabrikamız"
                                    ),
                                    //Element
                                    React.createElement( Breadcrumb, { ID: "0", Title: "Fabrikamız", Target: "/fabrikamiz" } )
                                )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 ej826o" },
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-5 position-relative ya879e" },
                    //Element
                    React.createElement( Swiper, { className: "float-start w-100 position-relative overflow-hidden", ...Slider },
                        //Element
                        React.createElement( SwiperSlide, {},
                            //Element
                            React.createElement( Image, { ID: "0", Title: "", Image: "028.png", Target: "/" } )
                        ),
                        //Element
                        React.createElement( SwiperSlide, {},
                            //Element
                            React.createElement( Image, { ID: "0", Title: "", Image: "027.png", Target: "/" } )
                        ),
                        //Element
                        React.createElement( SwiperSlide, {},
                            //Element
                            React.createElement( Image, { ID: "0", Title: "", Image: "028.png", Target: "/" } )
                        ),
                        //Element
                        React.createElement( SwiperSlide, {},
                            //Element
                            React.createElement( Image, { ID: "0", Title: "Velimeşe Fabrika Depo Alanı", Image: "026.png", Target: "/" } )
                        ),
                        //Element
                        React.createElement( SwiperSlide, {},
                            //Element
                            React.createElement( Image, { ID: "0", Title: "", Image: "027.png", Target: "/" } )
                        )
                    ),
                    //Element
                    React.createElement( "div", { className: "float-start w-100 p-0 m-0 co074r" },
                        //Element
                        React.createElement( "button", { className: "float-start w-100 p-0 m-0 bg-transparent border-0 position-absolute m5v463", type: "button" },
                            //Element
                            React.createElement( Prev, {} )
                        ),
                        //Element
                        React.createElement( "button", { className: "float-start w-100 p-0 m-0 bg-transparent border-0 position-absolute q3836l", type: "button" },
                            //Element
                            React.createElement( Next, {} )
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