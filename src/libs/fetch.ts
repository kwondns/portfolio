export const get = async <T>(url: string): Promise<T> => {
  const result = await fetch(`${process.env.API_URL}${url}`);
  return result.json();
};
