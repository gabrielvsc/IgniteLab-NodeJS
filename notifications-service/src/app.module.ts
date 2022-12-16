import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HtppModule } from './infra/http/http.module';


@Module({
  imports: [HtppModule, DatabaseModule],
})
export class AppModule {}
