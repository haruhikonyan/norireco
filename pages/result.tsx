import type { NextPage } from 'next';
import { useCallback, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { compress } from '../lib/stringCompress';
import PartList from '../component/PartList';
import CopyClipboard from '../component/CopyClipboard';

const Result: NextPage = () => {
  const [shareURL, setShareURL] = useState<string>();
  const { localStorage } = useLocalStorage();
  const result = useMemo<any>(() => {
    if (localStorage === undefined) return undefined;
    const resultString = localStorage.getItem('result');
    return resultString != null ? JSON.parse(resultString) : {};
  }, [localStorage]);

  const share = useCallback(() => {
    if (localStorage === undefined) return;
    const resultString = localStorage.getItem('result');
    if (resultString == null) return;
    setShareURL(`${location.origin}/norireco/share?r=${compress(resultString)}`);
  }, [localStorage]);

  if (result === undefined) return null;
  return (
    <>
      <h1 className='text-center'>{result.name} さんの乗りレコ</h1>
      <h2 className='text-center'>{result.musicSet}</h2>
      <h3 className='text-center'>{result.instrument}</h3>
      <PartList partList={result.partList} />
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
        <a href='https://musig.net' target='_blank' rel='noreferrer'>
          詳しく記録したい方はみゅーぐも！
        </a>
      </div>
    </>
  );
};

export default Result;
