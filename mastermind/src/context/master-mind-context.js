import React from 'react';
import { generateCode } from '../logic/generate-code';
import { colors } from '../model/colors';

export const startState = {
  guesses: [],
  code: generateCode(),
  possibleColors: colors
}

export const MasterMindContext = React.createContext(startState);