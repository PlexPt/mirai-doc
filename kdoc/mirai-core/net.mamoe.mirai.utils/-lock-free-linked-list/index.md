[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [LockFreeLinkedList](./index.md)

# LockFreeLinkedList

`@PlannedRemoval("1.0.0") open class LockFreeLinkedList<E>`

Implementation of lock-free LinkedList.

Modifying can be performed concurrently.
Iterating concurrency is guaranteed.

### Constructors

| [&lt;init&gt;](-init-.md) | Implementation of lock-free LinkedList.`LockFreeLinkedList()` |

### Properties

| [size](size.md) | 动态计算的大小`val size: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

### Functions

| [addAll](add-all.md) | 先把元素建立好链表, 再加入到 list.`open fun addAll(iterable: `[`Iterable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)`<E>): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)<br>`open fun addAll(iterable: `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<E>): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [addLast](add-last.md) | `open fun addLast(element: E): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [clear](clear.md) | `open fun clear(onEach: ((E) -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`)? = null): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [contains](contains.md) | `open operator fun contains(element: E): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [containsAll](contains-all.md) | `open fun containsAll(elements: `[`Collection`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/index.html)`<E>): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [filteringGetOrAdd](filtering-get-or-add.md) | 过滤并获取, 获取不到则添加一个元素.`fun filteringGetOrAdd(filter: (E) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`, supplier: () -> E): E` |
| [forEach](for-each.md) | `fun forEach(block: (E) -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [forEachNode](for-each-node.md) | `fun forEachNode(block: (`[`LockFreeLinkedListNode`](../-lock-free-linked-list-node/index.md)`<E>) -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [isEmpty](is-empty.md) | `open fun isEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [peekFirst](peek-first.md) | `open fun peekFirst(): E` |
| [plusAssign](plus-assign.md) | `open operator fun plusAssign(element: E): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [remove](remove.md) | `open fun remove(element: E): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [removeAll](remove-all.md) | `open fun removeAll(elements: `[`Collection`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/index.html)`<E>): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [removeFirst](remove-first.md) | `open fun removeFirst(): E` |
| [removeIf](remove-if.md) | `fun removeIf(filter: (E) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [removeLast](remove-last.md) | `open fun removeLast(): E` |
| [toString](to-string.md) | `open fun toString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Functions

| [asSequence](../as-sequence.md) | Builds a [Sequence](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html) containing all the elements in [this](../as-sequence/-this-.md) in the same order.`fun <E> `[`LockFreeLinkedList`](./index.md)`<E>.asSequence(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<E>` |
| [filteringGetOrNull](../../net.mamoe.mirai.contact/filtering-get-or-null.md) | `fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`LockFreeLinkedList`](./index.md)`<C>.~~filteringGetOrNull~~(filter: (C) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`): C?` |
| [firstOrNull](../../net.mamoe.mirai.contact/first-or-null.md) | `fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`LockFreeLinkedList`](./index.md)`<C>.~~firstOrNull~~(filter: (C) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`): C?` |
| [get](../../net.mamoe.mirai.contact/get.md) | `operator fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`LockFreeLinkedList`](./index.md)`<C>.get(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): C` |
| [getOrNull](../../net.mamoe.mirai.contact/get-or-null.md) | `fun <C : `[`Contact`](../../net.mamoe.mirai.contact/-contact/index.md)`> `[`LockFreeLinkedList`](./index.md)`<C>.getOrNull(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): C?` |
| [iterator](../iterator.md) | `operator fun <E> `[`LockFreeLinkedList`](./index.md)`<E>.iterator(): `[`Iterator`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterator/index.html)`<E>` |
| [toList](../to-list.md) | Collect all the elements into a [MutableList](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html) then cast it as a [List](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)`fun <E> `[`LockFreeLinkedList`](./index.md)`<E>.toList(): `[`List`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)`<E>` |
| [toMutableList](../to-mutable-list.md) | Collect all the elements into a [MutableList](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html).`fun <E> `[`LockFreeLinkedList`](./index.md)`<E>.toMutableList(): `[`MutableList`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html)`<E>` |
| [toMutableSet](../to-mutable-set.md) | Collect all the elements into a [MutableSet](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html).`fun <E> `[`LockFreeLinkedList`](./index.md)`<E>.toMutableSet(): `[`MutableSet`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html)`<E>` |
| [toSet](../to-set.md) | Collect all the elements into a [MutableSet](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html) then cast it as a [Set](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html)`fun <E> `[`LockFreeLinkedList`](./index.md)`<E>.toSet(): `[`Set`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html)`<E>` |

