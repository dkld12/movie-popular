import Pagination from "./Pagination";
import { MycontextProvider } from "./context/AppContext";
function App() {
  return (
    <>
      <MycontextProvider>
        <div className="bg-blue-950 text-white">
          <Pagination />
          </div>
      </MycontextProvider>
    </>
  );
}

export default App;
