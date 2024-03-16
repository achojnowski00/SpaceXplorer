import { FC } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Flex from '../Flex';

import ChevronLeft from 'assets/icons/chevron_left.svg';

import './page-navigator.scss';

const PageNavigator: FC<IProps> = ({ className, navigateBackTitle, onBack }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onClickBack = () => {
    typeof onBack === 'function' ? onBack() : navigate(-1);
  };

  const backButtonLabel = navigateBackTitle || t('common:go_back');

  return (
    <Flex className={clsx('page-navigator', className)}>
      <Flex
        align="center"
        gap="5px"
        justify="start"
        className="page-navigator__back-button"
        role="button"
        width="auto"
        onClick={onClickBack}
      >
        <ChevronLeft className="back-button__chevron" />{' '}
        <span className="back-button__label">{backButtonLabel}</span>
      </Flex>
    </Flex>
  );
};

type IProps = IComponent & {
  /**
   * @defaultValue `common:go_back`
   */
  navigateBackTitle?: string;
  /**
   * @defaultValue `navigate(-1)`
   */
  onBack?: VoidFunction;
};

export default PageNavigator;
