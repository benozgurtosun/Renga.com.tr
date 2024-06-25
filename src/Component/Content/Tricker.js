//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Tricker extends Component {
    //Element
    render() {
        //Element
        const { ID, Title, Target } = this.props
        //Element
        const Content = React.createElement( "span", { className: "d-inline-block p-0 m-0 ms-4 h48e4n" },
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
Tricker.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Tricker;