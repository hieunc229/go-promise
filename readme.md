# go-promise — Handle promises inline for JS

`go-promise` is a tiny util library, help you handle promises inline (inspired by Golang's error handling style). It helps you read code better, and is more convenient to handle error where there are multiple `Promise`s or with a huge logic code.

It can be used in browser and NodeJS enviroment

## 1. How to use

The library exposes only 1 function `goPromise` and return an array with 2 values.

When the promise is rejected:
- The 1st value will be `Error`
- The 2nd value will be `undefined`

When the promise is resolved
- The 1st value is `null`
- The 2nd value is the resolve data

```js
goPromise(Promise<T>): Promise<[Error | null, T | undefined]>
```


## 2. Example

```js

// es6 import
import goPromise from "go-promise";

// or standard import
const goPromise = require("go-promise");

async function yourFunc() {

  const [errData1,data1] = await goPromise(YourPromise1Func());

  if (errData1 !== null) {
    // handle errData1;
  }
  // handle data1

  const [errData2,data2] = await goPromise(YourPromise1Func());

  if (errData2 !== null) {
    // handle errData2;
  }
  // handle data2
}

```

## 3. Install

Install using Yarn

```sh
$ yarn add go-promise
```

Install using NPM

```sh
$ npm i go-promise
```

## 4. License and Contribution

`go-promise` is availabe under MIT license.

Feel free to open a thread for question or suggestion