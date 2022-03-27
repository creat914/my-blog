---
title: Dart语法
date: 2022-3-27
sidebar: 'auto'
tags:
 - dart
categories: 
 - dart
---

# Dart语法
## 入口函数

```dart 
void main() {}
```

## 打印输入

```dart
print();
```

## 基本数据类型

Numbers（数值）:
​          int
​          double
Strings（字符串）
​          String
Booleans(布尔)
​          bool
List（数组）
​          在Dart中，数组是列表对象，所以大多数人只是称它们为列表
Maps（字典）
​          通常来说，Map 是一个键值对相关的对象。 键和值可以是任何类型的对象。每个 键 只出现一次， 而一个值则可以出现多次

## 定义变量

```dart
// var赋值时跟着什么类型就是什么类型 / 数据类型
var str1 = 'this is str1';
// 定义字符串
String str1='this is str1';
String str2='this is str2';
// 拼接字符串的方法
print("$str1") / print(str1)
// 定义数字 /浮点数
double floatNumber = 1.5;
int number = 123;
// 定义Map
Map p = {};/ Map p = new Map();
p["name"] = "李四";
p["age"] = 22;
//第一种定义List的方式
List l1=["张三",20,true];
//第二种定义List的方式 指定类型
var l2=<String>["张三","李四"];
// 第三种定义List的方式  增加数据 ,通过[]创建的集合它的容量可以变化
var l3 = []
// 第四种定义List的方式
var l4=List.filled(2, "");  //创建一个固定长度的集合
List.add() // 添加元素

```

## 定义常量

```dart
// 区别 final 赋值后不可变，可以修饰变量 const只能修饰不可变常量 
final CONST = "这是常量"；
const CONST = "这是常量"；
```

## 类型判断

```dart
is 关键字
var str=123;
if(str is String){
  print('是string类型');
}else if(str is int){
   print('int');
}else{
   print('其他类型');
}
```

算数运算符

```dart
void main(){
  int a=13;
  int b=5;
  print(a+b);   //加
  print(a-b);   //减
  print(a*b);   //乘
  print(a/b);   //除
  print(a%b);   //其余
  print(a~/b);  //取整
  var c=a*b;
  print('--------');
  print(c);
}
```

## 关系运算符

```dart
void main(){
  int a=13;
  int b=5;
  print(a+b);   //加
  print(a-b);   //减
  print(a*b);   //乘
  print(a/b);   //除
  print(a%b);   //其余
  print(a~/b);  //取整
  var c=a*b;
  print('--------');
  print(c);
}
```

## 逻辑运算符

```dart
void main(){
  /* ! 取反 */ 
  bool flag=false;
  print(!flag);   //取反
 /* &&并且:全部为true的话值为true 否则值为false */ 
  bool a=true;
  bool b=true;
  print(a && b);
 /* ||或者：全为false的话值为false 否则值为true */ 
  bool a=false;
  bool b=false;
  print(a || b);
}
```

## 赋值运算符

```dart
// 基础赋值运算符   =   ??=     
int a = 1;
int b = 2;
int c = a + b;
int d = '';
d ??= 23; // 如果d为空则赋值23
// 复合赋值运算符   +=  -=  *=   /=   %=  ~/=
var a=12;
a=a+10;
a=a-10;
a=a*10;
a=a/10; // 包含小数
a=a%10; 
a=a~/10; // 返回整数部分
```

## 条件表达式

```dart
void main() {
//1、if  else   switch case
  var score = 41;
  if (score > 90) {
    print('优秀');
  } else if (score > 70) {
    print('良好');
  } else if (score >= 60) {
    print('及格');
  } else {
    print('不及格');
  }
 var sex = "女";
  switch (sex) {
    case "男":
      print('性别是男');
      break;
    case "女":
      print('性别是女');
      print('性别是女');
      break;
    default:
      print('传入参数错误');
      break;
  }
}
// 2.三目运算符
bool flag=false;
String c=flag?'我是true':'我是false';
// 3  ??运算符
var a;
var b= a ?? 10;
```

## 类型转换

```dart
//1、Number与String类型之间的转换
// Number类型转换成String类型 toString()
// String类型转成Number类型  int.parse()
String str='123';
var myNum=int.parse(str);
var myNum=double.parse(str);
// 2、其他类型转换成Booleans类型
//isEmpty:判断字符串是否为空
var str='';
if(str.isEmpty){
  print('str空');
}else{
  print('str不为空');
}
```

## 循环

```dart
// for循环
for(int i=0;i<=50;i++){
   if(i%2==0){
    print(i);
  }
}
List myList=['香蕉','苹果','西瓜'];
// for in 
for(var item in myList){
  print(item);
}
// map 
List myList=[1,3,4];      
var newList=myList.map((value){
    return value*2;
});
print(newList.toList());
// where 相当于 filter
List myList=[1,3,4,5,7,8,9];
var newList=myList.where((value){
  return value>5;
});
//any 只要集合里面有满足条件的就返回true
var f=myList.any((value){  
   return value>5;
});
//every 每一个都满足条件返回true  否则返回false
var f=myList.every((value){  
   return value>5;
});
// foreach
 Map person={
"name":"张三",
 "age":20
};
person.forEach((key,value){            
   print("$key---$value");
});

//while 和 do while的区别   第一次循环条件不成立的情况下
do{
  语句/循环体
}while(表达式/循环条件);
while(表达式/循环条件){};
// break语句功能:
1、在switch语句中使流程跳出switch结构。
2、在循环语句中使流程跳出当前循环,遇到break 循环终止，后面代码也不会执行
// continue  /*跳过当前循环体 然后循环还会继续执行*/
```

## List里面常用的属性和方法

```
/*
    常用属性：
        length          长度
        reversed        翻转
        isEmpty         是否为空
        isNotEmpty      是否不为空
    常用方法：  
        add         增加
        addAll      拼接数组
        indexOf     查找  传入具体值
        remove      删除  传入具体值
        removeAt    删除  传入索引值
        fillRange   修改   
        insert(index,value);            指定位置插入    
        insertAll(index,list)           指定位置插入List
        toList()    其他类型转换成List  
        join()      List转换成字符串
        split()     字符串转化成List
        forEach   
        map
        where
        any
        every
*/

```

## 方法的定义 变量 方法的作用域

```dart
void printInfo(){
  print('我是一个自定义方法');
}
int getNum(){
  var myNum=123;
  return myNum;
}
String printUserInfo(){
  return 'this is str';
}
List getList(){
  return ['111','2222','333'];
}
```

## 方法传参 、默认参数、可选参数、命名参数 、方法作为参数

```dart
// 定义一个带可选参数的方法 
String printUserInfo(String username,[int age=0]){  //行参
   if(age!=0){
     return "姓名:$username---年龄:$age";
  }
 return "姓名:$username---年龄保密";
}
// 定义一个带默认参数的方法
String printUserInfo(String username,[String sex='男',int age=0]){  //行参
   if(age!=0){
      return "姓名:$username---性别:$sex--年龄:$age";
   }
 return "姓名:$username---性别:$sex--年龄保密";
}
// 定义一个命名参数的方法，最新的dart定义命名参数需要指定类型默认值
 String printUserInfo(String username, {int age = 0, String sex = '男'}) {//行参    
    if (age != 0) {
      return "姓名:$username---性别:$sex--年龄:$age";
    }
    return "姓名:$username---性别:$sex--年龄保密";
  }
print(printUserInfo('张三', age: 20, sex: '未知'));
```

## 定义类

```dart
class Person{
  String name="张三";
  int age=23;
  void getInfo(){
      // print("$name----$age");
      print("${this.name}----${this.age}");
  }
  void setInfo(int age){
    this.age=age;
  }
}
void main(){
  //实例化
  Person p1=new Person();
  // print(p1.name);
  p1.setInfo(28);
  p1.getInfo();
}
// 默认构造函数
class Person{
  late String name;
  late int age; 
  //默认构造函数
  Person(String name,int age){
      this.name=name;
      this.age=age;
  }
  void printInfo(){   
    print("${this.name}----${this.age}");
  }
}
// 命名构造函数
class Person {
  late String name;
  late int age;
  //默认构造函数的简写
  Person(this.name, this.age);
  Person.now() {
    print('我是命名构造函数');
  }
  Person.setInfo(String name, int age) {
    this.name = name;
    this.age = age;
  }
  void printInfo() {
    print("${this.name}----${this.age}");
  }
}
void main() {
  Person p1 = new Person.setInfo('李四', 30);
  p1.printInfo();
}

```

### 私有方法

```dart
class Animal{
  late String _name;   //私有属性
  late int age; 
  //默认构造函数的简写
  Animal(this._name,this.age);
  void printInfo(){   
    print("${this._name}----${this.age}");
  }
  String getName(){ 
    return this._name;
  } 
  void _run(){
    print('这是一个私有方法');
  }
  execRun(){
    this._run();  //类里面方法的相互调用
  }
}
```

### getter 跟setter

```dart
class Rect{
  late num height;
  late num width;   
  Rect(this.height,this.width);
  get area{
    return this.height*this.width;
  }
  set areaHeight(value){
    this.height=value;
  }
}
void main(){
  Rect r=new Rect(10,4);
  // print("面积:${r.area()}");   
  r.areaHeight=6;
  print(r.area);
}
```

### 静态方法跟静态属性

```dart
class Person {
  static String name = '张三';
  int age=20;  
  static void show() {
    print(name);
  }
  void printInfo(){  /*非静态方法可以访问静态成员以及非静态成员*/
      // print(name);  //访问静态属性
      // print(this.age);  //访问非静态属性
      show();   //调用静态方法
  }
  static void printUserInfo(){//静态方法
        print(name);   //静态属性
        show();        //静态方法
  }
}
```

### 继承

```dart
//Dart中的类的继承：  
//1、子类使用extends关键词来继承父类
// 2、子类会继承父类里面可见的属性和方法 但是不会继承构造函数
// 3、子类能复写父类的方法 getter和setter
class Person {
  String name='张三';
  num age=20; 
  void printInfo() {
    print("${this.name}---${this.age}");  
  } 
}
class Web extends Person{}
main(){   
  Web w=new Web();
  print(w.name);
  w.printInfo();
}
```

### super关键字

```dart
/*
Dart中的类的继承：  
    1、子类使用extends关键词来继承父类
    2、子类会继承父类里面可见的属性和方法 但是不会继承构造函数
    3、子类能复写父类的方法 getter和setter
*/
class Person {
  late String name;
  late num age; 
  Person(this.name,this.age);
  void printInfo() {
    print("${this.name}---${this.age}");  
  }
}
class Web extends Person{
  Web(String name, num age) : super(name, age){
    
  }  
}
main(){ 
  Web w=new Web('张三', 12);
  w.printInfo();
}
```

### 重写父类的方法

```dart
class Person {
  String name;
  num age; 
  Person(this.name,this.age);
  void printInfo() {
    print("${this.name}---${this.age}");  
  }
  work(){
    print("${this.name}在工作...");
  }
}
class Web extends Person{
  Web(String name, num age) : super(name, age);
  run(){
    print('run');
  }
  //覆写父类的方法
  @override       //可以写也可以不写  建议在覆写父类方法的时候加上 @override 
  void printInfo(){
     print("姓名：${this.name}---年龄：${this.age}"); 
  }
  @override
  work(){
    print("${this.name}的工作是写代码");
  }
}
```

### 子类调用父类的方法

```dart
class Person {
  String name;
  num age; 
  Person(this.name,this.age);
  void printInfo() {
    print("${this.name}---${this.age}");  
  }
  work(){
    print("${this.name}在工作...");
  }
}
class Web extends Person{
  Web(String name, num age) : super(name, age);
  run(){
    print('run');
    super.work();  //子类调用父类的方法
  }
  //覆写父类的方法
  @override       //可以写也可以不写  建议在覆写父类方法的时候加上 @override 
  void printInfo(){
     print("姓名：${this.name}---年龄：${this.age}"); 
  }
}
main(){ 
  Web w=new Web('李四',20);
  // w.printInfo();
  w.run();
}
```

### 抽象类

```dart
/*
Dart中抽象类: Dart抽象类主要用于定义标准，子类可以继承抽象类，也可以实现抽象类接口。
  1、抽象类通过abstract 关键字来定义
  2、Dart中的抽象方法不能用abstract声明，Dart中没有方法体的方法我们称为抽象方法。
  3、如果子类继承抽象类必须得实现里面的抽象方法
  4、如果把抽象类当做接口实现的话必须得实现抽象类里面定义的所有属性和方法。
  5、抽象类不能被实例化，只有继承它的子类可以
extends抽象类 和 implements的区别：
  1、如果要复用抽象类里面的方法，并且要用抽象方法约束自类的话我们就用extends继承抽象类
  2、如果只是把抽象类当做标准的话我们就用implements实现抽象类
*/
abstract class Animal{
  eat();   //抽象方法
  run();  //抽象方法  
  printInfo(){
    print('我是一个抽象类里面的普通方法');
  }
}
class Dog extends Animal{
  @override
  eat() {
     print('小狗在吃骨头');
  }
  @override
  run() {
    // TODO: implement run
    print('小狗在跑');
  }  
}
class Cat extends Animal{
  @override
  eat() {
    // TODO: implement eat
    print('小猫在吃老鼠');
  }
  @override
  run() {
    // TODO: implement run
    print('小猫在跑');
  }
}
main(){
  Dog d=new Dog();
  d.eat();
  d.printInfo();
  Cat c=new Cat();
  c.eat();
  c.printInfo();
  // Animal a=new Animal();   //抽象类没法直接被实例化
}
```

### 多态

```dart
/*Datr中的多态：
    允许将子类类型的指针赋值给父类类型的指针, 同一个函数调用会有不同的执行效果 。
    子类的实例赋值给父类的引用
    多态就是父类定义一个方法不去实现，让继承他的子类去实现，每个子类有不同的表现。
*/
abstract class Animal{
  eat();   //抽象方法 
}
class Dog extends Animal{
  @override
  eat() {
     print('小狗在吃骨头');
  }
  run(){
    print('run');
  }
}
class Cat extends Animal{
  @override
  eat() {   
    print('小猫在吃老鼠');
  }
  run(){
    print('run');
  }
}
main(){
  Animal d=new Dog();
  d.eat();
  Animal c=new Cat();
  c.eat();
}
```

### 接口

```dart

abstract class Db{   //当做接口   接口：就是约定 、规范
    late String uri; //数据库的链接地址
    add(String data);
    save();
    delete();
}
class Mysql implements Db{
 
  @override
  String uri;
  Mysql(this.uri);
  @override
  add(data) {
    // TODO: implement add
    print('这是mysql的add方法'+data);
  }
  @override
  delete() {
    // TODO: implement delete
    return null;
  }
  @override
  save() {
    // TODO: implement save
    return null;
  }
  remove(){
      
  }
}
class MsSql implements Db{
  @override
  late String uri;
  @override
  add(String data) {
    print('这是mssql的add方法'+data);
  }
  @override
  delete() {
    // TODO: implement delete
    return null;
  }
  @override
  save() {
    // TODO: implement save
    return null;
  }
}
main() {
  Mysql mysql=new Mysql('xxxxxx');
  mysql.add('1243214');
}
```

### 泛型

```dart
// 传入什么 返回什么
T getData<T>(T value){
  return value;
}
void main(){
    print(getData<int>(12));
}
```

#### 泛型类

```dart
class MyList<T> {
  List list = <T>[];
  void add(T value) {
    this.list.add(value);
  }
  List getList() {
    return list;
  }
}
main() {
  MyList l3 = new MyList<int>();
  l3.add(11);
  l3.add(12);
  l3.add("aaaa");
  print(l3.getList());
}
```

#### 泛型接口

```dart
abstract class Cache<T>{
  getByKey(String key);
  void setByKey(String key, T value);
}
class FlieCache<T> implements Cache<T>{
  @override
  getByKey(String key) {    
    return null;
  }
  @override
  void setByKey(String key, T value) {
   print("我是文件缓存 把key=${key}  value=${value}的数据写入到了文件中");
  }
}
class MemoryCache<T> implements Cache<T>{
  @override
  getByKey(String key) {   
    return null;
  }
  @override
  void setByKey(String key, T value) {
       print("我是内存缓存 把key=${key}  value=${value} -写入到了内存中");
  }
}
void main(){
     MemoryCache m=new MemoryCache<Map>();
     m.setByKey('index', {"name":"张三","age":20});
}
```

##  