//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Product extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Target } = this.props
        //Element
        const Content = React.createElement( "ul", { className: "d-flex w-100 p-0 m-0 justify-content-start align-items-center p-0 m-0 b29l63" },
            //Element
            React.createElement( "li", { className: "float-start w-auto" },
                //Element
                React.createElement( "a", { className: "float-start w-auto p-0 m-0 mt-1 position-relative", href: "/" },
                    //Element
                    "Anasayfa"
                )
            ),
            //Element
            React.createElement( "li", { className: "float-start w-auto" },
                //Element
                React.createElement( "span", { className: "float-start w-auto p-0 m-0 mt-1 ms-2 position-relative" },
                    //Element
                    ">"
                )
            ),
            //Element
            React.createElement( "li", { className: "float-start w-auto" },
                //Element
                React.createElement( "a", { className: "float-start w-auto p-0 m-0 mt-1 ms-2 position-relative", href: "/" },
                    //Element
                    "Ürünler"
                )
            ),
            //Element
            React.createElement( "li", { className: "float-start w-auto" },
                //Element
                React.createElement( "span", { className: "float-start w-auto p-0 m-0 mt-1 ms-2 position-relative" },
                    //Element
                    ">"
                )
            ),
            //Element
            React.createElement( "li", { className: "float-start w-auto" },
                //Element
                React.createElement( "span", { className: "float-start w-auto p-0 m-0 mt-1 ms-2 position-relative", href: Target },
                    //Element
                    Title
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
Product.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Product;