import type { NextPage } from 'next';
import { useMemo } from 'react';
import classnames from 'classnames';

const Result: NextPage = () => {
  const result = useMemo<any>(() => {
    const resultString = localStorage.getItem('result');
    return resultString != null ? JSON.parse(resultString) : {};
  }, []);
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

      <div className='text-end'>
        <button type='button' className='btn btn-success'>
          シェアする(TBD)
        </button>
      </div>
    </>
  );
};

export default Result;
