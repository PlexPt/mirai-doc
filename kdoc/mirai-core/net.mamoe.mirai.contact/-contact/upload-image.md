[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [Contact](index.md) / [uploadImage](./upload-image.md)

# uploadImage

`abstract suspend fun uploadImage(image: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)

上传一个图片以备发送.

### Exceptions

`EventCancelledException` - 当发送消息事件被取消时抛出

`OverFileSizeMaxException` - 当图片文件过大而被服务器拒绝上传时抛出. (最大大小约为 20 MB, 但 mirai 限制的大小为 30 MB)

**See Also**

[Image](../../net.mamoe.mirai.message.data/-image/index.md)

[BeforeImageUploadEvent](../../net.mamoe.mirai.event.events/-before-image-upload-event/index.md)

[ImageUploadEvent](../../net.mamoe.mirai.event.events/-image-upload-event/index.md)

