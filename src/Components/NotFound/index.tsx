import styles from "./NotFound.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles.root}>
      <span>😕</span>
      <h1>Страница не найдена</h1>
      <br />
      <div>Увы, но на нашем сайте нет такой страницы</div>
    </div>
  );
};
