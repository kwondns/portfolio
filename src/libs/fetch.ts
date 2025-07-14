export const get = async <T>(url: string): Promise<T> => {
  const result = await fetch(`${process.env.API_URL}${url}`, { next: { revalidate: 3600 } });
  return result.json();
};
