import React from "react";
import { Component } from "react";
export default class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            name:props.name,
        }
    }
    componentDidMount(){
        console.log("hiii")
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            name:nextProps.name,
        })
    }
    shouldComponentUpdate(nextProps){
        if(nextProps.name=='shyam'){
        return true
        }else{
            return false
        }
    }
    componentWillUnmount(){
        console.log("hii");
    }
    render(){
        return(
            <div>
                {this.state.name}
                {this.props.name}
            </div>
        )
    }

}