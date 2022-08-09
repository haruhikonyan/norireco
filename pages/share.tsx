import type { NextPage } from 'next';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { deCompress } from '../lib/stringCompress';
import PartList from '../component/PartList';

const Share: NextPage = () => {
  const router = useRouter();
  const result = useMemo<any>(() => {
    const resultCompressString = router.query.r;
    if (typeof resultCompressString !== 'string' || resultCompressString == null) return;
    return JSON.parse(deCompress(resultCompressString) ?? '');
  }, [router.query.r]);

  if (result === undefined) return null;
  return (
    <>
      <h1 className='text-center'>{result.name} さんの乗りレコ</h1>
      <h2 className='text-center'>{result.musicSet}</h2>
      <h3 className='text-center'>{result.instrument}</h3>
      <PartList partList={result.partList} />
      <div className='mt-3'>
        <Link href='/'>
          <a>新しく乗りレコを作る</a>
        </Link>
      </div>
    </>
  );
};

export default Share;
