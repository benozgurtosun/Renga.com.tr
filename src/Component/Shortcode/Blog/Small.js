//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Small extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Date, Category, Image, Target } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/images/"
        //Element
        let Media  = Source + Image
        //Element
        const Content = React.createElement( "a", { className: "float-start w-100 p-0 m-0 e2448n", href: Target },
            //Element
            React.createElement( "picture", { className: "float-start w-100 p-0 m-0 n0x21m" },
                //Element
                React.createElement( "img", { alt: Title, title: Title, src: Media, width: "424", height: "273" } )
            ),
            //Element
            React.createElement( "div", { className: "d-flex w-100 justify-content-start align-items-center p-0 m-0 zk58t4" },
                //Element
                React.createElement( "span", { className: "float-start w-auto p-0 m-0 mt-3 j5c05r" },
                    //Element
                    Date
                ),
                //Element
                React.createElement( "span", { className: "float-start w-auto p-0 m-0 mt-3 i1o783" },
                    //Element
                    Category
                )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 m-0 zk58t4" },
                //Element
                React.createElement( "h3", { className: "float-start w-100 p-0 m-0 i6d60e" },
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
Small.propTypes = {
    ID       : propTypes.string.isRequired,
    Title    : propTypes.string.isRequired,
    Date     : propTypes.string.isRequired,
    Category : propTypes.string.isRequired,
    Image    : propTypes.string.isRequired,
    Target   : propTypes.string.isRequired
}
//Element
export default Small;