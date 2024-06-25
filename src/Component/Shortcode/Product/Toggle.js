//Install
import React, { Component } from "react";
//Install
import propTypes from "prop-types";

//Element
class Toggle extends Component {
    //Element
    Case = (e) => {
        //Element
        e.nativeEvent.target.nextSibling.classList.toggle( "d-none" )
        //Element
        e.target.classList.toggle( "hj032b" )
    }
    //Element
    Prevent = (e) => {
        //Element
        e.preventDefault()
    }
    //Element
    render() {
        //Element
        const { ID, Title, Summary, Target } = this.props
        //Element
        const Content = React.createElement( "div", { className: "float-start w-100 p-0 m-0 mt-2 fl5173" },
            //Element
            React.createElement( "button", { className: "d-flex w-100 justify-content-between align-items-center p-0 m-0 bg-transparent text-start position-relative h602rg", type: "button", onClick: this.Case },
                //Element
                Title
            ),
            //Element
            React.createElement( "p", { className: "float-start w-100 p-0 m-0 mt-3 d-none y35q8r", onClick: this.Prevent },
                //Element
                Summary
            )
        )
        //Element
        return (
            Content
        );
    }
}
//Element
Toggle.propTypes = {
    ID      : propTypes.string.isRequired,
    Title   : propTypes.string.isRequired,
    Summary : propTypes.string.isRequired,
    Target  : propTypes.string.isRequired
}
//Element
export default Toggle;