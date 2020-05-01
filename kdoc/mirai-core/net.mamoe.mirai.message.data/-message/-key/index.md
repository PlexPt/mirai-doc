[mirai-core](../../../index.md) / [net.mamoe.mirai.message.data](../../index.md) / [Message](../index.md) / [Key](./index.md)

# Key

`interface Key<out M : `[`Message`](../index.md)`>`

类型 Key. 由伴生对象实现, 表示一个 [Message](../index.md) 对象的类型.

除 [MessageChain](../../-message-chain/index.md) 外, 每个 [Message](../index.md) 类型都拥有一个`伴生对象`(companion object) 来持有一个 Key
在 [MessageChain.get](../../-message-chain/get.md) 时将会使用到这个 Key 进行判断类型.

#### 用例

[MessageChain.get](../../-message-chain/get.md): 允许使用数组访问操作符获取指定类型的消息元素 `val image: Image = chain[Image]`

@param M 指代持有这个 Key 的消息类型

### Properties

| [typeName](type-name.md) | 此 [Key](./index.md) 指代的 [Message](../index.md) 类型名. 一般为 `class.simpleName`, 如 "QuoteReply", "PlainText"`abstract val typeName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

