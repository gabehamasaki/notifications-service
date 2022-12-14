import { Injectable } from '@nestjs/common';
import { Content } from '../entities/notification/content';
import { Notification } from '../entities/notification/notification';
import { NotificationRepository } from '../repositories/notification-repositories';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    // Persistir essa notificação no banco de dados
    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
