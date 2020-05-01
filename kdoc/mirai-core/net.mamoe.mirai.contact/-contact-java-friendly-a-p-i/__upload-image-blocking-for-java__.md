[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [ContactJavaFriendlyAPI](index.md) / [__uploadImageBlockingForJava__](./__upload-image-blocking-for-java__.md)

# __uploadImageBlockingForJava__

`@JvmName("uploadImage") open fun __uploadImageBlockingForJava__(image: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`): `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)

上传一个图片以备发送.

### Exceptions

`EventCancelledException` - 当发送消息事件被取消

`OverFileSizeMaxException` - 当图片文件过大而被服务器拒绝上传时. (最大大小约为 20 MB)

**See Also**

[BeforeImageUploadEvent](../../net.mamoe.mirai.event.events/-before-image-upload-event/index.md)

[ImageUploadEvent](../../net.mamoe.mirai.event.events/-image-upload-event/index.md)

`@JvmName("uploadImage") open fun __uploadImageBlockingForJava__(image: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)

在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片上传, 但不发送

### Exceptions

`OverFileSizeMaxException` - `@JvmName("uploadImage") open fun __uploadImageBlockingForJava__(image: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)

在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片上传, 但不发送

### Exceptions

`OverFileSizeMaxException` - `@JvmName("uploadImage") open fun __uploadImageBlockingForJava__(image: Input): `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)

在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片上传, 但不发送

### Exceptions

`OverFileSizeMaxException` - `@JvmName("uploadImage") open fun __uploadImageBlockingForJava__(image: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)

在 [Dispatchers.IO](#) 中将文件作为图片上传, 但不发送

### Exceptions

`OverFileSizeMaxException` - `@JvmName("uploadImage") open fun __uploadImageBlockingForJava__(image: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)

在 [Dispatchers.IO](#) 中将图片上传, 但不发送. 不会保存临时文件

### Exceptions

`OverFileSizeMaxException` - 