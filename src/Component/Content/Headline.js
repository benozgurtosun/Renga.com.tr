//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Headline extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Image, Target } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/images/"
        //Element
        let Photo  = Source + Image
        //Element
        const Content = React.createElement( "a", { className: "float-start w-100 p-0 m-0 x3f771", title: Title, href: Target },
            //Element
            React.createElement( "picture", { className: "float-start w-100 p-0 m-0 m0k961" },
                //Element
                React.createElement( "img", { alt: Title, title: Title, src: Photo, width: "1920", height: "800" } )
            )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
Headline.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Image  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Headline;