# 概要

ローカル開発用環境です。
Vagrantを使えるようにしておいてください。

- [開発環境の構築・共有を簡単にするVagrant入門](https://thinkit.co.jp/story/2015/03/19/5740)

# セットアップ

## インストール

下記スクリプトを実行してください。

```
$ /vagrant/setup.sh
$ nvm install v0.12.4
$ nvm alias default v0.12.4
$ npm install -g casperjs
$ npm install -g jade
$ npm install -g gulp
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

#### 参考リンク

- [公式サイト](http://jade-lang.com/)
- [Jadeの記法について（あまりまとまっていない）](http://qiita.com/sasaplus1/items/189560f80cf337d40fdf#2-5)
- [Jade FTW](https://gist.github.com/japboy/5402844)
- [10分でわかるjadeテンプレートエンジン](http://blog.craftgear.net/4f501e97c1347ec934000001/title/10%E5%88%86%E3%81%A7%E3%82%8F%E3%81%8B%E3%82%8Bjade%E3%83%86%E3%83%B3%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%B3)
- [小規模静的サイト開発のためのメタ言語](http://qiita.com/mizdra/items/ae766eb9bc9e562344a6#_reference-cf1fbd356da4dcd7a03d)

### gulp サンプル

Windows ホストの場合、管理者権限で起動したプロンプトから仮想マシンを起動すること

```
$ mkdir -p dev/ gulp-sample && cd dev/gulp-sample
$ cp /vagrant/src/gulp-sample/package.json .
$ npm install
$ cp /vagrant/src/gulp-sample/gulpfile.js .
$ gulp
```

#### 参考リンク

- [テンプレートエンジン「EJS」とタスクランナー「Gulp.js」で爆速HTMLコーディング](http://liginc.co.jp/web/html-css/html/144170)
- [EJS と gulp を利用した HTML の生成](http://qiita.com/iktakahiro/items/8569ff9ec0158e518393)
- [gulpで手軽にEJSテンプレートをHTMLに変換](http://qiita.com/yuichiroharai/items/63b0769bc8ebe0220018)
- [Gulp.js+EJS+JSONを使った複数ページの生成方法](http://aircolor.hatenablog.com/entry/2015/05/24/234307)
- [Gulp.js入門 – コーディングを10倍速くする環境を作る方法まとめ](http://liginc.co.jp/web/tutorial/117900#sec04)
