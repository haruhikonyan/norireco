import type { NextPage } from 'next';
import { useCallback, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { compress } from '../lib/stringCompress';
import CopyClipboard from '../component/CopyClipboard';
import PartList from '../component/PartList';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Result: NextPage = () => {
  const [shareURL, setShareURL] = useState<string>();
  const { localStorage } = useLocalStorage();
  const router = useRouter();
  const result = useMemo<any>(() => {
    if (localStorage === undefined) return {};
    const resultString = localStorage.getItem('result');
    return resultString != null ? JSON.parse(resultString) : {};
  }, [localStorage]);

  const [musicSet, instrument] = useMemo<any>(() => {
    const label = router.query.l;
    if (typeof label !== 'string' || label == null) return [];
    return label.split(': ');
  }, [router.query.l]);

  const share = useCallback(() => {
    if (localStorage === undefined) return;
    const resultString = localStorage.getItem('result');
    if (resultString == null) return;
    setShareURL(
      encodeURI(
        // TODO: norireco ってのは github page の時だけつけるようにする
        `${location.origin}/norireco/share?r=${compress(
          resultString,
        )}&l=${`${musicSet}: ${instrument}`}`,
      ),
    );
  }, [instrument, localStorage, musicSet]);

  if (Object.keys(result).length === 0 || musicSet == null || instrument == null) return null;
  return (
    <>
      <div className='text-center'>
        <h1>{result.name} さんの乗りレコ</h1>
        <h3>{musicSet}</h3>
        <h4>{instrument}</h4>
      </div>
      <PartList partList={result.musicSet[musicSet][instrument]} />
      {shareURL ? (
        <div className='mt-3'>
          <CopyClipboard copyText={shareURL} />
          <div className='form-floating mt-2'>
            <textarea
              className='form-control'
              value={shareURL}
              id='shareURL'
              style={{ height: '400px' }}
            />
            <label htmlFor='shareURL'>URLをコピーして結果をシェア</label>
          </div>
        </div>
      ) : (
        <div className='text-end'>
          <button type='button' className='btn btn-success' onClick={share}>
            シェアする
          </button>
        </div>
      )}
      <div className='mt-5'>
        <Link href={`create?name=${result.name}`}>
          <a>別の乗りレコを作る</a>
        </Link>
      </div>
      <div className='mt-2'>
        <Link href='/list'>
          <a>作った乗りレコリスト</a>
        </Link>
      </div>
      <div className='mt-5'>
        <a href='https://musig.net' target='_blank' rel='noreferrer'>
          詳しく記録したい方はみゅーぐも！
        </a>
      </div>
    </>
  );
};

export default Result;
