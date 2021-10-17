---
title: GIT操作
date: 2021-10-17
sidebar: 'auto'
tags:
 - git
categories: 
 - git
---

# Git命令

## 配置Git

1. 下载Git，选择版本下载
2. 安装之后需要设置基本信息

```js
设置用户名：git  config -- global  user.name  '你再github上注册的用户名';

设置用户邮箱：git  config -- global  user.email  '注册时候的邮箱';
//查看是否配置成功
git config --list 

注意：git  config --global 参数，有了这个参数表示你这台机器上所有的git仓库都会使用这个配置，当然你也可以对某个仓库指定不同的用户名和邮箱

```

3.配置ssh密钥

使用 `$ cd ~/.ssh 或cd .ssh` 切换到ssh文件内

如果没有则提示： No such file or directory

如果有则进入~/.ssh路径下（ls查看当前路径文件，rm * 删除所有文件）

打开 .ssh 将id_rsa.pub 文件内的内容复制 粘贴到 gitLab或公司内部的git 的 Add SSH key 上

## Git工作流程

![u=3958516237,527079121&fm=26&fmt=auto&gp=0.webp](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a8fe3cd54cc4095874f810ca37d8cac~tplv-k3u1fbpfcp-watermark.awebp)

## Git基本操作

有了上面的配置流程 ，看一下接下来的git步骤

创建本地仓库

> git init

与远端仓库创建连接

```
git remote add origin url
origin 默认是远端仓库名   url可以用https或ssh方式新建

```

查看远端仓库信息

```
git remote -v

```

远端仓库重命名

```
 git remote rename old new
 old代表远端仓库的命名   new修改后的名字

```

提交到暂存区

```
  git add . 全部上传到暂存区
  git add 指定文件
  git reset 取消暂存

```

提交到本地仓库

```
   git commit -m'xxx'

```

推送到远程仓库

**-u**选项执行以下操作：对于每个最新或成功推送的分支，添加上游（跟踪）引用，由无参数的git-pull和其他命令使用。

```
   git push -u origin master
   
   

```

注意 第一次推送分支时，加上 -u，在推送分支内容的同时,会`与远端的分支关联起来` ，下次提交不需要 -u

```
  可以直接使用 git push origin master

```

推送成功之后，在远程仓库内就可以看到刚提交的代码了

创建分支

- 查看当前仓库所有分支

  git branch

创建dev并切换到该分支

```
git checkout -b dev

```

也可以使用switch

```
 git switch -c dev

```

切换分支也可以使用 switch

```
 git switch dev

```

合并分支

需要先切换master（需要合并的分支）分支

```
 git checkout master    

```

合并dev分支

```
git merge dev

```

查看合并之后状态

```
git status

```

有冲突的的话 解决冲突 解决冲突之后，将冲突文件提交暂存区

```
git add 冲突文件
git commit
git push  origin master

```

删除分支

删除本地分支 git branch -D 分支名

删除远程仓库分支 gitbranch origin --delete 分支名

拉取代码

直接拉取

git pull

多人开发过程中，上传代码一定要先拉取远程仓库代码

## Git常见操作

易记： -r(remote) -a(all) -b(branch)

分支操作

查看本地分支

```
git branch

```

查看远程分支

```
git branch -r  

```

查看本地和远程分支

```
git branch -a

```

从当前分支，切换到其他分支

```
git checkout (barnch-name)

git checkout dev

```

创建并切换到新建分支

```
git checkout -b (branch-name)

git checkout -b dev

```

删除分支

```
git branch -d (branch-name)

```

当前分支与指定分支合并

```
git merge （指定分支）

```

查看哪些分支已经合并到当前分支

```
git branch --merged

```

查看哪些分支没有合并到当前分支

```
git branch --no-merged

```

查看各个分支最后一个提交对象的信息

```
git branch -v

```

删除远程分支

```
git push orgin -d (branch-name)

```

重命名分支

```
git branch -m

```

拉取远程分支并创建本地分支

```js
git checkout -b 本地分支名x origin/远程分支名x

// 另外一种方式,也可以完成这个操作。 

git fetch origin <branch-name>:<local-branch-name> 

```

## fetch操作

## 撤销操作

之后梳理

### 1.从先从缓存区中拉取版本还原，如果没有再到版本库中拉取还原

```
 git checkout -- <file>

```

让这个文件回到最近一次git commit或git add

### 2.版本回退

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6b76e9bada747cc8d80cc9bdb20256c~tplv-k3u1fbpfcp-watermark.awebp)

查看这个图片 rest使用就很简单了

reset --hard：回退stage区和工作目录

rest --mixed:回退stage区 保留工作目录，并清空暂存区

rest --soft：则会保留工作目录的内容，并把因为保留工作目录内容所带来的新的文件差异放进暂存区。

### 3.暂存区文件撤销(不覆盖工作区)

- HEAD 表示当前版本
- HEAD^ 上一个版本
- HEAD^^ 上上一个版本

```js
    git reset HEAD

```

## Git基本命令

```js
$ touch '文件名' //新建文件

$ vi '文件名' //打开文件

```

查看文件状态

```
git status

```

查看提交历史

```
 git log

```

代码回滚 版本号可以在 log 中看到

```
  git checkout 版本号

```

文件储存

储藏修改 把本地修改储藏起来，等恢复后再继续工作

```
git stash

```

查看 储存信息

```
git stash list

```

恢复储存信息

```
git stash apply

```

删除储存内容

```
git stash drop

```

## Git克隆操作

***\*将远程仓库（github上对应的项目）复制到本地\****

1. 

![1630475577(1).png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7e42dbe990147bf8a6f97ca49f31bed~tplv-k3u1fbpfcp-watermark.awebp)

```js
 git clone 仓库地址

```

打开目标文件夹将远端项目克隆在文件夹内

2.将本地仓库同步到git远程仓库中(需要将项目使用git commit 同步到本地仓库):git push

## 期间会出现的错误

- 使用git commit -m 'xx' 报错

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3afccae81b5f41198ade244aa580cf8e~tplv-k3u1fbpfcp-watermark.awebp)

解决：.git文件被设置为"`只读`"所致，将文件的`只读`属性去掉

![1630476430(1).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75001d846ae24598b81d5133512255d4~tplv-k3u1fbpfcp-watermark.awebp)

- git push 报错

***\*如果出现无法同步或没有权限，解决方法如下：\****

打开.git/config 文件进行修改 ![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79d89c29bc9e4f8eaaca3b3c247d80b9~tplv-k3u1fbpfcp-watermark.awebp)