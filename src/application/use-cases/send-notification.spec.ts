import { SendNotification } from "./send-notification";

describe('Send notification', () => {
  it('creates a notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: 'UUID',
      content: 'Valid content',
      category: 'category',
    });

    expect(notification).toBeTruthy();
  });
});
