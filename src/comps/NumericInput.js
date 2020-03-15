import React, { Component } from 'react';

export default class NumericInput extends Component {
    render() {

        const props = this.props;

        return (
            <input 
                defaultValue={props.defaultValue ? props.defaultValue : ""}
                type={props.type || "text"}
                className={props.className || ""}
                placeholder={props.placeholder || null}
                onChange={props.onChange ? props.onChange : ()=>{}}
                onKeyPress={evt => {
                    let charCode = evt.which ? evt.which : evt.keyCode,
                    txt = evt.target.value;
                    
                    if(
                        "numonly" in props
                        && charCode == 46
                    ){
                        if(txt.indexOf(".") > -1){
                            evt.preventDefault();
                            evt.stopPropagation();
                        }
                    }else{
                        if(
                            charCode > 31
                            && (charCode < 48 || charCode > 57)
                        ){
                            evt.preventDefault();
                            evt.stopPropagation();
                        }
                    }
                    return true;
                }}
            />
        );
    }
}
