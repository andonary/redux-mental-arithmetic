import React from "react";
import styled from "styled-components";

const LiSimple = styled.li`
  list-style-type: none;
`;

const DisplayContent = styled.span`
  color: grey;
`;

const ListQuestions = props => {
  const { questions } = props;
  questions.sort((a, b) => a.id - b.id);
  return (
    <div>
      <ul>
        {questions.length > 0 &&
          questions.map(question => (
            <LiSimple key={question.id}>
              <DisplayContent>{question.content}</DisplayContent>
            </LiSimple>
          ))}
      </ul>
    </div>
  );
};

export default ListQuestions;
