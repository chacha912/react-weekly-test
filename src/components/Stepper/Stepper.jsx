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
    max: 10,
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

  state = {
    count: +this.props.current,
    isMinValue: +this.props.current <= +this.props.min,
    isMaxValue: +this.props.current >= +this.props.max,
  };

  handleCountUpdate = (type) => {
    this.setState(({ count }, { min, max, step }) => {
      const updateCount = type === 'plus' ? count + +step : count - +step;
      const validUpdateCount =
        updateCount < +min ? +min : updateCount > +max ? +max : updateCount;
      return {
        count: validUpdateCount,
        isMinValue: validUpdateCount === +min,
        isMaxValue: validUpdateCount === +max,
      };
    });
  };

  componentDidMount() {
    const { min, max, current } = this.props;
    if (+min > +max)
      console.error(
        'Stepper 컴포넌트의 props를 확인해주세요. "max"가 "min"보다 작습니다.'
      );
    if (+current < +min)
      console.error(
        'Stepper 컴포넌트의 "current" props를 확인해주세요. 초기값이 "min"보다 작습니다.'
      );
    if (+current > +max)
      console.error(
        'Stepper 컴포넌트의 "current" props를 확인해주세요. 초기값이 "max"보다 큽니다.'
      );
  }

  render() {
    const {
      id,
      mode,
      buttonProps: { minus, plus },
    } = this.props;

    const { count, isMinValue, isMaxValue } = this.state;

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
          disabled={isMinValue}
          onClick={() => this.handleCountUpdate('minus')}
        >
          <SvgIconArrow className="icon-minus" />
        </button>
        <output className="output" children={count} />
        <button
          className="button button-plus"
          type="button"
          aria-label={plus.label}
          title={plus.withTitle && plus.label}
          disabled={isMaxValue}
          onClick={() => this.handleCountUpdate('plus')}
        >
          <SvgIconArrow className="icon-plus" />
        </button>
      </div>
    );
  }
}
