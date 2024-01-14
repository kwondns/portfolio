export default async function fetchAPI<T>(url: string): Promise<T> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/${url}`, {
    method: 'get',
    next: { revalidate: 3600 },
  });

  return response.json();
}
