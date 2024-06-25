//Install
import React, { Component } from "react";
//Install
import { Container, Row, Col } from "react-bootstrap";
//Install
import { Swiper, SwiperSlide } from "swiper/react";
//Install
import { Navigation, Pagination, Autoplay } from "swiper/modules";
//Install
import Headline from "./Content/Headline";
//Install
import Round from "./Content/Round";
//Install
import Group from "./Content/Group";
//Install
import Award from "./Content/Award";
//Install
import Tricker from "./Content/Tricker";
//Install
import Blog from "./Content/Blog";
//Install
import Video from "./Content/Video";
//Install
import One from "./Content/Blog/Navigation";
//Install
import Two from "./Content/Video/Navigation";
//Install
import Reference from "./Content/Reference";

//Element
class Main extends Component {
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
            spaceBetween    : "0",
            //Element
            slidesPerView   : "1",
            //Element
            autoplay        : {
                //Element
                delay       : 5000
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
                1024:{
                    //Element
                    slidesPerView : 1
                },
                //Element
                1280:{
                    //Element
                    slidesPerView : 1
                }
            },
            //Element
            modules         : [ Navigation, Pagination, Autoplay ]
        }
        //Element
        const Blogs = {
            //Element
            spaceBetween    : "16",
            //Element
            slidesPerView   : "4",
            //Element
            navigation      : {
                //Element
                nextEl      : "#Blog_Next",
                //Element
                prevEl      : "#Blog_Prev"
            },
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
                1024:{
                    //Element
                    slidesPerView : 3
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
        const Videos = {
            //Element
            spaceBetween    : "16",
            //Element
            slidesPerView   : "4",
            //Element
            freeMode        : true,
            //Element
            navigation      : {
                //Element
                nextEl      : "#Video_BlockNext",
                //Element
                prevEl      : "#Video_BlockPrev"
            },
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
                1024:{
                    //Element
                    slidesPerView : 3
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
        const Content = React.createElement( "main", { className: "float-start w-100 p-0 m-0 z3k56e" },
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 cqd851" },
                //Element
                React.createElement( Swiper, { className: "float-start w-100 position-relative overflow-hidden", ...Slider },
                    //Element
                    React.createElement( SwiperSlide, {},
                        //Element
                        React.createElement( Headline, { ID: "0", Title: "", Image: "000.png", Target: "/" } )
                    ),
                    //Element
                    React.createElement( SwiperSlide, {},
                        //Element
                        React.createElement( Headline, { ID: "0", Title: "", Image: "000.png", Target: "/" } )
                    ),
                    //Element
                    React.createElement( SwiperSlide, {},
                        //Element
                        React.createElement( Headline, { ID: "0", Title: "", Image: "000.png", Target: "/" } )
                    ),
                    //Element
                    React.createElement( SwiperSlide, {},
                        //Element
                        React.createElement( Headline, { ID: "0", Title: "", Image: "000.png", Target: "/" } )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 a5t428" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:4 },
                            //Element
                            React.createElement( "div", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 p9838t" },
                                //Element
                                React.createElement( Round, { ID: "1", Title: "Hakkımızda", Target: "/" } )
                            )
                        ),
                        //Element
                        React.createElement( Col, { md:4 },
                            //Element
                            React.createElement( "div", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 p9838t" },
                                //Element
                                React.createElement( Round, { ID: "2", Title: "Sürdürebilirlik", Target: "/" } )
                            )
                        ),
                        //Element
                        React.createElement( Col, { md:4 },
                            //Element
                            React.createElement( "div", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 p9838t" },
                                //Element
                                React.createElement( Round, { ID: "3", Title: "Misyon ve Vizyon", Target: "/" } )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 mt-5 h6045r" },
                //Element
                React.createElement( "div", { className: "float-start w-50 p-0 m-0 j330kh" },
                    //Element
                    React.createElement( Group, { ID: "0", Title: "Mataralar", Image: "001.png", Target: "/" } )
                ),
                //Element
                React.createElement( "div", { className: "float-start w-50 p-0 m-0 j330kh" },
                    //Element
                    React.createElement( Group, { ID: "0", Title: "Mutfak Eşyaları", Image: "002.png", Target: "/" } )
                ),
                //Element
                React.createElement( "div", { className: "float-start w-50 p-0 m-0 j330kh" },
                    //Element
                    React.createElement( Group, { ID: "0", Title: "Bebek Ürünleri", Image: "003.png", Target: "/" } )
                ),
                //Element
                React.createElement( "div", { className: "float-start w-50 p-0 m-0 j330kh" },
                    //Element
                    React.createElement( Group, { ID: "0", Title: "Çocuk Ürünleri", Image: "004.png", Target: "/" } )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 h5373t" },
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-3 p959ju" },
                    //Element
                    React.createElement( Container, {},
                        //Element
                        React.createElement( Row, {},
                            //Element
                            React.createElement( Col, { md:12 },
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 w56q8v" },
                                    //Element
                                    React.createElement( "h4", { className: "float-start w-100 p-0 m-0 text-uppercase lh-1 r1166g" },
                                        //Element
                                        "Ödüller"
                                    )
                                )
                            )
                        )
                    )
                ),
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 position-relative x85j4z" },
                    //Element
                    React.createElement( Container, {},
                        //Element
                        React.createElement( Row, {},
                            //Element
                            React.createElement( Col, { md:3 },
                                //Element
                                React.createElement( Award, { ID: "1", Title: "Good Design Award 2019", Image: "005.png", Target: "/" } )
                            ),
                            //Element
                            React.createElement( Col, { md:3 },
                                //Element
                                React.createElement( Award, { ID: "2", Title: "German Design Award Special 2022", Image: "006.png", Target: "/" } )
                            ),
                            //Element
                            React.createElement( Col, { md:3 },
                                //Element
                                React.createElement( Award, { ID: "3", Title: "Good Design Award 2021", Image: "007.png", Target: "/" } )
                            ),
                            //Element
                            React.createElement( Col, { md:3 },
                                //Element
                                React.createElement( Award, { ID: "4", Title: "Good Design Award 2024", Image: "008.png", Target: "/" } )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 mt-5 z7d34a" },
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 c565w8" },
                    //Element
                    React.createElement( "div", { className: "float-start p-0 m-0 a5i92c" },
                        //Element
                        React.createElement( Tricker, { ID: "0", Title: "Züchex 28. Uluslararası Züccaciye ve Hediyelik Eşya FUARINDAYIZ.", Target: "/" } ),
                        //Element
                        React.createElement( Tricker, { ID: "0", Title: "Züchex 28. Uluslararası Züccaciye ve Hediyelik Eşya FUARINDAYIZ.", Target: "/" } ),
                        //Element
                        React.createElement( Tricker, { ID: "0", Title: "Züchex 28. Uluslararası Züccaciye ve Hediyelik Eşya FUARINDAYIZ.", Target: "/" } ),
                        //Element
                        React.createElement( Tricker, { ID: "0", Title: "Züchex 28. Uluslararası Züccaciye ve Hediyelik Eşya FUARINDAYIZ.", Target: "/" } ),
                        //Element
                        React.createElement( Tricker, { ID: "0", Title: "Züchex 28. Uluslararası Züccaciye ve Hediyelik Eşya FUARINDAYIZ.", Target: "/" } )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 pt-5 pb-5 m-0 q25h43" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 u05ct2" },
                                //Element
                                React.createElement( "h6", { className: "float-start w-100 p-0 m-0 o5774u" },
                                    //Element
                                    "Blog"
                                )
                            )
                        ),
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 position-relative m26s4l" },
                                //Element
                                React.createElement( Swiper, { className: "float-start w-100 position-relative overflow-hidden", ...Blogs },
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Blog, { ID: "2", Title: "Atlas Matara İle Suyunuz Daha Sağlıklı ve Lezzetli!", Summary: "İnsan vücudunun %75-80 i sudur. İnsan vücudu yapısı gereği fazla su tüketimini destekleyen bir mekanizmaya sahiptir. Sağlık denildiğinde akla ilk gelen de sudur. Cildi temizleyip güzelleştirmesinden...", Time: "02 Temmuz 2024", Category: "Tasarım", Image: "009.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Blog, { ID: "7", Title: "Atlas Matara İle Suyunuz Daha Sağlıklı ve Lezzetli!", Summary: "İnsan vücudunun %75-80 i sudur. İnsan vücudu yapısı gereği fazla su tüketimini destekleyen bir mekanizmaya sahiptir. Sağlık denildiğinde akla ilk gelen de sudur. Cildi temizleyip güzelleştirmesinden...", Time: "02 Temmuz 2024", Category: "Tasarım", Image: "010.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Blog, { ID: "3", Title: "Atlas Matara İle Suyunuz Daha Sağlıklı ve Lezzetli!", Summary: "İnsan vücudunun %75-80 i sudur. İnsan vücudu yapısı gereği fazla su tüketimini destekleyen bir mekanizmaya sahiptir. Sağlık denildiğinde akla ilk gelen de sudur. Cildi temizleyip güzelleştirmesinden...", Time: "02 Temmuz 2024", Category: "Tasarım", Image: "011.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Blog, { ID: "4", Title: "Atlas Matara İle Suyunuz Daha Sağlıklı ve Lezzetli!", Summary: "İnsan vücudunun %75-80 i sudur. İnsan vücudu yapısı gereği fazla su tüketimini destekleyen bir mekanizmaya sahiptir. Sağlık denildiğinde akla ilk gelen de sudur. Cildi temizleyip güzelleştirmesinden...", Time: "02 Temmuz 2024", Category: "Tasarım", Image: "012.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Blog, { ID: "5", Title: "Atlas Matara İle Suyunuz Daha Sağlıklı ve Lezzetli!", Summary: "İnsan vücudunun %75-80 i sudur. İnsan vücudu yapısı gereği fazla su tüketimini destekleyen bir mekanizmaya sahiptir. Sağlık denildiğinde akla ilk gelen de sudur. Cildi temizleyip güzelleştirmesinden...", Time: "02 Temmuz 2024", Category: "Tasarım", Image: "013.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Blog, { ID: "1", Title: "Atlas Matara İle Suyunuz Daha Sağlıklı ve Lezzetli!", Summary: "İnsan vücudunun %75-80 i sudur. İnsan vücudu yapısı gereği fazla su tüketimini destekleyen bir mekanizmaya sahiptir. Sağlık denildiğinde akla ilk gelen de sudur. Cildi temizleyip güzelleştirmesinden...", Time: "02 Temmuz 2024", Category: "Tasarım", Image: "014.png", Target: "/" } )
                                    )
                                ),
                                //Element
                                React.createElement( One, {} )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 pt-5 pb-5 m-0 position-relative q541fx" },
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-5 ww6850" },
                    //Element
                    React.createElement( Container, {},
                        //Element
                        React.createElement( Row, {},
                            //Element
                            React.createElement( Col, { md:12 },
                                //Element
                                React.createElement( Two, {} )
                            )
                        )
                    )
                ),
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 y469po" },
                    //Element
                    React.createElement( Container, {},
                        //Element
                        React.createElement( Row, {},
                            //Element
                            React.createElement( Col, { md:12 },
                                //Element
                                React.createElement( Swiper, { className: "float-start w-100 position-relative overflow-hidden", ...Videos },
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Video, { ID: "1", Title: "", Duracation: "00:46", Image: "016.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Video, { ID: "2", Title: "", Duracation: "00:46", Image: "017.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Video, { ID: "3", Title: "", Duracation: "00:46", Image: "018.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Video, { ID: "4", Title: "", Duracation: "00:46", Image: "016.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Video, { ID: "5", Title: "", Duracation: "00:46", Image: "017.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Video, { ID: "6", Title: "", Duracation: "00:46", Image: "018.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Video, { ID: "6", Title: "", Duracation: "00:46", Image: "016.png", Target: "/" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Video, { ID: "6", Title: "", Duracation: "00:46", Image: "017.png", Target: "/" } )
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            //Element
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 zw333n" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-5 n40a3u" },
                                //Element
                                React.createElement( "h6", { className: "float-start w-100 p-0 m-0 lh-1 e1470t" },
                                    //Element
                                    "Referanslar"
                                )
                            )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Yapı Market", Image: "012.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Migros", Image: "002.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Carrefour", Image: "003.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Koçtaş", Image: "004.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Bim", Image: "005.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "English Home", Image: "006.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "EVE Online", Image: "007.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Şok", Image: "008.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "A 101", Image: "009.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Adese", Image: "010.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Tekzen", Image: "011.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Migros", Image: "002.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Carrefour", Image: "003.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Koçtaş", Image: "004.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Bim", Image: "005.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "English Home", Image: "006.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "EVE Online", Image: "007.svg", Target: "/" } )
                        ),
                        //Element
                        React.createElement( Col, { md:2 },
                            //Element
                            React.createElement( Reference, { ID: "0", Title: "Şok", Image: "008.svg", Target: "/" } )
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
export default Main;