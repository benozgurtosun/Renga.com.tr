//Install
import React, { Component } from "react";

//Element
class Menu extends Component {
    //Element
    render() {
        //Element
        const Content = React.createElement( "nav", { className: "float-start w-100 p-0 m-0 xy616l" },
            //Element
            React.createElement( "menu", { className: "d-flex w-100 justify-content-end align-items-center p-0 m-0 u786c9" },
                //Element
                React.createElement( "li", { className: "float-start w-auto" },
                    //Element
                    React.createElement( "a", { className: "float-start w-auto p-0 m-0", href: "/kurumsal" },
                        //Element
                        "Kurumsal"
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-auto position-relative" },
                    //Element
                    React.createElement( "a", { className: "float-start w-auto p-0 m-0 ms-4", href: "/urunler" },
                        //Element
                        "Ürünler"
                    ),
                    //Element
                    React.createElement( "ul", { className: "float-start w-100 p-0 ps-3 pe-3 m-0 position-absolute" },
                        //Element
                        React.createElement( "li", { className: "float-start w-100" },
                            //Element
                            React.createElement( "a", { className: "float-start w-100 p-0 m-0", href: "/" },
                                //Element
                                "Mataralar"
                            )
                        ),
                        //Element
                        React.createElement( "li", { className: "float-start w-100" },
                            //Element
                            React.createElement( "a", { className: "float-start w-100 p-0 m-0", href: "/" },
                                //Element
                                "Mutfak Eşyaları"
                            )
                        ),
                        //Element
                        React.createElement( "li", { className: "float-start w-100" },
                            //Element
                            React.createElement( "a", { className: "float-start w-100 p-0 m-0", href: "/" },
                                //Element
                                "Bebek Ürünleri"
                            )
                        ),
                        //Element
                        React.createElement( "li", { className: "float-start w-100" },
                            //Element
                            React.createElement( "a", { className: "float-start w-100 p-0 m-0", href: "/" },
                                //Element
                                "Çocuk Ürünleri"
                            )
                        )
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-auto" },
                    //Element
                    React.createElement( "a", { className: "float-start w-auto p-0 m-0 ms-4", href: "/blog" },
                        //Element
                        "Blog"
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-auto" },
                    //Element
                    React.createElement( "a", { className: "float-start w-auto p-0 m-0 ms-4", href: "/" },
                        //Element
                        "E-Katalog"
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-auto" },
                    //Element
                    React.createElement( "a", { className: "float-start w-auto p-0 m-0 ms-4", href: "/iletisim-bilgileri" },
                        //Element
                        "İletişim"
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
export default Menu;