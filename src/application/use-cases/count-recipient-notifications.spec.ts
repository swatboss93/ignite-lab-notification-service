import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notification', () => {
  it('counts recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('valid content'),
        category: 'category',
        recipientId: 'recipientId',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('valid content 2'),
        category: 'category 2',
        recipientId: 'recipientId',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('valid content'),
        category: 'category',
        recipientId: 'otherRecipientId',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipientId',
    });

    expect(count).toEqual(2);
  });
});
