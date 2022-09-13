class Resizer {
  constructor(container, camera, renderer) {
    // 设置 相机宽高比
    camera.aspect = container.clientWidth / container.clientHeight;

    // 更新 相机的平截头体
    camera.updateProjectionMatrix()

    // 更新 渲染器和画布的尺寸
    renderer.setSize(container.clientWidth, container.clientHeight);

    // 为移动设备设置像素比
    renderer.setPixelRatio(window.devicePixelRatio);
  }
}

export { Resizer };