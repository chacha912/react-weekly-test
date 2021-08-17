import styles from './Heading.module.scss';

export function Heading({ as: Comp, children }) {
  return <Comp className={styles.heading}>{children}</Comp>;
}

Heading.defaultProps = {
  as: 'h2',
};
