import { Suspense, lazy, useContext, useEffect } from "react";
import { Mycontext } from "./context/AppContext";
// import Cardbody from "./Cardbody";
// import PaginationButton from "./PaginationButton";
const Cardbody = lazy(() => import("./Cardbody"));
const PaginationButton = lazy(() => import("./PaginationButton"));
function Pagination() {
  const { page, fecthfunc } = useContext(Mycontext);

  useEffect(() => {
    fecthfunc(page);
  }, [page]);
  return (
    <>

      <Suspense fallback={<h1>Loading.....</h1>}>
        <Cardbody />
        <PaginationButton />
      </Suspense>

      {/* pagination  */}
    </>
  );
}

export default Pagination;
