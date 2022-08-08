import type { NextPage } from 'next';
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { compress } from '../lib/stringCompress';

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
      <p className='mt-3'>交響曲第1番</p>
      <div className='d-flex gap-2'>
        {Object.entries(result.partList)
          .filter(([part, _]) => {
            return part.includes('sym1');
          })
          .map(([part, bool]) => {
            const label = part.split('_')[1];
            return (
              <span key={part} className={classnames({ 'text-muted': !bool }, { 'fw-bold': bool })}>
                {label}
              </span>
            );
          })}
      </div>

      <p className='mt-3'>交響曲第2番</p>
      <div className='d-flex gap-2'>
        {Object.entries(result.partList)
          .filter(([part, _]) => {
            return part.includes('sym2');
          })
          .map(([part, bool]) => {
            const label = part.split('_')[1];
            return (
              <span key={part} className={classnames({ 'text-muted': !bool }, { 'fw-bold': bool })}>
                {label}
              </span>
            );
          })}
      </div>
      <p className='mt-3'>交響曲第3番</p>
      <div className='d-flex gap-2'>
        {Object.entries(result.partList)
          .filter(([part, _]) => {
            return part.includes('sym3');
          })
          .map(([part, bool]) => {
            const label = part.split('_')[1];
            return (
              <span key={part} className={classnames({ 'text-muted': !bool }, { 'fw-bold': bool })}>
                {label}
              </span>
            );
          })}
      </div>
      <p className='mt-3'>交響曲第4番</p>
      <div className='d-flex gap-2'>
        {Object.entries(result.partList)
          .filter(([part, _]) => {
            return part.includes('sym4');
          })
          .map(([part, bool]) => {
            const label = part.split('_')[1];
            return (
              <span key={part} className={classnames({ 'text-muted': !bool }, { 'fw-bold': bool })}>
                {label}
              </span>
            );
          })}
      </div>

      {shareURL ? (
        <div className='form-floating mt-3'>
          <textarea
            className='form-control'
            value={shareURL}
            id='shareURL'
            style={{ height: '400px' }}
          />
          <label htmlFor='shareURL'>URLをコピーして結果をシェア</label>
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
