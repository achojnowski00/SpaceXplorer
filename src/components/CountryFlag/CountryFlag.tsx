import { FC } from 'react';
import clsx from 'clsx';

import MarshaIslandFlag from 'assets/icons/Flag_of_the_Marshall_Islands.svg';
import UnitedStatesFlag from 'assets/icons/Flag_of_the_United_States.svg';

import { ICountryType } from 'src/core/ICountryType';

import './country-flag.scss';

const CountryFlag: FC<IProps> = ({ className, country }) => {
  const classes = clsx('country-flag', className);

  switch (country) {
    case 'Republic of the Marshall Islands':
      return <MarshaIslandFlag className={classes} />;
    case 'United States':
      return <UnitedStatesFlag className={classes} />;
    default:
      return null;
  }
};

type IProps = IComponent & {
  country: ICountryType;
};

export default CountryFlag;
