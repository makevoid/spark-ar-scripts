// this script requires you to have an emitter (emitter0) and
const Scene = require('Scene')
export const Diagnostics = require('Diagnostics')
const Time = require('Time')

const particles = Scene.root.find("emitter0")

const sparsity = ["low", "medium", "high"]

const animateParticles = (sparsity) => {
  switch (sparsity) {
    case "low":
      particles.birthrate = 5
      break;
    case "medium":
      particles.birthrate = 15
      break;
    case "high":
      particles.birthrate = 40
      break;
    default:
      Diagnostics.log(`ERROR, sparsity not defined - specify low, medium or high`)
  }
}

let indexCurrent = 0

// cycle between low amount of particles
const alternate = () => {
  const index = indexCurrent % 3
  animateParticles(sparsity[index])
  // indexCurrent = indexCurrent + 1
  indexCurrent++
}

// "binary" version of the above
//
// let sparse = false
// const alternateBinary = () => {
//   if (sparse) {
//     particles.birthrate = 10
//   } else {
//     particles.birthrate = 40
//   }
//   sparse = !sparse
// }

Time.setInterval(alternate, 5000)
Diagnostics.log(`OK ${Math.round(Math.random()*10000)}`)
