import Home from "./components/Home/Home";
import { SnackbarProvider } from "notistack";


export default function App() {
  return (
    <SnackbarProvider>
      <div>
        <Home />
      </div>
    </SnackbarProvider>
  );
}
