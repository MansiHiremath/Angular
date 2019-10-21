import { ReverseTestPipe } from './reverse-test.pipe';

describe('ReverseTestPipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseTestPipe();
    expect(pipe).toBeTruthy();
  });
});
