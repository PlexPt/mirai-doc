[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [ContactJavaFriendlyAPI](index.md) / [__uploadImageAsyncForJava__](./__upload-image-async-for-java__.md)

# __uploadImageAsyncForJava__

`@JvmName("uploadImageAsync") open fun __uploadImageAsyncForJava__(image: `[`ExternalImage`](../../net.mamoe.mirai.utils/-external-image/index.md)`): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`>`

上传一个图片以备发送.

**See Also**

[BeforeImageUploadEvent](../../net.mamoe.mirai.event.events/-before-image-upload-event/index.md)

[ImageUploadEvent](../../net.mamoe.mirai.event.events/-image-upload-event/index.md)

`@JvmName("uploadImageAsync") open fun __uploadImageAsyncForJava__(image: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`>`

在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片上传, 但不发送

`@JvmName("uploadImageAsync") open fun __uploadImageAsyncForJava__(image: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`>`

在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片上传, 但不发送

`@JvmName("uploadImageAsync") open fun __uploadImageAsyncForJava__(image: Input): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`>`

在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片上传, 但不发送

`@JvmName("uploadImageAsync") open fun __uploadImageAsyncForJava__(image: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`>`

在 [Dispatchers.IO](#) 中将文件作为图片上传, 但不发送

`@JvmName("uploadImageAsync") open fun __uploadImageAsyncForJava__(image: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`Future`](https://docs.oracle.com/javase/6/docs/api/java/util/concurrent/Future.html)`<`[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`>`

在 [Dispatchers.IO](#) 中将图片上传, 但不发送. 不会保存临时文件

