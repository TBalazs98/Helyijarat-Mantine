import {Card, Center, Space, Title, Text} from "@mantine/core";
import HomeResultItem from "./HomeResultItem.tsx";
import {useTranslation} from "react-i18next";
import {SearchResultItem} from "../../hooks/usePlanner.ts";

interface PlannerResultProps{
    items:  SearchResultItem[]
}

function HomeResultList({items}: PlannerResultProps){
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
                <Center h={"250px"}>
                    <Text size="md">Kattints a keresés gombra  a járatok megjelenítéséhez!</Text>
                </Center>
            )}
        </Card>
    )
}

export default HomeResultList;
