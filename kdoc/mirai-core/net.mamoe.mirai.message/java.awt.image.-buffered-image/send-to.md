[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [java.awt.image.BufferedImage](index.md) / [sendTo](./send-to.md)

# sendTo

`suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`.sendTo(contact: C): `[`MessageReceipt`](../-message-receipt/index.md)`<C>`

在 [Dispatchers.IO](#) 中将图片发送到指定联系人. 不会创建临时文件

### Exceptions

`OverFileSizeMaxException` - 