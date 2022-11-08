// // #1
// const myVideoClip = new VideoClip(
//   'https://player.vimeo.com/external/552481870.m3u8?s=c312c8533f97e808fccc92b0510b085c8122a875'
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






// const entity = new Entity()
// entity.addComponent(new BoxShape())
// const transform = new Transform({ position: new Vector3(4, 0, 4) })
// entity.addComponent(transform)
// entity.addComponent(
//   new OnPointerDown(() => {
//     openExternalURL("https://docs.decentraland.org")
//   })
// )
// engine.addEntity(entity)


import { getUserData } from "@decentraland/Identity"

executeTask(async () => {
    let data = await getUserData()
    //@ts-ignore
    const myTexture = new Texture(data?.avatar.snapshots.body)
    const myMaterial = new Material()
    myMaterial.albedoTexture = myTexture
    const myEntity = new Entity()
    myEntity.addComponent(new PlaneShape())
    myEntity.addComponent(
        new Transform({
            position: new Vector3(5, 2, 5),
            scale: new Vector3(2, 3.5, 2),
            rotation: new Quaternion(0, 0, 180),
        })
    )
    myEntity.addComponent(myMaterial)
    engine.addEntity(myEntity)
})