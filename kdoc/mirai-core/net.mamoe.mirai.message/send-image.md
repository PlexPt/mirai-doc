[mirai-core](../index.md) / [net.mamoe.mirai.message](index.md) / [sendImage](./send-image.md)

# sendImage

`suspend fun <C : `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`> C.sendImage(bufferedImage: `[`BufferedImage`](https://docs.oracle.com/javase/6/docs/api/java/awt/image/BufferedImage.html)`): `[`MessageReceipt`](-message-receipt/index.md)`<C>`

在 [Dispatchers.IO](#) 中将图片发送到指定联系人. 不会保存临时文件

### Exceptions

`OverFileSizeMaxException` - `suspend fun <C : `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`> C.sendImage(imageUrl: `[`URL`](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html)`): `[`MessageReceipt`](-message-receipt/index.md)`<C>`

在 [Dispatchers.IO](#) 中下载 [URL](https://docs.oracle.com/javase/6/docs/api/java/net/URL.html) 到临时文件并将其作为图片发送到指定联系人

### Exceptions

`OverFileSizeMaxException` - `suspend fun <C : `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`> C.sendImage(imageInput: Input): `[`MessageReceipt`](-message-receipt/index.md)`<C>`

在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片发送到指定联系人

### Exceptions

`OverFileSizeMaxException` - `suspend fun <C : `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`> C.sendImage(imageStream: `[`InputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html)`): `[`MessageReceipt`](-message-receipt/index.md)`<C>`

在 [Dispatchers.IO](#) 中读取 [InputStream](https://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html) 到临时文件并将其作为图片发送到指定联系人

### Exceptions

`OverFileSizeMaxException` - `suspend fun <C : `[`Contact`](../net.mamoe.mirai.contact/-contact/index.md)`> C.sendImage(file: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`MessageReceipt`](-message-receipt/index.md)`<C>`

在 [Dispatchers.IO](#) 中将文件作为图片发送到指定联系人

### Exceptions

`OverFileSizeMaxException` - 