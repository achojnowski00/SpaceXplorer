import React from 'react';

import { useTranslation } from 'react-i18next';

const HomePage: React.FC<IProps> = ({}) => {
  const { t } = useTranslation();

  return <div>{t('common:test')}</div>;
};

interface IProps {}

export default HomePage;
