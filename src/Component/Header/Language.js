//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Language extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Target } = this.props
        //Element
        const Content = React.createElement( "button", { className: "float-start w-auto p-0 m-0 text-center text-uppercase rounded-circle b35d2p", title: Title, type: "button" },
            //Element
            Title
        )
        //Element
        return (
            Content
        );
    }
}
//Element
Language.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Language;