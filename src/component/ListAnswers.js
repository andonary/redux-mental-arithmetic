import React from "react";
import styled from "styled-components";

const LiSimple = styled.li`
  list-style-type: none;
`;

const DisplayResult = styled.span`
  color: grey;
  font-style: italic;
`;

const DisplayContent = styled.span`
  color: grey;
`;

const ListAnswers = props => {
  const { answers } = props;
  answers.sort((a, b) => a.id - b.id);
  return (
    <div>
      <ul>
        {answers.length > 0 &&
          answers.map(answer => (
            <LiSimple key={answer.id}>
              <DisplayContent>{answer.content}</DisplayContent>{" "}
              <DisplayResult>{answer.result}</DisplayResult>
            </LiSimple>
          ))}
      </ul>
    </div>
  );
};

export default ListAnswers;
