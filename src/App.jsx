import Pagination from "./Pagination";
import { MycontextProvider } from "./context/AppContext";
function App() {
  return (
    <>
      <MycontextProvider>
        <Pagination />
      </MycontextProvider>
    </>
  );
}

export default App;
