import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('creates a valid notification', () => {
    const notification = new Notification({
      recipientId: 'UUID',
      content: new Content('Valid content'),
      category: 'category',
    });

    expect(notification).toBeTruthy();
  });
});
