import './App.css'
import * as THREE from "three";
import { useEffect } from 'react';

function App() {

  // useEffect ロード時に1回だけ発火させるため空の配列を引数に宣言する
  useEffect(() => {

    // canvas idがcanvasを指定する
    const canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;

    // size ブラウザサイズを宣言する
    const size = {
      // innerWidth innerHeight 見ているブラウザの横幅,縦幅を取得
      width: innerWidth,
      height: innerHeight,
    }

    // scene
    const scene: THREE.Scene = new THREE.Scene();

    // camera
    // PerspectiveCameraについて
    // near から far までを描写する
    // 第1引数：fov 視野角
    // 第2引数：aspect x/yで画像の比率
    // 第3引数：near カメラからnearまでの距離
    // 第4引数：far カメラからfarまでの距離
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      size.width / size.height,
      0.1,
      1000
    );

    // renderer
    const renderer = new THREE.WebGLRenderer({
      // 描写する場所を指定
      canvas: canvas,
      // antialias trueでギザギザがなめらかになる
      antialias: true,
    });

    // 描写するためのおきまり宣言
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // BOXの表示
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    const cube = new THREE.Mesh( geometry, material );
    scene.add(cube);

  }, []);

  return (
    <>
      <canvas id="canvas"></canvas>
      <div className="mainContent"></div>
    </>
  );
}

export default App
