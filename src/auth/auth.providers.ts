import { Connection } from 'mongoose';
import { UserSchema } from '../users/users.schema';

export const authProviders = [
  {
    provide: 'UserModelToken',
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: ['DbConnectionToken'],
  },
];