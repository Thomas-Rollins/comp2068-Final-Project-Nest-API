import * as passport from 'passport';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { authProviders } from './auth.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [AuthService, JwtStrategy, ...authProviders],
  controllers: [AuthController],
})
export class AuthModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(passport.authenticate('jwt', { session: false }))
      .forRoutes({ path: '/users/', method: RequestMethod.DELETE });
    // { path: '/books/', method: RequestMethod.PATCH },
    // { path: '/books/', method: RequestMethod.POST },
    // { path: '/books/', method: RequestMethod.PUT },
    // { path: '/books/:id', method: RequestMethod.DELETE },
    // { path: '/books/:id', method: RequestMethod.PATCH },
    // { path: '/books/:id', method: RequestMethod.POST },
    // { path: '/books/:id', method: RequestMethod.PUT },
    // { path: '/books/:id', method: RequestMethod.DELETE });
  }
}