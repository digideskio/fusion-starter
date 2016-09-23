import {expect} from 'chai';
import {formatDateTime} from './formatDateTime';

describe('formatDateTime', () => {
  it('returns mm/dd/yy hh:mm pm/am formatted time when passed a full date as string', () => {
    expect(formatDateTime('Fri Nov 25 2016 18:26:32 GMT-0600 (Central Standard Time')).to.equal('11/25/16 6:26pm');
  });
});
