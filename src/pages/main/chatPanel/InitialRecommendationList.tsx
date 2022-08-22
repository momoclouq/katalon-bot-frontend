import { RefObject } from "react";
import RecommendationListWrapper from "../../../components/chat/recommendationList/RecommendationListWrapper";
import useScroll from "../../../hooks/scrollbarHideHook/useScroll";
import { initialRecommendations } from "../../../static/data/initialRecommendation";
import RecommendationListTitle from "../../../components/chat/recommendationList/RecommendationListTitle";
import RecommendationListItem from "../../../components/chat/recommendationList/RecommendationListItem";
import styled from 'styled-components';

const ChatBoxDiv = styled.div`
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
    align-self: ${props => props.align_self};
    width: ${props => props.width};
    font-weight: ${props => props.font_weight};
    align-items: ${props => props.align_items};
    width: ${props => props.width};
    padding: ${props => props.padding};
    color: ${props => props.color};
    margin-left: ${props => props.margin_left};
    margin-right: ${props => props.margin_right};
    overflow: ${props => props.overflow};
    margin-bottom: ${props => props.margin_bottom};
    flex-wrap: ${props => props.flex_wrap};
`;

const processRecommendationList = ({ listName, listItems }, createUserQuery) => {
  if (!listName) return "";

  return (
    <RecommendationListWrapper>
      <RecommendationListTitle>{listName}</RecommendationListTitle>
      {
        listItems.map((listItem) => {
          return <RecommendationListItem onClickAction={createUserQuery} displayQuery={listItem.displayQuery} query={listItem.query} />
        })
      }
    </RecommendationListWrapper>
  );
}

const InitialRecommendationLists = ({ createUserQuery }) => {
  const [ref, isScrolled] = useScroll();

  return (
    <ChatBoxDiv width="100%" padding="0.25rem" align_self="self-start" margin_bottom="0.5rem" >
      <ChatBoxDiv width="100%" display="flex" overflow="auto" ref={ref as RefObject<HTMLDivElement>} className={`${isScrolled ? `customized-scrollbar-hide`:`customized-scrollbar`}`}>
      {
        initialRecommendations.map((section) => processRecommendationList(section, createUserQuery))
      }
      </ChatBoxDiv>
    </ChatBoxDiv>
  );
}

export default InitialRecommendationLists;