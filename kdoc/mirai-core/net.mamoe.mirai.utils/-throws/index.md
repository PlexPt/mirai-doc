[mirai-core](../../index.md) / [net.mamoe.mirai.utils](../index.md) / [Throws](./index.md)

# Throws

`@Target([AnnotationTarget.FUNCTION, AnnotationTarget.PROPERTY_GETTER, AnnotationTarget.PROPERTY_SETTER, AnnotationTarget.CONSTRUCTOR]) annotation class Throws`

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

### Constructors

| [&lt;init&gt;](-init-.md) | This annotation indicates what exceptions should be declared by a function when compiled to a JVM method.`Throws(vararg exceptionClasses: `[`KClass`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html)`<out `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`>)` |

### Properties

| [exceptionClasses](exception-classes.md) | the list of checked exception classes that may be thrown by the function.`vararg val exceptionClasses: `[`Array`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)`<out `[`KClass`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html)`<out `[`Throwable`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html)`>>` |

