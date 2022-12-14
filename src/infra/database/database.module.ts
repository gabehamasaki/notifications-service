import { Module } from '@nestjs/common';
import { NotificationRepository } from '../../app/repositories/notification-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrimaNotificationRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrimaNotificationRepository,
    },
  ],

  exports: [NotificationRepository],
})
export class DatabaseModule {}
