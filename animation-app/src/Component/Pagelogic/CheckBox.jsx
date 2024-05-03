import React from 'react';
import PropTypes from 'prop-types';
import s from '../../Style/LogicPageStyle/Logic.module.scss'

const Checkbox = ({ id, isChecked, onChange, label }) => {
  return (
    <div className={s.checkboxWrapper}>
      <input
        type="checkbox"
        className={s.check}
        id={id}
        checked={isChecked}
        onChange={() => onChange(id)}
      />
      <label htmlFor={id} className={s.label}>
        <svg viewBox="0 0 65 65" height="30" width="30">
          <rect x="7" y="7" width="50" height="50" stroke="black" fill="none" />
          <g transform="translate(-23,-967.36216)" id={`layer1-${id}`}>
            <path
              id={`path4146-${id}`}
              d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23"
              fill="none"
              stroke="black"
              strokeWidth="3"
              className={s.path1}
            />
          </g>
        </svg>
        <span>{label}</span> {/* Використовуємо переданий текст для спану */}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired, // Додаємо propTypes для label
};

export default Checkbox;
