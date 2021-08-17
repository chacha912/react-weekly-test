import styles from './FaqListItem.module.scss';
import { Component, Fragment } from 'react';
import { classNames } from 'utils';
import { ReactComponent as SvgIconPlus } from 'assets/icons/plus.svg';
import { ReactComponent as SvgIconClose } from 'assets/icons/close.svg';

export class FaqListItem extends Component {
  state = {
    isOpen: false,
  };

  handleClick = (e) => {
    console.log(e.currentTarget);
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const {
      faqData: { title, answer },
    } = this.props;
    return (
      <li className={classNames(styles.list, isOpen ? styles.open : '')}>
        <button className={styles.handleButton} onClick={this.handleClick}>
          <span className={styles.title}>{title}</span>
          {isOpen ? (
            <SvgIconClose className={styles.icon} />
          ) : (
            <SvgIconPlus className={styles.icon} />
          )}
        </button>
        <p className={styles.answer}>
          {answer.map((content, index, { length }) => (
            <Fragment key={`answer-${index}`}>
              {content}
              {index < length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </Fragment>
          ))}
        </p>
      </li>
    );
  }
}
