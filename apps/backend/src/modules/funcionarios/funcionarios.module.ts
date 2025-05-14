import { Module } from '@nestjs/common';
import { FuncionariosController } from './funcionarios.controller';
import { FuncionariosService } from './funcionarios.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FuncionariosController],
  providers: [FuncionariosService ,PrismaService],
  exports: [FuncionariosService]
})
export class FuncionariosModule {} 