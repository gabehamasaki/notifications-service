import { SendNotification } from '@app/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { NotificationController } from './kafka/controllers/notifications.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationController],
  imports: [DatabaseModule],
})
export class MessagingModule {}
