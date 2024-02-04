import {TimeTableRow} from "../../pages/TimeTable.tsx";
import {Table} from "@mantine/core";
import {formatTime} from "../../models/utility/Time.ts";

export interface TimeTableBodyProps{
    data: TimeTableRow[],
    isLoading: boolean
}

function TimeTableBody(props: TimeTableBodyProps){
    return (
        <Table.Tbody>
            {!props.isLoading && props.data.map((x,i) =>
                (
                    <>
                        {x.times.length > 0 &&
                            <Table.Tr key={i}>

                                <Table.Th key={x.stopName}>{x.stopName}</Table.Th>
                                { x.times.map(t => {
                                    return (
                                        <Table.Td key={formatTime(t)} style={{textAlign: "center"}}>{formatTime(t)}</Table.Td>
                                    )
                                })}
                            </Table.Tr>
                        }
                    </>
                )
            )}
        </Table.Tbody>
    )
}

export default TimeTableBody;
