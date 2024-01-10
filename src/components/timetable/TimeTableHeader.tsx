import {TimeTableRow} from "../../pages/TimeTable.tsx";
import {Loader, Table} from "@mantine/core";

interface TimeTableHeaderProps{
    data: TimeTableRow[]
    isLoading: boolean
}


function TimeTableHeader(props: TimeTableHeaderProps){
    return (
        <Table.Thead>
            { props.isLoading ?
                (
                    <Table.Tr>
                        <Table.Th style={{textAlign: "center"}}><Loader color="blue" /></Table.Th>
                    </Table.Tr>

                ) :
                (
                     props.data[0].times.length > 0 ? (
                            <Table.Tr>
                                <Table.Th key={"#"}>#</Table.Th>
                                {props.data[0].times.map((_x, i) => {
                                    return (
                                        <Table.Th key={i} style={{textAlign: "center"}}>{i+1}</Table.Th>
                                    )
                                })}
                            </Table.Tr>
                        ) :
                        (<Table.Tr>
                            <Table.Th style={{textAlign: "center"}}>A mai nap nem közlekedik a helyi járat!</Table.Th>
                        </Table.Tr>)
                )
            }
        </Table.Thead>
    )
}

export default TimeTableHeader;
