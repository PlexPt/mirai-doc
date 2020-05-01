[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [User](index.md) / [uploadImage](./upload-image.md)

# uploadImage

`abstract suspend fun uploadImage(image: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`): `[`OfflineFriendImage`](../../net.mamoe.mirai.message.data/-offline-friend-image/index.md)

上传一个图片以备发送.

### Exceptions

`EventCancelledException` - 当发送消息事件被取消

`OverFileSizeMaxException` - 当图片文件过大而被服务器拒绝上传时. (最大大小约为 20 MB)

**See Also**

[BeforeImageUploadEvent](../../net.mamoe.mirai.event.events/-before-image-upload-event/index.md)

[ImageUploadEvent](../../net.mamoe.mirai.event.events/-image-upload-event/index.md)

