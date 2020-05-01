[mirai-core](../index.md) / [net.mamoe.mirai.message](index.md) / [uploadImage](./upload-image.md)

# uploadImage

`suspend fun `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`.uploadImage(bufferedImage: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`OfflineImage`](../net.mamoe.mirai.message.data/-offline-image/index.md)

在 [Dispatchers.IO](#) 中将图片上传, 但不发送. 不会保存临时文件

### Exceptions

`OverFileSizeMaxException` - `suspend fun `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`.uploadImage(imageUrl: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`OfflineImage`](../net.mamoe.mirai.message.data/-offline-image/index.md)

在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片上传, 但不发送

### Exceptions

`OverFileSizeMaxException` - `suspend fun `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`.uploadImage(imageInput: Input): `[`OfflineImage`](../net.mamoe.mirai.message.data/-offline-image/index.md)

在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片上传, 但不发送

### Exceptions

`OverFileSizeMaxException` - `suspend fun `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`.uploadImage(imageStream: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`OfflineImage`](../net.mamoe.mirai.message.data/-offline-image/index.md)

在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片上传, 但不发送

### Exceptions

`OverFileSizeMaxException` - `suspend fun `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`.uploadImage(file: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`OfflineImage`](../net.mamoe.mirai.message.data/-offline-image/index.md)

在 [Dispatchers.IO](#) 中将文件作为图片上传, 但不发送

### Exceptions

`OverFileSizeMaxException` - 