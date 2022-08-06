import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const Home: NextPage = () => {
  const router = useRouter();
  const onSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      const { name } = e.target as typeof e.target & {
        name: { value: string };
      };
      router.push(`/create?name=${name.value}`);
    },
    [router],
  );
  return (
    <div className='text-center'>
      <h1>乗りレコ</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name' className='form-label'>
            名前を入力してください
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            aria-describedby='name'
            name='name'
            required
          />
        </div>
        <div className='d-grid mt-3'>
          <button type='submit' className='btn btn-primary'>
            乗り番経験入力
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
