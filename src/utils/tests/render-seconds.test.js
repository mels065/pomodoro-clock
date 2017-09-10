import {renderSeconds} from '../render-seconds';

describe('renderSeconds', () => {
  it('will return a formatted number of "0X" if the given number is less than 10', () => {
    expect(renderSeconds(5)).toEqual("05");
  });

  it('will return itself as a string if greater than or equal to 10', () => {
    expect(renderSeconds(10)).toEqual("10");
  })
});
