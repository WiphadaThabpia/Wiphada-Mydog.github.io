import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load('animal.glb', (gltf) => {
    const model = gltf.scene;
    scene.add(model);
});