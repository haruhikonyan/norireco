import type { NextPage } from 'next';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { deCompress } from '../lib/stringCompress';
import MusicSetSelector from '../component/MusicSetSelector';

const Share: NextPage = () => {
  const router = useRouter();
  const result = useMemo<any>(() => {
    const resultCompressString = router.query.r;
    if (typeof resultCompressString !== 'string' || resultCompressString == null) return {};
    return JSON.parse(deCompress(resultCompressString) ?? '{}');
  }, [router.query.r]);

  if (Object.keys(result).length === 0) return null;
  return (
    <>
      <h1 className='text-center'>{result.name} さんの乗りレコ</h1>
      <MusicSetSelector musicSet={result.musicSet} initSet={result.initSet} />
      <div className='mt-3'>
        <Link href='/'>
          <a>新しく乗りレコを作る</a>
        </Link>
      </div>
    </>
  );
};

export default Share;
