//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Card extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Summary, Image, Target } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/images/"
        //Element
        let Media  = Source + Image
        //Element
        const Content = React.createElement( "a", { className: "float-start w-100 p-0 m-0 mt-4 plb343", href: Target },
            //Element
            React.createElement( "picture", { className: "d-flex w-100 justify-content-center align-items-center p-4 m-0 v57hk2" },
                //Element
                React.createElement( "img", { alt: Title, title: Title, src: Media, width: "100", height: "auto" } )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-4 pt-0 pb-0 m-0 d5j549" },
                //Element
                React.createElement( "span", { className: "float-start w-100 p-0 m-0 n808g5" },
                    //Element
                    React.createElement( "strong", {},
                        //Element
                        Title
                    ),
                    //Element
                    React.createElement( "br", {} ),
                    //Element
                    Summary
                )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-4 pt-2 m-0 mt-2 m50f7z" },
                //Element
                React.createElement( "ul", { className: "float-start w-100 p-0 m-0 hs382u" },
                    //Element
                    React.createElement( "li", { className: "float-start w-auto" },
                        //Element
                        React.createElement( "span", { className: "float-start w-auto p-0 m-0 rounded-circle" } )
                    ),
                    //Element
                    React.createElement( "li", { className: "float-start w-auto" },
                        //Element
                        React.createElement( "span", { className: "float-start w-auto p-0 m-0 ms-2 rounded-circle" } )
                    ),
                    //Element
                    React.createElement( "li", { className: "float-start w-auto" },
                        //Element
                        React.createElement( "span", { className: "float-start w-auto p-0 m-0 ms-2 rounded-circle" } )
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
Card.propTypes = {
    ID      : propTypes.string.isRequired,
    Title   : propTypes.string.isRequired,
    Summary : propTypes.string.isRequired,
    Image   : propTypes.string.isRequired,
    Target  : propTypes.string.isRequired
}
//Element
export default Card;