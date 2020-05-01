[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [FlashImage](index.md) / [contentToString](./content-to-string.md)

# contentToString

`open fun contentToString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

转为最接近官方格式的字符串. 如 `At(member) + "test"` 将转为 `"@群名片 test"`.

在使用消息相关 DSL 和扩展时, 一些内容比较的实现均使用 [contentToString](../-message/content-to-string.md) 而不是 [toString](../-message/to-string.md)

各个 [SingleMessage](../-single-message/index.md) 的转换示例:
[PlainText](../-plain-text/index.md): "Hello"
[Image](../-image/index.md): "\[图片\]"
[PokeMessage](../-poke-message/index.md): "\[戳一戳\]"
[MessageChain](../-message-chain/index.md): 无间隔地连接所有元素 (`joinToString("", transformer=Message::contentToString)`)

**See Also**

[toString](../-message/to-string.md)

