import { useCallback, useEffect, useState } from 'react';

export const useMaster = () => {
  const [index, setIndex] = useState<any>({});
  const [master, setMaster] = useState<any>({});
  const fetchIndex = useCallback(async () => {
    const res = await fetch('/master/index.json');
    const index = await res.json();
    setIndex(index);
  }, []);

  useEffect(() => {
    fetchIndex();
  }, [fetchIndex]);

  const fetchMaster = useCallback(
    async (id: number) => {
      const res = await fetch(`/master/${id}.json`);
      const data = await res.json();
      setMaster({ ...master, ...data });
      return data;
    },
    [master],
  );

  return {
    index,
    master,
    fetchMaster,
  };
};
