import './App.css'
import * as THREE from "three";
import { useEffect } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function App() {
  let model: THREE.Group;

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

    // cameraの座標を変える
    camera.position.set(-1.0, 1.0, 3.3);

    // renderer
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      // 描写する場所を指定
      canvas: canvas,
      // antialias trueでギザギザがなめらかになる
      antialias: true,
      // alpha 背景色の設定を可能にする 透明度を黒から取り除く意味
      alpha: true,
    });

    // 描写するためのおきまり宣言
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // // BOXの表示
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // // MeshBasicMaterial ライトの影響を受けない
    // const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    // const cube = new THREE.Mesh( geometry, material );
    // scene.add(cube);

    // gltfLoader 3Dモデルのインポート
    const gltfLoader = new GLTFLoader();

    // 読み込み
    gltfLoader.load("./models/scene.gltf", (gltf) => {
      model = gltf.scene;
      // 大きさ変更
      model.scale.set(1.0, 1.0, 1.0);
      // 傾き 60度指定
      // model.rotation.y = -Math.PI / 3;
      scene.add(model);
    });

    // tick アニメーション生成 フレームごとに何度も読み込む
    const tick = () => {
      // sceneとcameraを読み込む
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    }
    // tick 実行
    tick();

  }, []);

  return (
    <>
      <canvas id="canvas"></canvas>
      <div className="mainContent">
        <h3>SPY×FAMILY</h3>
        <p>Bond Forger</p>
      </div>
    </>
  );
}

export default App
