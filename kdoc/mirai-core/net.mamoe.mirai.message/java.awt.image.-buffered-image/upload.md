[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [java.awt.image.BufferedImage](index.md) / [upload](./upload.md)

# upload

`suspend fun `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`.upload(contact: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md)

在 [Dispatchers.IO](#) 中将图片上传后构造 [Image](../../net.mamoe.mirai.message.data/-image/index.md). 不会创建临时文件

### Exceptions

`OverFileSizeMaxException` - 