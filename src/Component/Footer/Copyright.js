//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Copyright extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Target } = this.props
        //Element
        const Content = React.createElement( "div", { className: "float-start w-100 p-0 m-0 d01de3" },
            //Element
            React.createElement( "span", { className: "float-start w-100 p-0 m-0 f9t3v0" },
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
Copyright.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Copyright;