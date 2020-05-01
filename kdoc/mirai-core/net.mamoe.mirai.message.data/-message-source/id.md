[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [MessageSource](index.md) / [id](./id.md)

# id

`abstract val id: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)

消息 id (序列号).

#### 值域

值的范围约为 [UShort](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-u-short/index.html) 的范围.

#### 顺序

群消息的 id 由服务器维护. 好友消息的 id 由 mirai 维护.

* 在同一个群的消息中此值随每条消息递增 1.
* 在好友消息中无法保证每次都递增 1. 也可能会产生大幅跳过的情况.
