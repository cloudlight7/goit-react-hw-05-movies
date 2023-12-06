
import { BackLink } from './ErrorStyle.module';

const Error = () => {
    return (
      <>
    <BackLink to='/' >Back </BackLink>
       <h1>Error. Page couldn't be found.</h1> 
     </>
  );
};

export default Error;