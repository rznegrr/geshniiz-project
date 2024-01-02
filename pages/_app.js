import { StoreProvider } from "../redux/shopProvider";
import "../styles/globals.css"


const MyApp = ({ Component, pageProps }) => {
    return (
        <StoreProvider>
             <Component {...pageProps} />
        </StoreProvider>
    );
}

export default MyApp;