import { createContext,useState } from "react";

export const Mycontext = createContext()


export const MycontextProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);
    const [loading, setLoading] = useState(false);

    const fecthfunc = async (page) => {
        setLoading(true)
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=1f71cb96b8235a5dec120ab5a57a7812`
        );
        const movie = await res.json();
        setTotalPage(movie.total_pages);
        setData(movie.results);
        setLoading(false)
      };
    
    //   useEffect(() => {
    //     fecthfunc(page);
    //   }, [page]);

    const value = {
        data,
        setData,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fecthfunc,
        setLoading,
        loading
    }
    return (
        <Mycontext.Provider value={value}>
            {children}
        </Mycontext.Provider>
    )
}



