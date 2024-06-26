--- 
title: 进阶
icon: /assets/icon/advance.svg
order: 2
isOriginal: true
category: 
  - 实用技术
  - Markdown
tag:
  - 基础
---

## 表格

Markdown 使用三个连字符创建每列的标题，并使用\|来分隔每列。

```md
| 测试| 有限|
| --- | ---|
|你好| 你好|
|我爱你|你爱我|
```

呈现输出如以下所示：

> | 测试  | 有限  |
> |-----|-----|
> | 你好  | 你好  |
> | 我爱你 | 你爱我 |

对齐方式：

```
| 测试 | 有限 |你好|
|:----|:----:|----:|
| 你好 | 你好 |你好|
|我爱你|你爱我|蜜雪冰城甜蜜蜜|
```
第一种表示左对齐，第二种表示居中对齐，第三种表示右对齐。

演示效果：

> | 测试 | 有限 |你好|
> |:----|:----:|----:|
> | 你好 | 你好 |你好|
> |我爱你|你爱我|蜜雪冰城甜蜜蜜|

## 代码块

可以通过三个 \``` 来创建代码块。其后可以添加一种语言，也可以不添加。


\```python<br>
print('hello world')<br>
\```



效果如下所示：

```python
print('hello world')
```

## 标题 id {#heading-id}

```md
## 标题 id {#heading-id}
```

可以通过使用 css 进行修改。

还可以通过创建锚链接来进行访问。

```md
[标题id](#heading-id)

[代码块](#代码块)

```

[标题id](#heading-id)

如果没有设置自定义标题，则默认使用标题名即可跳转。

[代码块](#代码块)

## 列表

对需要定义的列表在前方添加冒号加空格。

```md
第一列
: 我

第三人称
: it
: he
: she
```
## 上下标

通过 `^` 和 `~` 来对文档添加上标和下标。

```md
a^2^, b~2~
```
a^2^, b~2~

## 删除线

使用两个~~来对文档添加删除线。

`~~你好~~`

演示效果：
~~你好~~

## 任务列表

通过一个-加空格加上[]来创建一个复选框，如果需要选中则在[]中添加一个x。

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

演示效果：

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## Emoji

可以直接通过 Emoji 简码进行输入。

例如：`:tent`:

演示效果如下：

:tent:

更多 Emoji 图片请查看 [地址](https://gist.github.com/rxaviers/7360908)。

## 数学公式

数学公式主要是通过 Latex 语法[^1] 来进行支持，主要分为两种，第一种是行内公式，第二种是单行公式。



```md
$\frac{a}{b}$
$$\frac{a}{b}$$
```

$\frac{a}{b}$
$$\frac{a}{b}$$

具体可以查看 Latex 数学公式。

## 脚注

```md
脚注[^2]

[^2]:脚注允许添加注释和引用，在需要添加的地方创建带有链接的上标数字，建议使用数字进行编号。
```

脚注[^2]



## 流程图


\```mermaid<br>
 graph LR<br>
 A[方形] -->B(圆角)<br>
     B --> C{条件a}<br>
    C -->|a=1| D[结果1]<br>
     C -->|a=2| E[结果2]<br>
    F[横向流程图]<br>
\```<br>

```mermaid
 graph LR
 A[方形] -->B(圆角)
     B --> C{条件a}
    C -->|a=1| D[结果1]
     C -->|a=2| E[结果2]
    F[横向流程图]
```

## 更多

接下来你可以查看 [GFM](https://github.github.com/gfm/)[^3] 来获得 Markdown 的规范。

[^1]:Latex 语法是一种专业的排版工具，不建议专门学习，需要的时候搜索即可。
[^2]:脚注允许添加注释和引用，在需要添加的地方创建带有链接的上标数字，建议使用数字进行编号。
[^3]:GFM 是 GitHub Flavored Markdown 的缩写，是 GitHub 使用的 Markdown 语法。

<Share colorful />