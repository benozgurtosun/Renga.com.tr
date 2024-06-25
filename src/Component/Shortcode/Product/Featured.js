//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Featured extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Summary, Image, Target } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/images/"
        //Element
        let Media  = Source + Image
        //Element
        const Content = React.createElement( "a", { className: "float-start w-100 p-0 m-0 mt-4 plb343", href: "/" },
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 position-relative q14846" },
                //Element
                React.createElement( "figure", { className: "float-start w-100 p-0 m-0 s5i30a" } ),
                //Element
                React.createElement( "div", { className: "d-flex w-100 justify-content-end p-0 m-0 text-end position-absolute end-0 bottom-0 kc139m" },
                    //Element
                    React.createElement( "div", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 position-relative pv900a" },
                        //Element
                        React.createElement( "img", { alt: Title, title: Title, src: Media, width: "101", height: "88" } ),
                        //Element
                        React.createElement( "label", { className: "float-start w-auto p-0 m-0 text-start position-absolute m35t14" },
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
Featured.propTypes = {
    ID      : propTypes.string.isRequired,
    Title   : propTypes.string.isRequired,
    Summary : propTypes.string.isRequired,
    Image   : propTypes.string.isRequired,
    Target  : propTypes.string.isRequired
}
//Element
export default Featured;