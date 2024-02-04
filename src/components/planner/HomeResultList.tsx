import {Card, Center, Space, Title} from "@mantine/core";
import HomeResultItem from "./HomeResultItem.tsx";
import {useTranslation} from "react-i18next";
import {SearchResultItem} from "../../hooks/usePlanner.ts";
import {SearchState} from "../../models/utility/SearchState..ts";

interface PlannerResultProps{
    items:  SearchResultItem[],
    state: SearchState
}

function HomeResultList({items, state}: PlannerResultProps){
    const { t } = useTranslation();

    return(
        <Card>
            <Title order={2}>{t('Planner.ResultList.Title')}</Title>
            <Space h={"25px"}/>
            { items.map((item, i) => {
                return (
                    <HomeResultItem key={i} item={item} />
                )
            })}

            { items.length == 0 && (
                <Center h={"150px"} style={{textAlign:"center"}}>
                    { state === SearchState.Sunday && <Title order={4}>Vasárnap nincs helyi járat!</Title> }
                    { state === SearchState.Holiday && <Title order={4}>Ünnep napokon nincs helyi járat!</Title> }
                    { state === SearchState.NoMoreBus && <Title order={4}>A mai nap nem indul több járat a megállóból!</Title> }
                </Center>
            )}
        </Card>
    )
}

export default HomeResultList;
