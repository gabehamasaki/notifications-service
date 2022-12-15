import { Content } from '@app/entities/notification/content';
import { Notification } from '@app/entities/notification/notification';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      recipientId: notification.recipientId,
      content: notification.content.value,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: RawNotification) {
    return new Notification(
      {
        category: raw.category,
        recipientId: raw.recipientId,
        content: new Content(raw.content),
        canceledAt: raw.canceledAt,
        readAt: raw.readAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
