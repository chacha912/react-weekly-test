import { number, string, oneOfType } from 'prop-types';

export const StringOrNumberType = oneOfType([number, string]);
