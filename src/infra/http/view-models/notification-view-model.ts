import { Notification } from '@app/entities/notification/notification';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content,
      category: notification.category,
    };
  }
}
