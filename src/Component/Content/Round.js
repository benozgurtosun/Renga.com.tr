//Install
import React, { Component } from "react";
//Install
import { ReactComponent as One } from "../../Media/Icon/009.svg";
//Install
import { ReactComponent as Two } from "../../Media/Icon/010.svg";
//Install
import { ReactComponent as Three } from "../../Media/Icon/011.svg";
//Install
import propTypes from "prop-types";

//Element
class Round extends Component {
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
        const { ID, Title } = this.props
        //Element
        let Icon
        //Element
        if( ID == "1" ){
            //Element
            Icon = React.createElement( One, {} )
        //Element
        } else if( ID == "2" ){
            //Element
            Icon = React.createElement( Two, {} )
        //Element
        } else if( ID == "3" ){
            //Element
            Icon = React.createElement( Three, {} )
        } else {
            //Element
            Icon = React.createElement( One, {} )
        }
        //Element
        const Content = React.createElement( "button", { className: "d-flex w-100 flex-column justify-content-center align-items-center p-0 m-0 mt-5 rounded-circle h709p2", type: "button", onClick: this.Action },
            //Element
            React.createElement( "div", { className: "float-start w-auto p-0 m-0 v6q52t" },
                //Element
                Icon
            ),
            //Element
            React.createElement( "span", { className: "float-start w-auto p-0 m-0 mt-3 tz773s" },
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
Round.propTypes = {
    ID     : propTypes.string.isRequired,
    Title  : propTypes.string.isRequired,
    Target : propTypes.string.isRequired
}
//Element
export default Round;