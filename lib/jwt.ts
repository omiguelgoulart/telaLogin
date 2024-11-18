import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'secret_key_for_dev_only';

// Função para gerar o token
export function signToken(payload: object, expiresIn = '1h') {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Função para verificar o token
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Token inválido ou expirado');
  }
}
