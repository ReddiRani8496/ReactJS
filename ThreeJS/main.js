import * as THREE from "three";

// create scene
const scene = new THREE.Scene();
// create background color
const background = new THREE.Color("#F0F0F0");

// create camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// create cube geometry
const geometry = new THREE.BoxGeometry();

// create cube material
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
  emissive: 0x00ff00,
});

// create cube mesh
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// create lighting
const light = new THREE.DirectionalLight(0xffffff, 10);
light.position.set(1, 1, 1);
scene.add(light);

// create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// animate
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
