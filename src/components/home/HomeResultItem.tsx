import {Text, Grid, Stack, Card} from "@mantine/core";
import {useTranslation} from "react-i18next";



function HomeResultItem(){
    const {t } = useTranslation();


    return(
        <Card>
            <Grid>
                <Grid.Col span={{ base: 12, xs: 4 }} style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
                    <Stack align={"center"} justify={"center"} gap={"0"}>
                        <Text size="sm" c="dimmed">{t('Planner.ResultItem.StopTitle')}</Text>
                        <Text size="md" fw="bold">Homok vasútállomás</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }} style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
                    <Stack align={"center"} justify={"center"} gap={"0"}>
                        <Text size="sm" c="dimmed">{t('Planner.ResultItem.Time')}</Text>
                        <Text size="md" fw="bold">11:11</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }} style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
                    <Stack align={"center"} justify={"center"} gap={"0"}>
                        <Text size="sm" c="dimmed">{t('Planner.ResultItem.NextStopTitle')}</Text>
                        <Text size="md" fw="bold">Homok vasútállomás</Text>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Card>
    );
}

export default HomeResultItem
