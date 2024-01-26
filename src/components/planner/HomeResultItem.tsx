import {Text, Grid, Stack, Card} from "@mantine/core";
import {useTranslation} from "react-i18next";
import {SearchResultItem} from "../../hooks/usePlanner.ts";
import {formatTime} from "../../models/utility/Time.ts";


function HomeResultItem(props: {item: SearchResultItem}){
    const {t } = useTranslation();

    return(
        <Card style={{marginBottom: "10px", border: "1px solid #ccc"}}>
            <Grid>
                <Grid.Col span={{ base: 12, xs: 4 }} style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
                    <Stack align={"center"} justify={"center"} gap={"0"}>
                        <Text size="sm" c="dimmed">{t('Planner.ResultItem.StopTitle')}</Text>
                        <Text size="md" fw="bold">{props.item.stopName}</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }} style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
                    <Stack align={"center"} justify={"center"} gap={"0"}>
                        <Text size="sm" c="dimmed">{t('Planner.ResultItem.Time')}</Text>
                        <Text size="md" fw="bold">{formatTime(props.item.time)}</Text>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }} style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
                    <Stack align={"center"} justify={"center"} gap={"0"}>
                        <Text size="sm" c="dimmed">{t('Planner.ResultItem.NextStopTitle')}</Text>
                        <Text size="md" fw="bold">{props.item.nextStop}</Text>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Card>
    );
}

export default HomeResultItem
