
import React, { Component } from 'react';
import { connect } from 'react-redux';
import  BasicForm  from '../../componenets/newFile';
import { newBook } from '../../actions/newBook'

class NewBook extends Component {
    state = {
        formData: {
            uploader_name: {
                value: '',
            },
            file_name: {
                value: '',
            },
            subject:{
                 value:''
            },
            year: {
              value:''   
            },
            type: {
                value:''
            },
            test: {
                value:''
            },
            file: null
        },
    }
    formSubmit = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append('uploader_name', this.state.formData.uploader_name.value)
        data.append('file_name', this.state.formData.file_name.value)
        data.append('file', this.state.formData.file)
        data.append('subject', this.state.formData.subject.value)
        data.append('year', this.state.formData.year.value)
        data.append('type', this.state.formData.type.value)
        data.append('test', this.state.formData.test.value)
        this.props.createNewBook(data)
    }
    inputChangeHandler = (event, element) => {
        const updateForm = {
            ...this.state.formData,
            [element]: {
                ...this.state.formData[element],
                value: event.target.value
            }
        }
        this.setState(() => ({
            formData: updateForm
        }));
        console.log(this.state.formData)
         }
    onFileChange = (event) => {
        const newState = {
            ...this.state.formData,
            file: event.target.files[0]
        }
        this.setState(() => ({
            formData: newState
        }));
        console.log(this.state.formData)

    };
    render() {
        return <BasicForm
            onSubmit={this.formSubmit}
            formData={this.state.formData}
            inputChangeHandler={this.inputChangeHandler}
            onFileChange={this.onFileChange}
            redirect={this.props.data} />
    }
}

const mapStateToProps = state => {
    return {
        data: state.formData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createNewBook: (data) => dispatch(newBook(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBook);