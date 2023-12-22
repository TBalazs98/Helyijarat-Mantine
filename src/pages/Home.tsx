import {Autocomplete, Button, Card, Container, Grid, Space, Stack} from "@mantine/core";
import {DateTimePicker} from "@mantine/dates";

function Home(){

    return (
        <Container>
            <Space visibleFrom={"sm"} h="100px"/>
            <Stack style={{marginTop: "20px"}}>
                <Card>
                    <Grid>
                        <Grid.Col span={{ base: 12, sm: 4 }} style={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                            <Autocomplete
                                label="Your favorite library"
                                placeholder="Pick value or enter anything"
                                data={['React', 'Angular', 'Vue', 'Svelte']}
                                style={{flexGrow: "1"}}
                            />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 4 }} style={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                            <DateTimePicker label="Pick date and time" style={{flexGrow: "1"}} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 4 }} style={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                            <Button variant="filled">Search</Button>
                        </Grid.Col>
                    </Grid>
                </Card>

                <Card style={{marginBottom: "50px"}}>asd</Card>

            </Stack>
        </Container>
    )
}

export default Home
