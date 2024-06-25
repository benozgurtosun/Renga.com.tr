//Install
import React, { Component } from "react";
//Install
import { ReactComponent as Icon } from "../../Media/Icon/001.svg";
//Install
import propTypes from "prop-types";

//Element
class Brand extends Component {
    //Element
    Home = () => {
        //Element
        window.location.href = "/"
    }
    //Element
    render() {
        //Element
        const { ID, Title } = this.props
        //Element
        const Content = React.createElement( "button", { className: "d-flex w-100 justify-content-start align-items-center p-0 m-0 bg-transparent border-0 dh8507", title: Title, type: "button", onClick: this.Home },
            //Element
            React.createElement( Icon, {} )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
Brand.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Brand;