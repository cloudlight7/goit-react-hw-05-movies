import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
const Layout = lazy(() => import('Layout'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));


//import Layout from "Layout";
//import Cast from "components/Cast";
//import Reviews from "components/Reviews";
//import HomePage from "pages/HomePage";
//import MovieDetailsPage from "pages/MovieDetailsPage";
//import MoviesPage from "pages/MoviesPage";

export const App = () => {
   return (
     <Routes>
       <Route path="/" element={<Layout />}>
       <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />}/>
         <Route path="movies/:movieId" element={<MovieDetailsPage />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
         </Route>
         <Route path="*" element={<ErrorPage />}/>
       </Route>
  </Routes>)
}
