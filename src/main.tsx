import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'flag-icons/css/flag-icons.min.css';
import {createTheme, MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import localization from './i18n/config.ts';
import '@mantine/dates/styles.css';

const theme = createTheme({
    /** Put your mantine theme override here */
});


ReactDOM.createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
        <I18nextProvider i18n={localization}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </I18nextProvider>
    </MantineProvider>
)
