import React, { useEffect, useRef, useState } from 'react';
import cl from './CastomSelect.module.css';
import strelka from '../../content/arrow.png';

const CastomSelect = ({ countries }) => {
  const [flag, setFlag] = useState('');
  const [country, setCountry] = useState('');

  const wrapper = useRef(null);
  const options = useRef(null);
  const selectChoice = useRef(null);
  const li = useRef(null);

  const handleClickLi = (e) => {
    const countryChoice = e.target.closest('li').firstChild.textContent;
    const countryFlagChoice = e.target.closest('li').firstChild.firstChild.src;
    setCountry(countryChoice);
    setFlag(countryFlagChoice);
  };

  const listItem = countries.map((el) => (
    <li key={el.id} onClick={handleClickLi} ref={li}>
      <span className={cl.optionLeft}>
        <img className={cl.optionImg} src={el.img} alt="aaa" />
        {el.name}
      </span>
      <span>{el.code}</span>
    </li>
  ));

  const handleClickWrapper = () => {
    wrapper.current.classList.toggle(`${cl.active}`);
  };

  return (
    <div className={cl.wrapper} ref={wrapper}>
      <div className={cl.selectBtn} onClick={handleClickWrapper}>
        {!country ? (
          <div className={cl.selectChoice} ref={selectChoice}>
            Select country
          </div>
        ) : (
          <div className={cl.selectChoice}>
            <img className={cl.optionImg} src={flag} alt="bbb" />
            {country}
          </div>
        )}
        <img className={cl.selectIcon} src={strelka} alt="strelka" />
      </div>
      <div className={cl.content}>
        <ul className={cl.options} ref={options}>
          {listItem}
        </ul>
      </div>
    </div>
  );
};

export default CastomSelect;
