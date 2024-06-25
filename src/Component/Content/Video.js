//Install
import React, { Component } from "react";
//Install
import { ReactComponent as Play } from "../../Media/Icon/014.svg";
//Install
import propTypes from "prop-types";

//Element
class Video extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Duracation, Image, Target } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/images/"
        //Element
        let Media  = Source + Image
        //Element
        const Content = React.createElement( "a", { className: "float-start w-100 p-0 m-0 position-relative q4jg86", title: Title, href: Target },
            //Element
            React.createElement( "picture", { className: "float-start w-100 p-0 m-0 m859e6" },
                //Element
                React.createElement( "img", { alt: Title, title: Title, src: Media, width: "312", height: "175" } )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 position-absolute end-0 top-0 wo5485" },
                //Element
                React.createElement( "span", { className: "float-end w-100 p-0 m-0 mt-3 me-3 text-center q8y504" },
                    //Element
                    Duracation
                )
            ),
            //Element
            React.createElement( "div", { className: "d-flex w-100 h-100 p-0 m-0 justify-content-center align-items-center position-absolute start- top-0 hs543w" },
                //Element
                React.createElement( "span", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 rounded-circle f57d35" },
                    //Element
                    React.createElement( Play, {} )
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
Video.propTypes = {
    ID         : propTypes.string.isRequired,
    Title      : propTypes.string.isRequired,
    Duracation : propTypes.string.isRequired,
    Image      : propTypes.string.isRequired,
    Target     : propTypes.string.isRequired
}
//Element
export default Video;