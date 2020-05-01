[mirai-core](../../index.md) / [net.mamoe.mirai.message.data](../index.md) / [MessageChainBuilder](./index.md)

# MessageChainBuilder

`open class MessageChainBuilder : `[`MutableList`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>, `[`Appendable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-appendable/index.html)

[MessageChain](../-message-chain/index.md) 构建器.
多个连续的 [String](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) 会被连接为单个 [PlainText](../-plain-text/index.md) 以优化性能.

**注意:** 无并发安全性.

**See Also**

[buildMessageChain](../build-message-chain.md)

[asMessageChain](as-message-chain.md)

### Constructors

| [&lt;init&gt;](-init-.md) | `MessageChainBuilder()`<br>`MessageChainBuilder(initialSize: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`)` |

### Functions

| [add](add.md) | `fun add(element: `[`SingleMessage`](../-single-message/index.md)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>`fun add(element: `[`Message`](../-message/index.md)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>`fun add(plain: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [addAll](add-all.md) | `fun addAll(elements: `[`Collection`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>`fun addAll(elements: `[`Iterable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>`fun addAll(elements: `[`Iterable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)`<`[`Message`](../-message/index.md)`>): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [append](append.md) | `fun append(value: `[`Char`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char/index.html)`): `[`MessageChainBuilder`](./index.md)<br>`fun append(value: `[`CharSequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html)`?): `[`MessageChainBuilder`](./index.md)<br>`fun append(value: `[`CharSequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html)`?, startIndex: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`, endIndex: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`MessageChainBuilder`](./index.md)<br>`fun append(message: `[`Message`](../-message/index.md)`): `[`MessageChainBuilder`](./index.md)<br>`fun append(message: `[`SingleMessage`](../-single-message/index.md)`): `[`MessageChainBuilder`](./index.md) |
| [asMessageChain](as-message-chain.md) | `fun asMessageChain(): `[`MessageChain`](../-message-chain/index.md) |
| [build](build.md) | 同 [asMessageChain](as-message-chain.md)`fun build(): `[`MessageChain`](../-message-chain/index.md) |
| [clear](clear.md) | `fun clear(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [copy](copy.md) | 将所有已有元素引用复制到一个新的 [MessageChainBuilder](./index.md)`fun copy(): `[`MessageChainBuilder`](./index.md) |
| [plusAssign](plus-assign.md) | `operator fun plusAssign(plain: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`operator fun plusAssign(message: `[`Message`](../-message/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`operator fun plusAssign(message: `[`SingleMessage`](../-single-message/index.md)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`operator fun plusAssign(charSequence: `[`CharSequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [remove](remove.md) | `fun remove(element: `[`SingleMessage`](../-single-message/index.md)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [removeAll](remove-all.md) | `fun removeAll(elements: `[`Collection`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/index.html)`<`[`SingleMessage`](../-single-message/index.md)`>): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [removeAt](remove-at.md) | `fun removeAt(index: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`): `[`SingleMessage`](../-single-message/index.md) |
| [set](set.md) | `fun set(index: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)`, element: `[`SingleMessage`](../-single-message/index.md)`): `[`SingleMessage`](../-single-message/index.md) |
| [unaryPlus](unary-plus.md) | `operator fun `[`Message`](../-message/index.md)`.unaryPlus(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`operator fun `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html)`.unaryPlus(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

