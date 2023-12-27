// @ts-check

import { test } from 'node:test';
import assert from 'assert/strict';
import * as funcs from '../index.js';

test('step1', () => {
  assert.strictEqual(funcs.findMax([1, 5, 3, 9, 2]), 9);
  assert.strictEqual(funcs.findMax([-1, -5, -3, -9, -2]), -1);
  assert.strictEqual(funcs.findMax([-1, 5, -3, 9, 2]), 9);
  assert.deepStrictEqual(funcs.findMax([]), []);
});

test('step2', () => {
  assert.deepStrictEqual(funcs.calculateAverage([1, 2, 3, 4, 5]), 3);
  assert.deepStrictEqual(funcs.calculateAverage([10, 20, 30]), 20);
  assert.deepStrictEqual(funcs.calculateAverage([7, 8, 9, 10]), 8.5);
  assert.deepStrictEqual(funcs.calculateAverage([]), []);
});

test('step3', () => {
  assert.deepStrictEqual(funcs.getEvenNumbers([2, 4, 6, 8, 10]), [2, 4, 6, 8, 10]);
  assert.deepStrictEqual(funcs.getEvenNumbers([1, 3, 5, 7, 9]), []);
  assert.deepStrictEqual(funcs.getEvenNumbers([]), []);
  assert.deepStrictEqual(funcs.getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]), [2, 4, 6, 8]);
});

test('step4', () => {
  assert.deepStrictEqual(funcs.getIntersection([1, 2, 3, 4], [3, 4, 5, 6]), [3, 4]);
  assert.deepStrictEqual(funcs.getIntersection([10, 20, 30], [40, 50, 60]), []);
  assert.deepStrictEqual(funcs.getIntersection([], [7, 8, 9]), []);
  assert.deepStrictEqual(funcs.getIntersection(['apple', 'banana', 'cherry'], ['cherry', 'date', 'elderberry']), ['cherry']);
});

test('step5', () => {
  const nestedes1 = [[-1, -2, -3], [1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const nestedes2 = [[1, 2], [3, 4, 5], [6, 7, 8, 9]];
  const nestedes3 = [[[[1, 2, 3], [4, 5, 6]], [[7, 8, 9]]]];
  const nestedes4 = [[[[-1, -2, -3], [-4, -5, -6]], [[-7, -8, -9]]]];

  assert.deepStrictEqual(funcs.findLargestElement(nestedes1), 9);
  assert.deepStrictEqual(funcs.findLargestElement([[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]]), -1);
  assert.deepStrictEqual(funcs.findLargestElement([[0, 0, 0], [0, 0, 0], [0, 0, 0]]), 0);
  assert.deepStrictEqual(funcs.findLargestElement([]), []);
  assert.deepStrictEqual(funcs.findLargestElement(nestedes2), 9);
  assert.deepStrictEqual(funcs.findLargestElement(nestedes3), 9);
  assert.deepStrictEqual(funcs.findLargestElement(nestedes4), -1);
  assert.deepStrictEqual(funcs.findLargestElement([[[[0, 0, 0], [0, 0, 0]], [[0, 0, 0]]]]), 0);
  assert.deepStrictEqual(funcs.findLargestElement([[[[1, 2], [3, 4, 5]], [[6, 7, 8, 9]]]]), 9);
});
