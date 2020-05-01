[mirai-core](../../../index.md) / [net.mamoe.mirai.message.data](../../index.md) / [CustomMessage](../index.md) / [JsonSerializerFactory](./index.md)

# JsonSerializerFactory

`abstract class JsonSerializerFactory<M : `[`CustomMessage`](../index.md)`> : Factory<M>`

使用 [Json](#) 作为序列模式的 [Factory](../-factory/index.md)
推荐在调试时使用此工厂

### Constructors

| [&lt;init&gt;](-init-.md) | 使用 [Json](#) 作为序列模式的 [Factory](../-factory/index.md) 推荐在调试时使用此工厂`JsonSerializerFactory(typeName: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`)` |

### Properties

| [json](json.md) | `open val json: Json` |

### Functions

| [deserialize](deserialize.md) | 从 [input](../-factory/deserialize.md#net.mamoe.mirai.message.data.CustomMessage.Factory$deserialize(kotlin.ByteArray)/input) 读取此消息.`open fun deserialize(input: `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html)`): M` |
| [serialize](serialize.md) | 序列化此消息.`open fun serialize(message: M): `[`ByteArray`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html) |
| [serializer](serializer.md) | 得到 [M](index.md#M) 的 [KSerializer](#).`abstract fun serializer(): KSerializer<M>` |

