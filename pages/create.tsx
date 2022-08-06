import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMemo, useCallback, useState } from 'react';

const BR_SYM_HR_NAMES = [
  'sym1_1st',
  'sym1_2nd',
  'sym1_3rd',
  'sym1_4th',
  'sym2_1st',
  'sym2_2nd',
  'sym2_3rd',
  'sym2_4th',
  'sym3_1st',
  'sym3_2nd',
  'sym3_3rd',
  'sym3_4th',
  'sym4_1st',
  'sym4_2nd',
  'sym4_3rd',
  'sym4_4th',
];
const BR_SYM_FG_NAMES = [
  'sym1_1st',
  'sym1_2nd',
  'sym1_cfg',
  'sym2_1st',
  'sym2_2nd',
  'sym3_1st',
  'sym3_2nd',
  'sym3_cfg',
  'sym4_1st',
  'sym4_2nd',
  'sym4_cfg',
];

const Create: NextPage = () => {
  const router = useRouter();
  const name = useMemo(() => {
    return router.query.name;
  }, [router]);

  const [musicSet, setMusicSet] = useState('ブラームス交響曲セット');
  const [instrument, setInstrument] = useState('ホルン');

  const onChangeMusicSet = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setMusicSet(e.currentTarget.value);
  }, []);

  const onChangeInstrment = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setInstrument(e.currentTarget.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      const target = e.target as any;
      const result: any = { name: name, instrument: instrument, musicSet: musicSet, partList: {} };
      if (instrument === 'ホルン') {
        BR_SYM_HR_NAMES.forEach((name) => {
          result.partList[name] = target[name].checked;
        });
      } else {
        BR_SYM_FG_NAMES.forEach((name) => {
          result.partList[name] = target[name].checked;
        });
      }
      localStorage.setItem('result', JSON.stringify(result));
      router.push('/result');
    },
    [name, instrument, musicSet, router],
  );
  return (
    <>
      <h1 className='text-center'>{name} さんの乗り番入力</h1>
      <form onSubmit={onSubmit}>
        <select className='form-select' aria-label='musicSet' onChange={onChangeMusicSet}>
          <option value='ブラームス交響曲セット'>ブラームス交響曲セット</option>
          <option value='ベートーヴェン交響曲セット'>ベートーヴェン交響曲セット(TBD)</option>
        </select>
        <select className='form-select' aria-label='instrument' onChange={onChangeInstrment}>
          <option value='ホルン'>ホルン</option>
          <option value='ファゴット'>ファゴット</option>
        </select>
        {musicSet === 'ブラームス交響曲セット' ? (
          <>
            {instrument === 'ホルン' && (
              <>
                <p className='mt-3'>交響曲第1番</p>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym1_1st'
                    id='sym1_1st'
                    name='sym1_1st'
                  />
                  <label className='form-check-label' htmlFor='sym1_1st'>
                    1st
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym1_2nd'
                    id='sym1_2nd'
                    name='sym1_2nd'
                  />
                  <label className='form-check-label' htmlFor='sym1_2nd'>
                    2nd
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym1_3rd'
                    id='sym1_3rd'
                    name='sym1_3rd'
                  />
                  <label className='form-check-label' htmlFor='sym1_3rd'>
                    3rd
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym1_4th'
                    id='sym1_4th'
                    name='sym1_4th'
                  />
                  <label className='form-check-label' htmlFor='sym1_4th'>
                    4th
                  </label>
                </div>
                <p className='mt-2'>交響曲第2番</p>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym2_1st'
                    id='sym2_1st'
                    name='sym2_1st'
                  />
                  <label className='form-check-label' htmlFor='sym2_1st'>
                    1st
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym2_2nd'
                    id='sym2_2nd'
                    name='sym2_2nd'
                  />
                  <label className='form-check-label' htmlFor='sym2_2nd'>
                    2nd
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym2_3rd'
                    id='sym2_3rd'
                    name='sym2_3rd'
                  />
                  <label className='form-check-label' htmlFor='sym2_3rd'>
                    3rd
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym2_4th'
                    id='sym2_4th'
                    name='sym2_4th'
                  />
                  <label className='form-check-label' htmlFor='sym2_4th'>
                    4th
                  </label>
                </div>
                <p className='mt-2'>交響曲第3番</p>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym3_1st'
                    id='sym3_1st'
                    name='sym3_1st'
                  />
                  <label className='form-check-label' htmlFor='sym3_1st'>
                    1st
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym3_2nd'
                    id='sym3_2nd'
                    name='sym3_2nd'
                  />
                  <label className='form-check-label' htmlFor='sym3_2nd'>
                    2nd
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym3_3rd'
                    id='sym3_3rd'
                    name='sym3_3rd'
                  />
                  <label className='form-check-label' htmlFor='sym3_3rd'>
                    3rd
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym3_4th'
                    id='sym3_4th'
                    name='sym3_4th'
                  />
                  <label className='form-check-label' htmlFor='sym3_4th'>
                    4th
                  </label>
                </div>
                <p className='mt-2'>交響曲第4番</p>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym4_1st'
                    id='sym4_1st'
                    name='sym4_1st'
                  />
                  <label className='form-check-label' htmlFor='sym4_1st'>
                    1st
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym4_2nd'
                    id='sym4_2nd'
                    name='sym4_2nd'
                  />
                  <label className='form-check-label' htmlFor='sym4_2nd'>
                    2nd
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym4_3rd'
                    id='sym4_3rd'
                    name='sym4_3rd'
                  />
                  <label className='form-check-label' htmlFor='sym4_3rd'>
                    3rd
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym4_4th'
                    id='sym4_4th'
                    name='sym4_4th'
                  />
                  <label className='form-check-label' htmlFor='sym4_4th'>
                    4th
                  </label>
                </div>
              </>
            )}

            {instrument === 'ファゴット' && (
              <>
                <p className='mt-3'>交響曲第1番</p>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym1_1st'
                    id='sym1_1st'
                    name='sym1_1st'
                  />
                  <label className='form-check-label' htmlFor='sym1_1st'>
                    1st
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym1_2nd'
                    id='sym1_2nd'
                    name='sym1_2nd'
                  />
                  <label className='form-check-label' htmlFor='sym1_2nd'>
                    2nd
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym1_CFg'
                    id='sym1_cfg'
                    name='sym1_cfg'
                  />
                  <label className='form-check-label' htmlFor='sym1_cfg'>
                    Cfg
                  </label>
                </div>
                <p className='mt-2'>交響曲第2番</p>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym2_1st'
                    id='sym2_1st'
                    name='sym2_1st'
                  />
                  <label className='form-check-label' htmlFor='sym2_1st'>
                    1st
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym2_2nd'
                    id='sym2_2nd'
                    name='sym2_2nd'
                  />
                  <label className='form-check-label' htmlFor='sym2_2nd'>
                    2nd
                  </label>
                </div>
                <p className='mt-2'>交響曲第3番</p>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym3_1st'
                    id='sym3_1st'
                    name='sym3_1st'
                  />
                  <label className='form-check-label' htmlFor='sym3_1st'>
                    1st
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym3_2nd'
                    id='sym3_2nd'
                    name='sym3_2nd'
                  />
                  <label className='form-check-label' htmlFor='sym3_2nd'>
                    2nd
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym3_CFg'
                    id='sym3_cfg'
                    name='sym3_cfg'
                  />
                  <label className='form-check-label' htmlFor='sym3_cfg'>
                    CFg
                  </label>
                </div>
                <p className='mt-2'>交響曲第4番</p>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym4_1st'
                    id='sym4_1st'
                    name='sym4_1st'
                  />
                  <label className='form-check-label' htmlFor='sym4_1st'>
                    1st
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym4_2nd'
                    id='sym4_2nd'
                    name='sym4_2nd'
                  />
                  <label className='form-check-label' htmlFor='sym4_2nd'>
                    2nd
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value='sym4_CFg'
                    id='sym4_cfg'
                    name='sym4_cfg'
                  />
                  <label className='form-check-label' htmlFor='sym4_cfg'>
                    CFg
                  </label>
                </div>
              </>
            )}
            <div className='d-grid mt-3'>
              <button type='submit' className='btn btn-primary'>
                決定
              </button>
            </div>
          </>
        ) : (
          'TBD'
        )}
      </form>
    </>
  );
};

export default Create;
