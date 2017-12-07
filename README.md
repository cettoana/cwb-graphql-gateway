# CWB Open Data GraphQL API Gateway

[![Build Status](https://travis-ci.org/cettoana/cwb-graphql-gateway.svg?branch=master)](https://travis-ci.org/cettoana/cwb-graphql-gateway)
[![Heroku](http://heroku-badge.herokuapp.com/?app=cwb-graphql-gateway&style=flat&svg=1&root=graphiql)](https://cwb-graphql-gateway.herokuapp.com/graphiql)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

[Central Weather Bureau Open Data](https://opendata.cwb.gov.tw/index) (中央氣象局氣象資料開放平臺) GraphQL API Gateway

## Authorization Key

In order to get data we need to sign up for Central Weather Bureau and sign in to get the **authorization key** from [here](https://opendata.cwb.gov.tw/usages)

## DEMO

[GraphiQL](https://cwb-graphql-gateway.herokuapp.com/graphiql)

## Developement

### Requirements

* node >= v8.9.1
* npm >= 5.5.1
* yarn >= 1.3.2

```bash
yarn install --pure-lockfile
yarn run watch
```

and browse `http://localhost:4000/graphiql` to show `GraphiQL` page, or get data from API endpoint `http://localhost:4000/graphql`
