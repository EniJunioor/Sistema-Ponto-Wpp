import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FuncionariosService {
  constructor(private prisma: PrismaService) {}

  async criarFuncionario(data: {
    nome: string;
    cpf: string;
    pis: string;
    matricula: string;
    dataNascimento: Date;
    dataAdmissao: Date;
  }) {
    return this.prisma.funcionario.create({
      data,
    });
  }
}
