import envJson from '../../env.json';
import { Environment } from '../constants';

export const env = {
    ...envJson,
    environment: envJson.environment as Environment
};