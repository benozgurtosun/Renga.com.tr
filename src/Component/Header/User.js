//Install
import React, { Component } from "react";
//Install
import { ReactComponent as Icon } from "../../Media/Icon/002.svg";
//Install
import propTypes from "prop-types";

//Element
class User extends Component {
    //Element
    Toggle = () => {
        //Element
        let Panel = document.getElementsByClassName( "v95986" )[0]
        //Element
        Panel.classList.toggle( "d-none" )
    }
    //Element
    render() {
        //Element
        const { ID, Title, Target } = this.props
        //Element
        const Content = React.createElement( "button", { className: "float-start w-auto p-0 m-0 me-4 bg-transparent border-0 vwm262", title: Title, type: "button", onClick: this.Toggle },
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
User.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default User;