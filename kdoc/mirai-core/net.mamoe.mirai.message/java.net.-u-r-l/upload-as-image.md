[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [java.net.URL](index.md) / [uploadAsImage](./upload-as-image.md)

# uploadAsImage

`suspend fun `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`.uploadAsImage(contact: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)

在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片上传后构造 [Image](../../net.mamoe.mirai.message.data/-image/index.md)

### Exceptions

`OverFileSizeMaxException` - 