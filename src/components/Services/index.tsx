import React, { useEffect, useState } from 'react';
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux';
import PromocodeCard from '../PromocodeCard';
import { ICard, IState } from '../../Interface';
import './styles.scss';
import mockData from '../../helpers/mockData';
import { actionFilter, actionSaveData } from '../../redux/actions';

const Services: React.FC = () => {
  const [filter, setFilter] = useState('');
  const bonuses = useSelector((state: IState): ICard[] => state.bonuses);
  const isBonusesLoading = useSelector((state: IState): boolean => state.isBonusesLoading);
  const dispatch = useDispatch();
  
  const filterHandler = (value: string): void => {
    setFilter(value);
    console.log('value', value)
    dispatch(actionFilter(value));
  };

  useEffect(() => {
    dispatch(actionSaveData(mockData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="services">
      <div className="services__title">
        {' '}
        Services
      </div>
      <div className="services__filter">
        <div className="services__filter-text">
          {' '}
          Filter
        </div>
        <div className="services__filter-block">
          <input
            data-testid="input-filter"
            className="services__filter-block-input"
            onChange={(e) => filterHandler(e.target.value)}
            value={filter}
          />
          <div
            role="button"
            data-testid="button-reset-filter"
            tabIndex={-3}
            className="services__filter-block-button"
            onKeyPress={() => filterHandler('')}
            onClick={() => filterHandler('')}
          >
            {' '}
            reset
          </div>
        </div>
      </div>
      <div>
        {!bonuses.length && !isBonusesLoading && (
          <div className="services__filter-no-found">
            'no services found'
          </div>
        )}
        {isBonusesLoading && <div data-testid="loader" className="loader" />}
        {!isBonusesLoading && bonuses.map((item) => (
          <PromocodeCard
            id={item.id}
            key={item.id}
            isActive={item.isActive}
            title={item.title}
            description={item.description}
            promocode={item.promocode}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
