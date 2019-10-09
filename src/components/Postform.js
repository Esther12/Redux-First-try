import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {addPostAction} from "../actions/addPostAction"
import {connect} from 'react-redux';

class Postform extends Component {
    constructor(props){
        super(props);
        this.state={
            title: "",
            body: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const post = {
            title : this.state.title,
            body : this.state.body
        }
        this.props.addPostAction(post);
        console.log("loging ...",this.props);

    }
    render() {
        return (
            <div>
                <h1>Add Posts :</h1>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input className="form-control" id="exampleInputEmail1" name= "title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div className="form-group">
                        <label >Body: </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name = "body" rows="3" onChange={this.onChange} value = {this.state.body}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
Postform.propTypes = {
    addPostAction : PropTypes.func.isRequired
}

export default connect(null, { addPostAction })(Postform);