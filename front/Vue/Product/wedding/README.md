# wedding

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## wedding用の画像共有サイトVue.js版
バックエンド側はpurePHPでレンタルサーバーでの共有を主に考えています。
現状では、複雑な認証などは特にないためバックをいじることはないかと思われ。
練習用でもあるのでTipsを残しつつ書いていこうと思います。

### routing
- top
- Item
- All

### backend
- All
- search
- count
```
<?php
$number = $_POST["number"];
$data = glob("../photo/*");
$result = array_slice($data, $number*10, 10);
echo json_encode($result);
?>
```
```
<?php
$data = glob("../photo/*");
echo json_encode(count($data));
 ?>
```

### Tips
componentsとCDN版では書き方が異なる？？？

https://qiita.com/hidepy/items/42220523cb2b3eb2c451
axiosでPOSTするときの注意点

https://qiita.com/idani/items/3651f547373250a7a643
最終デプロイの時にbaseURLが違うとエラーも出ずに真っ白になって詰んだーって言わないようにのTips

### file structure
phpのなかにバックエンドの処理をまとめた系
photoとsmall_photoを取得

### npm run serveが動かない
https://ysko909.github.io/posts/fix-vue-cli-service-command-not-found-error/
