import {Autocomplete, Button, Card, CloseButton, Grid, Title} from "@mantine/core";
import {DateTimePicker} from "@mantine/dates";
import 'dayjs/locale/hu.js';
import 'dayjs/locale/en-gb.js';
import {useTranslation} from "react-i18next";
import {SearchForm} from "../../hooks/usePlanner.ts";
import {UseFormReturnType} from "@mantine/form";

interface PlannerSearchProps{
    stops: string[],
    search: () => void,
    form: UseFormReturnType<SearchForm>
}


function HomeSearchForm({stops, search, form}: PlannerSearchProps){
    const { i18n, t } = useTranslation();

    return(
        <Card>
            <form onSubmit={form.onSubmit((_values, event) => {
                event!.preventDefault()
            })}>
                <Grid>
                    <Grid.Col span={{ base: 12 }} style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                        <Title order={2}>{t('Planner.Search.Title')}</Title>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }} style={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                        <Autocomplete
                            placeholder={t('Planner.Search.StopPlaceholder')}
                            rightSectionPointerEvents="all"
                            data={stops}
                            {...form.getInputProps('stopName')}
                            style={{flexGrow: "1"}}
                            rightSection={
                                <CloseButton
                                    aria-label="Clear input"
                                    onClick={() => form.setValues({stopName: ""})}
                                    style={{ display: form.values.stopName ? undefined : 'none' }}
                                />
                            }
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }} style={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                        <DateTimePicker style={{flexGrow: "1"}} locale={i18n.language} {...form.getInputProps('dateTime')} />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }} style={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                        <Button type="submit" variant="filled" onClick={() => search()}>{t('Planner.Search.Button')}</Button>
                    </Grid.Col>
                </Grid>
            </form>
        </Card>
    )
}

export default HomeSearchForm;
