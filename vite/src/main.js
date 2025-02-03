import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById("canvas");

// crate scene
const scene = new THREE.Scene();
// create background color
const background = new THREE.Color("#F0F0F0");
scene.background = background;

// create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// create objects

const dodecahedronGeometry = new THREE.DodecahedronGeometry();
const dodecahedronMaterial = new THREE.MeshLambertMaterial({
  color: "#FFA500",
  emissive: "#FFA500",
});
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshLambertMaterial({
  color: "#0000FF",
  emissive: "#0000FF",
});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

// add objects to scene
scene.add(dodecahedron);
scene.add(box);

// lightining
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

// create renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// orbit controlls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;

// animate
function animate() {
  requestAnimationFrame(animate);

  // rotate objects
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  box.rotation.x += 0.005;
  box.rotation.y += 0.005;

  // update controls
  controls.update();

  // render scene
  renderer.render(scene, camera);
}

// handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
animate();
