import {TimeTableBodyProps} from "./TimeTableBody.tsx";
import {Accordion, Table} from "@mantine/core";
import {formatTime} from "../../models/utility/Time.ts";

function MobileTimetable(props: TimeTableBodyProps){
    return (
        <Accordion chevronPosition="right" variant="contained">
            {
                props.data.map((x, index) => {
                    return (
                        <Accordion.Item key={index} value={x.stopName}>
                            <Accordion.Control>{x.stopName}</Accordion.Control>
                            <Accordion.Panel>
                                <Table>
                                    <Table.Thead>
                                        <Table.Tr>
                                            <Table.Th>Érkezési idő</Table.Th>
                                        </Table.Tr>
                                    </Table.Thead>
                                    <Table.Tbody>
                                        { x.times.map(y => {
                                            return (
                                                <Table.Tr>
                                                    <Table.Td>{formatTime(y)}</Table.Td>
                                                </Table.Tr>
                                            )
                                        })}
                                    </Table.Tbody>
                                </Table>
                            </Accordion.Panel>
                        </Accordion.Item>
                    )
                })
            }


        </Accordion>
    )
}

export default MobileTimetable;