import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMemo, useCallback, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const MASTER: any = {
  ブラームス交響曲セット: {
    ファゴット: {
      交響曲第1番: ['1st', '2nd', 'CFg'],
      交響曲第2番: ['1st', '2nd'],
      交響曲第3番: ['1st', '2nd', 'CFg'],
      交響曲第4番: ['1st', '2nd', 'CFg'],
    },
    ホルン: {
      交響曲第1番: ['1st', '2nd', '3rd', '4th'],
      交響曲第2番: ['1st', '2nd', '3rd', '4th'],
      交響曲第3番: ['1st', '2nd', '3rd', '4th'],
      交響曲第4番: ['1st', '2nd', '3rd', '4th'],
    },
    トランペット: {
      交響曲第1番: ['1st', '2nd'],
      交響曲第2番: ['1st', '2nd'],
      交響曲第3番: ['1st', '2nd'],
      交響曲第4番: ['1st', '2nd'],
    },
  },
  ベートーヴェン交響曲セット: {
    ファゴット: {
      交響曲第1番: ['1st', '2nd'],
      交響曲第2番: ['1st', '2nd'],
      交響曲第3番: ['1st', '2nd'],
      交響曲第4番: ['1st', '2nd'],
      交響曲第5番: ['1st', '2nd', 'CFg'],
      交響曲第6番: ['1st', '2nd'],
      交響曲第7番: ['1st', '2nd'],
      交響曲第8番: ['1st', '2nd'],
      交響曲第9番: ['1st', '2nd', 'CFg'],
    },
    トランペット: {
      交響曲第1番: ['1st', '2nd'],
      交響曲第2番: ['1st', '2nd'],
      交響曲第3番: ['1st', '2nd'],
      交響曲第4番: ['1st', '2nd'],
      交響曲第5番: ['1st', '2nd'],
      交響曲第6番: ['1st', '2nd'],
      交響曲第7番: ['1st', '2nd'],
      交響曲第8番: ['1st', '2nd'],
      交響曲第9番: ['1st', '2nd'],
    },
    ホルン: {
      交響曲第1番: ['1st', '2nd'],
      交響曲第2番: ['1st', '2nd'],
      交響曲第3番: ['1st', '2nd', '3rd'],
      交響曲第4番: ['1st', '2nd'],
      交響曲第5番: ['1st', '2nd'],
      交響曲第6番: ['1st', '2nd'],
      交響曲第7番: ['1st', '2nd'],
      交響曲第8番: ['1st', '2nd'],
      交響曲第9番: ['1st', '2nd', '3rd', '4th'],
    },
  },
};

const Create: NextPage = () => {
  const router = useRouter();
  const { localStorage } = useLocalStorage();
  const name = useMemo(() => {
    return router.query.name;
  }, [router]);

  const [musicSet, setMusicSet] = useState('ブラームス交響曲セット');
  const [instrument, setInstrument] = useState('ホルン');

  const musicSeTitletList = useMemo(() => Object.keys(MASTER), []);
  const selectableInstrumentList = useMemo(() => Object.keys(MASTER[musicSet]), [musicSet]);

  const displayMusicSet = useMemo(() => MASTER[musicSet][instrument], [instrument, musicSet]);

  const onChangeMusicSet = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setInstrument('');
    setMusicSet(e.currentTarget.value);
  }, []);

  const onChangeInstrment = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setInstrument(e.currentTarget.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (localStorage === undefined) return;
      const target = e.target as any;
      const result: any = { name: name, instrument: instrument, musicSet: musicSet, partList: {} };
      Object.entries(displayMusicSet).forEach(([title, parts]) => {
        result.partList[title] = {};
        (parts as string[]).forEach((p) => {
          result.partList[title][p] = target[`${title}_${p}`].checked;
        });
      });
      localStorage.setItem('result', JSON.stringify(result));
      router.push('/result');
    },
    [localStorage, name, instrument, musicSet, displayMusicSet, router],
  );
  return (
    <>
      <h1 className='text-center'>{name} さんの乗り番入力</h1>
      <form onSubmit={onSubmit}>
        <select className='form-select' aria-label='musicSet' onChange={onChangeMusicSet}>
          {musicSeTitletList.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select
          className='form-select'
          aria-label='instrument'
          onChange={onChangeInstrment}
          value={instrument}
        >
          <option value=''>選択してください</option>
          {selectableInstrumentList.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        {Object.entries(displayMusicSet ?? {}).map(([title, parts]) => (
          <>
            <p className='mt-3'>{title}</p>
            {(parts as string[]).map((p) => {
              const k = `${title}_${p}`;
              return (
                <div key={k} className='form-check form-check-inline'>
                  <input className='form-check-input' type='checkbox' value={k} id={k} name={k} />
                  <label className='form-check-label' htmlFor={k}>
                    {p}
                  </label>
                </div>
              );
            })}
          </>
        ))}
        <div className='d-grid mt-3'>
          <button type='submit' className='btn btn-primary'>
            決定
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
