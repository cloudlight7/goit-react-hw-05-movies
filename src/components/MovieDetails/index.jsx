import { Suspense, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom"
import { getMovieById } from "../../service/api";
import {IMG_PATH, DEFAULT_IMG,STATUS} from "constants";
import Loader from "components/Loader";
import {  useLocation } from "react-router-dom";
import { BackLink, BoxOutlet, CastLink, Container, ContainerInfo, ImgPoster, ReviewsLink } from "./MovieDetailsStyle.module";

const MovieDetails = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const backLink2 = location.state;
  const { movieId } = useParams()
  const { idle, pending, resolved, rejected } = STATUS;

  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(idle);
  useEffect(() => {
    (async function getMovie() {
      try {
        setStatus(pending);
        const movieDetails = await getMovieById(movieId);
        const MOVIE_DETAILS_AVAILABLE = Object.keys(movieDetails).length !== 0;
        if (!MOVIE_DETAILS_AVAILABLE) {
          setStatus(rejected);
          return;
        }
        setMovie(movieDetails);
        setStatus(resolved);
      } catch (error) {
        setStatus(rejected);
      }
    })();
  }, [movieId, pending, rejected, resolved]);

 
  return (
    <>
        <BackLink to={backLink} >Back </BackLink>
      {status !== 'RESOLVED' ? (<Loader />) : (
        <>
          <Container >
            <div >
          <ImgPoster
            src={movie.poster_path ? IMG_PATH + movie.poster_path : DEFAULT_IMG}
            alt={movie.title} />
        </div><ContainerInfo >
            <h2>{movie.title}</h2>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.length === 0 ? (
          <li>No genres for this movie</li>
        ) : (
          movie.genres.map(({ name }, indx) => {
            return <li key={indx}>{name}</li>;
          })
        )}
                  </ul>

          </ContainerInfo>
          
        </Container>
        <Container>
          <CastLink to="cast" state={backLink2}>Cast </CastLink>
          <ReviewsLink to="reviews" state={backLink2}>Reviews </ReviewsLink>
        <Suspense fallback={<Loader />}>
            </Suspense>
             </Container>
               <BoxOutlet><Outlet /></BoxOutlet> 
        </>
      )}
    </>
  )
}

export default MovieDetails