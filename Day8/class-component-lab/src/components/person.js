import React,{Component} from "react";
import User from "./User";
class Person extends Component{
    render(){
        return(
            <div>
                <h1>This is class component!</h1>
                <User />
            </div>
        );
    }
}

export default Person;