//Install
import React, { Component } from "react";
//Install
import { Container, Row, Col } from "react-bootstrap";
//Install
import { Swiper, SwiperSlide } from "swiper/react";
//Install
import { Navigation, Pagination, Autoplay } from "swiper/modules";
//Install
import { ReactComponent as Prev } from "../../../Media/Icon/012.svg";
//Install
import { ReactComponent as Next } from "../../../Media/Icon/013.svg";
//Install
import Small from "../../Shortcode/Blog/Small";


//Element
class Article extends Component {
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
            slidesPerView   : "3",
            //Element
            navigation      : {
                //Element
                nextEl      : ".s525qg",
                //Element
                prevEl      : ".j2p09b"
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
                720:{
                    //Element
                    slidesPerView : 2
                },
                //Element
                768:{
                    //Element
                    slidesPerView : 2
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
            React.createElement( "section", { className: "float-start w-100 p-0 m-0 c10406" },
                //Element
                React.createElement( Container, {},
                    //Element
                    React.createElement( Row, {},
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-5 q1e14m" },
                                //Element
                                React.createElement( "h1", { className: "float-start w-100 p-0 m-0 mt-4 text-center cx8v38" },
                                    //Element
                                    "Atlas Matara İle Suyunuz Daha Sağlıklı ve Lezzetli!"
                                ),
                                //Element
                                React.createElement( "div", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 a4r730" },
                                    //Element
                                    React.createElement( "span", { className: "float-start w-auto p-0 m-0 mt-3 ng230w" },
                                        //Element
                                        "02 Temmuz, 2024"
                                    ),
                                    //Element
                                    React.createElement( "span", { className: "float-start w-auto p-0 m-0 mt-3 p229n4" },
                                        //Element
                                        "Tasarım"
                                    )
                                ),
                                //Element
                                React.createElement( "picture", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 mt-4 s40u1s" },
                                    //Element
                                    React.createElement( "img", { alt: "Atlas Matara İle Suyunuz Daha Sağlıklı ve Lezzetli!", title: "Atlas Matara İle Suyunuz Daha Sağlıklı ve Lezzetli!", src: "https://cdn.rengademo.site/images/014.png", width: "1296", height: "730" } )
                                ),
                                //Element
                                React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-4 p20c74" },
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 o4011u" },
                                        //Element
                                        "İnsan vücudunun %75-80 i sudur. İnsan vücudu yapısı gereği fazla su tüketimini destekleyen bir mekanizmaya sahiptir. Sağlık denildiğinde akla ilk gelen de sudur. Cildi temizleyip güzelleştirmesinden tutun da romatizmal rahatsızlıkları azaltmaya kadar birçok avantajı vardır."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 o4011u" },
                                        //Element
                                        "Bazı bireyler su tüketiminde oldukça zorlanmaktadır., kimi zaman su içmek akıllarına bile gelmez. Fakat ilerleyen dönemlerde karşılaşılan rahatsızlıkları engellemek için hızlı çözüm üretilemeyecektir. Hiç su tüketemeyen bireyler için küçük bir alışkanlık edinmeleri işlerini kolaylaştıracaktır. Bu alışkanlık her gün evden çıkmadan önce bir şişe suyu yanlarında bulundurmaları ile başlayacak. Fakat bu şişe hep görecekleri bir alanda tutulduğunda su içme oranında da gözle görülür bir artış meydana gelecektir."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 o4011u" },
                                        //Element
                                        "Su içmeyi keyifli ve kolay hale getiren Renga Atlas Cam Matara lar az yer kaplaması, kolay taşınabilmesi ve suyu sızdırmama özellikleri ile tercih sebebi olmaktadır. Farklı renk seçeneklerine sahip Renga Atlas Cam Mataralar ile su içmekten keyif alacaksınız."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 o4011u" },
                                        //Element
                                        "Matara içindeki filtre farklı meyve tatlarını almanızı, dilediğinizde suyu ziyan etmeden meyveleri mataradan çıkarabilmenizi sağlar. Tek yapmanız gereken meyvelerinizi dilimlemek, filtre içerisine koymak ve sağlıklı ferah içeceğinizin tadını çıkarmak."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 o4011u" },
                                        //Element
                                        "Dilerseniz suyunuzu alkali yapmak için limon veya salatalık kullanabilirsiniz. Peki alkali su nedir, ne işe yarar?"
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 o4011u" },
                                        //Element
                                        "- Alkali su bedeni temizler. Vücutta oluşan toksinleri etkisiz hale getirir."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-1 o4011u" },
                                        //Element
                                        "- Alkali su önemli bir bağışıklık sistemi koruyucusudur."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-1 o4011u" },
                                        //Element
                                        "- Antioksidan etkisiyle vücudumuzdaki asit/alkali dengesini korur."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-1 o4011u" },
                                        //Element
                                        "- Vücudun hücre seviyesinde yenilenerek genç kalmasına yardımcı olur."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-1 o4011u" },
                                        //Element
                                        "- Alkali su aynı zamanda olağanüstü bir nemlendirme ve detoks aracıdır. Moleküler yapısı diğer sulara göre daha küçük olduğundan hücrelerin içine 6 kat daha fazla su girmesini sağlar."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-1 o4011u" },
                                        //Element
                                        "- Alkali su, vücut içinde asidik atıkların birikimini engellediğinden vücudun yağ biriktirmesinin önüne geçer ve zayıflamaya da yardımcı olur."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 o4011u" },
                                        //Element
                                        "Atlas Filtreli Cam Mataranın ergonomik yapısı ile avucunuzun şekline uygun olması ve sızdırmaz kapağı üzerindeki entegre kulp sayesinde rakiplerine oranla daha rahat taşınabilmektedir."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 o4011u" },
                                        //Element
                                        "Atlas Filtreli Matara cam gövdeye ve renkli plastik kapağa sahiptir. Plastik ürünlerde sağlık açısından önemli bir etken vardır ki bu da BPA içerip içermemesidir. Renga plastik ürünlerinin hiçbirinde BPA kullanılmamış (BPA Free) olmakla birlikte, sağlık standartları çerçevesinde üretim yapılmaktadır. -BPA nın oldukça kapsamlı bir konu olmasından dolayı, BPA ile ilgili ayrı bir içerik oluşturulacaktır. -Renga hem cam hem de plastik ürün üretiminde insan ve çevre bilinciyle hareket etmektedir."
                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 o4011u" },

                                    ),
                                    //Element
                                    React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 o4011u" },

                                    )
                                )
                            )
                        ),
                        //Element
                        React.createElement( Col, { md:12 },
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 pb-5 m-0 mt-4 h685jr" } ),
                            //Element
                            React.createElement( "div", { className: "float-start w-100 p-0 m-0 position-relative e2448n" },
                                //Element
                                React.createElement( Swiper, { className: "float-start w-100 position-relative overflow-hidden", ...Slider },
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Small, { ID: "0", Title: "Atlas Matara  İle Suyunuz Daha Sağlıklı ve Lezzetli!", Date: "02 Temmuz, 2024", Category: "Tasarım", Image: "012.png", Target: "/blog-detay" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Small, { ID: "0", Title: "Atlas Matara  İle Suyunuz Daha Sağlıklı ve Lezzetli!", Date: "02 Temmuz, 2024", Category: "Tasarım", Image: "014.png", Target: "/blog-detay" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Small, { ID: "0", Title: "Atlas Matara  İle Suyunuz Daha Sağlıklı ve Lezzetli!", Date: "02 Temmuz, 2024", Category: "Tasarım", Image: "015.png", Target: "/blog-detay" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Small, { ID: "0", Title: "Atlas Matara  İle Suyunuz Daha Sağlıklı ve Lezzetli!", Date: "02 Temmuz, 2024", Category: "Tasarım", Image: "013.png", Target: "/blog-detay" } )
                                    ),
                                    //Element
                                    React.createElement( SwiperSlide, {},
                                        //Element
                                        React.createElement( Small, { ID: "0", Title: "Atlas Matara  İle Suyunuz Daha Sağlıklı ve Lezzetli!", Date: "02 Temmuz, 2024", Category: "Tasarım", Image: "010.png", Target: "/blog-detay" } )
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
export default Article;