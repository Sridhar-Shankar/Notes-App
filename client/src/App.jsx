import Mainbar from "./components/Mainbar/Mainbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className="homepage">
        <Sidebar />
        <Mainbar />
      </div>
    </AppProvider>
  );
}

export default App;
