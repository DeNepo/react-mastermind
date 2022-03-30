import React from 'react';
import { generateCode } from '../logic/generate-code';
import { colors } from '../model/colors';

// const colors = await fetch('../data/colors.json').then((res) => res.json());

export const startState = {
  guesses: [],
  code: generateCode(colors),
  possibleColors: colors,
};

export const MasterMindContext = React.createContext(startState);
