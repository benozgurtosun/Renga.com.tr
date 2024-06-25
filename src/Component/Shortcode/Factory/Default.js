//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Default extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Image, Target } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/images/"
        //Element
        let Media  = Source + Image
        //Element
        const Content = React.createElement( "div", { className: "float-start w-100 p-0 m-0 z643vx" },
            //Element
            React.createElement( "figure", { className: "float-start w-100 p-0 m-0 position-relative f1645k" },
                //Element
                React.createElement( "img", { alt: Title, title: Title, src: Media, width: "100", height: "auto" } )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-2 i37z4c" },
                //Element
                Title
            )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
Default.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Image  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Default;