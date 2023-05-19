import { useContext } from "react";
import { Mycontext } from "./context/AppContext";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Filter from "./Filter";
import "react-lazy-load-image-component/src/effects/blur.css";
function Cardbody() {
  const { data,filter } = useContext(Mycontext);
  return (
    <>
      
      <h1
        id="section1"
        className="text-center text-3xl pt-10 font-bold font-sans"
      >
        Popular Movie
      </h1>
      <Filter />
      
{filter.length===0 && <h1 className="flex text-red-200 justify-center pt-2 pb-2 text-xl font-bold">Movie not found</h1>}
      <motion.div layout className="grid gap-2 grid-cols-2 lg:grid-cols-6 md:grid-cols-4 max-w-[900px] mx-auto pt-10 pb-10 place-content-center">
        {filter.map((items) => (
          <>
          <motion.div layout>
            <motion.div layout  className="pt-2 pb-2" key={items.id}>
              <LazyLoadImage
                className="object-cover rounded-xl max-w-[90%] mx-auto "
                src={`https://image.tmdb.org/t/p/original/${items.poster_path}`}
                alt=""
                effect="blur"
              />

              <h1 className="text-center font-bold">{items.original_title}</h1>
            </motion.div>
            </motion.div>
            </>
        ))}
      </motion.div>
    </>
  );
}

export default Cardbody;
