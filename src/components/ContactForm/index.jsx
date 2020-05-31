import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import './styles/index.module.css'

const idInputName = uuidv4();
const idInputNumber = uuidv4();

class ContactForm extends Component {

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addContact({ ...this.state });
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {

    const { name, number } = this.state;
    
    return (
      <>
        <h2>Phonebook</h2>
        <form 
        onSubmit={this.handleFormSubmit}>
          <fieldset>
            <p>Name</p>
            <label htmlFor={idInputName}>
              <input
                type="text"
                name="name"
                value={name}
                id={idInputName}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor={idInputNumber}>
              <input
                type="tel"
                name="number"
                value={number}
                id={idInputNumber}
                onChange={this.handleChange}
              />
            </label>
            <button
              type="submit"
              disabled={!name || !number}
            >
              Add contact
            </button>
          </fieldset>
        </form>
      </>
    );
  }
}

export default ContactForm;
