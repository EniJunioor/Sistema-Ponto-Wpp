import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as ExcelJS from 'exceljs';
import * as fs from 'fs/promises';

@Injectable()
export class ExportarDadosService {
  constructor(private prisma: PrismaService) {}

  async gerarXlsxFuncionarios(): Promise<string> {
    const funcionarios = await this.prisma.funcionario.findMany();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Funcionarios');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 36 },
      { header: 'Nome', key: 'nome', width: 30 },
      { header: 'CPF', key: 'cpf', width: 15 },
      { header: 'PIS', key: 'pis', width: 15 },
      { header: 'Matrícula', key: 'matricula', width: 15 },
      { header: 'Nascimento', key: 'dataNascimento', width: 20 },
      { header: 'Admissão', key: 'dataAdmissao', width: 20 },
      { header: 'Criado em', key: 'createdAt', width: 20 },
    ];

    funcionarios.forEach(func => {
      worksheet.addRow({
        ...func,
        dataNascimento: func.dataNascimento.toISOString().split('T')[0],
        dataAdmissao: func.dataAdmissao.toISOString().split('T')[0],
        createdAt: func.createdAt.toISOString().split('T')[0],
      });
    });

    const path = './funcionarios.xlsx';
    await workbook.xlsx.writeFile(path);

    return path;
  }
}
