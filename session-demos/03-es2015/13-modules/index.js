// export const sum = ( x, y ) => x + y;
// export const diff = ( x, y ) => x - y;
// export const product = ( x, y ) => x * y;

// you cannot type var/let/const for default export
// export default PI = 3.14;

const sum = ( x, y ) => x + y;
const diff = ( x, y ) => x - y;
const product = ( x, y ) => x * y;

const PI = 3.14;

export {
    sum,
    diff,
    product,
    PI as default
};