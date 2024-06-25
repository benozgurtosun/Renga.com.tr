//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Thumbs extends Component {
    //Element
    Hover = (e) => {
        //Element
        e.preventDefault()
        //Element
        let Image    = e.target.currentSrc
        //Element
        let Featured = document.querySelector( ".io4945 img" )
        //Element
        Featured.src = e.target.currentSrc
    }
    //Element
    render() {
        //Element
        const { ID, Title, Image, Target } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/images/"
        //Element
        let Media  = Source + Image
        //Element
        const Content = React.createElement( "a", { className: "float-start w-100 p-4 m-0 o770kh", href: Target, onClick: this.Hover },
            //Element
            React.createElement( "img", { alt: Title, title: Title, src: Media, width: "196", height: "270" } )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
Thumbs.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Image  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Thumbs;