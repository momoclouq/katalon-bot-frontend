import { RefObject } from "react";
import RecommendationListWrapper from "../../../components/chat/recommendationList/RecommendationListWrapper";
import useScroll from "../../../hooks/scrollbarHideHook/useScroll";
import { initialRecommendations } from "../../../static/data/initialRecommendation";
import { ChatBoxDiv } from "../../../Styling";
import RecommendationListTitle from "../../../components/chat/recommendationList/RecommendationListTitle";
import RecommendationListItem from "../../../components/chat/recommendationList/RecommendationListItem";

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