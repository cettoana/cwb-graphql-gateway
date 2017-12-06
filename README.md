# Central Weather Bureau Open Data (中央氣象局氣象資料開放平臺) GraphQL API Gateway

## Authorization Key

In order to get data from CWB(Central Weather Bureau), we need to get **authorization key** from [here](https://opendata.cwb.gov.tw/usages)

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
