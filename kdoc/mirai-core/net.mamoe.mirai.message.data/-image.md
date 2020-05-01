[mirai-core](../index.md) / [net.mamoe.mirai.message.data](index.md) / [Image](./-image.md)

# Image

`@JvmName("newImage") fun Image(imageId: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`OfflineImage`](-offline-image/index.md)

通过 [Image.imageId](-image/image-id.md) 构造一个 [Image](-image/index.md) 以便发送.
这个图片必须是服务器已经存在的图片.
图片 id 不一定会长时间保存, 因此不建议使用 id 发送图片.

请查看 `ExternalImageJvm` 获取更多创建 [Image](-image/index.md) 的方法

**See Also**

[Image](-image/index.md)

[Image.imageId](-image/image-id.md)

