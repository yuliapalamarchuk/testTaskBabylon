import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Color3,
  HemisphericLight,
  GizmoManager,
  ActionManager,
  InterpolateValueAction,
} from "@babylonjs/core";
import * as BABYLON from "babylonjs";
import { SetValueAction } from "babylonjs";

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

  const gizmoManager = new GizmoManager(scene);
  //visibility
  engine.runRenderLoop(() => {
    scene.render();
  });

  const offsetBtn = document.querySelector("#offset_btn");
  const rotateBtn = document.querySelector("#rotation_btn");
  const scaleBtn = document.querySelector("#scale_btn");
  const cursorBtn = document.querySelector("#cursor_btn");
  //eventlistenerCursor
  cursorBtn.addEventListener("click", () => {
    cursorBtn.style.backgroundColor = "rgb(66,49,137)";
    gizmoManager.positionGizmoEnabled = false;
    gizmoManager.rotationGizmoEnabled = false;
    gizmoManager.scaleGizmoEnabled = false;
    scaleBtn.style.backgroundColor = "rgb(255,255,255)";
    rotateBtn.style.backgroundColor = "rgb(255,255,255)";
    offsetBtn.style.backgroundColor = "rgb(255,255,255)";
  });
  //eventlistenerOffset
  offsetBtn.addEventListener("click", () => {
    gizmoManager.positionGizmoEnabled = !gizmoManager.positionGizmoEnabled;
    offsetBtn.style.backgroundColor = "rgb(66,49,137)";
    if (gizmoManager.positionGizmoEnabled) {
      gizmoManager.rotationGizmoEnabled = false;
      gizmoManager.scaleGizmoEnabled = false;
      scaleBtn.style.backgroundColor = "rgb(255,255,255)";
      rotateBtn.style.backgroundColor = "rgb(255,255,255)";
      cursorBtn.style.backgroundColor = "rgb(255,255,255)";
    }
  });
  //eventlistenerRotate
  rotateBtn.addEventListener("click", () => {
    gizmoManager.rotationGizmoEnabled = !gizmoManager.rotationGizmoEnabled;
    rotateBtn.style.backgroundColor = "rgb(66,49,137)";
    if (gizmoManager.rotationGizmoEnabled) {
      gizmoManager.positionGizmoEnabled = false;
      gizmoManager.scaleGizmoEnabled = false;
      scaleBtn.style.backgroundColor = "rgb(255,255,255)";
      offsetBtn.style.backgroundColor = "rgb(255,255,255)";
      cursorBtn.style.backgroundColor = "rgb(255,255,255)";
    }
  });
  //eventlistenerScale
  scaleBtn.addEventListener("click", () => {
    gizmoManager.scaleGizmoEnabled = !gizmoManager.scaleGizmoEnabled;
    scaleBtn.style.backgroundColor = "rgb(66,49,137)";
    if (gizmoManager.scaleGizmoEnabled) {
      gizmoManager.positionGizmoEnabled = false;
      gizmoManager.rotationGizmoEnabled = false;
      rotateBtn.style.backgroundColor = "rgb(255,255,255)";
      offsetBtn.style.backgroundColor = "rgb(255,255,255)";
      cursorBtn.style.backgroundColor = "rgb(255,255,255)";
    }
  });

  sphere.actionManager = new ActionManager(scene);
  sphere.actionManager
    .registerAction(
      new InterpolateValueAction(
        ActionManager.OnPickTrigger,
        material,
        "diffuseColor",
        new Color3("0, 0, 1")
      )
    )
    .then(
      new InterpolateValueAction(
        ActionManager.OnPickTrigger,
        material,
        "diffuseColor",
        Color3.Blue()
      )
    );

  const boxBtn = document.querySelector("#box_btn");
  boxBtn.addEventListener("click", () => {
    const box = MeshBuilder.CreateBox(
      "box",
      { height: 2, width: 2, depth: 2 },
      scene
    );
    const materialBox = new StandardMaterial("box-material", scene);
    materialBox.diffuseColor = Color3.Blue();
    box.material = materialBox;

    box.actionManager = new ActionManager(scene);
    box.actionManager
      .registerAction(
        new InterpolateValueAction(
          ActionManager.OnPickTrigger,
          materialBox,
          "diffuseColor",
          new Color3("0, 0, 1")
        )
      )
      .then(
        new InterpolateValueAction(
          ActionManager.OnPickTrigger,
          materialBox,
          "diffuseColor",
          Color3.Blue()
        )
      );
  });

  const cylinderBtn = document.querySelector("#cylinder_btn");
  cylinderBtn.addEventListener("click", () => {
    const cylinder = MeshBuilder.CreateCylinder("cylinder", {}, scene);
    const materialCylinder = new StandardMaterial("cylinder-material", scene);
    materialCylinder.diffuseColor = Color3.Blue();
    cylinder.material = materialCylinder;

    cylinder.actionManager = new ActionManager(scene);
    cylinder.actionManager
      .registerAction(
        new InterpolateValueAction(
          ActionManager.OnPickTrigger,
          materialCylinder,
          "diffuseColor",
          new Color3("0, 0, 1")
        )
      )
      .then(
        new InterpolateValueAction(
          ActionManager.OnPickTrigger,
          materialCylinder,
          "diffuseColor",
          Color3.Blue()
        )
      );
  });

  const torusBtn = document.querySelector("#torus_btn");
  torusBtn.addEventListener("click", () => {
    const torus = MeshBuilder.CreateTorus(
      "torus",
      { thickness: 1, diameter: 2 },
      scene
    );
    const materialTorus = new StandardMaterial("torus-material", scene);
    materialTorus.diffuseColor = Color3.Blue();
    torus.material = materialTorus;

    torus.actionManager = new ActionManager(scene);
    torus.actionManager
      .registerAction(
        new InterpolateValueAction(
          ActionManager.OnPickTrigger,
          materialTorus,
          "diffuseColor",
          new Color3("0, 0, 1")
        )
      )
      .then(
        new InterpolateValueAction(
          ActionManager.OnPickTrigger,
          materialTorus,
          "diffuseColor",
          Color3.Blue()
        )
      );
  });
};

export { createScene };
