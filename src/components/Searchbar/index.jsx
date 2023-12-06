
import { Formik, Form} from 'formik'
import { Container,Input, Button, Error } from './SearchStyle.module';
import { useEffect, useState } from 'react';
import { getMovieBySearch } from 'service/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import MoviesHomeCard from 'components/MoviesHomeCard';

function validateText(value) {
   let error;
   if (!value) {
     error = 'Required';
   } else if (!/^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$/i.test(value)) {
     error = 'Invalid word';
  
   }
   return error;
 }
const Searchbar = ({ isSubmitting }) => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  
  const [searchParams, setSearchParams] = useSearchParams()
  
  
  const handleSubmit = ({ values }, actions) => {
    actions.resetForm();
    setSearchParams({query: values})
   
  }
  useEffect(() => {
    if(searchParams.get('query')){
    (async function getMovie() {
      try {
        const movieDetails = await getMovieBySearch(searchParams.get('query'));
        
        setMovies(movieDetails);
      } catch (error) {
        console.log(error);
      }
      })();
      }
  }, [searchParams]);

  
 
  return (
    <>
    <Formik initialValues={{ values: '' }} onSubmit={handleSubmit}>
				 {({ errors, touched }) => (
					<Form >
						<Container >
            <Input name='values' type='text' validate={validateText} />
            {errors.values && touched.values ? (
             <Error>{errors.values}</Error> 
           ) : null}
						<Button type='submit' disabled={isSubmitting}>
							Search
						</Button>
              </Container>
					</Form>
				
			)}
    </Formik>
      <Container>
        {movies.map(movie => {
          return (
      <Link key={movie.id} to={`${movie.id}`} state={{ from: location }}>
              <MoviesHomeCard  movie={movie} />
              </Link>
        )
        })}
    </Container> 
      
      </>
	)
}

export default Searchbar
