import styled from 'styled-components';

const RecommendationListWrapper = styled.div`
  margin-right: 0.5em;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07));
  color: rgb(71 85 105);
  background: #FFFFFF;
  font-weight: 400;
  font-size: 0.875rem; 
  margin-bottom: 0.5rem; 
  margin-top: 0.5rem; 
  border-radius: 0.5rem;
  align-self: flex-start;
  inline-size: min-content;
  & > * {
    padding: 0.5em 1em;
  }
`;

export default RecommendationListWrapper;