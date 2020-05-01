[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [java.io.File](index.md) / [uploadAsImage](./upload-as-image.md)

# uploadAsImage

`suspend fun `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`.uploadAsImage(contact: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)

在 [Dispatchers.IO](#) 中将文件作为图片上传后构造 [Image](../../net.mamoe.mirai.message.data/-image/index.md)

### Exceptions

`OverFileSizeMaxException` - 