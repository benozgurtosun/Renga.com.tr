//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Award extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Image } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/images/"
        //Element
        let Media  = Source + Image
        //Element
        let Menu, Icon
        //Element
        if( ID == "1" ){
            //Element
            Menu = React.createElement( "ul", { className: "float-start w-100 p-0 m-0 mt-3 a2949r" },
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "span", { className: "float-start w-100 p-0 m-0 text-center" },
                        //Element
                        "- Saga"
                    )
                )
            )
            //Element
            Icon = React.createElement( "img", { alt: Title, title: Title, src: Media, width: "142", height: "auto" } )
        //Element
        } else if( ID == "2" ){
            //Element
            Menu = React.createElement( "ul", { className: "float-start w-100 p-0 m-0 mt-3 a2949r" },
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "span", { className: "float-start w-100 p-0 m-0 text-center" },
                        //Element
                        "- Twister"
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "span", { className: "float-start w-100 p-0 m-0 text-center" },
                        //Element
                        "- Vega"
                    )
                )
            )
            //Element
            Icon = React.createElement( "img", { alt: Title, title: Title, src: Media, width: "83", height: "auto" } )
        //Element
        } else if( ID == "3" ){
            //Element
            Menu = React.createElement( "ul", { className: "float-start w-100 p-0 m-0 mt-3 a2949r" },
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "span", { className: "float-start w-100 p-0 m-0 text-center" },
                        //Element
                        "- Moon"
                    )
                )
            )
            //Element
            Icon = React.createElement( "img", { alt: Title, title: Title, src: Media, width: "145", height: "auto" } )
        //Element
        } else if( ID == "4" ){
            //Element
            Menu = React.createElement( "ul", { className: "float-start w-100 p-0 m-0 mt-3 a2949r" },
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "span", { className: "float-start w-100 p-0 m-0 text-center" },
                        //Element
                        "- Moon"
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "span", { className: "float-start w-100 p-0 m-0 text-center" },
                        //Element
                        "- Saturn"
                    )
                ),
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "span", { className: "float-start w-100 p-0 m-0 text-center" },
                        //Element
                        "- Joy"
                    )
                )
            )
            //Element
            Icon = React.createElement( "img", { alt: Title, title: Title, src: Media, width: "82", height: "auto" } )
        } else{
            //Element
            Menu = React.createElement( "ul", { className: "float-start w-100 p-0 m-0 mt-3 a2949r" },
                //Element
                React.createElement( "li", { className: "float-start w-100" },
                    //Element
                    React.createElement( "span", { className: "float-start w-100 p-0 m-0 text-center" },
                        //Element
                        "- Saga"
                    )
                )
            )
            //Element
            Icon = React.createElement( "img", { alt: Title, title: Title, src: Media, width: "142", height: "auto" } )
        }
        //Element
        const Content = React.createElement( "div", { className: "d-flex w-100 flex-column justify-content-center align-items-center p-0 m-0 position-relative f8c07g" },
            //Element
            React.createElement( "div", { className: "d-flex w-100 justify-content-center align-items-center rounded-circle p4794g" },
                //Element
                Icon
            ),
            //Element
            Menu
        )
        //Element
        return (
            Content
        );
    }
}
//Element
Award.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Image  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Award;