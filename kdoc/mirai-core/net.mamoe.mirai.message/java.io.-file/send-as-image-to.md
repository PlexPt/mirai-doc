[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [java.io.File](index.md) / [sendAsImageTo](./send-as-image-to.md)

# sendAsImageTo

`suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`.sendAsImageTo(contact: C): `[`MessageReceipt`](../-message-receipt/index.md)`<C>`

在 [Dispatchers.IO](#) 中将文件作为图片发送到指定联系人

### Exceptions

`OverFileSizeMaxException` - 