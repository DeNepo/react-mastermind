import { useState } from 'react';

import { MasterMindContext } from '../../context/master-mind-context';
import { useContext, useEffect } from 'react';

import { aCat } from '../../api-calls/a-cat.js';
import { determineCorrectness } from '../../logic/determine-correctness';

export const Dot = ({ idx, color }) => {
  const [imgUrl, setImgUrl] = useState('');

  useEffect(async () => {
    setImgUrl(await aCat());
  }, [1]);

  const state = useContext(MasterMindContext);

  return (
    <div className={`entry ${determineCorrectness(idx, color, state.code)}`}>
      <img src={imgUrl} />
    </div>
  );
};
