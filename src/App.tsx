import '@mantine/core/styles.css';
import {
    ActionIcon,
    AppShell,
    Burger,
    Button,
    Group,
    Image,
    Stack, Title,
    useMantineColorScheme,
} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {IconMoonStars, IconSunset2} from "@tabler/icons-react";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import TimeTable from "./pages/TimeTable.tsx";
import Map from "./pages/Map.tsx";
import {useTranslation} from "react-i18next";
import "./App.css";

function App() {
    const [opened, { toggle }] = useDisclosure(false);

    const { t, i18n } = useTranslation();
    const { colorScheme, setColorScheme } = useMantineColorScheme();

    function handleLanguageChange()
    {
        i18n.language == 'hu' ? i18n.changeLanguage("en") : i18n.changeLanguage("hu")
    }

    function  handleThemeChange(){
        setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
    }


    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: "300",
                breakpoint: 'sm',
                collapsed: { mobile: !opened, desktop: true },
            }}
        >
            <AppShell.Header style={{paddingLeft: "5px", paddingRight: "5px"}}>
                <Group align={"center"} gap={"xs"}  style={{ height: "100%"}}>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <Image src={"src/assets/crest.png"} w={"30px"}/>
                    <Title order={2}>{t('Navigation.Title')}</Title>
                    <Group align={"center"} justify={"space-around"} visibleFrom={"sm"} style={{flexGrow: "1"}}>
                        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                            <Title order={4}>{t('Navigation.Home')}</Title>
                        </NavLink>
                        <NavLink to="/map" className={({isActive}) => isActive ? "active" : ""}>
                            <Title order={4}>{t('Navigation.Map')}</Title>
                        </NavLink>
                        <NavLink to="/timetable" className={({isActive}) => isActive ? "active" : ""}>
                            <Title order={4}>{t('Navigation.Timetable')}</Title>
                        </NavLink>
                    </Group>
                    <ActionIcon variant="default" size={"lg"} style={{marginLeft: 'auto'}} onClick={() => handleLanguageChange()}>
                        { i18n.language == "hu" ? <span className="fi fi-gb"></span> : <span className="fi fi-hu"></span> }
                    </ActionIcon>
                    <ActionIcon variant="default" size={"lg"} aria-label="Settings" onClick={() => handleThemeChange()}>
                        { colorScheme == "dark" ? <IconSunset2 style={{ width: '70%', height: '70%' }} stroke={1.5} /> : <IconMoonStars style={{ width: '70%', height: '70%' }} stroke={1.5} /> }
                    </ActionIcon>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar>
                <Stack>
                    <Button variant="default">First</Button>
                    <Button variant="default">Second</Button>
                    <Button variant="default">Third</Button>
                </Stack>
            </AppShell.Navbar>

            <AppShell.Main className={"home"}>
                <Routes>
                    <Route path={"/"} element={<Home/>} />
                    <Route path={"/map"} element={<Map/>} />
                    <Route path={"/timetable"} element={<TimeTable/>} />
                    <Route path={"*"} element={<Home/>} />
                </Routes>
            </AppShell.Main>
        </AppShell>
    )
}


export default App
