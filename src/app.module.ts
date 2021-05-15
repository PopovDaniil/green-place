import { ParksModule } from './parks/parks.module';
import { BlogsModule } from './blogs/blogs.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { RecyclingPointsModule } from './recycling-points/recycling-points.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://daniil:ctRuUvwtyC5h6xV@cluster0.fkncz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    EventsModule,
    RecyclingPointsModule,
    BlogsModule,
    ParksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
