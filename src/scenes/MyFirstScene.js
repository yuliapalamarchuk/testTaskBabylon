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
  const box = MeshBuilder.CreateBox("box", { size: 3 }, scene);

  box.rotation.z = Math.PI / 2;
  box.position.y = 1;
  const material = new StandardMaterial("box-material", scene);
  material.diffuseColor = Color3.Blue();
  box.material = material;
  box.position.y = 1;
  //hello gizmo
  const utilLayer = new UtilityLayerRenderer(scene);
  //offset
  const gizmoOffset = new PositionGizmo(utilLayer);
  gizmoOffset.attachedMesh = box;
  gizmoOffset.updateGizmoRotationToMatchAttachedMesh = false;
  gizmoOffset.updateGizmoPositionToMatchAttachedMesh = true;

  //rotation
  const gizmoRotate = new RotationGizmo(utilLayer);
  gizmoRotate.attachedMesh = box;

  gizmoRotate.updateGizmoRotationToMatchAttachedMesh = false;
  gizmoRotate.updateGizmoPositionToMatchAttachedMesh = true;

  document.onkeydown = () => {
    gizmoRotate.attachedMesh = !gizmoRotate.attachedMesh ? box : null;
  };

  //scale
  const gizmoScale = new ScaleGizmo(utilLayer);
  gizmoScale.attachedMesh = box;

  gizmoScale.updateGizmoRotationToMatchAttachedMesh = true;
  gizmoScale.updateGizmoPositionToMatchAttachedMesh = true;

  document.onkeydown = ()=>{
    gizmoScale.attachedMesh = !gizmoScale.attachedMesh ? box : null
}

  //visibility
  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };
