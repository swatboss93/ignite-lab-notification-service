import { Content } from './content';

describe('Notification content', () => {
  it('creates a valid content', () => {
    const content = new Content('A valid notification');

    expect(content).toBeTruthy();
  });

  it('does NOT create a content with less then 5 characters', () => {
    expect(() => new Content('aaaa')).toThrow();
  });

  it('does NOT create a content with more then 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
})
