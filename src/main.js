import { World } from './World/World.js'

function main() {
  const container = document.querySelector('#scene-container')  // 获取容器元素的引用
  const world = new World(container)    // 创建一个 world app 的实例
  world.render()  // 渲染场景
}

main()