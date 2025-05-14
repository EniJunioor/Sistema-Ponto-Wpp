import { IsString, IsDateString, Length } from 'class-validator';

export class CreateFuncionarioDto {
  @IsString()
  nome: string;

  @IsDateString()
  dataNascimento: string;

  @IsString()
  @Length(11, 11, { message: 'O PIS deve conter 11 dígitos' })
  pis: string;

  @IsString()
  @Length(11, 11, { message: 'O CPF deve conter 11 dígitos' })
  cpf: string;

  @IsString()
  matricula: string;

  @IsDateString()
  dataAdmissao: string;
}
