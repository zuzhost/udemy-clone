import React, { Component } from 'react';
import Loading from "./loading";

export default class Cover extends Component {

    constructor(props){
        super(props);
        this.state = {
            loading: true,
            success: this.props.success || false
        }
    }

    render() {
        return (
            <div className="cover abs" id={this.props.id ? this.props.id : "__cover__"}>
                <div className="abs abc">
                    {<Loading />}
                </div>
            </div>
        );
    }

}
