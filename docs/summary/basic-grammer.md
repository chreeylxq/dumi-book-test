---
title: 基本语法
---

# 基本语法

## 一、数据类型

### 基本数据类型

  <img src="./../../static/imgs/datatype.jpg">

#### **数值型**

#### 1)整数型（`byte`、`short`、`int`、`long`）

- **byte**（一个字节 = 8bit 位）：范围在-128~127，类型为 byte 的变量类型赋值超过范围则编译不通过。（如：byte b = 128 //编译不通过）
- **short** ：2 字节
- **int** : 4 字节，通常定义整型变量时，使用 `int` 类型
- **long**：8 字节，声明 `long `型变量，必须以`l`或`L`结尾

#### 2)浮点型（`float`、`double`）

```js
float f1 = 123.3f
double b1 = 123.45
```

- **byte**：4 字节，表示带小数的数值，表示数值范围比 `long` 还大，定义 `float` 类型变量时，变量要以`f`或`F`结尾，定义`double`变量时，则`不需要f`<br>
- **long**：8 字节，通常定义浮点型变量时，使用 double（**精度更大，不需要结尾“f”**）

#### **字符型 `char`**

```js
char a1 = 'a'
c1 = 'ab' //编译不通过

```

> 定义声明 char 类型变量，通常使用一对 ‘’，单引号内只能有一个字符<br>
> 字符变量三种表现形式： <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.声明一个字符 char c1 = '0'<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.转义字符 char c1 = '\n'<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.直接使用 `Unicode` 值表示字符常量 char c2 = '/u000a'表示/n（UTF-8 是互联网上使用最广的的一种 Unicode）

#### **布尔型 `boolean`**

> 只能取两个值之一：`true`，`false`；常常在条件判断、循环结构中使用

### 引用数据类型

- 类 `class`
- 接口 `interface`
- 数组 `array`

### 基本数据类型之间的运算规则

- 自动类型提升
  > 当容量小的数据类型和容量大的数据类型变量做运算时结果 **`自动提升`** 为 **容量大** 的数据类型`byte`、`short`、`char`、`int`、`long`、`float`、`double`。<br>（这里说的容量大小，是指该数据类型能表示**数的范围大小**，比如：`float`的容量比`long`的大）
- 强类型提升(自动类型提升运算的逆运算)

  > ① 需要强制转换符：（）<br>
  > ② 强制转换类型，有**可能会导致精度损失**

  ```js
  double d = 12.9;
  int i = (int)d1;  //截断操作 ==> i1=12 （精度损失）
  double d1 = 12;
  int i1 = (int)d1; // i1=12 （精度没有损失）

  ```

## 二、基础语法

## 三、运算符
