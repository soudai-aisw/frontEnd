# TypeScript

## General

### What is TypeScript?

- JavaScriptのスーパーセット
  - JavaScriptの拡張言語
- 制約
  - ブラウザで直接実行できない
- じゃあどう使うの？
  - TypeScriptをJavaScriptにトランスパイルする
  - つまり…TypeScriptで書いたコードをJavaScriptとして実行する

### TypeScriptのメリット

- 型の概念がないJavaScriptに対して型の概念を導入できる
- 新しい世代のJavaScriptの機能
- JavaScriptに存在しない新機能
  - インターフェース
  - ジェネリクス
  - メタプログラミング
    - デコレータ等

### How to use

1. npm経由でtypescriptをインストールする
   - ```npm install -g typescript```
2. インストールできたか確認
   - ```tsc --version```
3. 拡張子".ts"のファイルを作成する
4. ```tsc {your-file-name}.ts```でコンパイルする
5. あら不思議、{your-file-name}.jsができてる

### words and terms
