import { FC, useCallback } from 'react';
import clsx from 'clsx';

import './images-gallery.scss';

const ImagesGallery: FC<IProps> = ({ className, imagesUrls, selectedImageIndex, onClickImage }) => {
  const onClick = useCallback(
    (index: number) => () => {
      if (typeof onClickImage !== 'function') return;

      onClickImage(index);
    },
    [onClickImage],
  );

  return (
    <div className={clsx('images-gallery', className)}>
      {imagesUrls.map((url, index) => {
        return (
          <div
            key={url}
            className={clsx('images-gallery__image-container', {
              'images-gallery__image-container--selected': index === selectedImageIndex,
            })}
            onClick={onClick(index)}
          >
            <img src={url} className="image-container__image" />;
          </div>
        );
      })}
    </div>
  );
};

type IProps = IComponent & {
  imagesUrls: string[];
  selectedImageIndex?: number;
  onClickImage?: (photoIndex: number) => void;
};

export default ImagesGallery;
