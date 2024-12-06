import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SqliteDriver } from '@mikro-orm/sqlite';

@Module({
    imports: [
        ProductsModule,
        MikroOrmModule.forRoot({
            entities: ['./dist/entities'],
            entitiesTs: ['./src/entities'],
            dbName: 'mydb.sqlite',
            driver: SqliteDriver,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
