# go-promise — Handle promises inline for JS

`go-promise` is a small util library, help you handle promises inline (inspired by Golang's error handling style). It helps you read code better, and is more convenient to handle error where there are multiple `Promise`s or with a huge logic code.

It can be used in browser and NodeJS enviroment

## 1. Example

```js

// es6 import
import goPromise from "go-promise";

// or standard import
const goPromise = require("go-promise");

async function yourFunc() {

  const [err1,data1] = await goPromise(YourPromise1Func());

  if (err !== null) {
    // handle error1;
  }
  // handle data1

  const [err2,data2] = await goPromise(YourPromise1Func());

  if (err2 !== null) {
    // handle error1;
  }
  // handle data1
}

```

## 2. Install

Install using Yarn

```sh
$ yarn add go-promise
```

Install using NPM

```sh
$ npm i go-promise
```

## 3. License and Contribution

`go-promise` is availabe under MIT license.

Feel free to open a thread for question or suggestion