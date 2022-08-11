import React from 'react';
import PartList from './PartList';
import { useForm } from 'react-hook-form';

type Props = {
  musicSet: any;
  initSet: any; // { musicSet: string, instrument: string }
};

const MusicSetSelector: React.FC<Props> = React.memo(({ musicSet, initSet }) => {
  const { register, watch } = useForm<any>({
    defaultValues: {
      ...initSet,
    },
  });
  const selectedMusicSet = watch('musicSet');
  const selectedInstrument = watch('instrument');
  return (
    <>
      <select className='form-select' aria-label='musicSet' {...register('musicSet')}>
        {Object.keys(musicSet).map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <select className='form-select' aria-label='instrument' {...register('instrument')}>
        {Object.keys(musicSet[selectedMusicSet]).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <PartList partList={musicSet[selectedMusicSet][selectedInstrument]} />
    </>
  );
});
MusicSetSelector.displayName = 'MusicSetSelector';

export default MusicSetSelector;
