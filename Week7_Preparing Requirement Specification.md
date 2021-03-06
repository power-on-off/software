# <center><font face = "黑体" size = 10>Preparing Requirement Specification </font></center>

<center><font face = "黑体" size = 10>（青呱呱记账） </font></center>

---

| **姓名**  | **学号**  | **学院**   | **班级**  |
| ------------ | ------------ | ------------- | ------------ |
| 苏妍文     | 19334017   | 计算机学院  | 保密管理   |
| 秦一丹     | 19334014   | 计算机学院  | 保密管理   |
| 汪妍       | 19334018   | 计算机学院  | 保密管理   |

**报告日期：2022-04-01**

---

# 一、项目需求分析报告

## 1、成本预算

青呱呱记账APP不用于盈利，不考虑收益问题，但如果需要维护幸运签数据库，就需要继续租用数据库所在的云服务器，会产生一定的费用，预计300元一年。后续可以根据实际情况动态调整相关功能，以减少经济支出。

## 2、交付进度

### **2.1 总体安排**

根据课程的安排，最迟在第18周（2022年6月10日），约为77天，就需要完成整个流程。项目共包括三个大阶段，具体可以细分为6个小阶段，其中阶段二到阶段四为代码编写部分，每个阶段都有一项或多项具体内容。分别为项目准备阶段、幸运签后端交互接口设计阶段、客户端APP界面设计阶段、客户端APP核心功能设计阶段、APP上线测试阶段、调整阶段。

### **2.2 具体进度交付**

##### **2.2.1 项目准备阶段**

时间：2022-4-8之前 ，共14天

具体内容：

1. 小组成员讨论，进行项目内容的确定，撰写开题报告。
2. 收集信息，进行项目可行性分析，撰写报告。
3. 项目需求分析，撰写需求规格文档
4. 业务UML建模

##### **2.2.2 幸运签后端交互接口阶段**

时间：2022-4-9~2022-4-15，共7天

具体内容：

1. 进行幸运签数据库的设计。进行概念结构设计，关系模型设计，表的创建与数据创建。
2. 设计php后台与幸运签数据库的交互接口。接收到客户端请求后，php登录数据库管理系统，进行相应的操作。
3. 设计php页面与APP客户端的交互接口。包括接收幸运签以及上传幸运签的接口。

##### **2.2.3 界面设计阶段**

时间：2022-4-16~2022-4-22，共7天

具体内容：

1. 确定客户端APP的视觉主题，选取素材
2. 进行客户端APP前端界面布局设计
3. 设计客户端页面跳转

##### **2.2.4 核心功能设计阶段**

时间：2022-4-23~2022-5-13，共21天

具体内容：

1. 客户端的本地数据库设计。设计SQLite数据库对账单、事项进行持久化存储。
2. 设计客户端APP的其他核心功能。包括记账，事项的存储和统计功能。

##### **2.2.5 上线测试阶段**

时间：2022-5-14~2022-5-27，共14天

具体内容：

1. 进行APP的上线，在一定范围内给予不同客户进行使用
2. 编写测试计划，对项目进行测试
3. 发现问题，按照可行方法修改出现问题的部分，解决问题

##### **2.2.6 调整阶段**

时间：2022-5-28~2022-6-10，共14天

具体内容：

1. 灵活运用该阶段的时间，继续完成前几个阶段未完成的任务。
2. 对APP进行进一步的测试和调整。

## 3、开发方法

由于小组内仅有三人，且开发的项目较小，时间跨度也不大，所以采用的是敏捷开发方法。

敏捷开发是以人为核心、迭代、循序渐进的开发过程指导思想。在敏捷开发过程中，软件项目的构建被切分成3个子项目，各个子项目之间相互联系、独立运行。该项目分为幸运签后端交互接口设计阶段、客户端APP界面设计阶段、客户端APP核心功能设计阶段，客户端APP核心功能的设计，又能分为记账、事务的2个子项目。

敏捷开发的总体目标是通过“尽可能早地、持续地交付有价值的软件”，使客户满意。尽早做完重要的编码，在几天到一星期内分阶段向客户交付可用的版本，使客户见到可运行的软件，并获得客户的优化意见，以不断迭代修改。

## 4、质量保证

软件质量保证在整个软件开发直到软件的使用中发挥的作用非常大，反之，不能保证软件的质量则会带来相当严重的后果，为了保证软件的质量，我们主要从几个方面进行审核，包括计划审核，编码过程审核，成果审核。

1. 计划审核方面，对产品的需求进行分析，通过用户调研，发用户户满意的地方及不满意的地方，寻找顾客真实的需求，促进服务工作质量的提高。同时进行市场调查，参照相关软件的情况，评估其业绩，跟踪分析，借鉴优点。在审核时，对有问题项及时修改计划，使产品符合用户需求。
2. 编码过程审核方面，首先要求小组成员提高规范意识，严格按照代码规范编写代码，代码应该简洁易懂，逻辑清晰，还需要附有一定的注释便于他人阅读。在编写完几行或者一小块代码后，尽早审核测试，对有BUG的地方及时修改，防止代码问题蔓延。
3. 成果审核方面，主要基于软件测试，尽早、不断的进行测试，对安全性、性能、可靠性、可用性进行测试，同时组内成员交换测试非自己编码的部分，及时发现潜在的问题，先保证程序的正确性，防止过度工程。

## 5、验证和确认准则

1. 项目需求文档的内容应经过详细的市场调研，符合用户实际需求。
2. 项目完成的功能宜与需求文档一致，且保证编码地质量。
3. 服务器的部署应做好安全保护措施，应及时修补漏洞。
4. 相关幸运签后端交互接口应增强防范，防止SQL注入。
5. 客户端APP界面宜基本符合大众审美，遵循UI设计规范，页面重点突出，界面简洁清晰，引导信息明确，功能描述一致。
6. 软件运行过程中应具有稳定性，不产生无故闪退、卡顿等异常情况。
7. 软件测试应在规定的条件下对程序进行操作，发现程序错误，鉴定软件的正确性、完整性、安全性和质量。

## 6、验收规程

在验收的流程中，应按照以下规程进行：

1. 项目人员完成相关内容，进入验收步骤。
2. 对软件需求规格说明书的所有功能进行测试。
3. 对软件项目的典型业务流程进行测试，包括对新增账单、查看统计、新增事项，查看事项等。
4. 进行容错性测试，测试软件对用户错误操作能否进行提示，在非联网下能否正常运行。
5. 进行引导测试，对重要数据的删除是否具有警告提示和确认提示。
6. 对于验收的结果进行沟通，如有需要修改的地方，设计修改方案并及时调整修改。
7. 确认无误后完成验收。

# 二、软件需求规格说明书（SRS）

## 1  引言

### 1.1 目的

本文是对青呱呱记账APP的需求分析的文档，描述开发该软件的所要实现的功能和目标，以及对于该软件的完整描述。主要是为开发人员提供基本思路，有利于对项目的后续维护。

### 1.2 范围

青呱呱记账APP是一个简洁的，有吸引力的具有记账、事项功能的软件。该APP完全免费，不用于盈利，仅仅作为工具使用。其不侵犯个人隐私，所有与用户相关的信息都会储存在用户本地的缓存中，只有进行幸运签功能时才需要与远程服务器进行连接。

### 1.3  定义、简写和缩略语

| 术语       | 含义                                           |
| ------------ | ------------------------------------------------ |
| 青呱呱记账 | 本项目开发的软件的名称                         |
| 用户       | 使用该软件的所有人群                           |
| APP        | 安装在智能手机上的软件                         |
| php        | “超文本预处理器”，是在服务器端执行的脚本语言 |

### 1.4  引用文件

GB/T 9385-2008 计算机软件需求规格说明规范

### 1.5  综述

该文档的其余章节包括两个部分的内容。

第二章节是该项目的总体描述，包括对产品的描述，描述接口、用户界面、具体的功能，分析用户特点，约束，假设和依赖关系以及需求分配。

第三章节则建设该项目的具体需求，包括外部接口，功能需求，性能需求，数据库逻辑需求，各类约束以及软件系统属性。

## 2  总体描述

### 2.1 产品描述

#### 2.1.1 用户界面

【尚未完善】

1. 首页。首页自动显示当前资产，页面上方展示自动获取的幸运签，页面下方用于显示记账明细，顶部分段器切换到事项状态，可以展示今日未完成的事项。
2. 账本页面。主要展示账本统计的结果，收入支出分别展示每个类目的总金额排行。
3. 新增选项的页面。新增记账或待办事项，在弹出的页面进行账单或者事项的内容的填写。
4. 事项页面。按照日期统计事项完成情况，可以查询每日完成情况，以及统计总体的完成率。查看单个习惯事项的完成天数和次数。
5. 我的页面。此页面具有“导入”，“导出”，还具有“上传幸运签”，“搜索幸运签”的功能。

### 2.2 产品功能

用于记录个人的收入支出情况，记录个人资金状况并合理运用资金；进行重要事项记录，进行每日待办事项的记录与计划，更好地规划自己的时间。

### 2.3 用户特点

适用于有记账、记录事项需求的安卓手机用户。

### 2.4 约束

#### 2.4.1高级语言需求

设计该项目需要掌握前端开发框架uni-app，熟悉vue，需要掌握php等后端开发语言，熟悉数据库管理的相关知识，对于开发人员有一定的要求。

### 2.5 假设和依赖关系

【尚未完善】

### 2.6 需求分配

优先进行APP的整体页面布局实现，设置合理的菜单跳转。在功能实现方面，优先实现重要的功能，包括新增记账与新增事项，再其次是记账统计与事项统计，最后则是账单、事项的导出。完成重要功能后，可以对页面进一步优化。

## 3  具体需求

### 3.1 外部接口

#### 3.1.1 项目名称

此产品为一个拥有记账及账单统计功能、重要事项记录及统计功能和每日幸运签打卡模块的简易记账本应用。

#### 3.1.2 目的描述

此产品可用于记录个人的收入支出情况，记录个人资金状况并合理运用资金；也可以进行重要事项记录，进行每日待办事项的记录与计划，更好地规划自己的时间；同时，进行每日打卡会获得随机幸运签，每日一句，既可以收获一份小幸运，也能够扩充自身的文学知识，也可以提交自己喜欢的句子，将它做成幸运签分享给更多使用者。

#### 3.1.3 输入源和输出目的地

输入源主要是使用该项目的用户，主要是用户自主输入需要记录的账单信息或重要事项信息或幸运签提交信息，外部实体主要为需要与系统交互的用户个人。输出目的地为本项目的云端幸运签数据库，可以做到幸运签部分信息的交流，用户向幸运签数据库提交的信息经审核后是其他人可见的，账单或重要事项等隐私信息将会存放在用户本地进行隐私管理。

#### 3.1.4 有限范围、容限

应用支持用户不限，云端数据库支持20用户同时访问，支持GB级数据，数据库表行数不超过10万行，数据库最大容量不超过100GB，磁盘空间需要20G以上。

#### 3.1.5 测量单位

测量单位为访问次数

#### 3.1.6 与其他输入、输出的关系

若之后时间充裕，可能会实现与其他网站的交互。

#### 3.1.7 屏显格式

TXT,DOC,CSV,JPEG,MPEG,DAT,BMP,JPG,GIF

#### 3.1.8 窗口格式

主要参照一般安卓app的格式

#### 3.1.9 数据格式

使用http数据格式

#### 3.1.10 资源使用率

CPU占用率<=50%，内存占用率<=50%

### 3.2 功能需求

#### 3.2.1 对输入有效性的审查

系统应在用户提交自定义幸运签时进行审核，对于违法、不好的信息进行删除并对用户进行一个警告，对于用户提交的输入信息要辨识是否合法以及是否重复。

#### 3.2.2 异常情况响应

##### 3.2.2.1 溢出

系统应在溢出时进行一个警示，告知技术人员溢出，并且终止当前工作

##### 3.2.2.2 错误恢复与处理

系统应在错误恢复和处理时，先对用户进行一个错误提醒，告知用户一段时间后再次尝试，并且保留其之前的数据，并且提醒后台进行修复。

##### 3.2.2.3 通信设施与故障处理

系统应提供运行日志管理及安全审计功能，可追踪系统的历史使用情况；保证7x24运行，全年持续运行故障停运时间累计不超过10小时。

### 3.3 性能需求

#### 3.3.1 支持的终端数量

本应用不存在用户账户信息，所有下载后的app共享同一个云端的幸运签数据库，其余数据均存在于用户手机本地，支持同一用户的终端数量为用户可下载app的手机数量。

#### 3.3.2 支持同时运行的用户数

本应用可能出现同时访问的行为只有幸运签数据库读写，可支持同时运行的用户数为20，读和写之间互斥访问。

#### 3.3.3 要处理的信息量和类型

本应用要处理的信息量适中，主要为用户在使用过程中产生的记账及重要事项记录信息。

### 3.4 数据库逻辑需求

#### 3.4.1 不同功能使用的信息类型

用户记账及重要事项存储模块，数据需要长期存储；用户发送的信息即自定义幸运签数据，在经过审核后需永久存储在云端数据库。

#### 3.4.2 使用频度

用户记账及重要事项数据使用较为频繁；发送的信息使用较少。

#### 3.4.3 访问能力

用户记账及重要事项记录信息储存在用户本地，不可被其他用户访问；用户发送的信息可对全部用户访问

#### 3.4.4 数据保存需求

该应用在使用过程中生成的数据均需长期保存，根据用户的需要进行永久性删除

### 3.5 设计约束

#### 3.5.1 标准依从性

该应用需求采用国家标准GB8567-88

国家标准GB8567-88：对所开发软件的功能、性能、用户界面及运行环境等作出详细的说明。它是在用户与开发人员双方对软件需求取得共同理解并达成协议的条件下编写的，也是实施开发工作的基础。

#### 3.5.2 数据库设计约束

需要进行唯一约束，保证幸运签数据不重复；非空约束，需要保证用户提交的信息非空，同时保证数据同步的准确性。

### 3.6 软件系统属性

#### 3.6.1 可靠性

该应用不存在金钱交易，因此在金钱方面有可靠性，在隐私性上会保护用户的个人信息安全，数据存储在用户本地，其他用户不可访问本用户的隐私内容，具有可靠性。

#### 3.6.2 可用性

该应用在发生错误时会进行错误提醒，提醒用户一段时间后再次进行操作。当用户在联网情况下对幸运签模块进行操作的时候，数据库系统应该及时的进行反应，反应的时间在5秒以内；同时应能够监测出各种非正常情况，如与设备的通信中断，无法连接数据库服务器等，避免出现长时间等待甚至无响应。

#### 3.6.3 安全保密性

该应用有严格的权限管理功能，各功能模块需有相应的权限方能进入。需能够防止各类误操作可能造成的数据丢失，破坏。保证数据在采集、传输和处理过程中不被偷窥、窃取、篡改。业务数据需要在存储时进行加密，确保不可破解。

#### 3.6.4 可维护性

该应用应保证各个模块和接口简洁，做到模块化，以求良好的可维护性；设置bug反馈功能，供用户进行报告，从接到报告后，对于普通修改应在1~2天内完成；对于评估后为重大需求或设计修改应在1周内完成。90%的BUG修改时间不超过1个工作日，其他不超过3个工作日；安装新版本必须保持所有的数据库内容和所有个人设置不变。

#### 3.6.5 可开放性

该应用应有良好的可开放性，以满足之后可能的功能扩展需求。

#### 3.6.6 可兼容性

该应用支持IOS，Android，Windows操作系统；替换关系数据库系统的平均时间不超过2小时，并且保证没有数据丢失。

### 3.7 具体需求的组织

#### 3.7.1 用户类型

该应用面向拥有记账需求或记录每日事项及完成度需求的人群

#### 3.7.2 对象

该应用的对象为几乎所有年龄层次、能够使用手机的、有随身记账或记录事项需求的、追求简洁高效的社会人群

#### 3.7.3 特征

该类人群成分复杂，特征提取困难，但主要特征为条理清晰、对自身有较为严格的约束、自控力强、追求简洁高效的使用体验。

### 3.8 约束

#### 3.8.1 时间和金钱约束

时间周期为2个月，金钱约束为300元。

#### 3.8.2 技术约束

##### 3.8.2.1 目标部署平台

该项目计划在租用的阿里云服务器建立数据库，app部署在安卓系统中

##### 3.8.2.2 技术成熟度

该项目技术使用较为保守，基本使用较为常见且成熟的技术。

##### 3.8.2.3 开放源代码

该项目不开源代码。

#### 3.8.3 人员约束

该项目一共有3个人，人员较少，但都具有一定的学习能力。

#### 3.8.4 组织约束

该项目组织的宽松度较大，可以在比较大的范围内实现想要的功能。
