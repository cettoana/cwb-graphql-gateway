# CWB Open Data GraphQL API Gateway

[![Build Status](https://travis-ci.org/cettoana/cwb-graphql-gateway.svg?branch=master)](https://travis-ci.org/cettoana/cwb-graphql-gateway)
[![Build Status](https://img.shields.io/codecov/c/github/cettoana/cwb-graphql-gateway/master.svg)](https://codecov.io/gh/cettoana/cwb-graphql-gateway/branch/master)
[![Known Vulnerabilities](https://snyk.io/test/github/cettoana/cwb-graphql-gateway/badge.svg)](https://snyk.io/test/github/cettoana/cwb-graphql-gateway)
[![Heroku](http://heroku-badge.herokuapp.com/?app=cwb-graphql-gateway&style=flat&svg=1&root=.well-known/apollo/server-health)](https://cwb-graphql-gateway.herokuapp.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](#badge)

[中央氣象局氣象資料開放平臺](https://opendata.cwb.gov.tw/index) (Central Weather Bureau Open Data) GraphQL API Gateway

Live Demo - [GraphQL Playground](https://cwb-graphql-gateway.herokuapp.com)

## Implemented API

| Data name | Data ID |
| :-----------: |:-------------:|
| 自動氣象站-氣象觀測資料 | O-A0001-001 |
| 自動雨量站-雨量觀測資料 | O-A0002-001 |

## Deploy To Heroku

Env Variables Required To Run

- `CWB_API_KEY`

- `PLAYGROUND_ENABLED`

Get Your API Key From [Here](https://opendata.cwb.gov.tw/devManual/insrtuction#getUserAuthkeyAnchor)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/cettoana/cwb-graphql-gateway/blob/master)

## Developement

### Requirements

* node >= v8.9.1
* npm >= v5.5.1
* yarn >= v1.3.2

```bash
git clone https://github.com/cettoana/cwb-graphql-gateway.git
yarn install --pure-lockfile
yarn build
yarn start
```

and Browse `http://localhost:4000` to Play with GraphQL Playground.
