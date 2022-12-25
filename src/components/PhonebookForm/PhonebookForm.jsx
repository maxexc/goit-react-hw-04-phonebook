import React, { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
    FormTitle,
    PhonebookForm,
    FormLabel,
    FormInput,
    FormBtn,
} from './PhonebookForm.styled'

class Phonebook extends Component {
    state = {
        id: '',
        name: '',
        number: '',
    }

    handleInputChange = event => {
        // console.log(event.currentTarget);
        // console.log(event.currentTarget.value);
        // console.log(event.currentTarget.name);
        // this.setState({ [event.currentTarget.name]: event.currentTarget.value });
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
        this.setState({id: nanoid()});
    }

    handleFormSubmit = event => {
        event.preventDefault();
        // console.log(this.state)

        this.props.onSubmit(this.state)
        this.resetForm()
    }

    resetForm = () => {
        this.setState({name: '', number: ''})
    }
    
    nameInputId = nanoid();
    numberInputId = nanoid();

    render() {        
        return (
        <PhonebookForm onSubmit={this.handleFormSubmit} >
            <FormTitle>Phonebook</FormTitle>
                <FormLabel htmlFor={this.nameInputId} >
                    Name {''}
                </FormLabel>                
                <FormInput
                    type="text"
                    name="name"
                    id={this.nameInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="Emmy Richards"
                    required
                    value={this.state.name}
                    onChange={this.handleInputChange}
                />                
                
                <FormLabel htmlFor={this.numberInputId}>
                    Number {''}
                </FormLabel>                
                <FormInput
                    type="tel"
                    name="number"
                    id={this.numberInputId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    placeholder="000-000-00"
                    required
                    value={this.state.number}
                    onChange={this.handleInputChange}
                />                        
            <FormBtn type="submit">Add contact</FormBtn>
        </PhonebookForm>
    )}
}

export default Phonebook;

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};