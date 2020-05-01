[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [kotlinx.coroutines.io.ByteReadChannel](index.md) / [copyTo](./copy-to.md)

# copyTo

`suspend fun ByteReadChannel.copyTo(dst: OutputStream): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)
`suspend fun ByteReadChannel.copyTo(dst: Output): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)
`suspend fun ByteReadChannel.copyTo(dst: ByteWriteChannel): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

从接收者管道读取所有数据并写入 [dst](copy-to.md#net.mamoe.mirai.utils$copyTo(kotlinx.coroutines.io.ByteReadChannel, java.io.OutputStream)/dst). 不会关闭 [dst](copy-to.md#net.mamoe.mirai.utils$copyTo(kotlinx.coroutines.io.ByteReadChannel, java.io.OutputStream)/dst)

