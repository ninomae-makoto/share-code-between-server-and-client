
# 環境
Win/Mac
Visual Studio Code
Node.js (6〜)
Webpack 4
TypeScript 2.7

# Usage

1. 依存関係の解決

```
npm install
```

2. トランスパイル

```
npm run build
```

うまくいかない場合はグローバルにインストールして実行。

```
npm install webpack -g
```

```
npm install typescript -g
```

```
tsc -p tsconfig_node.json
webpack --mode development
```

3. サーバ起動

```
npm start
```

Visuak Studio Code の場合F5
