[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [kotlinx.io.core.Input](index.md) / [sendAsImageTo](./send-as-image-to.md)

# sendAsImageTo

`suspend fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> Input.sendAsImageTo(contact: C): `[`MessageReceipt`](../-message-receipt/index.md)`<C>`

在 [Dispatchers.IO](#) 中读取 [Input](#) 到临时文件并将其作为图片发送到指定联系人

### Exceptions

`OverFileSizeMaxException` - 