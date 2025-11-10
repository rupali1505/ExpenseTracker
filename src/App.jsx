import Home from "./components/Home/Home";
import { SnackbarProvider } from "notistack";


export default function App() {
  return (
    <SnackbarProvider maxSnack={2 }>
      <div>
        <Home />
      </div>
    </SnackbarProvider>
  );
}
