import { useEffect, useState } from "react";
import { fetchTrendingToday } from "../../service/api";
import { Link, useLocation } from "react-router-dom";
import MoviesHomeCard from "components/MoviesHomeCard";
import { Container } from "./HomeStyle.module";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
      useEffect(() => {
    (async function getMovies() {
      const response = await fetchTrendingToday();
        setMovies(response);
    })();
      }, []);
    
  return( <Container>
        {movies.map(movie => {
          return (
      <Link key={movie.id} to={`movies/${movie.id}`} state={{ from: location }}>
              <MoviesHomeCard  movie={movie} />
              </Link>
        )
        })}
    </Container> 
  )
}

export default Home