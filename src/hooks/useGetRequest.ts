import { useState, useEffect } from 'react';
import axios from 'axios';

interface IUseGetRequest<T> {
  url: string;
}

const useGetRequest = <T>({ url }: IUseGetRequest<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get<T>(url);
      setData(response.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    setLoading(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refresh };
};

export default useGetRequest;
