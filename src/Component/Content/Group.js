//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Group extends Component {
    //Element
    Action = () => {
        //Element
        const { Target } = this.props
        //Element
        window.location.href = Target
    }
    //Element
    render() {
        //Element
        const { ID, Title, Image } = this.props
        //Element
        let Source = "https://cdn.rengademo.site/images/"
        //Element
        let Media  = Source + Image
        //Element
        const Content = React.createElement( "button", { className: "float-start w-100 p-0 m-0 bg-transparent border-0 h6z558", type: "button", onClick: this.Action },
            //Element
            React.createElement( "div", { className: "float-start w-100 p-4 m-0 c098fo" },
                //Element
                React.createElement( "picture", { className: "float-start w-100 p-0 m-0 w2844i" },
                    //Element
                    React.createElement( "img", { alt: Title, title: Title, src: Media, width: "734", height: "412" } )
                ),
                //Element
                React.createElement( "div", { className: "d-flex w-100 justify-content-center align-items-center p-0 m-0 e5v4u8" },
                    //Element
                    React.createElement( "h3", { className: "float-start w-auto p-0 m-0 lh-1 cv2s00" },
                        //Element
                        Title
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
Group.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Image  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Group;