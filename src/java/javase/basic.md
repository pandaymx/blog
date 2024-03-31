--- 
title: 简介
icon: /assets/icon/basic.svg
order: 2
category: 
  - Java
  - Java SE
tag:
  - 基础
isOriginal: true
---

## 注释

注释是编程语言中的重要组成部分，用来解释代码的作用，增强程序的可读性和可维护性。

注释不会被编译器和解释器执行。

- 单行注释：以双斜杠开头。

- 多行注释：以 /\* 开头，以 \*/ 结尾

- 文档注释：以 /\*\* 开头，以 \*/ 结尾

```java
// 单行注释
/*
 * 多行注释
 */
/* *
 * 文档注释注释
 * 
 */
```

文档注释一般放在类、方法、字段等声明前用以生成代码文档。

```java
// 单行注释
public class HelloWorld {
    /** 文档注释
     * @author 皮皮萌宝
     */
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

## 关键字

关键字是Java中被赋予特殊含义的词，不允许被用作标识符。其中还有 `goto` 和 `const` 作为保留字。

:::tip 保留字
保留字是未来可能作为关键字进行使用的词，像其他的编程语言一般已经进行使用，比如 `const` 在 `JavaScript` 被用作常量。
:::
## 字面量

字面量未经封装在源代码中的值，以下是分类：

|  字面量类型  |           示例            |                描述                |
|:-------:|:-----------------------:|:--------------------------------:|
|  整型字面量  |    `5`, `10`, `-20`     |       表示整数值的字面量，可以是正数或负数。        |
| 浮点型字面量  | `3.14`, `-0.5`, `2.5E6` | 表示浮点数值的字面量，可以是正数或负数，可以使用科学计数法表示。 |
| 布尔型字面量  |     `true`, `false`     |            表示真或假的字面量。            |
| 字符型字面量  |  `'a'`, `'中'`, `'\n'`   |       表示单个字符的字面量，使用单引号括起来。       |
| 字符串型字面量 |    `"Hello"`, `"世界"`    |      表示一系列字符的字面量，使用双引号括起来。       |
|  空字面量   |         `null`          |     表示空值的字面量，可以用于任何引用类型的变量。      |

```java
public class Main {
	public static void main(String[] args) {
		System.out.println(123);
		System.out.println(123.56);
		System.out.println("hello world");
		System.out.println('中');
		System.out.println(true);
		System.out.println(false);
		String a = null;
		System.out.println(a);
	}
}
```

:::tip null
null 值不能直接进行输出，若是将 null 赋给一个引用值变量便可进行输出。
:::



## 变量

变量是存储数据的容器。

变量的定义格式：`数据类型 变量名`。

变量的赋值：`变量名 = 值`。

两者可以结合`数据类型 变量名 = 值`，Java 中的变量只能定义一次，但是可以多次使用。

```java
public class Main {
	public static void main(String[] args) {
		int a = 10;
		System.out.println(a);
		a++;
		System.out.println(a);
	}
}
```

## 数据类型

### 基本数据类型

<table>
  <thead>
    <tr>
      <th>数据类型</th>
      <th>关键字</th>
      <th>占用空间</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4">整型</td>
      <td>byte</td>
      <td>1字节</td>
    </tr>
    <tr>
      <td>short</td>
      <td>2字节</td>
    </tr>
    <tr>
      <td>int（默认）</td>
      <td>4字节</td>
    </tr>
    <tr>
      <td>long</td>
      <td>8字节</td>
    </tr>
    <tr>
      <td rowspan="2">浮点型</td>
      <td>float</td>
      <td>4字节</td>
    </tr>
    <tr>
      <td>double（默认）</td>
      <td>8字节</td>
    </tr>
    <tr>
      <td>字符</td>
      <td>char</td>
      <td>2字节</td>
    </tr>
    <tr>
      <td>布尔</td>
      <td>boolean</td>
      <td>1位</td>
    </tr>
  </tbody>
</table>

::: tip 为什么使用 L 进行表示
其中的 long 类型需要使用 L 进行标识、float 需要使用 f 或 F 进行标识。担心小写 L 和 1 进行混淆，因此建议使用大写。
:::

```java
public class Main {
	public static void main(String[] args) {
		byte a = 1;
		short b = 1;
		int c= 111;
		long d= 123L;
		float e = 1.0F;
		double f= 1.0;
		boolean g = true;
		char h = '中';
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
		System.out.println(d);
		System.out.println(e);
		System.out.println(f);
		System.out.println(g);
		System.out.println(h);
	}
}
```

### 引用数据类型

引用数据类型有 [类](object.md/#基本概念)，[接口]() 和 [数组]()。

### 类型转换

#### 自动类型转换

将小的数据类型转给大的数据类型，可以直接进行转换。
:::tip 
这里的小和大并不是指数据类型，而是指精度，例如虽然 long 大小为 8 字节、float 大小为 4 字节，float 只能强转。
:::

```java
public class Main {
    public static void main(String[] args) {
        int num = 'a';
        double d = 80;
        System.out.println(num); 
        System.out.println(d); 
    }
}
```

#### 强制类型转换

精度大的数据类型转换成精度小的，则会报错，因为精度可能会丢失，需要进行强制类型转换。

```java
public class Main {
    public static void main(String[] args) {
        double d = 80;
        int a = (int) d;
        System.out.println(d);
    }
}
```


## 标识符

标识符是给类，方法，变量起的名字。

### 命名规则
 

- 必须以字母、下划线、$ 开头。

- 可以包含字母、下划线、$ 和数字组成。

- Java 区分大小写。

- Java 关键字和保留字不能作为标识符。

### 命名规范

类名使用大驼峰。

方法名和变量名使用小驼峰。

::: tip 两者的区别
命名规则可以简单理解为人的名字叫什么都可以，只要是中国字原则上都可以起。

关键字可以理解为中国为了对某些先烈的尊重，毛泽东、周恩来、朱德等人的名字不能被使用。

命名规范是你的姓原则上只能使用你父母的姓，第二个字是你的辈分，第三个字是你能随便选择的。该规范遵守不遵守都可以，但是原则上你叫三个字的名的话会被别人用异样的眼光看而已。
:::

## 运算符

运算符是对字面量和变量进行操作的符号，运算符将字面量和变量连接起来的式子称为表达式。

### 算术运算符

| 符号 | 作用 |
|----|----|
| +  | 加法 |
| -  | 减法 |
| *  | 乘法 |
| /  | 除  |
| %  | 取模 |

算术运算符的结果和数学的运算结果一样。

```java
public class Main {
	public static void main(String[] args) {
		int a = 10;
		int b = 5;
		System.out.println(a + " + " + b + " = " + (a + b));
		System.out.println(a + " - " + b + " = " + (a - b));
		System.out.println(a + " * " + b + " = " + (a * b));
		System.out.println(a + " / " + b + " = " + (a / b));
		System.out.println(a + " % " + b + " = " + (a % b));
	}
}
```

#### 浮点数结果

在除法中，可以发现 5/2 得到的结果是 2，这是因为整数与整数运算只能得到整数，因此需要浮点数参与运算。

```java
public class Main {
	public static void main(String[] args) {
		System.out.println(5/2);
		System.out.println(5/2.0);
	}
}
```

#### + 运算符

\+ 运算符两边都是数字则最终结果还是数字，如果两边有字符串参与预算，则会变为字符串拼接。

如果数字和字符运算，则会计算 ASCII 码，字符与字符一样。

```java
public class Main {
	public static void main(String[] args) {
		System.out.println(1+1);
		System.out.println(1+"1");
		System.out.println(1+'1');
		System.out.println('1'+'1');
	}
}
```

### 自增自减运算符

| 符号 | 作用    |
|----|-------|
| ++ | 变量值+1 |
| -- | 变量值-1 |

```java
public class Main {
	public static void main(String[] args) {
		int a = 10;
		System.out.println(a++);
		System.out.println(++a);
	}
}
```
:::tip 前置和后置区别
如果单行语句 `++a` 和 `a++` 没有区别，和语句结合则有所不同 `++a` 变量会先 +1 再使用，但是 `++a` 变量先进行使用。
:::

### 关系运算符

| 符号 | 作用 |
|----|----|
| == | 等于 |
|!= | 不等于 |
| >  | 大于 |
| <  | 小于 |
| >= | 大于等于 |
| <= | 小于等于 |

和基本的数学比较一样，结果类似，返回 true 或 false。

```java
public class Main {
	public static void main(String[] args) {
		int a = 10;
		int b = 5;
		System.out.println(a >= b);
		System.out.println(a > b);
		System.out.println(a <= b);
		System.out.println(a < b);
		System.out.println(a != b);
		System.out.println(a == b);
	}
}
```
 

### 赋值运算符

|符号|作用|
|----|----|
|=|赋值|
|+=|加法赋值|
|-=|减法赋值|
|*=|乘法赋值|
|/=|除法赋值|
|%=|取模赋值|

用于将某个值赋给一个变量，其中 `a += b` 就近似于 `a = a + b`。

```java
public class Main {
	public static void main(String[] args) {
		int a = 10;
		int b = 20;
		System.out.println(a+=b);
		System.out.println(a-=b);
		System.out.println(a*=b);
		System.out.println(a/=b);
		System.out.println(a%=b);
	}
}
```

#### 细节

如果使用赋值运算符需要注意的就是会有一个默认的强制类型转换。

```java
public class Main {
    public static void main(String[] args) {
        byte a = 10;
        a = a +1;
    }
}
```

使用这种语法会报错，因为整数的默认值是 int ，因此 1 是一个 int 的数据类型，需要进行强制转换才能使用。`a += 1 ` 等价于 `a = (byte) (a+1)` 。

```java
public class Main {
    public static void main(String[] args) {
        byte a = 10;
        a+=1;
        a = (byte) (a+1);
    }
}
```
### 逻辑运算符
|符号|作用|
|----|----|
|&&|与|
|\|\||或|
|!|非|

&& 表示两个都为真才为真否则为假，|| 两个都为假才为假，否则为真。! 符号用于取反操作，对 true 取反返回 false，对 false 取反返回 true。

```java
public class Main {
    public static void main(String[] args) {
        System.out.println(true && true);
        System.out.println(true && false);
        System.out.println(false && false);
        System.out.println(false && true);
        System.out.println(true ||true);
        System.out.println(true || false);
        System.out.println(false || false);
        System.out.println(false || true);
        System.out.println(!true);
        System.out.println(!false);
    }
}
```

#### 短路运算符
&& 和 || 是短路运算符，一旦结果出现，后面的运算符不会运算。`false && (a++) == 5`，因为 && 只要找到一个假就输出假，因此后面的语句不会执行。

::: code-tabs

@tab 短路效果

```java
public class Main {
    public static void main(String[] args) {
        int a=5;
        System.out.println(false && (a++) == 5);
        System.out.println(a);
    }
}
```

@tab 没有短路效果

```java
public class Main {
    public static void main(String[] args) {
        int a=5;
        System.out.println(false & (a++) == 5);
        System.out.println(a);
    }
}
```
:::
### 位运算符

位运算符涉及计算机底层，可查看计算机二进制的相关文章进行学习，只介绍运算符。

|操作符|描述| 名称|
|---|---|---|
|&|都为 1 结果为 1，否则为 0|与|
| \| |都为 0 结果为 0，否则为 1|或|
|^|两位相同为 0，否则为 1|异或|
|~|取反|取反|
|<<| 按位左移|按位左移|
|>>| 	按位右移| 按位右移|
|>>> |无符号右移|无符号右移|

其中的 & 和 | 都可以作为逻辑运算符进行使用，没有短路效果。

```java
public class Main {
    public static void main(String[] args) {
        int a = 60; /* 60 = 0011 1100 */
        int b = 13; /* 13 = 0000 1101 */
        int c = 0;
        c = a & b;       /* 12 = 0000 1100 */
        System.out.println("a & b = " + c );
        c = a | b;       /* 61 = 0011 1101 */
        System.out.println("a | b = " + c );
        c = a ^ b;       /* 49 = 0011 0001 */
        System.out.println("a ^ b = " + c );
        c = ~a;          /*-61 = 1100 0011 */
        System.out.println("~a = " + c );
        c = a << 2;     /* 240 = 1111 0000 */
        System.out.println("a << 2 = " + c );
        c = a >> 2;     /* 15 = 1111 */
        System.out.println("a >> 2  = " + c );
        c = a >>> 2;     /* 15 = 0000 1111 */
        System.out.println("a >>> 2 = " + c );
    }
}
```
### 三元运算符

三元运算符只有一个，`关系表达式 ? 参数1 : 参数2` 第一个参数为一个关系运算符，如果为 true ，返回值为第一个元素，如果为 false ，返回第二个元素。

```java
public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        System.out.println(a>b?a:b);
    }
}
```
## 流程控制语句
### 选择结构

选择结构用于进行判断，当条件满足时执行某段代码。

#### if语句

if 语句格式：

```tex
if (关系表达式 1) {
   语句体 1;
}else if( 关系表达式 2 ){
  语句体 2;
}
  ...
  else{
  语句体 n+1;
}
```

其中 `else if` 可以有多个，`else` 可以没有，`if` 必须有。

执行流程为当关系表达 1 为 `true`，执行语句体 1，如果为 `false`，则向下执行，当遇见关系表达式 2~n 中符合条件的则执行相应的语句块，如果有多个满足则只执行第一个满足的语句，当所有条件不满足后执行 `else` 语句块。

```java
public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        if(a>b){
            System.out.println("a>b");
        }else if(a<b){
            System.out.println("a<b");
        }else{
            System.out.println("a=b");
        }
    }
}
```

#### switch 

switch 语句格式：

```md
switch(表达式){
  case 常量1:
    语句体1;
    break;
  case 常量2:
    语句体2;
    break;
 ...
  default:
    语句体n+1;
}
```

其中 `case` 后面可以有多个，`default` 可以没有，`switch` 必须有。执行流程为当表达式的值与 `case` 后面的常量相等时执行相应的语句块，当所有条件不满足后执行 `default` 语句块。

```java
public class Main {
    public static void main(String[] args) {
        int a = 10;
        switch(a){
            case 10:
                System.out.println("a=10");
                break;
            case 5:
                System.out.println("a=5");
                break;
            default:
                System.out.println("a!=10&&a!=5");
        }
    }
}
```

:::tip break
`switch` 语句一定要加上 `break`，不然某一个 `switch` 执行之后余下的语句会全部执行
:::
### 循环结构

循环结构用于执行多次的重复性代码。

#### for

for 循环格式：

```md
for(初始化表达式; 关系表达式; 增量表达式){
  语句体;
}
```

执行流程为首次初始化表达式，当关系表达式为 true 时，执行语句体，之后执行增量表达式，当关系表达式为 false 时，结束循环。

```java
for(int i = 0; i<5;i++){
  System.out.println("Hello World");
}
```

#### while

```java
int i = 0;
while (i<5){
    System.out.println("Hello World");
    i++;
}
```

#### do-while

```java
int i = 0;
do{
    System.out.println("Hello World");
    i++;
}while(i<5);
```

:::tip 三种语句的区别
for 循环主要用于已经知道循环次数的语句， while 用于不知道循环次数的语句，do-while 适用于一些一定要先执行的语句。
:::

### 控制跳转语句

<Share colorful />