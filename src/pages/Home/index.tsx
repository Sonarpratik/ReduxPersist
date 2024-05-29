import React, { useState } from "react";
import usePaginatedFetchMovies from "../../services/PaginateMovies";
import Card, { MovieCardData } from "../../component/Card";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  // const { data: movies, isLoading } = usePaginatedFetchMovies(page);
  const isLoading=false
const movies=[
  {id:1,
    poster_path:"heeloss",
    original_title:"original_title11"
  },
  {id:2,
    poster_path:"heeloasdasdss",
    original_title:"original_title11"
  },
  {id:3,
    poster_path:"hzzzoss",
    original_title:"original_title11"
  },
  {id:4,
    poster_path:"zcsdasdeeloss",
    original_title:"original_title11"
  },
  {id:5,
    poster_path:"uyieeloss",
    original_title:"original_title11"
  },
]
  console.log("movies=>", movies);
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="container">
          <div className="row">
            {movies?.map(
              ({ id, poster_path, original_title }: MovieCardData) => {
                return (
                  <Card
                    id={id}
                    poster_path={poster_path}
                    original_title={original_title}
                  />
                );
              }
            )}
          </div>
        </div>
      )}
      <footer style={{ margin: "10px" }}>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 1 ? true : false}
        >
          Prev
        </button>
        <p style={{ display: "inline", margin: "10px" }}>{page}</p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={false}
        >
          Next
        </button>
      </footer>
    </>
  );
};

export default Home;
