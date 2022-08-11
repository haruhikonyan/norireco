import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMemo, useCallback, useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
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
  const { register, handleSubmit, watch, setValue } = useForm<any>({
    defaultValues: {
      musicSet: 'ブラームス交響曲セット',
      instrument: 'ホルン',
    },
    shouldUnregister: true,
  });

  const musicSet = watch('musicSet');
  const instrument = watch('instrument');

  useEffect(() => {
    setValue('instrument', '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicSet]);

  useEffect(() => {
    // TODO result にデータがあれば戻す、なければリセット
  }, [instrument]);

  const musicSeTitletList = useMemo(() => Object.keys(MASTER), []);
  const selectableInstrumentList = useMemo(() => Object.keys(MASTER[musicSet]), [musicSet]);

  const displayMusicSet = useMemo(() => MASTER[musicSet][instrument], [instrument, musicSet]);

  const onSubmit: SubmitHandler<any> = useCallback(
    (data) => {
      if (localStorage === undefined) return;
      const result: any = {
        name: name,
        initSet: {
          musicSet,
          instrument,
        },
        musicSet: { [musicSet]: { [instrument]: {} } },
      };
      Object.entries(displayMusicSet).forEach(([title, parts]) => {
        result.musicSet[musicSet][instrument][title] = {};
        (parts as string[]).forEach((p) => {
          result.musicSet[musicSet][instrument][title][p] = data[`${title}_${p}`];
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <select className='form-select' aria-label='musicSet' {...register('musicSet')}>
          {musicSeTitletList.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select className='form-select' aria-label='instrument' {...register('instrument')}>
          <option value=''>楽器を選択</option>
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
                  <input className='form-check-input' type='checkbox' {...register(k)} name={k} />
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
