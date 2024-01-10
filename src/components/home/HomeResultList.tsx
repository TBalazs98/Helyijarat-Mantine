import {Card, Center, Space, Title, Text} from "@mantine/core";
import HomeResultItem from "./HomeResultItem.tsx";
import {useTranslation} from "react-i18next";

function HomeResultList(){
    const { t } = useTranslation();


    return(
        <Card style={{backgroundColor:"aqua"}}>
            <Title order={2}>{t('Planner.ResultList.Title')}</Title>
            <Space h={"25px"}/>
            <HomeResultItem/>
            <HomeResultItem/>
            <Center h={"250px"}>
                <Text size="md">Empty list message</Text>
            </Center>
        </Card>
    )
}

export default HomeResultList;
