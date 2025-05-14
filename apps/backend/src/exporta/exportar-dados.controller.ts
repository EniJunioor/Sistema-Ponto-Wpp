import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ExportarDadosService } from './exportar-dados.service';

@Controller('exportar')
export class ExportarDadosController {
  constructor(private readonly exportarService: ExportarDadosService) {}

  @Get('funcionarios')
  async exportar(@Res() res: Response) {
    const path = await this.exportarService.gerarXlsxFuncionarios();
    res.download(path);
  }
}
