import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    const inputValue = Number(this.refs.answer.value);
    this.props.addAnswers(inputValue);
    this.refs.answer.value = "";
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} name="formulaire">
        <input type="number" name="answer" ref="answer" />
        <button type="submit">Envoyer réponse</button>
      </form>
    );
  }
}

export default Input;
