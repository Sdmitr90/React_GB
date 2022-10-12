import React from "react";
import {logDOM} from "@testing-library/react";

export class Form extends React.Component {
    state = {
        name: 'GB',
    }
        handleChangeName = (e) => {
        this.setState({ name: e.target.value });
    }
        handleSubmit = (e) =>{
            e.preventDefault();
            console.log(this.state.name);
        }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <p>Name: {this.state.name}</p>
            <input type="text" onChange={this.handleChangeName}/>
            <button> submit </button>
        </form>
    }
}