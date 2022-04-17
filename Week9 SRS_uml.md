# <center><font face = "黑体" size = 10>Requirement Specification </font></center>

<center><font face = "黑体" size = 10>（青呱呱记账） </font></center>

---

| **姓名**  | **学号**  | **学院**  | **班级**  |
| ------------ | ------------ | ------------ | ------------ |
| 苏妍文     | 19334017   | 计算机学院 | 保密管理   |
| 秦一丹     | 19334014   | 计算机学院 | 保密管理   |
| 汪妍       | 19334018   | 计算机学院 | 保密管理   |

**报告日期：2022-04-15**

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

1. 项目完成的功能宜与需求文档一致，且保证编码地质量。
2. 服务器的部署应做好安全保护措施，应及时修补漏洞。
3. 相关幸运签后端交互接口应增强防范，防止SQL注入。
4. 客户端APP界面宜基本符合大众审美，遵循UI设计规范，页面重点突出，界面简洁清晰，引导信息明确，功能描述一致。
5. 软件运行过程中应具有稳定性，不产生无故闪退、卡顿等异常情况。
6. 软件测试应在规定的条件下对程序进行操作，发现程序错误，鉴定软件的正确性、完整性、安全性和质量。

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

## 1 引言

### 1.1 目的

本文是对青呱呱记账APP的需求分析的文档，描述开发该软件的所要实现的功能和目标，以及对于该软件的完整描述。

本文档预期的读者是项目开发人员，主要是为开发人员提供基本思路，有利于对项目的后续维护。

### 1.2 范围

项目完整名称：青呱呱记账APP

项目提出人员与开发人员：小组内成员3人

项目应用：青呱呱记账APP是一个简洁的，有吸引力的具有记账、事项功能的软件。该APP完全免费，不用于盈利，仅仅作为个人工具使用。且不侵犯个人隐私，所有与用户相关的信息都会储存在用户本地的缓存中，只有进行幸运签功能时才需要与远程服务器进行连接。用以在保证隐私安全的情况下，提高个人生活质量，办事效率。

### 1.3 定义、简写和缩略语

本文档的术语定义如下表所示

| **编号**  | **术语**  | **含义**                                      |
| ------------ | ------------ | ------------------------------------------------ |
| 1          | 青呱呱记账 | 本项目开发的软件的名称                         |
| 2          | 用户       | 使用该软件的所有人群                           |
| 3          | APP        | 安装在智能手机上的软件                         |
| 4·        | php        | “超文本预处理器”，是在服务器端执行的脚本语言 |
| 5          | 日常事项   | 每天固定进行的活动                             |
| 6          | 临时事项   | 临时的活动                                     |

### 1.4 引用文件

GB/T 9385-2008 计算机软件需求规格说明规范

### 1.5 综述

该文档的其余章节包括两个部分的内容。

第二章节是该项目的总体描述，包括对产品的描述，用户界面、具体的功能，分析用户特点，约束，假设和依赖关系以及需求分配。

第三章节则建设该项目的具体需求，包括外部接口，功能需求，性能需求，数据库逻辑需求，各类约束以及软件系统属性。

## 2 总体描述

### 2.1 产品描述

#### 2.1.1 用户界面

##### 2.1.1.0 整体布局

该青呱呱APP由屏幕下方的导航栏控制功能页面，使用样式为底部（舵式）拓展栏，将APP功能分为5个板块，从左到右依次排列为：首页板块，账本板块，中间突出的“新增内容”板块，事项板块，个人板块。用户点击导航项，进入板块页面进行相应功能的使用，板块有二层页面的，在二层页面左上方设置返回，返回到初始页面。

##### 2.1.1.1 首页板块

该板块用于展示用户当日状态。页面默认为记账内容状态，从上到下展示内容为：当前资产，自动获取的幸运签，分条列出的记账明细，包括记账时间与记账金额。

顶部具有分段器，可以将切换到事项状态，展示今日未完成的事项，可以将其切换为已完成状态。

##### 2.1.1.2 账本板块

该板块用于展示账本统计的结果。顶部具有分段器，选择收入支出，在页面分别展示每个类目的总金额排行，可以选择正序或倒序查看。

##### 2.1.1.3 “新增内容”板块

该板块用于新增内容。点击弹出两个二级选项：新增记账或者新增待办事项，左上角可跳转回主页。

1. 新增记账，在弹出窗口中进行记账。顶部具有选择收入支出选项，下方输入账单金额。
2. 新增待办事项，在弹出窗口中新增待办事项。顶部选择日常事项或临时事项。日常事项只需填写事项类型；临时事项则需要填写事项内容和起止日期。

##### 2.1.1.4 事项板块

该板块用于展示事项情况分析结果。默认是日期模式，展示今日完成事项以及未完成事项，以及当日事项的完成率，点击选择日期可以查看该日期的事项完成情况。在上方选项里切换为单事项模式，则按照顺序查看单个习惯事项的完成天数和次数。

##### 2.1.1.5 个人板块

该板块是个人页面，具有备份以及转移功能。此页面从上至下具有选项：“导入”，“导出”，“上传幸运签”，“搜索幸运签”。

1. 导入，将按照格式记录的文件导入软件。
2. 导出，将转化为文件形式导出。
3. 上传幸运签，在弹出窗口填写幸运签内容，上传者姓名，在联网状态下自动将请求上传至服务器。
4. 搜索幸运签，按照上传者姓名搜索幸运签，确认是否上传成功。

#### 2.1.2 系统接口

##### 2.1.2.1 幸运签获取接口

用户随机获取幸运签，每日获取的幸运签相同。

##### 2.1.2.2 幸运签上传接口

用户上传幸运签，提交给后台审核。

##### 2.1.2.3 幸运签搜索接口

用户根据幸运签的姓名搜索数据库中的幸运签，查看是否成功通过审核。

##### 2.1.2.4 幸运签审核接口

人工审核已提交的幸运签，通过的提交至幸运签数据库。

### 2.2 产品功能

产品具有的五大板块展示了产品的所有功能。

1. 首页板块用于展示用户当日状态。显示当前资产，幸运签，分条列出的记账明细，包括记账时间与记账金额。同时能展示今日未完成的事项，可以将其切换为已完成状态。
2. 账本板块用于展示账本统计的结果。
3. 新增内容板块用于新增记账或者新增待办事项
4. 事项板块用于展示事项情况分析结果，包括按日期展示完成事项以及未完成事项，以及当日事项的完成率，还能查看单个习惯事项的完成天数和次数。
5. 个人板块用于数据备份以及数据转移功能，同时还能幸运签的上传互动。

### 2.3 用户特点

用户群体为安卓手机用户，具有记账、记录事项需求，又希望软件无冗余功能。

### 2.4 约束

#### 2.4.1 法律政策

根据我国法律规定，移动互联网应用程序提供者应当严格落实信息安全管理责任，建立健全用户信息安全保护机制，依法保障用户在安装或使用过程中的知情权和选择权，尊重和保护知识产权。由于本应用可以完全离线操作，因此对于用户信息的可知范围极小，相关备案手续不会过于复杂。

#### 2.4.2 高级语言需求

设计该项目需要掌握前端开发框架uni-app，熟悉vue，需要掌握php等后端开发语言，熟悉数据库管理的相关知识，对于开发人员有一定的要求，总体要求较高，难度较大。

#### 2.4.3 应用的关键性

该应用主要面对拥有记账需求或记录每日事项及完成度需求的人群，应满足该类人群的需求，尽可能为该类人群希望能够进行简洁高效的记账或记录操作提供帮助。

#### 2.4.4 安全和保密安全考虑

由于该应用的幸运签数据库是可以被用户访问的，所以存在sql注入等被攻击风险，但该应用将用户的关键数据信息记录在本地，被攻击的风险较低，同时该应用为非营利性应用，一定程度上也降低了潜在的被攻击风险。

### 2.5 假设和依赖关系

1. 考虑到在未连网状态，或者将来幸运签数据库无法继续维护，将存在无法与数据库进行通信的风险，所以幸运签互动相关操作需要具有可修改性，即在特殊情况下整个APP仍能顺利使用其他的功能。
2. 由于时间因素与人员因素限制，因此在无法完成所有任务的情况下，应优先完成该应用的最基本记账及统计功能。

### 2.6 需求分配

优先进行APP的整体页面布局实现，设置合理的菜单跳转。在功能实现方面，优先实现重要的功能，包括新增记账与新增事项，再其次是记账统计与事项统计，最后则是账单、事项的导出。完成重要功能后，可以对页面进一步优化。

## 3 具体需求

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

若之后时间充裕，可能会实现其他的幸运签互动功能。

#### 3.1.7 屏显格式

TXT,DOC,CSV,JPEG,MPEG,DAT,BMP,JPG,GIF

#### 3.1.8 窗口格式

主要参照一般安卓APP的格式

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

本应用不存在用户账户信息，所有下载后的APP共享同一个云端的幸运签数据库，其余数据均存在于用户手机本地，支持同一用户的终端数量为用户可下载APP的手机数量。

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

用户记账及重要事项记录信息储存在用户本地，不可被其他用户访问；用户发送的信息可对全部用户访问。

#### 3.4.4 数据保存需求

该应用在使用过程中生成的数据均需长期保存，根据用户的需要进行永久性删除。

### 3.5 设计约束

#### 3.5.1 标准依从性

该应用需求采用国家标准GB8567-88

国家标准GB8567-88：对所开发软件的功能、性能、用户界面及运行环境等作出详细的说明。它是在用户与开发人员双方对软件需求取得共同理解并达成协议的条件下编写的，也是实施开发工作的基础。

#### 3.5.2 数据库设计约束

需要进行唯一约束，保证幸运签数据不重复；非空约束，需要保证用户提交的信息非空，同时保证数据同步的准确性。

### 3.6 软件系统属性

#### 3.6.1 可靠性

该APP不存在交易，在金钱方面有可靠性。数据存储在用户本地，其他用户不可访问本用户的隐私内容，保护用户的个人信息安全，具有可靠性。

#### 3.6.2 可用性

该APP在发生错误时会进行错误提醒，提醒用户一段时间后再次进行操作。当用户在联网情况下对幸运签模块进行操作的时候，数据库系统应该及时的进行反应，反应的时间在5秒以内；同时应能够监测出各种非正常情况，如与设备的通信中断，无法连接数据库服务器等，避免出现长时间等待甚至无响应。

#### 3.6.3 安全保密性

该APP对幸运签数据库的通信具有严格权限限制，能够防止各类误操作可能造成的数据丢失，破坏。同时其保存在本地的数据进行加密，防止被偷窥、窃取、篡改。

#### 3.6.4 可维护性

1. 该APP应保证各个模块和接口简洁，做到模块化，以求良好的可维护性；
2. 设置bug反馈功能，供用户进行报告，从接到报告后，对于普通修改应在1~2天内完成；对于评估后为重大需求或设计修改应在1周内完成。90%的BUG修改时间不超过1个工作日，其他不超过3个工作日；安装新版本必须保持所有的数据库内容和所有个人设置不变。

#### 3.6.5 可开放性

该应用应有良好的可开放性，以满足之后可能的功能扩展需求。

#### 3.6.6 可兼容性

该应用仅支持Android系统，如有需求替换关系数据库系统的平均时间不超过2小时，并且保证没有数据丢失。

### 3.7 具体需求的组织

#### 3.7.1 用户类型

该应用面向拥有记账需求或记录每日事项及完成度需求的人群。

#### 3.7.2 对象

该应用的对象为几乎所有年龄层次、能够使用手机的、有随身记账或记录事项需求的、追求简洁高效的社会人群。

#### 3.7.3 特征

该类人群成分复杂，特征提取困难，但主要特征为条理清晰、对自身有较为严格的约束、自控力强、追求简洁高效的使用体验。

### 3.8 约束

#### 3.8.1 时间和金钱约束

时间周期约为2个月，金钱约束为300元。

#### 3.8.2 技术约束

##### 3.8.2.1 目标部署平台

该项目计划在租用的腾讯云服务器建立数据库，APP部署在安卓系统中。

##### 3.8.2.2 技术成熟度

该项目技术使用较为保守，基本使用较为常见且成熟的技术。

##### 3.8.2.3 开放源代码

该项目不开源代码。

#### 3.8.3 人员约束

该项目一共有3个人，人员较少，但都具有一定的学习能力。

#### 3.8.4 组织约束

该项目组织的宽松度较大，可以在比较大的范围内实现想要的功能。

## 4 UML图

> **根据需求分析报告和SRS，绘制相应的UML图**

本次实验根据实际情况，我们只画了7种uml图，分别是：用例图、类图、对象图、状态图、时序图、组件图、部署图。

### 4.1 用例图

是用户与系统交互的最简表示形式，展现了用户和与他相关的用例之间的关系。

#### 4.1.1用户用例

| **序号**  | **用例名称**  | **描述**                                                 |
| ------------ | ---------------- | ----------------------------------------------------------- |
| 1          | 记账管理       | 用户可以查询资产、新增记账、查询记账、记账分析、账单删除  |
| 2          | 事项管理       | 用户可以新增事项、事项查看、事项分析、事项完成            |
| 3          | 幸运签模块     | 用户可以查看今日幸运签、上传幸运签、搜索幸运签            |
| 4          | 数据管理       | 用户可以导出数据、导入数据                                |

![](.\Week9 SRS_uml\图片\1用例图_用户.png)



#### 4.1.2 管理员用例

| **序号**  | **用例名称**       | **描述**                                     |
| ------------ | --------------------- | ----------------------------------------------- |
| 1          | 管理幸运签数据库    | 管理员对幸运签数据库进行添加、查询和删除操作  |
| 2          | 审核缓冲区的幸运签  | 管理员定期审核用户上传至缓冲区的幸运签        |

![](.\Week9 SRS_uml\图片\1用例图_管理员.png)


### 4.2 类图

类图是描述类、接口、协作以及它们之间关系的图，用来显示系统中各个类的静态结构。

从需求分析中，可以主要建立11个类的对象：

用户、管理员、缓冲数据库、幸运签数据库、幸运签模块、账单列表、账单、事项列表、事项、习惯事项、临时事项

1. 临时事项和习惯事项均由事项继承而来，具有泛化关系。
2. 用户依赖于幸运签数据库和缓冲数据库，关联于事项列表和账单列表；管理员与幸运签数据库和缓冲数据库之间存在关联关系
3. 账单列表和账单之间、事项列表和事项之间、缓冲数据库和幸运签模块之间、幸运签数据库和幸运签模块之间存在聚合关系

![](.\Week9 SRS_uml\图片\2类图.png)


### 4.3 对象图

对象图描述的是参与交互的各个对象在交互过程中某一时刻的状态，可以被看作是类图在某一时刻的实例。

![](.\Week9 SRS_uml\图片\3对象图.png)
### 4.4 状态图

![](.\Week9 SRS_uml\图片\状态图.png)



### 4.5 时序图

#### 4.5.1 对象描述

| **对象名称**  | **是否为主动对象**  | **与之相关的其他对象**                    |
| ---------------- | ---------------------- | -------------------------------------------- |
| 用户           | 是                   | 应用界面、记账模块、硬件存储模块、事项模块 |
| 应用界面       | 否                   | 用户、记账模块、硬件存储模块、事项模块     |
| 硬件存储模块   | 否                   | 用户、应用界面、记账模块、事项模块         |
| 记账模块       | 否                   | 用户、应用界面、硬件存储模块               |
| 事项模块       | 否                   | 用户、应用界面、硬件存储模块               |
| 幸运签模块     | 否                   | 用户、应用界面、硬件存储模块、缓冲数据库   |
| 缓冲数据库     | 否                   | 用户、应用界面、硬件存储模块、幸运签模块   |

#### 4.5.2记账管理

![](.\Week9 SRS_uml\图片\时序_记账管理.png)
#### 4.5.3 事项管理

![](.\Week9 SRS_uml\图片\时序_事项管理.png)
#### 4.5.4 幸运签模块

![](.\Week9 SRS_uml\图片\时序_幸运签模块.png)
#### 4.5.5 数据管理

![](.\Week9 SRS_uml\图片\时序_数据管理.png)


### 4.6 组件图

系统由APP界面显示幸运签模块、记账管理模块、事项管理模块和数据管理模块，幸运签模块的数据存在幸运签数据库和缓冲区幸运签数据库，其它模块的存在本地存储数据库。
![](.\Week9 SRS_uml\图片\组件图.png)


### 4.7 部署图

系统中软硬件结构，客户端通过接口用互联网连接至各个数据库
![](.\Week9 SRS_uml\图片\部署图.png)
