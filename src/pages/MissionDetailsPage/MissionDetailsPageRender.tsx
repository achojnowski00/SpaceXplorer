import { FC, useRef } from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import Flex from 'src/components/Flex';
import NoPhotoAvailable from 'src/components/NoPhotoAvailable';
import PageNavigator from 'src/components/PageNavigator';
import ImagesGallery from './items/ImagesGallery';
import YoutubePlayer from 'src/components/YoutubePlayer';

import SuccessIcon from 'assets/icons/success.svg';
import FailIcon from 'assets/icons/fail.svg';

import extractYouTubeVideoId from 'src/utils/extractYouTubeVideoId';

import { IMissionDetails } from 'src/Api/MISSION_DETAILS';

const MissionDetailsPageRender: FC<IProps> = ({
  className,
  missionData,
  selectedImageIndex,
  onSelectPhoto,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation('mission');
  const { links, name, details, isSuccess, launchDate } = missionData.launch;
  const { images, video } = links;
  const date = dayjs(launchDate).format('DD.MM.YYYY');

  const imageUrl = images.length > 0 ? images[selectedImageIndex] : null;

  const youtubeVideoId = extractYouTubeVideoId(video);

  return (
    <div ref={ref} className={clsx('mission-details', className)}>
      <PageNavigator className="mission-details__page-navigator" />
      <Flex
        direction="column-reverse"
        align="start"
        gap="30px"
        className="mission-details__top-section"
      >
        <div className="mission-details__image-container">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="image-container__image" />
          ) : (
            <NoPhotoAvailable className="image-container__image" />
          )}
        </div>
        <Flex direction="column" className="mission-details__informations" align="start">
          <h1 className="informations__name">{name}</h1>
          <Flex justify="start" gap="20px">
            <span className="informations__date">{date}</span>
            {typeof isSuccess === 'boolean' && (
              <Flex justify="start" gap="5px" className="informations__success-info">
                {isSuccess ? (
                  <SuccessIcon className="success-info__icon" />
                ) : (
                  <FailIcon className="success-info__icon" />
                )}
                <span
                  className={clsx('success-info__label', {
                    'success-info__label--success': isSuccess,
                    'success-info__label--fail': !isSuccess,
                  })}
                >
                  {t(isSuccess ? 'mission_success' : 'mission_failed')}
                </span>
              </Flex>
            )}
          </Flex>
          <p className="informations__details">{details}</p>
        </Flex>
      </Flex>
      <ImagesGallery
        selectedImageIndex={selectedImageIndex}
        imagesUrls={images}
        onClickImage={onSelectPhoto}
        className="mission-details__gallery"
      />

      {youtubeVideoId && (
        <Flex className="mission-details__youtube-player-container">
          <YoutubePlayer
            className="youtube-player-container__player"
            youtubeVideoId={youtubeVideoId}
            title={name}
          />
        </Flex>
      )}

      {/* TODO: Add rocket informations section */}
    </div>
  );
};

type IProps = IComponent & {
  missionData: IMissionDetails;
  selectedImageIndex: number;
  onSelectPhoto: (index: number) => void;
};

export default MissionDetailsPageRender;
