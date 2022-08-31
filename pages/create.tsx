import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMemo, useCallback, useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useMaster } from '../hooks/useMaster';

const Create: NextPage = () => {
  const router = useRouter();
  const { index, master, fetchMaster } = useMaster();
  const { localStorage } = useLocalStorage();
  const name = useMemo(() => {
    return router.query.name;
  }, [router]);
  const { register, handleSubmit, watch, setValue } = useForm<any>({
    shouldUnregister: true,
  });

  const musicSet = watch('musicSet');
  const instrument = watch('instrument');

  const musicSeTitletList = useMemo(() => Object.keys(index), [index]);

  const [selectableInstrumentList, setSelectableInstrumentList] = useState<string[]>([]);
  const [displayMusicSet, setDisplayMusicSet] = useState<any>({});

  const onChangeMusicSet = useCallback(
    async (musicSet: string) => {
      const instrumentsObject = master[musicSet];
      if (instrumentsObject) {
        setSelectableInstrumentList(Object.keys(instrumentsObject));
      } else {
        const fm = await fetchMaster(index[musicSet]);
        setSelectableInstrumentList(Object.keys(fm[musicSet]));
      }
      setDisplayMusicSet({});
      setValue('instrument', '');
    },
    [fetchMaster, index, master, setValue],
  );

  useEffect(() => {
    if (Object.keys(index).length > 0) {
      setValue('musicSet', 'ブラームス交響曲セット');
      onChangeMusicSet('ブラームス交響曲セット');
    }
  }, [index, onChangeMusicSet, setValue]);

  const savedRsult = useCallback(() => {
    if (localStorage === undefined) return undefined;
    const resultString = localStorage.getItem('result');
    return resultString != null ? JSON.parse(resultString) : undefined;
  }, [localStorage]);

  const onSubmit: SubmitHandler<any> = useCallback(
    (data) => {
      if (localStorage === undefined) return;
      const result = savedRsult() ?? {};
      if (Object.keys(result).length === 0) {
        result.name = name;
        result.initSet = {
          musicSet,
          instrument,
        };
      }
      if (!result.musicSet) result.musicSet = { [musicSet]: { [instrument]: {} } };
      if (!result.musicSet[musicSet]) result.musicSet[musicSet] = { [instrument]: {} };
      if (!result.musicSet[musicSet][instrument]) result.musicSet[musicSet][instrument] = {};
      Object.entries(displayMusicSet).forEach(([title, parts]) => {
        result.musicSet[musicSet][instrument][title] = {};
        (parts as string[]).forEach((p) => {
          result.musicSet[musicSet][instrument][title][p] = data[`${instrument}_${title}_${p}`];
        });
      });
      localStorage.setItem('result', JSON.stringify(result));
      router.push(`/result?l=${musicSet}: ${instrument}`);
    },
    [localStorage, savedRsult, musicSet, instrument, displayMusicSet, router, name],
  );
  if (Object.keys(index).length === 0) return <></>;
  return (
    <>
      <h1 className='text-center'>{name} さんの乗り番入力</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select
          className='form-select'
          aria-label='musicSet'
          {...register('musicSet', {
            onChange: (e) => onChangeMusicSet(e.target.value),
          })}
        >
          {musicSeTitletList.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select
          className='form-select'
          aria-label='instrument'
          {...register('instrument', {
            onChange: (e) => {
              setDisplayMusicSet(master[musicSet][e.target.value]);
              const result = savedRsult();
              if (result === undefined) return;
              if (
                result.musicSet[musicSet] === undefined ||
                result.musicSet[musicSet][e.target.value] === undefined
              )
                return;
              Object.entries(result.musicSet[musicSet][e.target.value]).forEach(
                ([title, values]) => {
                  Object.entries(values as any).forEach(([part, bool]) => {
                    setValue(`${e.target.value}_${title}_${part}`, bool);
                  });
                },
              );
            },
          })}
        >
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
              const k = `${instrument}_${title}_${p}`;
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
            結果表示
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
