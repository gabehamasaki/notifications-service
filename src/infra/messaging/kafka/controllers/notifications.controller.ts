import { SendNotification } from '@app/use-cases/send-notification';
import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationController {
  private readonly logger = new Logger('KafkaNotification');

  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { category, content, recipientId }: SendNotificationPayload,
  ) {
    this.logger.log('Send notification');
    await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });
  }
}
