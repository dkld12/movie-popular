import { useContext } from "react";
import { Mycontext } from "./context/AppContext";

function PaginationButton() {
  const { page, setPage, totalPage } = useContext(Mycontext);

  return (
      <>
          
      <div className="flex justify-center flex-col w-fit items-center mx-auto">
        <div className="flex">
          {page > 1 && (
            <button
              className="bg-blue-600 text-white p-2 ml-2"
              onClick={() => setPage(page - 1)}
            >
              <a href="#section1">Prev</a> 
            </button>
          )}

          {totalPage > page && (
            <button
              className="bg-blue-600 text-white p-2 ml-2"
              onClick={() => setPage(page + 1)}
            >
              <a href="#section1">Next</a> 
            </button>
          )}
        </div>
        <p className="text-center text-xl font-bold pt-2 pb-2">
          Page {page} of {totalPage}
        </p>
      </div>
    </>
  );
}

export default PaginationButton;
