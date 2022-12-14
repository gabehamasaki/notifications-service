import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../app/entities/notification/notification';
import { NotificationRepository } from '../../../../app/repositories/notification-repositories';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrimaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        recipientId: notification.recipientId,
        content: notification.content.value,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
