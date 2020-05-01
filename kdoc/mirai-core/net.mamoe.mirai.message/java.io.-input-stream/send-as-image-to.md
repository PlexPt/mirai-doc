[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [java.io.InputStream](index.md) / [sendAsImageTo](./send-as-image-to.md)

# sendAsImageTo

`suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`.sendAsImageTo(contact: C): `[`MessageReceipt`](../-message-receipt/index.md)`<C>`

在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片发送到指定联系人

### Exceptions

`OverFileSizeMaxException` - 