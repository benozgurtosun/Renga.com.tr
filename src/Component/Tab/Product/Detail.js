//Install
import React, { Component } from "react";
//Install
import { Container, Row, Col } from "react-bootstrap";
//Install
import { ReactComponent as Prev } from "../../../Media/Icon/012.svg";
//Install
import { ReactComponent as Next } from "../../../Media/Icon/013.svg";
//Install
import { Swiper, SwiperSlide } from "swiper/react";
//Install
import { Navigation, Pagination, Autoplay } from "swiper/modules";
//Install
import Card from "../../Shortcode/Product/Card";
//Install
import Thumb from "../../Shortcode/Product/Thumbs";
//Install
import Image from "../../Shortcode/Product/Image";
//Install
import Toggle from "../../Shortcode/Product/Toggle";
//Install
import Breadcrumb from "../../Shortcode/Breadcrumb/Product";

//Element
class Detail extends Component {
    //Element
    componentDidMount(){
        //Element
        document.title = "Renga ®"
        //Element
        this.Shadow()
    }
    //Element
    Shadow = () => {
        //Element
        let Header = document.getElementsByClassName( "g283uf" )[0]
        //Element
        Header.classList.add( "q31v3i" )
    }
    //Element
    render() {
        //Element
        const Slider = {
            //Element
            spaceBetween    : "12",
            //Element
            slidesPerView   : "4",
            //Element
            navigation      : {
                //Element
                nextEl      : ".s525qg",
                //Element
                prevEl      : ".j2p09b"
            },
            //Element
            autoplay      : {
                //Element
                delay     : 3000
            },
            //Element
            loop            : true,
            //Element
            freeMode        : true,
            //Element
            breakpoints     : {
                //Element
                320:{
                    //Element
                    slidesPerView : 1
                },
                //Element
                360:{
                    //Element
                    slidesPerView : 1
                },
                //Element
                480:{
                    //Element
                    slidesPerView : 1
                },
                //Element
                504:{
                    //Element
                    slidesPerView : 1
                },
                //Element
                600:{
                    //Element
                    slidesPerView : 1
                },
                //Element
                768:{
                    //Element
                    slidesPerView : 1
                },
                //Element
                991:{
                    //Element
                    slidesPerView : 3
                },
                //Element
                1024:{
                    //Element
                    slidesPerView : 4
                },
                //Element
                1280:{
                    //Element
                    slidesPerView : 4
                }
            },
            //Element
            modules         : [ Navigation, Pagination, Autoplay ]
        }
        //Element
        const Thumbs = {
            //Element
            direction     : "vertical",
            //Element
            effect        : "slide",
            //Element
            slidesPerView : "3",
            //Element
            freeMode      : true,
            //Element
            autoplay      : {
                //Element
                delay                : 3000,
                //Element
                reverseDirection     : true,
                //Element
                disableOnInteraction : false,
            },
            //Element
            breakpoints     : {
                //Element
                320:{
                    //Element
                    slidesPerView : 2,
                    //Element
                    direction     : "horizontal",
                    //Element
                    autoplay      : {
                        //Element
                        delay                : 3000,
                        //Element
                        reverseDirection     : false,
                        //Element
                        disableOnInteraction : false,
                    }
                },
                //Element
                360:{
                    //Element
                    slidesPerView : 1,
                    //Element
                    direction     : "horizontal",
                    //Element
                    autoplay      : {
                        //Element
                        delay                : 3000,
                        //Element
                        reverseDirection     : false,
                        //Element
                        disableOnInteraction : false,
                    }
                },
                //Element
                480:{
                    //Element
                    slidesPerView : 1,
                    //Element
                    direction     : "horizontal",
                    //Element
                    autoplay      : {
                        //Element
                        delay                : 3000,
                        //Element
                        reverseDirection     : false,
                        //Element
                        disableOnInteraction : false,
                    }
                },
                //Element
                504:{
                    //Element
                    slidesPerView : 1,
                    //Element
                    direction     : "horizontal",
                    //Element
                    autoplay      : {
                        //Element
                        delay                : 3000,
                        //Element
                        reverseDirection     : false,
                        //Element
                        disableOnInteraction : false,
                    }
                },
                //Element
                600:{
                    //Element
                    slidesPerView : 1,
                    //Element
                    direction     : "horizontal",
                    //Element
                    autoplay      : {
                        //Element
                        delay                : 3000,
                        //Element
                        reverseDirection     : false,
                        //Element
                        disableOnInteraction : false,
                    }
                },
                //Element
                768:{
                    //Element
                    slidesPerView : 1,
                    //Element
                    direction     : "horizontal"
                },
                //Element
                1024:{
                    //Element
                    slidesPerView : 3
                },
                //Element
                1280:{
                    //Element
                    slidesPerView : 3
                }
            },
            //Element
            modules         : [ Navigation, Pagination, Autoplay ]
        }
        //Element
        const Content = React.createElement( "main", { className: "float-start w-100 p-0 m-0 k0885p" },
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 u8p957" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-5 y6037r" },
                                //Element
                                React.createElement( Breadcrumb, { ID: "0", Title: "Saga 730 cc Silikon Giydirmeli Matara", Target: "/urun-detay" } )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 p103b5" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 y7c4c5" },
                                //Element
                                React.createElement( Swiper, { className: "float-start w-100 position-relative overflow-hidden", ...Thumbs },
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Thumb, { ID: "0", Title: "Saga 730 cc Silikon Giydirmeli Matara", Image: "070.jpg", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Thumb, { ID: "0", Title: "Saga 730 cc Silikon Giydirmeli Matara", Image: "071.jpg", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Thumb, { ID: "0", Title: "Saga 730 cc Silikon Giydirmeli Matara", Image: "072.jpg", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Thumb, { ID: "0", Title: "Saga 730 cc Silikon Giydirmeli Matara", Image: "070.jpg", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Thumb, { ID: "0", Title: "Saga 730 cc Silikon Giydirmeli Matara", Image: "071.jpg", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Thumb, { ID: "0", Title: "Saga 730 cc Silikon Giydirmeli Matara", Image: "072.jpg", Target: "/" } )
                                    )
                                )
                            )
                        ),
                        //Element
                        React.createElement( Col, { md:5 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 sn91s7" },
                                //Element
                                React.createElement( Image, { ID: "0", Title: "Saga 730 cc Silikon Giydirmeli Matara", Image: "070.jpg", Target: "/" } )
                            )
                        ),
                        //Element
                        React.createElement( Col, { md:5 },
                            //Element
                            React.createElement( "div", { className: "d-flex w-100 flex-column justify-content-center align-items-start p-0 m-0 mt-4 gb545c" },
                                //Element
                                React.createElement( "h1", { className: "float-start w-auto p-0 m-0 lh-1 zx8136" },
                                    //Element
                                    "Saga 730 cc"
                                ),
                                //Element
                                React.createElement( "h2", { className: "float-start w-auto p-0 m-0 mt-2 e526yh" },
                                    //Element
                                    "Silikon Giydirmeli Matara"
                                ),
                                //Element
                                React.createElement( "div", { className: "d-flex w-100 justify-content-start align-items-start p-0 m-0 v0d189" },
                                    //Element
                                    React.createElement( "label", { className: "float-start w-auto p-0 m-0 mt-3 uz325w" },
                                        //Element
                                        "Renkler : "
                                    ),
                                    //Element
                                    React.createElement( "ul", { className: "float-start w-auto p-0 pt-1 m-0 mt-3 ms-3 hs382u" },
                                        //Element
                                        React.createElement( "li", { className: "float-start w-auto" },
                                            //Element
                                            React.createElement( "span", { className: "float-start w-auto p-0 m-0 rounded-circle" } )
                                        ),
                                        //Element
                                        React.createElement( "li", { className: "float-start w-auto" },
                                            //Element
                                            React.createElement( "span", { className: "float-start w-auto p-0 m-0 ms-2 rounded-circle" } )
                                        ),
                                        //Element
                                        React.createElement( "li", { className: "float-start w-auto" },
                                            //Element
                                            React.createElement( "span", { className: "float-start w-auto p-0 m-0 ms-2 rounded-circle" } )
                                        )
                                    )
                                ),
                                //Element
                                React.createElement( "p", { className: "float-start w-auto p-0 pb-3 m-0 mt-3 k9m80f" },
                                    //Element
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a lectus nec erat mollis euismod. Morbi tincidunt ligula at purus cursus, a facilisis augue aliquam."
                                ),
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-2 s7f130" },
                                    //Element
                                    React.createElement( Toggle, { ID: "0", Title: "Bakım", Summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a lectus nec erat mollis euismod.", Target: "/" } ),
                                    //Element
                                    React.createElement( Toggle, { ID: "0", Title: "Özellikler", Summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a lectus nec erat mollis euismod.", Target: "/" } ),
                                    //Element
                                    React.createElement( Toggle, { ID: "0", Title: "S.S.S", Summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a lectus nec erat mollis euismod.", Target: "/" } )
                                )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 ku6420" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-5 z87x8d" },
                                //Element
                                React.createElement( "h3", { className: "float-start w-100 p-0 pb-3 m-0 text-center tp504t" },
                                    //Element
                                    "Bunlara Bakın"
                                )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 j563d9" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 t0h17s" },
                                //Element
                                React.createElement( Swiper, { className: "float-start w-100 position-relative overflow-hidden", ...Slider },
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( "div", { className: "float-start w-100 p-0 m-0 od8w32" },
                                            //Element
                                            React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Silikon Giydirmeli Matara", Image: "061.png", Target: "/" } )
                                        )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( "div", { className: "float-start w-100 p-0 m-0 od8w32" },
                                            //Element
                                            React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Buz Hazneli Matara", Image: "061.png", Target: "/" } )
                                        )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( "div", { className: "float-start w-100 p-0 m-0 od8w32" },
                                            //Element
                                            React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                        )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( "div", { className: "float-start w-100 p-0 m-0 od8w32" },
                                            //Element
                                            React.createElement( Card, { ID: "0", Title: "Atlas 630 cc", Summary: "Süzgeçli Matara", Image: "061.png", Target: "/" } )
                                        )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( "div", { className: "float-start w-100 p-0 m-0 od8w32" },
                                            //Element
                                            React.createElement( Card, { ID: "0", Title: "Saga 730 cc", Summary: "Silikon Giydirmeli Matara", Image: "061.png", Target: "/" } )
                                        )
                                    )
                                ),
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 position-absolute y48f7l" },
                                    //Element
                                    React.createElement( "button", { className: "float-start w-auto bg-transparent border-0 j2p09b", type: "button" },
                                        //Element
                                        React.createElement( Prev, {} )
                                    ),
                                    //Element
                                    React.createElement( "button", { className: "float-end w-auto bg-transparent border-0 s525qg", type: "button" },
                                        //Element
                                        React.createElement( Next, {} )
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
export default Detail;