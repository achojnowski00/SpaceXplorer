import { FC } from 'react';
import clsx from 'clsx';

const YoutubePlayer: FC<IProps> = ({ youtubeVideoId, className, title, width, height }) => {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${youtubeVideoId}?fs=0`}
      title={title}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
      frameBorder="0"
      className={clsx('youtube-player', className)}
    />
  );
};

type IProps = {
  youtubeVideoId: string;
  className?: string;
  title?: string;
  width?: number;
  height?: number;
};

export default YoutubePlayer;
