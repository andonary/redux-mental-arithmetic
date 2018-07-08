import React, { Component } from "react";
import ListAnswers from "../component/ListAnswers";
import { connect } from "react-redux";
import { addAnswersAction } from "../actions/index";
import Input from "../component/Input";
import ListQuestions from "../component/ListQuestions";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

class BoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  yourAnswer = text => {
    const [lastContent] = this.props.questions.reverse();
    if (lastContent.result === text) {
      this.props.addAnswers(text, "JUSTE");
    } else {
      this.props.addAnswers(text, "FAUX");
    }
  };
  render() {
    return (
      <div>
        <Container>
          <ListQuestions questions={this.props.questions} />
          <ListAnswers answers={this.props.answers} />
        </Container>
        <Input addAnswers={this.yourAnswer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  answers: state.AnswersReducer.answers,
  questions: state.AnswersReducer.questions
});

const mapDispatchToProps = dispatch => ({
  addAnswers: (text, result) => dispatch(addAnswersAction(text, result))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxContainer);
