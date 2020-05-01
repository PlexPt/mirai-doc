[mirai-core](../../../index.md) / [net.mamoe.mirai.message.data](../../index.md) / [CustomMessage](../index.md) / [Factory](./index.md)

# Factory

`abstract class Factory<M : `[`CustomMessage`](../index.md)`> : Key<M>`

序列化和反序列化此消息的工厂, 将会自动注册.
应实现为 `object`.

**See Also**

[JsonSerializerFactory](../-json-serializer-factory/index.md)

[ProtoBufSerializerFactory](../-proto-buf-serializer-factory/index.md)

### Constructors

| [&lt;init&gt;](-init-.md) | 序列化和反序列化此消息的工厂, 将会自动注册. 应实现为 `object`.`Factory(typeName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`)` |

### Properties

| [typeName](type-name.md) | 此类型消息的名称. 在发往服务器时使用此名称. 应确保唯一且不变.`val typeName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Functions

| [deserialize](deserialize.md) | 从 [input](deserialize.md#net.mamoe.mirai.message.data.CustomMessage.Factory$deserialize(kotlin.ByteArray)/input) 读取此消息.`abstract fun deserialize(input: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`): M` |
| [serialize](serialize.md) | 序列化此消息.`abstract fun serialize(message: M): `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |

