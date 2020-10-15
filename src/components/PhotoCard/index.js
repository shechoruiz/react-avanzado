import React from "react";
import { useNearScreen } from '../hooks/useNearScreen'
import { Link } from '@reach/router'

import { ImgWrapper, Img, Article } from "./styles";
import { FavButton } from '../FavButton'
import { ToogleLikeMutation } from '../../container/ToggleLikeMutation'
const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </Link>
          <ToogleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: {
                    input: { id }
                  }})
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
