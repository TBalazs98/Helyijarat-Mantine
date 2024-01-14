import {Container, Space, Stack} from "@mantine/core";
import 'dayjs/locale/hu.js';
import 'dayjs/locale/en-gb.js';
import HomeSearchForm from "../components/home/HomeSearchForm.tsx";
import HomeResultList from "../components/home/HomeResultList.tsx";
import {usePlanner} from "../hooks/usePlanner.ts";

function Planner(){

    const { stops, form, searchResults, searchRoutes } = usePlanner()

    return (
        <Container>
            <Space visibleFrom={"sm"} h="100px"/>
            <Stack style={{marginTop: "20px", paddingBottom: "20px"}}>
                <HomeSearchForm stops={stops} search={searchRoutes} form={form}/>
                <Space visibleFrom={"sm"} h="25px"/>
                <HomeResultList items={searchResults}/>
            </Stack>
            <Space visibleFrom={"sm"} h="100px"/>
        </Container>
    )
}

export default Planner
