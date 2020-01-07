const Scene = require('Scene')
export const Diagnostics = require('Diagnostics')
const TouchGestures = require('TouchGestures')
const Reactive = require('Reactive')

const plane = Scene.root.find('plane0')

let tapped = false

TouchGestures.onTap(plane).subscribe((gesture) => {
  if (tapped) {
    plane.material.opacity = 0.3
  } else {
    plane.material.opacity = 0.7
  }
  tapped = !tapped
})

Diagnostics.log(`OK ${Math.round(Math.random() * 10000)}`)
