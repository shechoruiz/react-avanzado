import React from "react";
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNearScreen } from '../hooks/useNearScreen'

import { ImgWrapper, Img, Article } from "./styles";
import { FavButton } from '../FavButton'
import { ToogleLikeMutation } from '../../container/ToggleLikeMutation'
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false);

  

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </a>
          <ToogleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: {
                    input: { id }
                  }})
                  setLiked(!liked)
                };
                return (
                  <FavButton
                    liked={liked}
                    likes={likes}
                    onClick={handleFavClick}
                  />
                );
              }
            }
          </ToogleLikeMutation>
        </>
      )}
    </Article>
  );
};
