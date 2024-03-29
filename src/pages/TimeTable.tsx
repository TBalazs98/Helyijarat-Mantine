import {Box, Card, Container, Group, Space, Stack, Table, Title} from "@mantine/core";
import {DateInput} from "@mantine/dates";
import Time from "../models/utility/Time.ts";
import {useTimeTable} from "../hooks/useTimeTable.ts";
import TimeTableHeader from "../components/timetable/TimeTableHeader.tsx";
import TimeTableBody from "../components/timetable/TimeTableBody.tsx";
import {useTranslation} from "react-i18next";
import MobileTimetable from "../components/timetable/MobileTimetable.tsx";

export interface TimeTableRow{
    times: Time[]
    stopName: string
}


function TimeTable(){
    const { i18n } = useTranslation();
    const { date, data, setDate, isLoading } = useTimeTable()

    return(
        <Container>
            <Space visibleFrom={"sm"} h="100px"/>
            <Stack style={{marginTop: "20px", paddingBottom: "20px"}}>
                <Card>
                    <Title order={2} mb="15px">Menetrend</Title>
                    <Group>
                        <DateInput
                            placeholder="Date input"
                            style={{flexGrow: "1"}}
                            locale={i18n.language}
                            value={date}
                            onChange={setDate}
                        />
                    </Group>
                    <Space h="25px"/>
                    <Box visibleFrom={"sm"}>
                        { data.length > 0 && (
                            <Table.ScrollContainer minWidth={700}>
                                <Table highlightOnHover withTableBorder>
                                    <TimeTableHeader data={data} isLoading={isLoading} />
                                    <TimeTableBody data={data} isLoading={isLoading}/>
                                </Table>
                            </Table.ScrollContainer>
                        )}
                    </Box>
                    <Box hiddenFrom={"sm"}>
                        <MobileTimetable data={data} isLoading={isLoading}/>
                    </Box>
                </Card>
            </Stack>
            <Space visibleFrom={"sm"} h="100px"/>
        </Container>
    )
}

export default TimeTable
