# Example how to use Express and TypeORM with TypeScript

1. clone repository 
2. run `npm i`
3. edit `ormconfig.json` and change your database configuration (you can also change a database type, but don't forget to install specific database drivers)
4. run `npm start`
5. open `http://localhost:3000/posts` and you'll empty array
6. use curl, postman or other tools to send http requests to test your typeorm-based API

## How to use CLI?

1. install `typeorm` globally: `npm i -g typeorm`
2. run `typeorm -h` to show list of available commands


## テスト方針

### 登場人物

- Jest ... テストフレームワーク
- Supertest ... HTTPリクエストとレスポンスのアサーションを簡単に実装できるパッケージ

### 事前準備

```
# 依存ライブラリの導入
$ npm i typescript express

# 開発系のライブラリの導入
$ npm i -D ts-node jest supertest ts-jest

# TypeScript用の型の定義の導入
$ npm i @types/express @types/jest @types/supertest


# TypeORM関連(別に必須じゃない)
$ npm install -D typeorm-factory

# CodeBuildで表示するためのレポーター
# https://docs.aws.amazon.com/codebuild/latest/userguide/test-report-jest.html
$ npm install -D jest-junit

```

tsconfig.jsonの変更部分
```
    "exclude": [
        "node_modules",
        "__tests__" // テストフォルダを除外
    ]
```

jest.config.js
```
module.exports = {
    // typescript
    "moduleFileExtensions": [
        "ts",
        "js"
    ],
    "transform": {
      "^.+\\.ts$": "ts-jest"
    },
    "globals": {
      "ts-jest": {
        "tsConfig": "tsconfig.json"
      }
    },
    "testMatch": [
      // "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|js)"
    ],

    // coverage
    "collectCoverage" : true,
    "collectCoverageFrom": ['src/*/*.(ts)'],
    "coverageDirectory": "coverage",

    // reporter
    "reporters": [
      'default',
      [
        'jest-junit',
        {
          suiteName: 'jest tests',
          outputDirectory: 'reports/jest',
          outputName: 'js-test-results.xml',
          classNameTemplate: '{classname}-{title}',
          titleTemplate: '{classname}-{title}',
          ancestorSeparator: ' › ',
        },
      ],
    ],
}
```

## 方針

- testファイルは `__tests__` ディレクトリに格納し、関数orファイル名.test.tsとする
- `Unit`ディレクトリには単体テスト（本当に独立した関数(util内とか)）に対して行う
- 基本的には結合をメインにやる
  - DBだけ起動してればできるDBアクセスのテスト(Servicesにentityとアクセスを切り離す)
  - apiはAPIエンドポイントに対するテスト（controller部分に対するテスト)
    - DBアクセスの関数はMockでもOK

### DBテスト

主にリポジトリ層に対して行うテスト

```
import { User } from './entity/user';
import { getConnection, findByName } from './userRepositorySample';

describe('userRepository', () => {
  // あらかじめ、MySQLにデータを入れる
  beforeEach(async () => {
    const dbConnection = await getConnection();
    const user = new User();
    user.name = 'testUser';
    await dbConnection.manager.save(user);
  });

  // テストが終わったらMySQLにいれたデータを空にする
  afterEach(async () => {
    const dbConnection = await getConnection();
    await dbConnection.manager.clear(User);
  });

  it('findByName', async () => {
    const user = await findByName('testUser');
    expect(user.name).toBe('testUser');
  });
});
```

### APIテスト

主にルーティングで呼ばれる関数(controller)に対して行うテスト
リクエストの変数の型チェック、レスポンスなど

```
import app from './apiServer';
import * as request from 'supertest';

describe('APIとして返すテスト', () => {
  it('expressサーバー上でAPIの結果を受け取るテスト', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ hello: 'world' });
  });
});
```
