import type { NextPage } from 'next';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { deCompress } from '../../lib/stringCompress';
import PartList from '../../component/PartList';

const Share: NextPage = () => {
  const router = useRouter();
  const result = useMemo<any>(() => {
    const resultCompressString = router.query.r;
    if (typeof resultCompressString !== 'string' || resultCompressString == null) return {};
    return JSON.parse(deCompress(resultCompressString) ?? '{}');
  }, [router.query.r]);

  const [musicSet, instrument] = useMemo<any>(() => {
    const label = router.query.l;
    if (typeof label !== 'string' || label == null) return [];
    return label.split(': ');
  }, [router.query.l]);

  if (Object.keys(result).length === 0) return null;
  return (
    <>
      <div className='text-center'>
        <h1>{result.name} さんの乗りレコ</h1>
        <h3>{musicSet}</h3>
        <h4>{instrument}</h4>
      </div>
      <PartList partList={result.musicSet[musicSet][instrument]} />
      <div className='mt-3'>
        <Link href='/'>
          <a>新しく乗りレコを作る</a>
        </Link>
      </div>
      <div className='mt-5'>
        <Link href={`/share/list?r=${router.query.r}`}>
          <a>{result.name} さんの別の乗りレコ</a>
        </Link>
      </div>
    </>
  );
};

export default Share;
