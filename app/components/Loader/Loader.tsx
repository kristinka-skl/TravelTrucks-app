import css from './Loader.module.css';
export default function Loader() {
  return (
    <div className={css.loading}>
      <div className={css.loadingText}>
        <span className={css.loadingTextWords}>L</span>
        <span className={css.loadingTextWords}>O</span>
        <span className={css.loadingTextWords}>A</span>
        <span className={css.loadingTextWords}>D</span>
        <span className={css.loadingTextWords}>I</span>
        <span className={css.loadingTextWords}>N</span>
        <span className={css.loadingTextWords}>G</span>
      </div>
    </div>
  );
}
