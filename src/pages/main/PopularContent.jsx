import BasicCard from "../../components/card/basicCard/BasicCard";
import BasicTitle from "../../components/typo/basicTitle/BasicTitle";
import PaddingCardWrapper from "../../components/wrapper/paddingCardWrapper/PaddingCardWrapper";

const PopularContent = () => {
    return (
        <div className="p-1 md:mt-4">
            <BasicTitle text="Popular content" />

            <div className="flex flex-wrap">
                <PaddingCardWrapper value="p-3">
                    <BasicCard />
                </PaddingCardWrapper>
                <PaddingCardWrapper value="p-3">
                    <BasicCard />
                </PaddingCardWrapper>
                <PaddingCardWrapper value="p-3">
                    <BasicCard />
                </PaddingCardWrapper>
                <PaddingCardWrapper value="p-3">
                    <BasicCard />
                </PaddingCardWrapper>
            </div>
        </div>
    )
}

export default PopularContent;