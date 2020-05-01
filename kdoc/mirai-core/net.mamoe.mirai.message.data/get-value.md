[mirai-core](../index.md) / [net.mamoe.mirai.message.data](index.md) / [getValue](./get-value.md)

# getValue

`operator fun <reified T : `[`Message`](-message/index.md)`> `[`MessageChain`](-message-chain/index.md)`.getValue(thisRef: `[`Any`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)`?, property: `[`KProperty`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-property/index.html)`<*>): T`

提供一个类型的值的委托. 若不存在则会抛出异常 [NoSuchElementException](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-no-such-element-exception/index.html)

用法:

```
val message: MessageChain

val at: At by message
val image: Image by message
```

