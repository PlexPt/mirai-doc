[mirai-core](../index.md) / [net.mamoe.mirai.message.data](index.md) / [isContentEmpty](./is-content-empty.md)

# isContentEmpty

`@SinceMirai("0.39.3") fun `[`Message`](-message/index.md)`.isContentEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

判断消息内容是否为空.

以下情况视为 "空消息":

* 是 [MessageMetadata](-message-metadata.md) (因为 [MessageMetadata.contentToString](#) 都必须返回空字符串)
* [PlainText](-plain-text/index.md) 长度为 0
* [MessageChain](-message-chain/index.md) 所有元素都满足 [isContentEmpty](./is-content-empty.md)
