import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './heroes/heroes.controller';
import { HeroesService } from './heroes/heroes.service';
import { PostsController } from './posts/posts.controller';

@Module({
  imports: [],
  controllers: [AppController, HeroesController, PostsController],
  providers: [AppService, HeroesService],
})
export class AppModule {}
