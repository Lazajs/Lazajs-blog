// @ts-nocheck
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import Threeasy from 'threeasy'

export default function AtomThree ({ Loader }) {
  const [loader] = useState(() => new GLTFLoader())
  const [app, setApp] = useState()
  const [scene, setScene] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const MODEL_URL = '/model/scene.gltf'

  useEffect(() => {
    const app = new Threeasy(THREE, { alpha: true })
    setApp(app)

    return () => {
      if (scene?.traverse) {
        scene.traverse((child) => {
          if (child.isMesh) {
            child.material.dispose()
            child.geometry.dispose()
          }
        })
      }
    }
  }, [])

  useEffect(() => {
    if (app && loader) {
      const container = document.getElementById('atom-container')
      container.appendChild(app.renderer.domElement)
      let mixer = null
      const clock = app.clock

      function resize () {
        app.camera.aspect = container?.offsetWidth / container?.offsetHeight
        app.camera.updateProjectionMatrix()
        app.renderer.setSize(container?.offsetWidth, container?.offsetHeight)
      };
      resize()
      window.addEventListener('resize', resize)

      if (isLoading) {
        loader.load(MODEL_URL, (gltf) => {
          gltf.scene.scale.x = 0.38
          gltf.scene.scale.y = 0.38
          gltf.scene.scale.z = 0.38
  
          const toReactColor = ['core_0', 'electron_2_0', 'electron__3_0', 'electron_1_0']
          const toWhiteColor = ['electron_shell_0', 'electron_shell2_0', 'electron_shell3_0', 'electron_shell3_0']
          const colorReact = new THREE.Color(0x03cbff)
          const colorWhite = new THREE.Color(0xffffff)
  
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              if (toReactColor.includes(child.name)) {
                child.material.color.set(colorReact)
              } else if (toWhiteColor.includes(child.name)) {
                child.material.color.set(colorWhite)
              }
            }
          })
  
          setScene(gltf.scene)
          app.scene.add(gltf.scene)
  
          app.animator.add(() => {
            gltf.scene.rotation.x += 0.007
            gltf.scene.rotation.y += 0.007
          })
          
          mixer = new THREE.AnimationMixer(gltf.scene)
          gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play()
          })
          mixer.update(0.007)
      })
      }

      function animate () {
        requestAnimationFrame(animate)

        const delta = clock.getDelta()

        if (mixer) mixer.update(delta)
      }

      animate()
      setIsLoading(false)

      return () => {
        window.removeEventListener('resize', resize)
      }
    }
  }, [app, loader])

  return (
    <>
      <div id='atom-container'></div>
      {isLoading ? <Loader /> : null}
      <style jsx>{`
        #atom-container {
          cursor: normal;
          max-width: 400px;
          height: 400px;
          width: 100%;
          position: relative;
          margin: auto;
          background-color: transparent;
        }

        canvas {
          position: absolute;
          top:0;
          left: 0;
          background-color:transparent;
        }
      `}</style>
    </>
  )
}
