import { Controller, Post, Body, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './funcionarios.dto';

@Controller('funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionariosService) {}

  // Rota para criar um novo funcionário
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true })) // ativa validação
  async create(@Body() body: CreateFuncionarioDto) {
    // Convertendo datas de string para Date
    return this.funcionariosService.criarFuncionario({
      ...body,
      dataNascimento: new Date(body.dataNascimento),
      dataAdmissao: new Date(body.dataAdmissao),
    });
  }

  // Rota para listar todos os funcionários
  @Get()
  async listarTodos() {
    return this.funcionariosService.listarFuncionarios();
  }
}
