import post from './post';
import { customer } from './customer';

export default {
  strict: process.env.NODE_ENV !== `production`,
  post,
  customer,
};
