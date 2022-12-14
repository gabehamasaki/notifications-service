import { Notification } from '../../src/app/entities/notification/notification';
import { NotificationRepository } from '../../src/app/repositories/notification-repositories';

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
