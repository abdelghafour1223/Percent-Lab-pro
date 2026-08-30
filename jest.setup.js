import '@testing-library/jest-dom';

// jsdom does not provide TextEncoder/TextDecoder, which react-dom/server
// requires when tests exercise SSR rendering (renderToString + hydrateRoot).
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
