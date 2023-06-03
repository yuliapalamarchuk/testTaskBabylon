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
  sphere.position.y = 1;
  //hello gizmo
  const utilLayer = new UtilityLayerRenderer(scene);

  //visibility
  engine.runRenderLoop(() => {
    scene.render();
  });

  //eventlistenerOffset
  const offsetBtn = document.querySelector("#offset_btn");
  offsetBtn.addEventListener("click", () => {
    const gizmoOffset = new PositionGizmo(utilLayer);
    gizmoOffset.attachedMesh = sphere;
    gizmoOffset.updateGizmoRotationToMatchAttachedMesh = false;
    gizmoOffset.updateGizmoPositionToMatchAttachedMesh = true;
    offsetBtn.style.backgroundColor = "rgb(66,49,137)";
  });

  //eventlistenerRotate
  const rotateBtn = document.querySelector("#rotation_btn");
  rotateBtn.addEventListener("click", () => {
    const gizmoRotate = new RotationGizmo(utilLayer);
    gizmoRotate.attachedMesh = sphere;
    gizmoRotate.updateGizmoRotationToMatchAttachedMesh = false;
    gizmoRotate.updateGizmoPositionToMatchAttachedMesh = true;
    rotateBtn.style.backgroundColor = "rgb(66,49,137)";
  });

  //eventlistenerScale
  const scaleBtn = document.querySelector("#scale_btn");
  scaleBtn.addEventListener("click", () => {
    const gizmoScale = new ScaleGizmo(utilLayer);
    gizmoScale.attachedMesh = sphere;
    gizmoScale.updateGizmoRotationToMatchAttachedMesh = true;
    gizmoScale.updateGizmoPositionToMatchAttachedMesh = true;
    scaleBtn.style.backgroundColor = "rgb(66,49,137)";
  });
};

export { createScene };
