import React, {Component} from 'react';
import {connect} from 'react-redux';


import Button from '../../components/Button'
import Input from '../../components/input';
import List from '../../components/list';

import { addTodo } from '../../store/actions/todo'

class App extends Component{
    state = {
        input : '',
    }

    handleOnClick = () => {
        console.log("Button was clicked")

        const { addTodo } = this.props;
        const { input } = this.state;

        addTodo(input);
    }

    handleOnChange = (event) => {
        //console.log("Input was changed", event.target.value);

        this.setState({input: event.target.value});
    }

    render(){
        const { input } = this.state;
        const { listTodo } = this.props;
        return(
            <div>
                <List />
                <Input onChange={(event) => this.handleOnChange(event)} />
                <Button onClick = {() => this.handleOnClick()}>
                    Adicionar
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listTodo: state.todo
})

export default connect(
    mapStateToProps,  //data you want to get
    { addTodo } //data you want
)(App);