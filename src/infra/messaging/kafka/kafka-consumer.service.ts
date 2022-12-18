import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['right-sunbeam-5332-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cmlnaHQtc3VuYmVhbS01MzMyJDJfeKR2ucd6azonnNc0xmqCKr4F68ky6g5RaWo',
          password:
            'fKLgpVy9WTtyDv5-Vao2mYTwSrbbXzr6xjPSazR67yJP7ZeA_Uo7v58Fp2f2GNh3KOgQ7w==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
