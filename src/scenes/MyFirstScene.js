import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
  UtilityLayerRenderer,
  RotationGizmo,
  PositionGizmo,
  ScaleGizmo,
  GizmoManager,
} from "@babylonjs/core";
import * as BABYLON from "babylonjs";

const createScene = (canvas) => {
  //creating scene
  const engine = new Engine(canvas);
  const scene = new Scene(engine);
  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);
  new HemisphericLight("light", Vector3.Up(), scene);
  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 9, height: 8 },
    scene
  );
  const sphere = MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 2, segments: 32 },
    scene
  );

  sphere.rotation.z = Math.PI / 2;
  sphere.position.y = 1;
  const material = new StandardMaterial("sphere-material", scene);
  material.diffuseColor = Color3.Blue();
  sphere.material = material;
  //hello gizmo

  const gizmoManager = new GizmoManager(scene);

  //visibility
  engine.runRenderLoop(() => {
    scene.render();
  });

  //eventlistenerCursor
  const cursorBtn = document.querySelector("#cursor_btn");
  cursorBtn.addEventListener("click", () => {
    cursorBtn.style.backgroundColor = "rgb(66,49,137)";
    gizmoManager.positionGizmoEnabled = false;
    gizmoManager.rotationGizmoEnabled = false;
    gizmoManager.scaleGizmoEnabled = false;
  });

  //eventlistenerOffset
  const offsetBtn = document.querySelector("#offset_btn");
  const rotateBtn = document.querySelector("#rotation_btn");
  const scaleBtn = document.querySelector("#scale_btn");
  offsetBtn.addEventListener("click", () => {
    gizmoManager.positionGizmoEnabled = !gizmoManager.positionGizmoEnabled;
    offsetBtn.style.backgroundColor = "rgb(66,49,137)";
    if (gizmoManager.positionGizmoEnabled) {
      gizmoManager.rotationGizmoEnabled = false;
      gizmoManager.scaleGizmoEnabled = false;
    }
  });

  //eventlistenerRotate
  rotateBtn.addEventListener("click", () => {
    gizmoManager.rotationGizmoEnabled = !gizmoManager.rotationGizmoEnabled;
    rotateBtn.style.backgroundColor = "rgb(66,49,137)";
    if (gizmoManager.rotationGizmoEnabled) {
      gizmoManager.positionGizmoEnabled = false;
      gizmoManager.scaleGizmoEnabled = false;
    }
  });

  //eventlistenerScale
  scaleBtn.addEventListener("click", () => {
    gizmoManager.scaleGizmoEnabled = !gizmoManager.scaleGizmoEnabled;
    scaleBtn.style.backgroundColor = "rgb(66,49,137)";
    if (gizmoManager.scaleGizmoEnabled) {
      gizmoManager.positionGizmoEnabled = false;
      gizmoManager.rotationGizmoEnabled = false;
    }
  });
};

export { createScene };
