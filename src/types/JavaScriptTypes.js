import { number, string, bool, symbol, func, array, object, oneOf } from 'prop-types';

export const NumberType = number;
export const StringType = string;
export const BooleanType = bool;
export const SymbolType = symbol;
export const NullType = oneOf([null]);
export const UndefinedType = oneOf([undefined]);

export const FunctionType = func;
export const ArrayType = array;
export const ObjectType = object;
