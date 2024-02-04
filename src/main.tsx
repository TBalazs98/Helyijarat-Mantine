import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'flag-icons/css/flag-icons.min.css';
import { createTheme, MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import localization from './i18n/config.ts';
import '@mantine/dates/styles.css';

const theme = createTheme({
    /** Put your mantine theme override here */
    colors: {
        'grape-yellow': [ "#fffae3", "#fff3cd", "#ffe69c", "#ffd966", "#ffcd3a", "#ffc51f", "#ffc210", "#e3aa00", "#c99700", "#ae8200" ],
        'leaf-brown' : ["#fff1e8", "#f6e3d9", "#e7c6b3", "#d9a78a", "#cd8d67", "#c77c51", "#c47345", "#ad6136", "#9b552e", "#884823" ],
        'water-blue' : ["#ebf6ff", "#d5eafa", "#a6d3f7", "#74bbf6", "#51a7f5", "#3f9af5", "#3595f6", "#2a81db", "#1e72c4", "#0062ad" ]
    },
    primaryColor: 'water-blue',
    primaryShade: 7
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
