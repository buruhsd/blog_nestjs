import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { CreateUsersTable1660982576510 } from './src/migrations/1660982576510-CreateUsersTable';
 
config();
 
const configService = new ConfigService();
 
export default new DataSource({
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  migrations: [CreateUsersTable1660982576510],
});