[mirai-core](../../index.md) / [net.mamoe.mirai.message](../index.md) / [MessagePacket](index.md) / [downloadTo](./download-to.md)

# downloadTo

`suspend fun `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`.downloadTo(file: `[`File`](https://docs.oracle.com/javase/6/docs/api/java/io/File.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`suspend fun `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`.downloadTo(output: `[`OutputStream`](https://docs.oracle.com/javase/6/docs/api/java/io/OutputStream.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)
`suspend fun `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`.downloadTo(output: Output): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)
`suspend fun `[`Image`](../../net.mamoe.mirai.message.data/-image/index.md)`.downloadTo(output: ByteWriteChannel): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

下载图片到 [output](download-to.md#net.mamoe.mirai.message.MessagePacket$downloadTo(net.mamoe.mirai.message.data.Image, java.io.OutputStream)/output) 但不关闭这个 [output](download-to.md#net.mamoe.mirai.message.MessagePacket$downloadTo(net.mamoe.mirai.message.data.Image, java.io.OutputStream)/output)

