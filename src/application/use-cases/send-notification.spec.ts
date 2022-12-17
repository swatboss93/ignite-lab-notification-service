import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  }
}


describe('Send notification', () => {
  it('creates a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      recipientId: 'UUID',
      content: 'Valid content',
      category: 'category',
    });

    expect(notifications).toHaveLength(1);
  });
});
