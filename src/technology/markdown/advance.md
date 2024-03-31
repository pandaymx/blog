--- 
title: 进阶
icon: /assets/icon/advance.svg
order: 2
---

## 表格

Markdown 使用三个连字符创建每列的标题，并使用\|来分隔每列。

```
| 测试| 有限|
| --- | ---|
|你好| 你好|
|我爱你|你爱我|
```

呈现输出如以下所示：

| 测试  | 有限  |
|-----|-----|
| 你好  | 你好  |
| 我爱你 | 你爱我 |

对齐方式：

```
| 测试 | 有限 |你好|
|:----|:----:|----:|
| 你好 | 你好 |你好|
|我爱你|你爱我|蜜雪冰城甜蜜蜜|
```
第一种表示左对齐，第二种表示居中对齐，第三种表示右对齐。



## 代码块

可以通过三个\`来创建代码块。其后可以添加一种语言，也可以不添加


\```python<br>
print('hello world')<br>
\```<br>


效果如下所示：

```python
print('hello world')
```

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

可以直接通过Emoji简码进行输入。

例如：`:tent`:

演示效果如下：

:tent:

[地址](https://gist.github.com/rxaviers/7360908)

## 数学公式

数学公式主要是通过 Latex 语法来进行支持，主要分为两种，第一种是行内公式，第二种是单行公式。

```md
$\frac{a}{b}$
$$\frac{a}{b}$$
```

$\frac{a}{b}$
$$\frac{a}{b}$$

具体可以查看 Latex 数学公式。