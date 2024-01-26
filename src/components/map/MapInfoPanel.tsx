import {Stack, Table, Title} from "@mantine/core";
import {formatTime} from "../../models/utility/Time.ts";
import {IconArrowRight} from "@tabler/icons-react";
import {MapInfoPanelProps, useMapData} from "../../hooks/useMapData.ts";


function MapInfoPanel(props: MapInfoPanelProps){

    const {data, isLoading} = useMapData(props)

    return (
        <Stack style={{height: "75vh", marginTop: "10px"}}>
            <Title order={2}>{props.stop && props.stop.name}</Title>
            <span>{isLoading}</span>
            <Table.ScrollContainer minWidth={300}>
                <Table  striped highlightOnHover>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Érkezés</Table.Th>
                            <Table.Th></Table.Th>
                            <Table.Th>Következő megálló</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        { data.map(d => {
                            return (
                                <Table.Tr>
                                    <Table.Td>{ formatTime(d.time) }</Table.Td>
                                    <Table.Td><IconArrowRight/></Table.Td>
                                    <Table.Td>{ d.nextStop }</Table.Td>
                                </Table.Tr>
                            )
                        })}
                    </Table.Tbody>
                </Table>
            </Table.ScrollContainer>
        </Stack>
    )
}

export default MapInfoPanel
