import './Stepper.css'

import { Component } from 'react'
import { ReactComponent as SvgIconArrow } from 'assets/icons/arrow.svg'
import { string, exact } from 'prop-types';
import { ButtonType, StringOrNumberType, EnumType } from 'types';
import { A11yHidden } from 'components'

export class Stepper extends Component {
  static defaultProps = {
    mode: 'horizontal',
    buttonProps: {
      minus: {
        label: '스텝퍼 감소',
        withTitle: true,
      },
      plus: {
        label: '스텝퍼 증가',
        withTitle: true,
      },
    },
    min: 0,
    max: 100,
    current: 0,
    step: 1,
  };

  static propTypes = {
    mode: EnumType('horizontal', 'vertical'),
    id: string.isRequired,
    buttonProps: exact({
      minus: ButtonType,
      plus: ButtonType,
    }),
    min: StringOrNumberType,
    max: StringOrNumberType,
    current: StringOrNumberType,
    step: StringOrNumberType,
  };

  render() {
    const {
      id,
      mode,
      buttonProps: { minus, plus },
    } = this.props;

    return (
      <div
        aria-live="polite"
        aria-describedby={id}
        className={`stepper stepper-${mode}`}
      >
        <A11yHidden id={id}>
          스텝퍼 증가 또는 감소 버튼을 눌러, 스텝퍼 값을 변경할 수 있습니다.
        </A11yHidden>
        <button
          className="button button-minus"
          type="button"
          aria-label={minus.label}
          title={minus.withTitle && minus.label}
        >
          <SvgIconArrow className="icon-minus" />
        </button>
        <output className="output" children={27} />
        <button
          className="button button-plus"
          type="button"
          aria-label={plus.label}
          title={plus.withTitle && plus.label}
        >
          <SvgIconArrow className="icon-plus" />
        </button>
      </div>
    );
  }
}
