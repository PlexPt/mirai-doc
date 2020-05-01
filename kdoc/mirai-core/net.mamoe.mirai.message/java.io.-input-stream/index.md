[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [java.io.InputStream](./index.md)

### Extensions for java.io.InputStream

| [sendAsImageTo](send-as-image-to.md) | 在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`.sendAsImageTo(contact: C): `[`MessageReceipt`](../-message-receipt/index.md)`<C>` |
| [uploadAsImage](upload-as-image.md) | 在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片上传后构造 [Image](../../net.mamoe.mirai.message.data/-image/index.md)`suspend fun `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`.uploadAsImage(contact: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md) |

