import { PrismaClient } from '@prisma/client';

// Declara uma variável global apenas para ambiente de desenvolvimento
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(); // Cria uma nova instância em produção
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient(); // Armazena a instância no escopo global
  }
  prisma = (global as any).prisma; // Usa a instância armazenada
}

export default prisma;
