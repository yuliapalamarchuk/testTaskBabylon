import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
} from "@babylonjs/core";
const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);
  const ground = MeshBuilder.CreateGround("ground", {width: 7, height: 7}, scene);

  const sphere = MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
  const material = new StandardMaterial("box-material", scene);
  material.diffuseColor = Color3.Blue();
  sphere.material = material;
  sphere.position.y = 1;

  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };
