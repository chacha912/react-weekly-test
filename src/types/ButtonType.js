import { string, bool, shape } from 'prop-types';

export const ButtonType = shape({
  label: string,
  withTitle: bool,
});
