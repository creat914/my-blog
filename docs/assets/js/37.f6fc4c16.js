(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{634:function(t,_,v){"use strict";v.r(_);var a=v(3),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"计算机体系结构分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#计算机体系结构分类"}},[t._v("#")]),t._v(" 计算机体系结构分类")]),t._v(" "),v("h2",{attrs:{id:"数据的展示"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据的展示"}},[t._v("#")]),t._v(" 数据的展示")]),t._v(" "),v("p",[t._v("R进制转十进制采用按权展开法，其具体操作方式为: 将R进制数的每一位数值用R的k次方的形式表示。当该数字出现在小数点左侧，k是该位与小数点之间数码的个数，出现在右侧，k是负数，其绝对值是该位和小数点之间数码的个数加1")]),t._v(" "),v("p",[t._v("例如二进制 10100.01 = 1 * 2"),v("sup",[t._v("5")]),t._v(" + 1 * 2"),v("sup",[t._v("2")]),t._v(" + 1 * 2"),v("sup",[t._v("-2")]),t._v("\n例如七进制 604.01 = 6 * 7"),v("sup",[t._v("2")]),t._v(" + 4 * 7"),v("sup",[t._v("0")]),t._v(" + 1 * 7"),v("sup",[t._v("-2")])]),t._v(" "),v("h3",{attrs:{id:"十进制转r进制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#十进制转r进制"}},[t._v("#")]),t._v(" 十进制转R进制")]),t._v(" "),v("p",[t._v("使用短除法")]),t._v(" "),v("p",[t._v("例如94转二进制\n94 / 2 = 47 余数 0\n47 / 2 = 23 余数 1\n23 / 2 = 11 余数 1\n11 / 2 = 5 余数 1\n5 / 2 = 2 余数 1\n2 / 2 = 1 余数 0")]),t._v(" "),v("p",[t._v("结果就是 1011110")]),t._v(" "),v("h3",{attrs:{id:"二进制转八进制-以及-十六进制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二进制转八进制-以及-十六进制"}},[t._v("#")]),t._v(" 二进制转八进制 以及 十六进制")]),t._v(" "),v("h4",{attrs:{id:"二进制转八进制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二进制转八进制"}},[t._v("#")]),t._v(" 二进制转八进制")]),t._v(" "),v("p",[t._v("每三位对应一个八进制位 不够补0")]),t._v(" "),v("p",[t._v("例如： 10001110 转 八进制")]),t._v(" "),v("p",[t._v("10 -> 010 -> 1 * 2"),v("sup",[t._v("1")])]),t._v(" "),v("p",[t._v("001 -> 1 * 2"),v("sup",[t._v("0")])]),t._v(" "),v("p",[t._v("110  -> 1 * 2"),v("sup",[t._v("2")]),t._v(" + 1 * 2"),v("sup",[t._v("1")])]),t._v(" "),v("p",[t._v("结果就是 216")]),t._v(" "),v("h4",{attrs:{id:"二进制转十六进制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二进制转十六进制"}},[t._v("#")]),t._v(" 二进制转十六进制")]),t._v(" "),v("p",[t._v("每四位对应一个八进制位 不够补0 超过10的数 用字母 A -> 10 B -> 11 以此类推作表示")]),t._v(" "),v("h2",{attrs:{id:"原码-反码-补码-移码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原码-反码-补码-移码"}},[t._v("#")]),t._v(" 原码 反码 补码 移码")]),t._v(" "),v("h3",{attrs:{id:"原码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原码"}},[t._v("#")]),t._v(" 原码")]),t._v(" "),v("p",[t._v("原码就是一个数的二进制表达。其中对于有符号数，其最高位为符号位，正数为0，负数为1。例如short a = 6; a 的原码就是0000 0000 0000 0110；更改 a 的值a = -18; 此时 a 的原码就是1000 0000 0001 0010。")]),t._v(" "),v("p",[t._v("通俗的理解，原码就是一个整数本来的二进制形式。")]),t._v(" "),v("h3",{attrs:{id:"反码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#反码"}},[t._v("#")]),t._v(" 反码")]),t._v(" "),v("p",[t._v("对于正数，它的反码就是其原码（原码和反码相同）；负数的反码是将原码中除符号位以外的所有位（数值位）取反，也就是 0 变成 1，1 变成 0。例如short a = 6; a 的原码和反码都是0000 0000 0000 0110；更改 a 的值a = -18; 此时 a 的反码是1111 1111 1110 1101。")]),t._v(" "),v("h3",{attrs:{id:"补码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#补码"}},[t._v("#")]),t._v(" 补码")]),t._v(" "),v("p",[t._v("对于正数，它的补码就是其原码（原码、反码、补码都相同）；负数的补码是其反码加 1。例如short a = 6; a 的原码、反码、补码都是0000 0000 0000 0110；更改 a 的值a = -18; 此时 a 的补码是1111 1111 1110 1110。")]),t._v(" "),v("p",[t._v("在计算机内存中，整数一律采用补码的形式来存储。这意味着，当读取整数时还要采用逆向的转换，也就是将补码转换为原码。将补码转换为原码也很简单：先减去 1，再将数值位取反即可。")]),t._v(" "),v("h3",{attrs:{id:"移码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#移码"}},[t._v("#")]),t._v(" 移码")]),t._v(" "),v("p",[t._v("移码最简单了，不管正负数，只要将其补码的符号位取反即可。")]),t._v(" "),v("h3",{attrs:{id:"取值范围"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#取值范围"}},[t._v("#")]),t._v(" 取值范围")]),t._v(" "),v("p",[t._v("8位二进制原码的表示范围：-127～+127")]),t._v(" "),v("p",[t._v("8位二进制反码的表示范围：-127～+127")]),t._v(" "),v("p",[t._v("8位二进制补码的表示范围：-128～+127")]),t._v(" "),v("p",[t._v("n位二进制的表示范围:")]),t._v(" "),v("p",[t._v("原码：-[2^(n-1)-1] ~ 2^(n-1) - 1")]),t._v(" "),v("p",[t._v("反码：-[2^(n-1)-1] ~ 2^(n-1) - 1")]),t._v(" "),v("p",[t._v("补码：-2^(n-1) ~ 2^(n-1) - 1")]),t._v(" "),v("h2",{attrs:{id:"浮点数运算"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浮点数运算"}},[t._v("#")]),t._v(" 浮点数运算")]),t._v(" "),v("h3",{attrs:{id:"对阶"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对阶"}},[t._v("#")]),t._v(" 对阶")]),t._v(" "),v("p",[t._v("往高阶对齐\n例如 1000 = 1.0 * 10"),v("sup",[t._v("3")]),t._v("， 119 = 1.19 * 10"),v("sup",[t._v("2")]),t._v(" ，把119改成  0.119 * 10"),v("sup",[t._v("3")])]),t._v(" "),v("h3",{attrs:{id:"结果格式化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结果格式化"}},[t._v("#")]),t._v(" 结果格式化")]),t._v(" "),v("p",[t._v("最高位不能是0\n最高位只能是1位\n例如 0.1119 * 10"),v("sup",[t._v("3")]),t._v("要改成 1.119 * 10"),v("sup",[t._v("2")]),t._v("\n例如 11.19 * 10"),v("sup",[t._v("1")]),t._v(" 要改成 1.119 * 10"),v("sup",[t._v("2")])]),t._v(" "),v("h2",{attrs:{id:"cpu-结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cpu-结构"}},[t._v("#")]),t._v(" CPU 结构")]),t._v(" "),v("p",[t._v("CPU 分为运算器 跟 控制器")]),t._v(" "),v("h3",{attrs:{id:"运算器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运算器"}},[t._v("#")]),t._v(" 运算器")]),t._v(" "),v("h4",{attrs:{id:"算术逻辑单元alu"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#算术逻辑单元alu"}},[t._v("#")]),t._v(" 算术逻辑单元ALU")]),t._v(" "),v("p",[t._v("运算器也称为算术逻辑单元ALU（Arithmetic Logic Unit）。它的功能是完成算术运算和逻辑运算。算术运算是指加、减、乘、除及它们的复合运算。而逻辑运算是指“与”、“或”、“非”等逻辑比较和逻辑判断等操作。在计算机中，任何复杂运算都转化为基本的算术与逻辑运算，然后在运算器中完成")]),t._v(" "),v("h4",{attrs:{id:"累加寄存器ac"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#累加寄存器ac"}},[t._v("#")]),t._v(" 累加寄存器AC")]),t._v(" "),v("p",[t._v("累加寄存器AC通常简称为累加器，它是一个通用寄存器。其功能是：当运算器的算术逻辑单元(ALU)执行算术或逻辑运算时，为ALU提供一个工作区。累加寄存器暂时存放ALU运算的结果信息。显然，运算器中至少要有一个累加寄存器。在运算器中，累加器是专门存放算术或逻辑运算的一个操作数和运算结果的寄存器。能进行加、减、读出、移位、循环移位和求补等操作。是运算器的主要部分。")]),t._v(" "),v("h4",{attrs:{id:"数据缓冲寄存器-data-register-dr"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据缓冲寄存器-data-register-dr"}},[t._v("#")]),t._v(" 数据缓冲寄存器（Data Register,DR）")]),t._v(" "),v("p",[t._v("用来暂时存放由内存储器读出的一条指令或一个数据字；反之，当向内存存入一条指令或一个数据字时，也暂时将它们存放在数据缓冲寄存器中。")]),t._v(" "),v("h4",{attrs:{id:"状态条件寄存器-psw-program-status-word"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#状态条件寄存器-psw-program-status-word"}},[t._v("#")]),t._v(" 状态条件寄存器（PSW，Program Status Word）")]),t._v(" "),v("p",[t._v("保存由算术指令和逻辑指令运行或测试的结果建立的各种条件码内容，如运算结果进位标志（C），运算结果溢出标志（V），运算结果为零标志（Z），运算结果为负标志（N），中断标志（I），方向标志（D）和单步标识等。这些标志位通常分别由1位触发器保存，保存了当前指令完成之后的状态，通常，一个算术操作产生一个运算结果，而一个逻辑操作则产生一个判决。")]),t._v(" "),v("h3",{attrs:{id:"控制器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#控制器"}},[t._v("#")]),t._v(" 控制器")]),t._v(" "),v("h4",{attrs:{id:"程序计数器pc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#程序计数器pc"}},[t._v("#")]),t._v(" 程序计数器PC")]),t._v(" "),v("p",[t._v("当执行一条指令时，首先需要根据PC中存放的指令地址，将指令由内存取到指令寄存器中，此过程称为“取指令”。与此同时，PC中的地址或自动加1或由转移指针给出下一条指令的地址。此后经过分析指令，执行指令。完成第一条指令的执行，而后根据PC取出第二条指令的地址，如此循环，执行每一条指令。")]),t._v(" "),v("h4",{attrs:{id:"指令寄存器-ir-instruction-register"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#指令寄存器-ir-instruction-register"}},[t._v("#")]),t._v(" 指令寄存器（IR，Instruction Register）")]),t._v(" "),v("p",[t._v("指令寄存器（IR，Instruction Register），用于暂存当前正在执行的指令。指令寄存器的时钟信号是clk，在clk的上升沿触发。指令寄存器将数据总线送来的指令存入16位的寄存器中，但并不是每次数据总线上的数据都需要寄存，因为数据总线上有时传输指令，有时传输数据。由CPU状态控制器的 Ir_ena 信号控制数据是否需要寄存。复位时，指令寄存器被清零 。")]),t._v(" "),v("h4",{attrs:{id:"指令译码器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#指令译码器"}},[t._v("#")]),t._v(" 指令译码器")]),t._v(" "),v("p",[t._v("指令译码器(Instruction Decoder,ID)是控制器中的主要部件之一。计算机能且只能执行“指令”。指令由操作码和地址码组成。操作码表示要执行的操作性质，即执行什么操作，或做什么；地址码是操作码执行时的操作对象的地址。计算机执行一条指定的指令时，必须首先分析这条指令的操作码是什么，以决定操作的性质和方法，然后才能控制计算机其他各部件协同完成指令表达的功能。这个分析工作由指令译码器来完成。指令执行通过控制部件进行指令译码，标量指令由标量处理机执行向量指令各Cache控制器监听总线所有操作，并对操作做相应处理（修改或作废），如MESI协议。")]),t._v(" "),v("h4",{attrs:{id:"时序部件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#时序部件"}},[t._v("#")]),t._v(" 时序部件")]),t._v(" "),v("p",[t._v("时序部件主要由主时钟源、节拍发生器和启停控制逻辑组成。其中的关键部件是节拍发生器。节拍发生器可以是一个环形计数器，也可以是一个计数译码电路。时钟电路包括一个晶体控制的振荡电路。晶体振荡器产生一个连续的正弦输出，正弦波转换为数字电路所需的方波。方波提供快速上升和下降的边界以触发事件。时钟频率越快，数据处理越快，处理频率来源于时钟频率。时钟是产生周期信号的基本方法，这些周期信号用于实现包括计算机在内的电子设备的同步。")]),t._v(" "),v("h2",{attrs:{id:"flynn"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flynn"}},[t._v("#")]),t._v(" Flynn")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("体系结构类型")]),t._v(" "),v("th",[t._v("结构")]),t._v(" "),v("th",[t._v("关键特性")]),t._v(" "),v("th",[t._v("代表")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("单指令流单数据流SISD")]),t._v(" "),v("td",[t._v("控制部分：一个"),v("br"),t._v("处理器：一个"),v("br"),t._v("主存模式： 一个")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("单处理器系统")])]),t._v(" "),v("tr",[v("td",[t._v("单指令流多数据流SIMD")]),t._v(" "),v("td",[t._v("控制部分：一个"),v("br"),t._v(" 处理器：多个"),v("br"),t._v(" 主存模式： 多个")]),t._v(" "),v("td",[t._v("各处理器以异步的形式"),v("br"),t._v("执行同一条指令")]),t._v(" "),v("td",[t._v("并行处理机"),v("br"),t._v(" 阵列处理机"),v("br"),t._v(" 超级向量处理机")])]),t._v(" "),v("tr",[v("td",[t._v("多指令流单数据流MISD")]),t._v(" "),v("td",[t._v("控制部分：多个"),v("br"),t._v(" 处理器：一个"),v("br"),t._v(" 主存模式： 多个")]),t._v(" "),v("td",[t._v("被证明不可能，至少是不实际")]),t._v(" "),v("td",[t._v("目前没有,有文献称流水线计算机为此类")])]),t._v(" "),v("tr",[v("td",[t._v("多指令流多数据流MIMD")]),t._v(" "),v("td",[t._v("控制部分：多个"),v("br"),t._v(" 处理器：多个"),v("br"),t._v(" 主存模式： 多个")]),t._v(" "),v("td",[t._v("能够实现作业任务、指令等"),v("br"),t._v("各级全面并行")]),t._v(" "),v("td",[t._v("多处理机系统 "),v("br"),t._v("多计算机")])])])]),t._v(" "),v("h2",{attrs:{id:"cisc-与-risc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cisc-与-risc"}},[t._v("#")]),t._v(" CISC 与 RISC")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("指令系统类型")]),t._v(" "),v("th",[t._v("指令")]),t._v(" "),v("th",[t._v("寻址方式")]),t._v(" "),v("th",[t._v("实现方式")]),t._v(" "),v("th",[t._v("其他")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("CISC（复杂）")]),t._v(" "),v("td",[t._v("数量多，使用频率差别大，可变长格式")]),t._v(" "),v("td",[t._v("支持多种")]),t._v(" "),v("td",[t._v("微程序控制技术（微码）")]),t._v(" "),v("td",[t._v("研制周期长")])]),t._v(" "),v("tr",[v("td",[t._v("RISC（精简）")]),t._v(" "),v("td",[t._v("数量少，使用频率接近，定长格式，大部分为单周期指令，操作寄存器，只有Load/Store操作内存")]),t._v(" "),v("td",[t._v("支持方式少")]),t._v(" "),v("td",[t._v("增加了通用寄存器；硬部线逻辑控制为主，适合采用流水线")]),t._v(" "),v("td",[t._v("优化编译，有效支持高级语言")])])])]),t._v(" "),v("h2",{attrs:{id:"流水线"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流水线"}},[t._v("#")]),t._v(" 流水线")]),t._v(" "),v("h3",{attrs:{id:"概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),v("p",[t._v("流水线是指在程序执行时多条指令重叠进行操作的一种准并行处理实现技术。各种部件同时处理是针对不同指令而言的，它们可同时为多条指令的不同部分进行工作，以提高各部件的利用率和指令的平均执行速度。")]),t._v(" "),v("h3",{attrs:{id:"周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#周期"}},[t._v("#")]),t._v(" 周期")]),t._v(" "),v("p",[t._v("流水线周期为执行时间最长的一段\n流水线计算公式：\n1条指令执行时间 + （指令条数 - 1） * 流水线周期\n1.1 理论公式： （t1+t2+..+tk） + (n-1)* t\n1.2 实践公式：（k + n - 1）* t\n注：tn -> 每段的执行时间 n -> 多少条指令 t-> 流水线周期 k-> 一个周期多少段")]),t._v(" "),v("h3",{attrs:{id:"吞吐率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#吞吐率"}},[t._v("#")]),t._v(" 吞吐率")]),t._v(" "),v("p",[t._v("流水线的吞吐率是指在单位时间内流水线所完成的任务数量或输入的结果数量。计算流水线吞吐率的最基本的公式如下:\ntp = 指令条数 / 流水线执行时间\n流水线 最大吞吐率：1 / t  t-> 流水线周期")]),t._v(" "),v("h3",{attrs:{id:"流水线的加速比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流水线的加速比"}},[t._v("#")]),t._v(" 流水线的加速比")]),t._v(" "),v("p",[t._v("完成同样一批任务，不使用流水线所用的时间与使用流水线所用的时间之比\n基本公式如下：\nS = 不适用流水线的执行时间 / 使用流水线的执行时间")])])}),[],!1,null,null,null);_.default=r.exports}}]);