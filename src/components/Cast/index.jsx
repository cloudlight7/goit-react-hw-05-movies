import { DEFAULT_IMG } from "constants";
import { IMG_PATH } from "constants";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { getCast } from "service/api";
import { Box, Img, Item, List } from "./CastStyle.module";

const Cast = () => {
  
  const [cast, setCast] = useState([]);
  const { movieId } = useParams()
  useEffect(() => {
      if (!movieId) return;
    (async function getCastInfo() {
      const castInfo = await getCast(movieId);
      setCast(castInfo);
    })();
  }, [movieId]);
  return (
    <>
            <List>
        {cast.map(({ id, name, profile_path, character }) => {
          return (
            <Item key={id}>
              <Img
                src={profile_path ? IMG_PATH + profile_path : DEFAULT_IMG}
                alt={name}
                loading="lazy"
              />
              <Box >
                {name}
              </Box>
              <Box >
                Character: {character}
              </Box>
            </Item>
          );
        })}
      </List>
    </>
  )
}

export default Cast