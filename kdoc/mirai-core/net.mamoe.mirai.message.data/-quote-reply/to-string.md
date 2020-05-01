[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [QuoteReply](index.md) / [toString](./to-string.md)

# toString

`fun toString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)

得到包含 mirai 消息元素代码的, 易读的字符串. 如 `At(member) + "test"` 将转为 `"[mirai:at:qqId]test"`

在使用消息相关 DSL 和扩展时, 一些内容比较的实现均使用的是 [contentToString](../-message/content-to-string.md) 而不是 [toString](../-message/to-string.md)

各个 [SingleMessage](../-single-message/index.md) 的转换示例:
[PlainText](../-plain-text/index.md): "Hello"
[GroupImage](../-group-image/index.md): "[mirai:image:{01E9451B-70ED-EAE3-B37C-101F1EEBF5B5}.mirai](#)"
[FriendImage](../-friend-image/index.md): "[mirai:image:/f8f1ab55-bf8e-4236-b55e-955848d7069f](mirai:image:/f8f1ab55-bf8e-4236-b55e-955848d7069f)"
[PokeMessage](../-poke-message/index.md): "[mirai:poke:1,-1](#)"
[MessageChain](../-message-chain/index.md): 无间隔地连接所有元素 (`joinToString("")`)

**See Also**

[contentToString](../-message/content-to-string.md)

