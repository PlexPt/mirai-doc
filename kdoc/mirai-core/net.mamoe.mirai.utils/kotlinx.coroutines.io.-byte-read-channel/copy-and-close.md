[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [kotlinx.coroutines.io.ByteReadChannel](index.md) / [copyAndClose](./copy-and-close.md)

# copyAndClose

`suspend fun ByteReadChannel.copyAndClose(dst: OutputStream): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)
`suspend fun ByteReadChannel.copyAndClose(dst: Output): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)
`suspend fun ByteReadChannel.copyAndClose(dst: ByteWriteChannel): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)
`suspend fun ByteReadChannel.copyAndClose(dst: ByteWriteChannel): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

从接收者管道读取所有数据并写入 [dst](copy-and-close.md#net.mamoe.mirai.utils$copyAndClose(kotlinx.coroutines.io.ByteReadChannel, java.io.OutputStream)/dst), 最终关闭 [dst](copy-and-close.md#net.mamoe.mirai.utils$copyAndClose(kotlinx.coroutines.io.ByteReadChannel, java.io.OutputStream)/dst)

