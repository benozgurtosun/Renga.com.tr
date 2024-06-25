//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Image extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Image, Target } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/images/"
        //Element
        let Media  = Source + Image
        //Element
        const Content = React.createElement( "picture", { className: "float-start w-100 p-0 m-0 io4945" },
            //Element
            React.createElement( "img", { alt: Title, title: Title, src: Media, width: "526", height: "726" } )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
Image.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Image  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Image;