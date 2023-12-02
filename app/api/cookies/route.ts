import { cookies } from 'next/headers';

export const GET = async () => {
  const resp = cookies().get('theme')?.value || 'light';
  return Response.json({
    theme: resp,
  });
};
