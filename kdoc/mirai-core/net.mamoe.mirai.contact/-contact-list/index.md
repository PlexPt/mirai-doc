[mirai-core](../../index.md) / [net.mamoe.mirai.contact](../index.md) / [ContactList](./index.md)

# ContactList

`class ContactList<C : `[`Contact`](../-contact/index.md)`> : `[`Iterable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html)`<C>`

只读联系人列表, 无锁链表实现

**See Also**

[ContactList.asSequence](../as-sequence.md)

### Constructors

| [&lt;init&gt;](-init-.md) | 只读联系人列表, 无锁链表实现`ContactList(delegate: `[`LockFreeLinkedList`](../../net.mamoe.mirai.utils/-lock-free-linked-list/index.md)`<C>)` |

### Properties

| [_idContentString](_id-content-string.md) | `val ~~_idContentString~~: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [delegate](delegate.md) | `val delegate: `[`LockFreeLinkedList`](../../net.mamoe.mirai.utils/-lock-free-linked-list/index.md)`<C>` |
| [size](size.md) | `val size: `[`Int`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html) |

### Functions

| [contains](contains.md) | `operator fun contains(element: C): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>`operator fun contains(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [containsAll](contains-all.md) | `fun containsAll(elements: `[`Collection`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-collection/index.html)`<C>): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [first](first.md) | `fun ~~first~~(): C` |
| [firstOrNull](first-or-null.md) | `fun ~~firstOrNull~~(): C?` |
| [forEach](for-each.md) | `fun ~~forEach~~(block: (C) -> `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [get](get.md) | `operator fun get(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): C` |
| [getOrNull](get-or-null.md) | `fun getOrNull(id: `[`Long`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)`): C?` |
| [isEmpty](is-empty.md) | `fun isEmpty(): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html) |
| [iterator](iterator.md) | `fun iterator(): `[`Iterator`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterator/index.html)`<C>` |
| [toString](to-string.md) | `fun toString(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Properties

| [idContentString](../id-content-string.md) | ID 列表的字符串表示. 如:`val `[`ContactList`](./index.md)`<*>.idContentString: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

### Extension Functions

| [asSequence](../as-sequence.md) | `fun <E : `[`Contact`](../-contact/index.md)`> `[`ContactList`](./index.md)`<E>.~~asSequence~~(): `[`Sequence`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/-sequence/index.html)`<E>` |
| [toList](../to-list.md) | `fun <E : `[`Contact`](../-contact/index.md)`> `[`ContactList`](./index.md)`<E>.~~toList~~(): `[`List`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html)`<E>` |
| [toMutableList](../to-mutable-list.md) | `fun <E : `[`Contact`](../-contact/index.md)`> `[`ContactList`](./index.md)`<E>.~~toMutableList~~(): `[`MutableList`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html)`<E>` |
| [toMutableSet](../to-mutable-set.md) | `fun <E : `[`Contact`](../-contact/index.md)`> `[`ContactList`](./index.md)`<E>.~~toMutableSet~~(): `[`MutableSet`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html)`<E>` |
| [toSet](../to-set.md) | `fun <E : `[`Contact`](../-contact/index.md)`> `[`ContactList`](./index.md)`<E>.~~toSet~~(): `[`Set`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html)`<E>` |

