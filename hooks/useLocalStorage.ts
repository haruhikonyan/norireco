export const useLocalStorage = () => {
  return { localStorage: typeof window !== 'undefined' ? localStorage : undefined };
};
