[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [java.net.URL](./index.md)

### Extensions for java.net.URL

| [sendAsImageTo](send-as-image-to.md) | 在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片发送到指定联系人`suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`.sendAsImageTo(contact: C): `[`MessageReceipt`](../-message-receipt/index.md)`<C>` |
| [uploadAsImage](upload-as-image.md) | 在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片上传后构造 [Image](../../net.mamoe.mirai.message.data/-image/index.md)`suspend fun `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`.uploadAsImage(contact: `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`): `[`OfflineImage`](../../net.mamoe.mirai.message.data/-offline-image/index.md) |

