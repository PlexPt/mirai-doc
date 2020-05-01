[mirai-core](../../../index.md) / [net.mamoe.mirai.message.data](../../index.md) / [ForwardMessage](../index.md) / [DisplayStrategy](./index.md)

# DisplayStrategy

`abstract class DisplayStrategy`

**See Also**

[ForwardMessage](../index.md)

### Types

| [Default](-default/index.md) | `companion object Default : DisplayStrategy` |

### Constructors

| [&lt;init&gt;](-init-.md) | `DisplayStrategy()` |

### Functions

| [generateBrief](generate-brief.md) | 显示在消息列表中的预览.`open fun generateBrief(forward: `[`ForwardMessage`](../index.md)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [generatePreview](generate-preview.md) | 显示在卡片 body 中, 只会显示 sequence 前四个元素. Java 用户: 使用 [sequenceOf](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/sequence-of.html) (`SequenceKt.sequenceOf`) 或 [asSequence](../../../net.mamoe.mirai.contact/as-sequence.md) (`SequenceKt.asSequence`)`open fun generatePreview(forward: `[`ForwardMessage`](../index.md)`): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`>` |
| [generateSource](generate-source.md) | 目前未发现在哪能显示`open fun generateSource(forward: `[`ForwardMessage`](../index.md)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [generateSummary](generate-summary.md) | 显示在卡片底部`open fun generateSummary(forward: `[`ForwardMessage`](../index.md)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [generateTitle](generate-title.md) | 修改后卡片标题会变为 "转发的聊天记录", 而此函数的返回值会显示在 preview 前`open fun generateTitle(forward: `[`ForwardMessage`](../index.md)`): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Companion Object Functions

| [invoke](invoke.md) | `operator fun invoke(generateTitle: (forward: `[`ForwardMessage`](../index.md)`) -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = Default::generateTitle, generateBrief: (forward: `[`ForwardMessage`](../index.md)`) -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = Default::generateBrief, generateSource: (forward: `[`ForwardMessage`](../index.md)`) -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = Default::generateSource, generatePreview: (forward: `[`ForwardMessage`](../index.md)`) -> `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<`[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`> = Default::generatePreview, generateSummary: (forward: `[`ForwardMessage`](../index.md)`) -> `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)` = Default::generateSummary): DisplayStrategy` |

