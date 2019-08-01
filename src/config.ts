import { resolve } from 'path';
import { config as load } from 'dotenv';

load({ path: resolve(__dirname, '../.env')});

export const config = {
  exampleVar: process.env.EXAMPLE_VAR,
};
