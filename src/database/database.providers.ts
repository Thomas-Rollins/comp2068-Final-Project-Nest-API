import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => {
      (mongoose as any).Promise = global.Promise;
      return await mongoose.connect('mongodb://' + process.env.MLABROOTUSER +
        ':' + process.env.MLABROOTPASS + '@ds259711.mlab.com:59711/comp2068-final-project', { useNewUrlParser: true } );
    },
  },
];