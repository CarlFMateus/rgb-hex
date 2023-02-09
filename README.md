# rgb-hex

The `rgb-hex` library contains two simple methods:

- `rgbToHex` - Converts numerical decimal color values (RGB) into its hexadecimal equivalent.
- `hexToRgb` - Converts a stringified hexadecimal color value into its decimal equivalent.

## Running Tests

To run all tests:

```bash
$ npm run test
```

![Running Tests](https://www.dl.dropboxusercontent.com/s/025mvau0q8rozrh/screen%20shot%202021-01-14%20at%201.38.36%20am.png)

To run all tests with a custom reporter (for example, Nyan Cat):

```bash
$ npm run test:nyan
```

![Running Tests with Custom Reporter (Nyan Cat)](https://www.dl.dropboxusercontent.com/s/j4yghbtp0ikm5si/Screen%20Shot%202021-01-14%20at%201.40.26%20AM.png)

_Note_: To change the reporter, change the `--reporters` option in the `test:nyan` script. If using a non-native Jest reporter, then install it as a dev. dependency.

To run all tests in watch mode:

```bash
$ npm run test:watch
```

![Running Tests in Watch Mode](https://www.dl.dropboxusercontent.com/s/dcx1zw8atw22fez/Screen%20Shot%202021-01-14%20at%201.41.36%20AM.png)

Feel free to clone this project and add more tests!

## Please Read ⚠️

Please **do not** use this library in production. The sole purpose of this library is to teach others how to set up unit testing with Jest and TypeScript with minimal hassle.
