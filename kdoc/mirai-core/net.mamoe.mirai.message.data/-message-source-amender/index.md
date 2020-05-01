[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [MessageSourceAmender](./index.md)

# MessageSourceAmender

`@SinceMirai("0.39.0") interface MessageSourceAmender`

仅于 [copyAmend](../copy-amend.md) 中修改 [MessageSource](../-message-source/index.md)

### Properties

| [fromUin](from-uin.md) | `abstract var fromUin: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [id](id.md) | `abstract var id: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [internalId](internal-id.md) | `abstract var internalId: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |
| [kind](kind.md) | `abstract var kind: Kind` |
| [originalMessage](original-message.md) | `abstract var originalMessage: `[`MessageChain`](../-message-chain/index.md) |
| [targetUin](target-uin.md) | `abstract var targetUin: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html) |
| [time](time.md) | `abstract var time: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

### Functions

| [metadataFrom](metadata-from.md) | 从另一个 [MessageSource](../-message-source/index.md) 中复制 [id](id.md), [internalId](internal-id.md), [time](time.md)`open fun metadataFrom(another: `[`MessageSource`](../-message-source/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

