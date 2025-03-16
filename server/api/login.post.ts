import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (body.login === 'admin' && body.password === 'secret') {
    const token = jwt.sign({ userId: 1 }, 'your-secret-key', { expiresIn: '1h' });
    return { token };
  }
  throw createError({ statusCode: 401, message: 'Unauthorized' });
});