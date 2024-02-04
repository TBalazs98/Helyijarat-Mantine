import {Loader, Stack, Table, TableTd, Title} from "@mantine/core";
import {formatTime} from "../../models/utility/Time.ts";
import {IconArrowRight} from "@tabler/icons-react";
import {MapInfoPanelProps} from "../../hooks/useMapData.ts";


function MapInfoPanel({stop, isLoading, data}: MapInfoPanelProps){

    return (
        <Stack style={{height: "75vh", marginTop: "10px"}}>
            <Title order={2}>{stop && stop.name}</Title>
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
                    { isLoading ?
                        (
                            <Table.Tbody>
                                <Table.Tr>
                                    <TableTd/>
                                    <Table.Td style={{textAlign: "center"}}><Loader color="blue" /></Table.Td>
                                    <TableTd/>
                                </Table.Tr>
                            </Table.Tbody>
                        ) :
                        (
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
                        )
                    }
                </Table>
            </Table.ScrollContainer>
        </Stack>
    )
}

export default MapInfoPanel
