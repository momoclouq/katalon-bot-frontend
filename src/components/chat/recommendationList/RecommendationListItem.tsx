import styled from 'styled-components';

const ListItem = styled.div`
  padding: 0.5em 1em;
  text-align: center;
  color: #4895EF;
  border-top: 0.1px solid #EAEAEA;
  cursor: pointer;
`

const RecommendationListItem = ({ onClickAction, displayQuery, query }) => {
  return (
    <ListItem onClick={() => { onClickAction(query) }}>{displayQuery}</ListItem>
  );
};

export default RecommendationListItem;