import { Connection } from 'mongoose';
import { BookSchema } from './books.schema';

export const booksProviders = [
  {
    provide: 'BookModelToken',
    useFactory: (connection: Connection) => connection.model('Book', BookSchema),
    inject: ['DbConnectionToken'],
  },
];