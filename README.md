# Three.js_3rd
### 概要
3Dモデル入りのウェブサイト作成<br>
3Dモデルをインポートする<br>

### 環境作成
1. viteをインストール<br>
`npm create vite@latest`<br>
フレームワークとバリエーションは<br>
React と Typescript を選択<br>

2. npmをインストールし必要なモジュールを準備する<br>
`npm i`<br>

3. ローカルサーバーを立ち上げる<br>
`npm run dev`<br>

4. ライブラリThree.jsをインストール<br>
`npm i three`<br>

5. TypeScript用のモジュールをインストール<br>
`npm i --save-dev @types/three`<br>

### ページスクリーンショット
![スクリーンショット2023-01-13（22 27 10）](https://user-images.githubusercontent.com/95268598/212330942-acdb3e81-39c3-4806-aa9c-8a81a969776e.png)

モデル引用<br>
sketchfab.com<br>
https://sketchfab.com/3d-models/bond-forger-from-spy-family-481783da76df4e419132062b77c1527b#download<br>

### 補足
#### PerspectiveCameraについて
near から far までを描写する<br>
第1引数：fov 視野角<br>
第2引数：aspect x/yで画像の比率<br>
第3引数：near カメラからnearまでの距離<br>
第4引数：far カメラからfarまでの距離<br>
<br>
![three-js-2](https://user-images.githubusercontent.com/95268598/211558266-bb4ba279-b378-415e-b4f0-e13cd09583d0.jpg)
