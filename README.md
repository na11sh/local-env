# 概要

ローカル開発用環境です。

# セットアップ

## インストール

下記スクリプトを実行してください。

```
$ /vagrant/setup.sh
$ nvm install v0.12.4
$ nvm alias default v0.12.4
$ npm install -g casperjs
$ npm install -g jade
```

## テスト

### クローラー

正しくセットアップできていれば、コンソールに `OK` と表示され、カレントディレクトリに `screenshot.png` が生成されます。
また、`screenshot.png` が文字化けしていないか確認してください。

```
$ cd /vagrant/src/crawler/
$ casperjs /vagrant/src/crawler/crawl-sample.js
```

### テンプレート

下記コマンドを実行すると、build ディレクトリに html が出力されます。

```
$ cd /vagrant/src/template-engine
$ node build-sample.js
```
