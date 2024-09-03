# Open API 3.0 変更方法

## 変更時

Stoplight Studio を使って下さい。GUI ベースで楽々に

手順書は以下を参考にして下さい。

https://zenn.dev/mizu4ma/articles/07ad3aa05a785d

## OAS Linter

```shell
npm run lint-oas
```

### 正常な場合

```shell
$ npm run lint-oas

> lint-oas
> npx spectral lint open_api/mini-program-oas3.yaml --ruleset open_api/.spectral.yaml

No results with a severity of 'error' found!
```

## OAS Formatter

```shell
npm run format-oas
```

### 正常な場合

```shell
> test-open-api-generator@1.0.0 format-oas
> npx openapi-format open-api/test-oas3.yaml -o open-api/test-oas3.yaml

==========================================================================================================================================================================================================================
OpenAPI-Format CLI settings:
- Sort file:            (defaultSort.json)
- Input file:           open-api/test-oas3.yaml
- Output file:          open-api/test-oas3.yaml
==========================================================================================================================================================================================================================
✅  OpenAPI formatted successfully
==========================================================================================================================================================================================================================
```

## OAS HTML Document Generator

ReDoc 形式で HTML ドキュメントを生成する。

```shell
npm run gen-html
```

### 正常な場合

```shell
> test-open-api-generator@1.0.0 gen-html
> npx redocly build-docs -o open-api/html/index.html

Found redocly.yaml and using theme.openapi options
Prerendering docs

🎉 bundled successfully in: open-api/html/index.html (216 KiB) [⏱ 1ms].
```

## OAS Mock Server

Prism を使い、Mock Server を立てる。

```shell
npm run start-mock
```

### 正常な場合

```shell
> test-open-api-generator@1.0.0 start-mock
> npx prism mock open-api/test-oas3.yaml

[13:15:18] › [CLI] …  awaiting  Starting Prism…
(node:64171) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[13:15:18] › [CLI] ℹ  info      PUT        http://127.0.0.1:4010/pet
[13:15:18] › [CLI] ℹ  info      POST       http://127.0.0.1:4010/pet
[13:15:18] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/pet/findByStatus
[13:15:18] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/pet/findByTags
[13:15:18] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/pet/7311645275108069
[13:15:18] › [CLI] ℹ  info      POST       http://127.0.0.1:4010/pet/-2652619247811251?name=optio&status=id
[13:15:18] › [CLI] ℹ  info      DELETE     http://127.0.0.1:4010/pet/-4656658187935591
[13:15:18] › [CLI] ℹ  info      POST       http://127.0.0.1:4010/pet/1075455979493709/uploadImage
[13:15:18] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/store/inventory
[13:15:18] › [CLI] ℹ  info      POST       http://127.0.0.1:4010/store/order
[13:15:18] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/store/order/1754547676438737
[13:15:18] › [CLI] ℹ  info      DELETE     http://127.0.0.1:4010/store/order/4910965522871581
[13:15:18] › [CLI] ℹ  info      POST       http://127.0.0.1:4010/user
[13:15:18] › [CLI] ℹ  info      POST       http://127.0.0.1:4010/user/createWithList
[13:15:18] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/user/login
[13:15:18] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/user/logout
[13:15:18] › [CLI] ℹ  info      GET        http://127.0.0.1:4010/user/eos
[13:15:18] › [CLI] ℹ  info      PUT        http://127.0.0.1:4010/user/quae
[13:15:18] › [CLI] ℹ  info      DELETE     http://127.0.0.1:4010/user/est
[13:15:18] › [CLI] ▶  start     Prism is listening on http://127.0.0.1:4010
```

## OpenAPI Generator

[openapi-generator](https://github.com/OpenAPITools/openapi-generator) を利用し、コードの自動生成を行う。

### 使用方法

#### 生成可能な言語

```shell
npx openapi-generator-cli list
```

##### 出力例

```shell
Download 7.7.0 ...
Downloaded 7.7.0
The following generators are available:

CLIENT generators:
    - ada
    - android
    - apex
    - bash
    - c
    - clojure
    - cpp-qt-client
    - cpp-restsdk
    - cpp-tiny (beta)
    - cpp-tizen
    - cpp-ue4 (beta)
    - crystal (beta)
    - csharp
    - dart
    - dart-dio
    - eiffel
    - elixir
    - elm
    - erlang-client
    - erlang-proper
    - go
    - groovy
    - haskell-http-client
    - java
    - java-helidon-client (beta)
    - java-micronaut-client (beta)
    - javascript
    - javascript-closure-angular (beta)
    - javascript-flowtyped
    - jaxrs-cxf-client
    - jetbrains-http-client (experimental)
    - jmeter
    - julia-client (beta)
    - k6 (beta)
    - kotlin
    - lua (beta)
    - n4js (beta)
    - nim (beta)
    - objc
    - ocaml
    - perl
    - php
    - php-dt (beta)
    - php-nextgen (beta)
    - powershell (beta)
    - python
    - python-pydantic-v1
    - r
    - ruby
    - rust
    - scala-akka
    - scala-gatling
    - scala-pekko
    - scala-sttp
    - scala-sttp4 (beta)
    - scalaz
    - swift-combine
    - swift5
    - typescript (experimental)
    - typescript-angular
    - typescript-aurelia
    - typescript-axios
    - typescript-fetch
    - typescript-inversify
    - typescript-jquery
    - typescript-nestjs (experimental)
    - typescript-node
    - typescript-redux-query
    - typescript-rxjs
    - xojo-client
    - zapier (beta)


SERVER generators:
    - ada-server
    - aspnetcore
    - cpp-pistache-server
    - cpp-qt-qhttpengine-server
    - cpp-restbed-server
    - cpp-restbed-server-deprecated
    - csharp-functions
    - erlang-server
    - fsharp-functions (beta)
    - fsharp-giraffe-server (beta)
    - go-echo-server (beta)
    - go-gin-server
    - go-server
    - graphql-nodejs-express-server
    - haskell
    - haskell-yesod (beta)
    - java-camel
    - java-helidon-server (beta)
    - java-inflector
    - java-micronaut-server (beta)
    - java-microprofile
    - java-msf4j
    - java-pkmst
    - java-play-framework
    - java-undertow-server
    - java-vertx-web (beta)
    - java-wiremock (beta)
    - jaxrs-cxf
    - jaxrs-cxf-cdi
    - jaxrs-cxf-extended
    - jaxrs-jersey
    - jaxrs-resteasy
    - jaxrs-resteasy-eap
    - jaxrs-spec
    - julia-server (beta)
    - kotlin-server
    - kotlin-spring
    - kotlin-vertx (beta)
    - kotlin-wiremock (beta)
    - nodejs-express-server (beta)
    - php-flight (experimental)
    - php-laravel
    - php-lumen
    - php-mezzio-ph
    - php-slim4
    - php-symfony
    - python-aiohttp
    - python-blueplanet
    - python-fastapi (beta)
    - python-flask
    - ruby-on-rails
    - ruby-sinatra
    - rust-axum (beta)
    - rust-server
    - scala-akka-http-server (beta)
    - scala-cask
    - scala-finch
    - scala-http4s-server
    - scala-lagom-server
    - scala-play-server
    - scalatra
    - spring


DOCUMENTATION generators:
    - asciidoc
    - cwiki
    - dynamic-html
    - html
    - html2
    - markdown (beta)
    - openapi
    - openapi-yaml
    - plantuml (beta)


SCHEMA generators:
    - avro-schema (beta)
    - graphql-schema
    - ktorm-schema (beta)
    - mysql-schema
    - postman-collection (beta)
    - protobuf-schema (beta)
    - wsdl-schema (beta)


CONFIG generators:
    - apache2
```

#### 生成

##### ASP.NET Core

```shell
npx openapi-generator-cli generate -i open-api/test-oas3.yaml -g aspnetcore -o open-api/aspnetcore
```

##### typescript-redux-query

```shell
npx openapi-generator-cli generate -i open-api/test-oas3.yaml -g typescript-redux-query -o open-api/typescript-redux-query
```

##### python-fastapi

```shell
npx openapi-generator-cli generate -i open-api/test-oas3.yaml -g python-fastapi -o open-api/python-fastapi
```
