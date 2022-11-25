// // #1
// const myVideoClip = new VideoClip(
//   'https://firebasestorage.googleapis.com/v0/b/chatbot-saas-3e138.appspot.com/o/external-use%2Fstock.mp4?alt=media&token=cd7dfcc5-b94f-4ab4-aeef-44b306c1ecec'
// )

// // #2
// const myVideoTexture = new VideoTexture(myVideoClip)

// // #3
// const myMaterial = new Material()
// myMaterial.albedoTexture = myVideoTexture
// myMaterial.roughness = 1
// myMaterial.specularIntensity = 0
// myMaterial.metallic = 0


// // #4
// const screen = new Entity()
// screen.addComponent(new PlaneShape())
// screen.addComponent(
//   new Transform({
//     position: new Vector3(8, 1, 8),
//   })
// )
// screen.addComponent(myMaterial)
// screen.addComponent(
//   new OnPointerDown(() => {
//     myVideoTexture.playing = !myVideoTexture.playing
//   })
// )
// engine.addEntity(screen)

// // #5
// myVideoTexture.play()






// // const entity = new Entity()
// // entity.addComponent(new BoxShape())
// // const transform = new Transform({ position: new Vector3(4, 0, 4) })
// // entity.addComponent(transform)
// // entity.addComponent(
// //   new OnPointerDown(() => {
// //     openExternalURL("https://docs.decentraland.org")
// //   })
// // )
// // engine.addEntity(entity)


// // import { getUserData } from "@decentraland/Identity"

// // executeTask(async () => {
// //     let data = await getUserData()
// //     let res = await fetch("http://localhost:8080")
// //     //@ts-ignore
// //     let blob = await res.blob()
// //     //@ts-ignore
// //     // const myTexture = new Texture(data?.avatar.snapshots.body)
// //     const myTexture = new Texture(URL.createObjectURL(blob))
// //     const myMaterial = new Material()
// //     myMaterial.albedoTexture = myTexture
// //     const myEntity = new Entity()
// //     myEntity.addComponent(new PlaneShape())
// //     myEntity.addComponent(
// //         new Transform({
// //             position: new Vector3(5, 2, 5),
// //             scale: new Vector3(2, 3.5, 2),
// //             rotation: new Quaternion(0, 0, 180),
// //         })
// //     )
// //     myEntity.addComponent(myMaterial)
// //     engine.addEntity(myEntity)
// // })





import {
  CheckWeather,
  CurrentWeather,
  Weather,
  LightningSystem,
} from './modules/weather'
import { RotateSystem, SpinVel } from './modules/flakeRotation'
import {
  IsPrecip,
  PrecipType,
  FallSystem,
  SpawnSystem,
} from './modules/precipitation'

///////// SCENE FIXED ENTITIES

// WEATHER CONTROLLER

const weatherObject = new CurrentWeather()

// ADD HOUSE

const house = new Entity()
house.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1.59, 1.59, 1.59),
  })
)

house.addComponent(new GLTFShape('models/house_dry.gltf'))
engine.addEntity(house)

weatherObject.house = house

// ADD CLOUDS

const clouds = new Entity()
clouds.addComponent(
  new Transform({
    position: new Vector3(8, 10, 8),
    scale: new Vector3(4, 4, 4),
  })
)
engine.addEntity(clouds)

weatherObject.clouds = clouds

// DEFINE LIGHTNING COMPONENTS AS AN ARRAY OF GLTF COMPONENTS

const lightningModels: GLTFShape[] = []
for (let i = 1; i < 6; i++) {
  const modelPath = 'models/ln' + i + '.gltf'
  const lnModel = new GLTFShape(modelPath)
  lightningModels.push(lnModel)
}

// ADD LIGHTNING ENTITY

const lightning = new Entity()
lightning.addComponent(new Transform())
lightning.getComponent(Transform).position.set(8, 10, 8)
lightning.getComponent(Transform).scale.setAll(5)
engine.addEntity(lightning)

// ADD SYSTEMS

engine.addSystem(new CheckWeather(weatherObject))
engine.addSystem(new FallSystem())
engine.addSystem(new RotateSystem())
engine.addSystem(new SpawnSystem(weatherObject))
engine.addSystem(new LightningSystem(weatherObject, lightning, lightningModels))
