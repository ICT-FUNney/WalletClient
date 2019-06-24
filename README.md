# FUNney フロント

## 運用方法
- 基本的にはdevelopブランチで開発
- リリースする際にはdevelopからrelease/(major|minor|patch)というブランチを切る
  - ciが動き，前回のタグからの差分をチェックしCHANGELOGの作成をしてくれる
- その後，ciが自動でmasterとdevelopにCHANGELOGで産まれた差分をpush，デプロイをする
