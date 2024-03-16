const resultHandler = async (result: Response) => {
  const res = await result.json();
  switch (result.status) {
    case 200: {
      return res;
    }
    case 201: {
      return res;
    }
    case 204: {
      return res;
    }
    case 400: {
      throw new Error(res.message);
    }
    case 401: {
      throw new Error(res.message);
    }
    default: {
      throw new Error(res.message);
    }
  }
};

export default async <T>(url: string): Promise<T> => {
  const headers = { 'Content-type': 'application/json' };
  const result = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/${url}`, {
    method: 'GET',
    headers,
  });
  return resultHandler(result);
};
