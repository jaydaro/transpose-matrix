'use strict';
const expect = require('chai').expect;
const transposeMatrix = require('../index').transpose;
const testMatrixSquare = [
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9],
  [1,2,3,4,5,6,7,8,9]
];

const testMatrixLongerRows = [
  [1,2,3,4,5,6,7,8],
  [1,2,3,4,5,6,7,8],
  [1,2,3,4,5,6,7,8],
  [1,2,3,4,5,6,7,8],
  [1,2,3,4,5,6,7,8],
  [1,2,3,4,5,6,7,8],
  [1,2,3,4,5,6,7,8],
  [1,2,3,4,5,6,7,8],
  [1,2,3,4,5,6,7,8],
  [1,2,3,4,5,6,7,8],
  [1,2,3,4,5,6,7,8]

];

const testMatrixLongerColumns = [
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10],
  [1,2,3,4,5,6,7,8,9,10]
];

const testMatrixIrregular = [
  [1,2],
  [1,2,3],
  [1],
  [1,2,3,4,5],
  [1,2]
];

describe('Test Transpose Functionality', () => {
  it('Should transpose a square matrix', () => {

    const expectedResults = [
      [1,1,1,1,1,1,1,1,1],
      [2,2,2,2,2,2,2,2,2],
      [3,3,3,3,3,3,3,3,3],
      [4,4,4,4,4,4,4,4,4],
      [5,5,5,5,5,5,5,5,5],
      [6,6,6,6,6,6,6,6,6],
      [7,7,7,7,7,7,7,7,7],
      [8,8,8,8,8,8,8,8,8],
      [9,9,9,9,9,9,9,9,9]
    ];


    const results = transposeMatrix(testMatrixSquare);
    expect(results).to.deep.equal(expectedResults);
  });

  it('Should transpose a rectangle with longer rows matrix', () => {

    const expectedResults = [
      [1,1,1,1,1,1,1,1,1,1,1],
      [2,2,2,2,2,2,2,2,2,2,2],
      [3,3,3,3,3,3,3,3,3,3,3],
      [4,4,4,4,4,4,4,4,4,4,4],
      [5,5,5,5,5,5,5,5,5,5,5],
      [6,6,6,6,6,6,6,6,6,6,6],
      [7,7,7,7,7,7,7,7,7,7,7],
      [8,8,8,8,8,8,8,8,8,8,8]
    ];

    const results = transposeMatrix(testMatrixLongerRows);
    expect(results).to.deep.equal(expectedResults);
  });

  it('Should transpose a rectangle with longer columns matrix', () => {

    const expectedResults = [
      [1,1,1,1,1,1,1,1,1],
      [2,2,2,2,2,2,2,2,2],
      [3,3,3,3,3,3,3,3,3],
      [4,4,4,4,4,4,4,4,4],
      [5,5,5,5,5,5,5,5,5],
      [6,6,6,6,6,6,6,6,6],
      [7,7,7,7,7,7,7,7,7],
      [8,8,8,8,8,8,8,8,8],
      [9,9,9,9,9,9,9,9,9],
      [10,10,10,10,10,10,10,10,10]

    ];

    const results = transposeMatrix(testMatrixLongerColumns);
    expect(results).to.deep.equal(expectedResults);
  });

  it('Should return null if not a rectangle', () => {

    const expectedResults = [null];

    const results = transposeMatrix(testMatrixIrregular);
    expect(results).to.deep.equal(expectedResults);
  });
});

