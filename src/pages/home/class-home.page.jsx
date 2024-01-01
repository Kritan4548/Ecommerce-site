
import React from "react";
//IMP for interview 
class HomePage extends React.Component{
    constructor(){
        super()
        this.state={
           title:null,
           content:null
        }
        console.log("I am on construture")
    }
    componentDidMount =()=>{
        //Api call
        setTimeout(()=>{
        this.setState({
            ...this.state,
            title:"Home page",
            content:"I am a dummy content"
        })
    },3000)
        console.log("I am on componentDidMOunt")
    }
    componentDidUpdate =()=>{
        //state chnage
        console.log("I am on ComponentDidUpdate")
    }
    increaseValue = ()=>{
        //state change
    }
    componentWillUnmount =()=>{
        console.log("I am on componentWillUnmount")
    }
    render = () =>{
        console.log("I am on render")
        return(<div>
          <h1>{this.state.title}</h1>
          <div>
                {this.state.content}
          </div>
          <button>Click Me</button>
        </div>)
    }

}
export default HomePage;