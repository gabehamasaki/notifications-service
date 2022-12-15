import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification/notification';
import { NotificationRepository } from '../repositories/notification-repositories';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: GetRecipientNotificationsRequest,
  ): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationRepository.findManByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
