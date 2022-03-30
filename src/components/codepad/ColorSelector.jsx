import { useContext } from 'react';
import { MasterMindContext } from '../../context/master-mind-context';

export const ColorSelector = (idx) => {
  const state = useContext(MasterMindContext);
  const colors = state.possibleColors;
  return (
    <select
      className="color-picker"
      // id={`colorpicker${idx}`}
      name={`color${idx}`}
      key={`color${idx}`}
    >
      {colors.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
};
