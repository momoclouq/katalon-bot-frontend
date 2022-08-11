import styled from 'styled-components';
const TopicWrapper = styled.div`
  padding: 0.3em 0.8em;
  border: 2px solid rgb(14 165 233);
  border-radius: 20px;
  background: white;
  font-size: 0.8em;
  width: fit-content;
  margin: 0.5em 2px 0px 0px;
  white-space: nowrap;
  font-weight: 300;
  color: rgb(14 165 233);
  cursor: pointer;

  &:hover {
    border: 2px solid #14e386;
    color: #14e386;
  }
`;

const ChatTopic = ({ topic, onClickHandler }) => {
  return (
    <TopicWrapper onClick={onClickHandler}>
      {topic}
    </TopicWrapper>
  );
}

export default ChatTopic;