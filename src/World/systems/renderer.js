import { WebGLRenderer } from '../../../three/build/three.module';
// renderer模块要引入 WebGLRenderer

function createRenderer() {
  const renderer = new WebGLRenderer();

  return renderer;
}

export { createRenderer }

