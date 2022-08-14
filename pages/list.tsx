import type { NextPage } from 'next';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Link from 'next/link';

const List: NextPage = () => {
  const router = useRouter();
  const { localStorage } = useLocalStorage();
  const result = useMemo<any>(() => {
    if (localStorage === undefined) return {};
    const resultString = localStorage.getItem('result');
    return resultString != null ? JSON.parse(resultString) : {};
  }, [localStorage]);

  // TODO: 自動 / リダイレクト
  if (Object.keys(result).length === 0)
    return (
      <Link href='/'>
        <a>乗りレコを作る</a>
      </Link>
    );

  return (
    <>
      <h1 className='text-center'>{result.name} さんの乗りレコリスト</h1>
      {Object.entries(result.musicSet).map(([musicSet, instruments]) =>
        Object.keys(instruments as any).map((i) => {
          const label = `${musicSet}: ${i}`;
          return (
            <p key={label}>
              <Link href={`/result?l=${label}`}>
                <a>{label}</a>
              </Link>
            </p>
          );
        }),
      )}
      <div className='mt-3 text-center'>
        <Link href={`create?name=${result.name}`}>
          <a>乗りレコを作る</a>
        </Link>
      </div>
      <div className='text-end mt-5'>
        <button
          type='button'
          onClick={() => {
            localStorage?.clear();
            router.push('/');
          }}
          className='btn btn-danger mt-5'
        >
          全て削除する
        </button>
      </div>
    </>
  );
};

export default List;
