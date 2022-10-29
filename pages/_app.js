import { MantineProvider } from '@mantine/core';
import '../styles/globals.css'
import { Provider } from "react-redux";
import { store } from "../store";

function MyApp({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "dark" }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  );
}

export default MyApp
