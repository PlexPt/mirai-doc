[mirai-core](../index.md) / [net.mamoe.mirai.utils](index.md) / [unsafeWeakRef](./unsafe-weak-ref.md)

# unsafeWeakRef

`fun <T> T.unsafeWeakRef(): `[`UnsafeWeakRef`](-unsafe-weak-ref/index.md)`<T>`

Provides a weak reference to [this](unsafe-weak-ref/-this-.md).
The `getValue` for delegation throws an [IllegalStateException](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html) if the referent is released by GC. Therefore it returns notnull value only

**UNSTABLE API**: It is strongly suggested not to use this api

