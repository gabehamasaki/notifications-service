import { Content } from '@app/entities/notification/content';
import {
  Notification,
  NotificationProps,
} from '@app/entities/notification/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    content: new Content('Nova solicitação de amizade!'),
    category: 'Social',
    recipientId: 'recipient-1',
    ...override,
  });
}
