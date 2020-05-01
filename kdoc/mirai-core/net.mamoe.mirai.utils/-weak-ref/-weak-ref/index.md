[mirai-core](../../../index.md) / [net.mamoe.mirai.utils](../../index.md) / [WeakRef](../index.md) / [WeakRef](./index.md)

# WeakRef

`class WeakRef<T>`

Weak Reference.
On JVM, it is implemented as a typealias referring to `WeakReference` from JDK.

Details:
On JVM, instances of objects are stored in the JVM Heap and are accessed via references.
GC(garbage collection) can automatically collect and release the memory used by objects that are not directly referred by any other.
[WeakRef](../index.md) is not a direct reference, therefore it doesn't hinder GC.

**See Also**

[weakRef](../../weak-ref.md)

[unsafeWeakRef](../../unsafe-weak-ref.md)

### Constructors

| [&lt;init&gt;](-init-.md) | Weak Reference. On JVM, it is implemented as a typealias referring to `WeakReference` from JDK.`WeakRef(referent: T)` |

### Functions

| [clear](clear.md) | `fun clear(): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [get](get.md) | `fun get(): T?` |

