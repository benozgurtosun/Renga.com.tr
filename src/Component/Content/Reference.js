//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Reference extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Image, Target } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/reference/"
        //Element
        let Media  = Source + Image
        //Element
        const Content = React.createElement( "picture", { className: "float-start w-100 p-0 m-0 mt-4 z176ny" },
            //Element
            React.createElement( "img", { alt: Title, title: Title, src: Media, width: "150", height: "auto" } )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
Reference.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Image  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Reference;