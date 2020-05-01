[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [UnsafeWeakRef](index.md) / [&lt;init&gt;](./-init-.md)

# &lt;init&gt;

`UnsafeWeakRef(weakRef: `[`WeakRef`](../-weak-ref/index.md)`<T>)`

WeakRef that `getValue` for delegation throws an [IllegalStateException](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html) if the referent is released by GC. Therefore it returns notnull value only

