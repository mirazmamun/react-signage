import React from 'react';
import ReactDOM from 'react-dom';
import LetterMatrix from './LetterMatrix';

it('tests letter matrix', () => {
    let a = LetterMatrix.getLetterArray();
    expect(a.length).toEqual(26);
});
it('tests letter matrix dot array', () => {
    let a = LetterMatrix.getLetterMatrix();
    expect(Object.keys(a).length).toEqual(26);
    expect(a.a.length).toEqual(10);
});