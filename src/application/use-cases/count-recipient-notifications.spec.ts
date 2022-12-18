import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notification', () => {
  it('counts recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipientId' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipientId' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'otherRecipientId' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipientId',
    });

    expect(count).toEqual(2);
  });
});
