import './row.css';

import { determineCorrectness } from '../../logic/determine-correctness';

import { MasterMindContext } from '../../context/master-mind-context';

import { useContext } from 'react';

// import { Dot } from './Dot';

export const Row = ({ values }) => {
  const state = useContext(MasterMindContext);

  return (
    <div className="row">
      {/* <Dot idx={0} color={values[0]}></Dot>
    <Dot idx={1} color={values[1]}></Dot>
    <Dot idx={2} color={values[2]}></Dot>
    <Dot idx={3} color={values[3]}></Dot> */}
      <div
        className={`entry ${values[0]} ${determineCorrectness(
          0,
          values[0],
          state.code
        )}`}
      ></div>
      <div
        className={`entry ${values[1]} ${determineCorrectness(
          1,
          values[1],
          state.code
        )}`}
      ></div>
      <div
        className={`entry ${values[2]} ${determineCorrectness(
          2,
          values[2],
          state.code
        )}`}
      ></div>
      <div
        className={`entry ${values[3]} ${determineCorrectness(
          3,
          values[3],
          state.code
        )}`}
      ></div>
    </div>
  );
};
