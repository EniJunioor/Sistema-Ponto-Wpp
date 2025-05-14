import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // importa o ConfigModule
import { PrismaModule } from './prisma/prisma.module'; // importa o PrismaModule
import databaseConfig from './config/database.config'; // importa a config do banco

import { AppController } from './app.controller';
import { AppService } from './app.service'; 

import { FuncionariosModule } from './modules/funcionarios/funcionarios.module'; // importa o Funcionario
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    PrismaModule,
    FuncionariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
