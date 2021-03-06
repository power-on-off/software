# <center> Practicing UML </center>

---

|  姓名  |   学号   |    学院    |   班级   |
| :----: | :------: | :--------: | :------: |
| 苏妍文 | 19334017 | 计算机学院 | 保密管理 |
| 秦一丹 | 19334014 | 计算机学院 | 保密管理 |
|  汪妍  | 19334018 | 计算机学院 | 保密管理 |


**报告日期：2022-03-07**

---

# 一、题目要求

> **分析ATM自动取款机的主要业务逻辑，绘制其九种结果类和行为类的UML模型图**

UML1.5定义了9种。分别是：用例图、类图、对象图、状态图、活动图、顺序图、协作图、组件图、部署图9种。

用例图：从用户角度描述系统功能。

类图：描述系统中类的静态结构。

对象图：系统中的多个对象在某一时刻的状态。

状态图：是描述状态到状态控制流，常用于动态特性建模。

活动图：描述了业务实现用例的工作流程。

时序图：对象之间的动态合作关系，强调对象发送消息的顺序，同时显示对象之间的交互。

协作图：描述对象之间的协助关系。

组件图：一种特殊的UML图来描述系统的静态实现视图。

部署图：定义系统中软硬件的物理体系结构。

# 二、需求分析

ATM自动取款机，持卡人可以使用银行卡，根据密码办理取款、查询余额、转账、现金存款，存折补登，更改密码等业务。

是利用磁性代码卡或智能卡实现金融交易的自助服务，代替银行柜面人员的工作。可提取现金、查询[存款](https://baike.baidu.com/item/存款/943968)余额、进行账户之间转账、[余额](https://baike.baidu.com/item/余额/10844309)查询等工作；还可以进行现金存款、中间业务等工作。持卡人可以使用信用卡或储蓄卡，根据密码办理自动取款、查询余额、转账、现金存款，存折补登，购买基金，更改密码，缴纳手机话费等业务。

1. 客户将银行卡的磁条向下，插入ATM机，银行显示屏提示输入密码。
2. 输入银行卡密码，验证密码是否正确，错误则再次输入密码，正确则进入业务处理。
3. 在屏幕上可看到“查询”、“取款”、“存款”、“转账”、“退卡”等，选择相对应的按键，进行相应的操作。
4. 客户选择是否打印凭条
5. 银行职员对ATM进行维护，增加现金

# 三、UML设计图

## 3.1 用例图

是用户与系统交互的最简表示形式，展现了用户和与他相关的用例之间的关系。

用例图所包含的的结构元素

1. 参与者(Actor)——与应用程序或系统进行交互的用户、组织或外部系统。用一个小人表示。
2. 用例(Use Case)——用例就是外部可见的系统功能，对系统提供的服务进行描述。用椭圆表示。
3. 子系统(Subsystem)——用来展示系统的一部分功能，这部分功能联系紧密。

涉及的关系有关联、泛化、包含、扩展

> 客户需要进行操作，银行卡直接插入到ATM机器中，银行职员维护ATM机，分析系统的参与者有：持有银行卡的客户、银行卡、银行职员

### 3.1.1 客户业务用例

| 序号 | 用例名称 | 描述                                                   |
| ---- | -------- | ------------------------------------------------------ |
| 1    | 存款     | 客户可以在ATM将现金存入银行卡操作                      |
| 2    | 取款     | 客户可以在ATM将银行卡中的钱取出                        |
| 3    | 转账     | 客户可以在ATM将银行卡中的钱转到其他人的银行卡上        |
| 4    | 查询余额 | 客户可以在ATM查看银行卡的余额                          |
| 5    | 打印凭条 | 客户进行存款、取款转账操作后，可以自主选择是否打印凭条 |


### 3.1.2 ATM管理员用例

| 序号 | 用例名称 | 描述                               |
| ---- | -------- | ---------------------------------- |
| 1    | 维护ATM  | ATM管理员定期对ATM进行维护修理     |
| 2    | 添加现金 | ATM管理员定期对ATM进行添加现金操作 |


### 3.1.3 整体用例图

![.png](https://github.com/power-on-off/software/blob/main/Week4_uml/src/%E7%94%A8%E4%BE%8B%E5%9B%BE.png)



## 3.2 类图

类图是描述类、接口、协作以及它们之间关系的图，用来显示系统中各个类的静态结构。

从需求分析中，可以主要建立11个类的对象：

客户(Customer)，ATM自动取款机（ATM），银行账户(Account)，ATM管理员(Admin)，ATM屏幕(Screen)，键盘输入(Keyboard)，读卡机(Card_reader)，存钞机（Cash_dispenser），交易内容(Voucher)，银行(Bank_database)，所有用户(Client)

1. 管理员类（Admin）和客户类（Customer）均由用户(Client)继承而来，具有泛化关系，同时两者都对ATM机有不同的使用权限，与ATM具有关联关系。
2. ATM屏幕(Screen)，键盘输入(Keyboard)，读卡机(Card_reader)，存钞机（Cash_dispenser）与ATM自动取款机（ATM）是组合关系，有不同的功能，为ATM机不可分割的一部分。
3. 银行里有多个不同的账户(Account)，每个银行账户(Account)都有多个交易内容(Voucher)，账户与银行之间，交易内容与账户之间都具有聚合关系

![在这里插入图片描述](https://img-blog.csdnimg.cn/f6b0465c4a03440e93a15eb0aaaf9fdf.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6I2S5pmT6Iqc,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

## 3.3 对象图

对象图描述的是参与交互的各个对象在交互过程中某一时刻的状态。和类图一样，对象图对系统的静态设计或静态进程视图建模，对象图更注重现实或原型实例，这种视图主要支持系统的功能需求，对象图描述了静态的数据结构。对象图可以被看作是类图在某一时刻的实例。

用户对象图
![2.png](/api/users/image?path=8719/images/1646990632813.png)

整体对象图
![.png](/api/users/image?path=8719/images/1646990653032.png)


## 3.4 状态图

最直接的状态有未登录状态、选择服务状态、退卡状态，即没进行任何交易操作下操作流程。而在选择服务状态中，可以进行转账、存款、取款、查询余额的操作。

1. 用户插入卡，即进入到“插入卡”的状态，密码输入错误则会一直返回“未登录”，密码输入正确则开始选择服务。
2. 选择存款或者取款服务，则打开Cash_dispenser可进行放钱/取钱操作。还可以选择转账，查询余额操作。这些操作都能在中途进行取消，返回到“选择服务”页面。
3. 进行完转账或者存钱与取钱操作后可以自主选择打印凭证，无论是否打印凭条都会进入到显示余额状态。
4. 完成业务后进行退卡操作。
   ![.png](/api/users/image?path=8719/images/1646990673509.png)



## 3.5 活动图

活动图描述一次活动的进行过程

### 1. 用户登录

![在这里插入图片描述](https://img-blog.csdnimg.cn/7ed0a345c7c64a09b21f9e7f8a918e66.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

- **动作描述：**

1. 插入银行卡：用户插入银行卡
2. 判断该银行卡是否为该行所有：事务处理器判断该银行卡是否属于本银行，是的话进入下一步,否则退出
3. 输入密码：用户输入密码
4. 验证密码是否正确：事务处理器搜索数据库匹配密码，是的话进入主界面，否则退出进入主界面：显示该用户的主界面

- **泳道：**

1. ATM界面：是开始端与结束端，向用户提供选择服务
2. 用户：与ATM系统进行交互，从ATM界面中选择自己所需要的服务
3. 事务管理器：处理系统，负责处理用户选择的功能

### 2. 存款

![在这里插入图片描述](https://img-blog.csdnimg.cn/8cf10dcbbcce459ab4e553c8a7ee1870.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

- **动作描述：**

1. 选择存款选项放入现金：用户选择存款并将现金放入点钞机中
2. 退还不可识别的现金：点钞机判断该现金不可识别拒绝接收，将其退还给用户
3. 返回可存入的金额数值：点钞机清点可存入的现金数额，告知管理器，管理器向用户显示数额
4. 修改数据库信息，将现金入库：将用户存入的现金放入库中，并修改用户的数据库信息

- **泳道：**

1. ATM界面：是开始端与结束端，向用户提供选择服务
2. 用户：与ATM系统进行交互，从ATM界面中选择自己所需要的服务
3. 事务管理器：处理系统，负责处理用户选择的功能
4. 点钞机：用于验证钞票的真假，以及出钞和入钞

### 3. 取款

![在这里插入图片描述](https://img-blog.csdnimg.cn/c1f45058de2c46a799cd870b8969f86f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

- **动作描述：**

1. 选择取款选项输入取款金额：用户选择取款并输入取款金额数量
2. 出钞：点钞机按照用户输入的现金数量取出钞票
3. 取走现金：用户从点钞机中取走现金

- **泳道：**

1. ATM界面：是开始端与结束端，向用户提供选择服务
2. 用户：与ATM系统进行交互，从ATM界面中选择自己所需要的服务
3. 事务管理器：处理系统，负责处理用户选择的功能
4. 点钞机：用于验证钞票的真假，以及出钞和入钞

### 4. 转账

![在这里插入图片描述](https://img-blog.csdnimg.cn/75e86d255b444c06a308edd228979f25.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

- **动作描述：**

1. 选择转账选项输入转账卡号：用户选择转账并输入需要向哪个银行卡转账的卡号
2. 输入转账金额：用户输入转账金额数
3. 进行转账：管理器修改数据库信息，完成转账操作

- **泳道：**

1. ATM界面：是开始端与结束端，向用户提供选择服务
2. 用户：与ATM系统进行交互，从ATM界面中选择自己所需要的服务
3. 事务管理器：处理系统，负责处理用户选择的功能

### 5. 查询余额

![在这里插入图片描述](https://img-blog.csdnimg.cn/37f26d35cce24eccb8fd476535935c52.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

- **动作描述：**

1. 选择查询余额选项：用户选择查询余额
2. 访问数据库读取账户余额：管理器访问当前用户账户的数据库，读取余额数
3. 显示余额：界面显示用户余额

- **泳道：**

1. ATM界面：是开始端与结束端，向用户提供选择服务
2. 用户：与ATM系统进行交互，从ATM界面中选择自己所需要的服务
3. 事务管理器：处理系统，负责处理用户选择的功能

### 6. 打印凭条

![在这里插入图片描述](https://img-blog.csdnimg.cn/bf076603e89b454eb9b043fa89d17722.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

- **动作描述：**

1. 选择打印凭条操作：用户选择打印凭条
2. 调用打印机：管理器调用打印机
3. 取走凭条：用户取走打印好的凭条

- **泳道：**

1. ATM界面：是开始端与结束端，向用户提供选择服务
2. 用户：与ATM系统进行交互，从ATM界面中选择自己所需要的服务
3. 事务管理器：处理系统，负责处理用户选择的功能

### 7. 退出系统![在这里插入图片描述](https://img-blog.csdnimg.cn/31ca47535dd54d0892d650f09417210f.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

- **动作描述：**

1. 选择退出系统：用户选择退出选项
2. 退出登录状态并退还银行卡：管理器注销用户登录状态并退还银行卡
3. 返回主界面：确认阶段如果用户选择不退出则返回主界面

- **泳道：**
  
  ```
  ATM界面：是开始端与结束端，向用户提供选择服务
  
    用户：与ATM系统进行交互，从ATM界面中选择自己所需要的服务
  
    事务管理器：处理系统，负责处理用户选择的功能
  ```

## 3.6  时序图

### 0. 对象描述

|对象名称|是否为主动对象|与之相关的其他对象 |
|------------|---------------------|----------------------------|
|客户 | 是 | 操作界面、ATM、后台管理系统|
|操作界面 | 否 | 客户、ATM、后台管理系统|
|ATM | 否 | 客户、操作界面、后台管理系统|
|后台管理系统 | 否 | 客户、操作界面、ATM|


### 1. 用户登录

![在这里插入图片描述](https://img-blog.csdnimg.cn/d5cbb26ae74a47769f41a54563b28496.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 2. 存款

![在这里插入图片描述](https://img-blog.csdnimg.cn/7b35eb511ed44bef88f0bded2390c783.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 3. 取款

![在这里插入图片描述](https://img-blog.csdnimg.cn/94fb75bb53f94642a7c2bc89a74de454.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 4. 转账

![在这里插入图片描述](https://img-blog.csdnimg.cn/be4752a8f7404256a1d725ea52e8e952.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 5. 查询余额

![在这里插入图片描述](https://img-blog.csdnimg.cn/fc765f0f6e0d413fa9474d2856b922dc.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 6. 打印凭条

![在这里插入图片描述](https://img-blog.csdnimg.cn/286661c94dd64dab8615d18892530b80.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

### 7. 退出系统

![在这里插入图片描述](https://img-blog.csdnimg.cn/1947835c72ea4c3f83bafbac85a02f2c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAUV9VbmRlZmluZWQ=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center)

## 3.7 协作图

协作图：描述对象之间的协助关系，强调对象之间的组织结构，可以和时序图互相转化
表达客户、处理器、屏幕等对象之间在执行不同操作的时候的控制流建模和信息传递过程

### 1.取款

![ATM.png](/api/users/image?path=8719/images/1646990378263.png)

### 2.存款

![.png](/api/users/image?path=8719/images/1646990060037.png)

### 3.转账并打印凭条

![ATM.png](/api/users/image?path=8719/images/1646990387537.png)

### 4.查询余额

![ATM.png](/api/users/image?path=8719/images/1646990440656.png)

### 5.退卡

![ATM.png](/api/users/image?path=8719/images/1646990447611.png)

## 3.8 组件图
组件图：描述系统的静态实现视图

![ATM.png](/api/users/image?path=8719/images/1646990848903.png)

## 3.9 部署图
部署图：定义系统中软硬件的物理体系结构。

一个银行可以部署多个ATM客户机，ATM客户机的可执行文件可以在多个ATM上运行。ATM客户机通过局域网与银行的ATM服务器通信。ATM服务器又通过专用网与银行数据库服务器进行通信。

![.png](/api/users/image?path=8719/images/1646991284459.png)

