import { IMG_PATH } from 'constants'
import {Book, Cover, Text, Img,Elem} from './MoviesHomeCardStyle.module'
import { DEFAULT_IMG } from 'constants'
const MoviesHomeCard = ({ movie }) => {
    return (
        <Elem>
		<Book >
    <Text>{movie.overview}</Text>
                <Cover >
                    <Img
                    src={movie.poster_path ? IMG_PATH + movie.poster_path : DEFAULT_IMG }
                    alt={movie.title}
                    loading="lazy"
                  />
    </Cover>
            </Book>
            </Elem>
	)
}

export default MoviesHomeCard

/*

		<Elem onClick={()=>onOpenModal(image.id)}>
			<Img src={image.webformatURL}  alt='...' />
			
		</Elem>

        */