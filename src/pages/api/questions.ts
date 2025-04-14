import type { APIRoute } from 'astro';
import { questions } from '../../../questions';

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify(questions),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
};
