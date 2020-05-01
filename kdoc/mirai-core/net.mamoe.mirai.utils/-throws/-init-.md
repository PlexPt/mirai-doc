[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [Throws](index.md) / [&lt;init&gt;](./-init-.md)

# &lt;init&gt;

`Throws(vararg exceptionClasses: `[`KClass`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html)`<out `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`>)`

This annotation indicates what exceptions should be declared by a function when compiled to a JVM method.

Example:

```
@Throws(IOException::class)
fun readFile(name: String): String {...}
```

will be translated to

```
String readFile(String name) throws IOException {...}
```

