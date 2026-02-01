'use client';
import css from './not-found.module.css';
type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Помилка при завантаженні</h2>
      <p className={css.text}>{error.message}</p>
      <button className={css.button} onClick={reset}>
        Спробувати знову
      </button>
    </div>
  );
};

export default Error;
