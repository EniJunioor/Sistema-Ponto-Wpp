import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// ✅ Corrigir este caminho conforme sua estrutura
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule], // <-- importa o módulo aqui
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
