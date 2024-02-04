import {Container, Space, Stack} from "@mantine/core";
import 'dayjs/locale/hu.js';
import 'dayjs/locale/en-gb.js';
import HomeSearchForm from "../components/planner/HomeSearchForm.tsx";
import HomeResultList from "../components/planner/HomeResultList.tsx";
import {usePlanner} from "../hooks/usePlanner.ts";
import {SearchState} from "../models/utility/SearchState..ts";

function Planner(){

    const { stops, form, searchResults, searchRoutes, searchState } = usePlanner()

    return (
        <Container>
            <Space visibleFrom={"sm"} h="100px"/>
            <Stack style={{marginTop: "20px", paddingBottom: "20px"}}>
                <HomeSearchForm stops={stops} search={searchRoutes} form={form}/>
                <Space visibleFrom={"sm"} h="25px"/>
                {searchState !== SearchState.Init && <HomeResultList items={searchResults} state={searchState}/>}
            </Stack>
            <Space visibleFrom={"sm"} h="100px"/>
        </Container>
    )
}

export default Planner
