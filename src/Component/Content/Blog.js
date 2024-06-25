//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Blog extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Summary, Time, Category, Image, Target } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/images/"
        //Element
        let Media  = Source + Image
        //Element
        const Content = React.createElement( "a", { className: "float-start w-100 p-0 m-0 u6c403", title: Title, href: Target },
            //Element
            React.createElement( "picture", { className: "float-start w-100 p-0 m-0 v62759" },
                //Element
                React.createElement( "img", { alt: Title, title: Title, src: Media, width: "312", height: "200" } )
            ),
            //Element
            React.createElement( "div", { className: "float-start w-100 p-0 pt-3 pb-4 ps-3 pe-3 m-0 yl0k42" },
                //Element
                React.createElement( "div", { className: "float-start w-100 p-0 m-0 d644f4" },
                    //Element
                    React.createElement( "label", { className: "float-start w-auto p-0 m-0 w273fc" },
                        //Element
                        Time
                    ),
                    //Element
                    React.createElement( "label", { className: "float-start w-auto p-0 m-0 z58u58" },
                        //Element
                        Category
                    )
                ),
                //Element
                React.createElement( "h5", { className: "float-start w-100 p-0 m-0 mt-2 r4t7v5" },
                    //Element
                    Title
                ),
                //Element
                React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 o5x395" },
                    //Element
                    Summary
                ),
                //Element
                React.createElement( "span", { className: "float-start w-100 p-0 m-0 mt-4 text-center i2w894" },
                    //Element
                    "Devamını Oku"
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
Blog.propTypes = {
    ID       : propTypes.string.isRequired,
    Title    : propTypes.string.isRequired,
    Summary  : propTypes.string.isRequired,
    Time     : propTypes.string.isRequired,
    Category : propTypes.string.isRequired,
    Image    : propTypes.string.isRequired,
    Target   : propTypes.string.isRequired
}
//Element
export default Blog;