let requestURL: string;
if (process.env.PUBLIC_NEXT_VERCEL_URL) requestURL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/`;
else requestURL = 'http://localhost:3000/api/';

export default async function fetchAPI<T>(url: string): Promise<T> {
  const response = await fetch(`${requestURL}${url}`, {
    method: 'get',
    next: { revalidate: 3600 },
  });

  return response.json();
}
