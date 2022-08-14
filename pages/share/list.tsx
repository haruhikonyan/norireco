import type { NextPage } from 'next';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { deCompress } from '../../lib/stringCompress';
import Link from 'next/link';

const ShareList: NextPage = () => {
  const router = useRouter();
  const result = useMemo<any>(() => {
    const resultCompressString = router.query.r;
    if (typeof resultCompressString !== 'string' || resultCompressString == null) return {};
    return JSON.parse(deCompress(resultCompressString) ?? '{}');
  }, [router.query.r]);

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
              <Link href={`/share?r=${router.query.r}&l=${label}`}>
                <a>{label}</a>
              </Link>
            </p>
          );
        }),
      )}
    </>
  );
};

export default ShareList;
