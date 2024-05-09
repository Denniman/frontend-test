import { RootRoutes } from "./routes";
import { AppProvider } from "./Context";

function App() {
    return (
        <AppProvider>
            <RootRoutes />
        </AppProvider>
    );
}

export default App;
