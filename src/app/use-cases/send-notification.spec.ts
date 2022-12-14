import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();

    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'Social',
      recipientId: 'example-recipient-id',
    });

    // console.log(notifications);

    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
