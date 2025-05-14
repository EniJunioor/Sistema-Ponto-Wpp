import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './funcionarios.dto';

@Controller('funcionarios')
export class FuncionariosController {
  constructor(private readonly funcionariosService: FuncionariosService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true })) // ativa validação
  async create(@Body() body: CreateFuncionarioDto) {
    // convertendo datas de string para Date
    return this.funcionariosService.criarFuncionario({
      ...body,
      dataNascimento: new Date(body.dataNascimento),
      dataAdmissao: new Date(body.dataAdmissao),
    });
  }
}