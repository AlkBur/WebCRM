import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __dirname = dirname(fileURLToPath(import.meta.url));
export const rand = function () {
    return Math.random().toString(36).slice(2); // remove `0.`
};
