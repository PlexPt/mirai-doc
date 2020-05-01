[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [java.net.URL](index.md) / [sendAsImageTo](./send-as-image-to.md)

# sendAsImageTo

`suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`.sendAsImageTo(contact: C): `[`MessageReceipt`](../-message-receipt/index.md)`<C>`

在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片发送到指定联系人

### Exceptions

`OverFileSizeMaxException` - 