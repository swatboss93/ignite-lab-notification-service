import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  providers: [KafkaConsumerService],
})
export class MessagingModule {}
