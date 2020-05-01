[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [LockFreeLinkedListNode](index.md) / [allMatching](./all-matching.md)

# allMatching

`inline fun allMatching(condition: (`[`LockFreeLinkedListNode`](index.md)`<E>) -> `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)`): `[`Boolean`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Check if all the node which is not [Tail](#) matches the [condition](all-matching.md#net.mamoe.mirai.utils.LockFreeLinkedListNode$allMatching(kotlin.Function1((net.mamoe.mirai.utils.LockFreeLinkedListNode((net.mamoe.mirai.utils.LockFreeLinkedListNode.E)), kotlin.Boolean)))/condition)

Head, which is this, is also being tested.
[Tail](#), is not being tested.

