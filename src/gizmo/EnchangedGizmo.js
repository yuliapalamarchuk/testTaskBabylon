import * as BABYLON from "babylonjs";
import BabylonScene from "components/BabylonScene";
const gizmoManager = new BABYLON.GizmoManager(scene);

gizmoManager.positionGizmoEnabled = true;

const createScene = function () {
  const utilLayer = new BABYLON.UtilityLayerRenderer(scene);
  const gizmo = new BABYLON.AxisDragGizmo(
    new BABYLON.Vector3(1, 0, 0),
    BABYLON.Color3.FromHexString("#00b894"),
    utilLayer
  );
  gizmo.attachedMesh = sphere;
  gizmo.updateGizmoRotationToMatchAttachedMesh = false;
  gizmo.updateGizmoPositionToMatchAttachedMesh = true;
  document.onkeydown = () => {
    gizmo.attachedMesh = !gizmo.attachedMesh ? sphere : null;
  };
  return scene;
};
