[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [LockFreeLinkedListNode](./index.md)

# LockFreeLinkedListNode

`open class LockFreeLinkedListNode<E>`

### Constructors

| [&lt;init&gt;](-init-.md) | `LockFreeLinkedListNode(nextNode: `[`LockFreeLinkedListNode`](./index.md)`<E>?, initialNodeValue: E?)` |

### Properties

| [nodeValue](node-value.md) | `open val nodeValue: E` |

### Functions

| [allMatching](all-matching.md) | Check if all the node which is not [Tail](#) matches the [condition](all-matching.md#net.mamoe.mirai.utils.LockFreeLinkedListNode$allMatching(kotlin.Function1((net.mamoe.mirai.utils.LockFreeLinkedListNode((net.mamoe.mirai.utils.LockFreeLinkedListNode.E)), kotlin.Boolean)))/condition)`fun allMatching(condition: (`[`LockFreeLinkedListNode`](./index.md)`<E>) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [iterateBeforeFirst](iterate-before-first.md) | Returns the former node of the last node whence [filter](iterate-before-first.md#net.mamoe.mirai.utils.LockFreeLinkedListNode$iterateBeforeFirst(kotlin.Function1((net.mamoe.mirai.utils.LockFreeLinkedListNode((net.mamoe.mirai.utils.LockFreeLinkedListNode.E)), kotlin.Boolean)))/filter) returns true`fun iterateBeforeFirst(filter: (`[`LockFreeLinkedListNode`](./index.md)`<E>) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`): `[`LockFreeLinkedListNode`](./index.md)`<E>` |
| [letValueIfValid](let-value-if-valid.md) | `fun <R> letValueIfValid(block: (E) -> R): R?` |
| [toString](to-string.md) | `open fun toString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Functions

| [isRemoved](../is-removed.md) | `fun <E> `[`LockFreeLinkedListNode`](./index.md)`<E>.isRemoved(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |

