window.SEARCH_INDEX = [
  {
    "title": "SAP system landscape 系统环境分层",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-001-sap-system-landscape-e11c9fc6.html",
    "excerpt": "1.1 一句话结论 SAP system landscape 系统环境分层，是把 SAP 的开发、测试、生产隔离成一组有迁移路径的系统环境。在 ABAP 项目里，开发者必须先理解 DEV / QAS / PRD 系统分层 与 Transport request 传输请求，才知道代码为什么不能“写完就上线”。 1.2 到底学什么 先把 system landscape 理解成“一个项目里多套 SAP 系统的工作分工”，而不是单纯的服务器清单。典型 SAP 项目不会让开发者直接在生产系统里改程序。开发通常发生在 DEV"
  },
  {
    "title": "Application Server ABAP 运行时基础",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-002-application-server-abap-b0de96bf.html",
    "excerpt": "2.1 一句话结论 Application Server ABAP（AS ABAP）是 ABAP 程序真正被调度、执行、访问数据库、返回结果的应用层运行环境。理解它，才能把前一节的 SAP system landscape 系统环境分层 连接到“ABAP 代码到底在哪里跑、为什么会有 work process、short dump、background job 和性能分析”。 2.2 到底学什么 先把 Application Server ABAP 理解成 SAP 系统中的“ABAP 应用运行层”，不是某一台物理服"
  },
  {
    "title": "ABAP Platform 平台概念",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-003-abap-platform-fe67ad23.html",
    "excerpt": "3.1 一句话结论 ABAP Platform 是 SAP 用来承载 ABAP based solutions 的技术平台，不等于 SAP S/4HANA 这个业务产品，也不等于 ADT 这个开发工具。学它的目的，是把前两节的 SAP system landscape 系统环境分层 和 Application Server ABAP 运行时基础 放进更大的“产品 / 平台 / 运行时 / 开发模型”地图里。 3.2 到底学什么 先抓一个边界：ABAP Platform 是“技术基盘”，不是“业务套件”。SAP He"
  },
  {
    "title": "SAP S/4HANA 业务套件定位",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-004-sap-s-4hana-932c3511.html",
    "excerpt": "本节结论 SAP S/4HANA 是 SAP 的下一代 ERP / business suite 产品；它运行在 SAP HANA 上，面向企业核心业务流程，不等于数据库、IDE、ABAP Platform 或 ABAP Cloud 开发模型。 正文 学习 SAP S/4HANA，第一步不是背模块名，而是把它放在正确的位置上。SAP 官方资料把 S/4HANA 的完整名称解释为 SAP Business Suite 4 (for) SAP HANA。这里的重点有两个：它是 Business Suite，也就是承载企"
  },
  {
    "title": "SAP BTP ABAP environment 云开发环境",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-005-sap-btp-abap-environment-9f7f1d20.html",
    "excerpt": "本节结论 SAP BTP, ABAP environment 是 SAP BTP 上用于 ABAP Cloud 开发的云端 ABAP 环境，常用于 side by side extension 和新云应用开发；它不是 SAP S/4HANA 本体，也不是传统 S/4HANA DEV 系统搬到云上。 正文 学到这里，前四节已经把 SAP S/4HANA、AS ABAP、ABAP Platform 和用户界面/开发模型的边界分开了。本节再加一个位置：SAP BTP。SAP BTP 是 SAP 的业务技术平台，里面有多种"
  },
  {
    "title": "ABAP Cloud 现代开发模型",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-006-abap-cloud-80dd1a89.html",
    "excerpt": "本节结论 ABAP Cloud 是 SAP 面向 cloud ready、upgrade stable 扩展和应用开发提出的现代 ABAP 开发模型；它不是“ABAP 放到云上运行”的泛称，也不等于 SAP BTP, ABAP environment 这个运行环境本身。 正文 前一节讲的是 BTP 上的 ABAP 云开发环境，这一节讲的是更抽象的一层：开发模型。一个环境回答“代码跑在哪里”，一个开发模型回答“代码应该用什么语言版本、对象类型、API 边界和质量检查来写”。这就是为什么不能把 ABAP Cloud 简"
  },
  {
    "title": "Clean Core Extensibility Levels and Released API Dependency",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-007-clean-core-extensibility-levels-and-released-api-dependency-c330067a.html",
    "excerpt": "本节结论 Clean Core Extensibility Levels 是 SAP 用来评估扩展方案升级稳定性和核心系统风险的分级框架；本节要学的是：优先选择 released APIs / released objects，理解 Level A/B/C/D 的风险差异，并把“能跑”提升为“可升级、可审计、可交付”。 正文 前一节已经讲过 ABAP Cloud：现代 ABAP 开发要受语言版本、released APIs、ADT/ATC 检查和 Clean Core 约束。本节把其中最容易被误解的一点单独拿出来："
  },
  {
    "title": "ABAP Development Tools in Eclipse",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-008-abap-development-tools-in-eclipse-fef5783a.html",
    "excerpt": "1) 一句话结论 ABAP Development Tools in Eclipse，通常简称 ADT，是现代 ABAP 开发的主要 pro code IDE；本节要学的是：ADT 不是 SAP GUI / SE80，也不是普通本地 Eclipse Java 项目，而是通过一个 ABAP project 连接远端 ABAP back end，在系统里的 ABAP repository object 上开发、检查、激活、测试和交付。 2) 到底学什么 前面 Day 01 已经讲过 system landscape、A"
  },
  {
    "title": "ABAP project in ADT",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-009-abap-project-in-adt-1e9a4e00.html",
    "excerpt": "1) 一句话结论 ABAP project in ADT 是 ADT 里连接 ABAP 后端系统的项目入口；本节要学的是：它不是本地源码目录，而是带有 project name、system/client/user/default language 等登录上下文的系统连接，并通过 Project Explorer、Favorite Packages 和权限控制，把开发者带到远端 ABAP repository object 上工作。 2) 到底学什么 上一节 ABAP Development Tools in Ec"
  },
  {
    "title": "Repository object 仓库对象",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-010-repository-object-239ee7d6.html",
    "excerpt": "1) 一句话结论 Repository object 仓库对象，是保存在 ABAP Repository 中的开发对象；本节要学的是：ABAP class、DDIC table、CDS view entity、RAP behavior definition、service binding 等都不是普通本地文件，而是带有持久的对象目录属性（object type、object name、package、original system/language）以及开发过程状态（activation 状态、lock、trans"
  },
  {
    "title": "ABAP package 包与子包",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-011-abap-package-f43e032c.html",
    "excerpt": "本节结论 ABAP package 包与子包，是 ABAP Repository 中组织开发对象、连接 transport/software logistics、限定开发边界的基本容器；本节要学的是：为什么 repository object 不能像本地文件一样随便放，为什么正式开发对象要放进合适的 package，而不是放在 $TMP 或错误的 package 层级里。 正文 前一节讲 Repository object 仓库对象 时，已经知道 ABAP class、CDS view entity、DDIC ta"
  },
  {
    "title": "Transport request 传输请求",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-012-transport-request-a1933e45.html",
    "excerpt": "本节结论 Transport request 传输请求，是 SAP 用来记录、组织、释放并传递 repository object / customizing 变更的 CTS/Transport Organizer 单位，并会对 Workbench repository objects 形成 transport based lock；本节要学的是：它不是 Git commit，也不是“点了 release 就已经上线”，而是 ABAP 对象从 DEV 走向 QAS/PRD 的受控变更容器。 正文 前两节已经知道：开"
  },
  {
    "title": "Activation 激活机制",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-013-activation-ff7e1caa.html",
    "excerpt": "本节结论 Activation 激活机制，是把已保存的 inactive ABAP development object 转换成 active version 并生成对应 runtime object 的步骤；本节要学的是：保存 不等于 运行时已经使用，激活 也不等于 已经移送到 QAS/PRD。 正文 在 ADT 里改一个 repository object 时，第一反应通常是按 Ctrl+S 保存。对 Java/Python 背景的人来说，“保存文件”往往意味着本地文件已经变成最新内容，下一步就是编译、运行或提"
  },
  {
    "title": "abapGit 与 gCTS 认知",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-014-abapgit-gcts-d16f46ae.html",
    "excerpt": "1) 一句话结论 abapGit 与 gCTS 这一节，要让 ABAP 初学者知道 SAP 世界也会使用 Git 风格工具，但这些工具不能替代 Repository object 仓库对象、ABAP package 包与子包、Activation 激活机制、Transport request 传输请求 和客户正式移送治理；本节要学的是：看到 Git 不等于可以绕过 SAP transport。 2) 到底学什么 前面已经学过：ABAP 对象不是普通文件夹里的 .py 或 .java 文件，而是 SAP system"
  },
  {
    "title": "Where-used list 影响分析",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-015-where-used-list-1b8d2818.html",
    "excerpt": "1) 一句话结论 Where used list 影响分析，是在修改、删除、重命名或移送 ABAP development object 前，先查它被哪些对象静态引用的基础动作；本节要学的是：它是影响调查的入口，不是“全系统无风险保证书”。 2) 到底学什么 前面已经学过 Activation 激活机制：对象激活后才真正进入 active/runtime 世界。但对象一旦被别人引用，就不再只是“我自己这段代码”。一个 class 的 public method 可能被多个程序调用，一个 data element 可"
  },
  {
    "title": "ABAP debugger 调试器入口",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-016-abap-debugger-05add8e6.html",
    "excerpt": "本节结论 ABAP debugger 调试器入口，是在某一次真实运行路径中暂停程序、观察变量、调用栈和控制流的工具；本节要学的是：debugger 能解释“这一次为什么这样跑”，但不能替代 Where used list 影响分析、测试、日志、ATC、trace、生产监控（monitoring）和正式缺陷分析。 正文 Where used list 帮你回答“谁可能静态引用这个对象”。Debugger 帮你回答另一类问题：当程序真的运行到这里时，变量是什么值？哪个分支被执行？哪个 method 调用了当前 meth"
  },
  {
    "title": "Transport task / request / import queue 治理",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-017-transport-task-request-import-queue-e945d7ef.html",
    "excerpt": "1) 一句话结论 Transport task / request / import queue 治理，是把 Transport request 传输请求 从“一个变更容器”推进到“谁 release、何时 export、如何进入 QAS/PRD import queue、哪些 approval 和 log 证明可上线”的项目管理链路；本节要学的是：task release、request release、QAS import、QA approval、PRD import 是不同关口。 2) 到底学什么 前面已经知"
  },
  {
    "title": "Client strategy in DEV / QAS / PRD 客户端策略",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-018-client-strategy-in-dev-qas-prd-f855e422.html",
    "excerpt": "1) 一句话结论 Client strategy in DEV / QAS / PRD，是把 SAP system landscape 系统环境分层 中的系统层级，进一步落到 SAP client、client role、client dependent data、cross client objects 和 Transport request 传输请求 的目标边界上；本节要学的是：client 不是 DEV/QAS/PRD 的同义词，登录哪个 SID/client 会直接影响数据、配置、权限、测试证据和上线风险。"
  },
  {
    "title": "Japanese SAP naming convention 日本SAP项目命名规范",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-019-japanese-sap-naming-convention-sap-2bdcfbd7.html",
    "excerpt": "19.1 一句话结论 Japanese SAP naming convention，是日本 SAP 项目中把 Repository object 仓库对象、ABAP package 包与子包、customer namespace、业务缩写、对象类型和 Transport request 传输请求 沟通统一起来的命名规则；本节要学的是：不要自己发明对象名，先读项目的 命名規約 / 開発標準 / 技術標準，再创建 Z/Y 或注册 namespace 下的对象。 19.2 到底学什么 命名规范不是“变量名前面加几个字母”"
  },
  {
    "title": "ABAP data object 数据对象",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-020-abap-data-object-e568a611.html",
    "excerpt": "20.1 一句话结论 ABAP data object 数据对象，是 ABAP 程序运行时占用内存并保存值的对象；本节要学的是：它不是 Repository object 仓库对象，也不是 Data element 数据元素 或 Domain 域对象，而是一个带有 data type 的运行时值容器，例如 variable、constant、literal、system field 或后续会遇到的 anonymous data object。 20.2 到底学什么 先把“对象”这个词放回 ABAP 语境里。前面讲的"
  },
  {
    "title": "Elementary data types 基础技术类型",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-021-elementary-data-types-70039e9a.html",
    "excerpt": "本节结论 Elementary data types 基础技术类型 是 ABAP 里描述“一个值应该如何存放、显示、比较和转换”的最小技术类型单元。学这一节不是为了背类型表，而是为了在声明 ABAP data object 数据对象 时知道：金额不能随手写成字符串，日期不是普通文本，N 不是可计算的数字，P 的小数位必须说清楚，错误的类型选择会一路影响 SQL、接口、测试和上线缺陷。 正文 在上一节里，数据对象被解释为程序运行时内存中的一块有类型的值。现在要继续追问：这个“类型”具体可以是什么？在 ABAP 入门阶"
  },
  {
    "title": "TYPE vs LIKE 类型声明方式",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-022-type-vs-like-5da66ea5.html",
    "excerpt": "本节结论 TYPE 是“用一个独立的类型来声明数据对象”，LIKE 是“照某个已经可见的数据对象或字段的类型形状来声明数据对象”。初学者最重要的判断规则是：新代码和接口边界优先用 TYPE 指向稳定类型；只有当一个局部变量确实依赖另一个数据对象的形状时，才考虑 LIKE，并且要让这种依赖在代码 review 中说得清楚。 正文 上一节已经解释了 Elementary data types 基础技术类型，但真实 ABAP 代码不会只写 TYPE i、TYPE string。项目里更常见的是：字段来自 DDIC dat"
  },
  {
    "title": "Structure 结构类型",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-023-structure-3269a877.html",
    "excerpt": "本节结论 Structure 结构类型 是 ABAP 里承载“一条有多个字段的业务记录”的基本形态：它不是数据库表，不是内表，也不是没有类型约束的 JSON/dict，而是一个有名字、有 structured type、由多个 named components 组成的 typed record。学会 structure，才看得懂后面的 Internal table 内部表基础、SQL INTO 结果、RAP payload、message/result 结构和项目里的字段设计。 正文 上一节讲了 TYPE vs L"
  },
  {
    "title": "Internal table 内部表基础",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-024-internal-table-60645cd5.html",
    "excerpt": "本节结论 Internal table 内部表 是 ABAP 程序运行时内存里的 typed row collection：它用同一个 row type 保存 0 到多行数据，适合接住 SQL 查询结果、临时整理业务记录、循环处理和传递结果集。它不是数据库表，不会自己持久化数据，也不是无类型 list/dict；学会 internal table，才真正进入 ABAP 的日常数据处理世界。 正文 上一节的 Structure 结构类型 解释了“一条记录”是什么。Internal table 则解释“多条记录”如何存"
  },
  {
    "title": "Loop constructs 循环语句",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-025-loop-constructs-7301b587.html",
    "excerpt": "本节结论 Loop constructs 循环语句 是 ABAP 控制流的基础，但 Day 04 最先要掌握的是 LOOP AT itab：它让程序逐行处理 Internal table 内部表基础。初学者要先分清两件事：INTO 是把当前行复制到 work area，改了 copy 不会自动改回表；ASSIGNING 是直接指向当前行，改字段会立刻影响表内容。这个差异比背所有 loop 语法更重要。 正文 ABAP 里不只有一种循环。官方资料把常见循环分成 DO、WHILE、LOOP、SELECT ... END"
  },
  {
    "title": "Conditional logic 条件分支",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-026-conditional-logic-51e0f0a0.html",
    "excerpt": "本节结论 Conditional logic 条件分支 是把业务规则写成可执行路径的基础：满足条件就走某段逻辑，不满足就走另一段逻辑。Day 04 先掌握 IF ... ELSEIF ... ELSE ... ENDIF 和 CASE ... WHEN ... ENDCASE，并理解 ABAP 的 logical expression、IS INITIAL、AND / OR / NOT、sy subrc 判断和现代 COND / SWITCH 表达式的边界。 正文 条件分支回答的是一个朴素问题：当前数据、状态或返回"
  },
  {
    "title": "ABAP system fields sy-*",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-027-abap-system-fields-sy-10231cb6.html",
    "excerpt": "本节结论 ABAP system fields sy 是 ABAP runtime 自动填充的一组系统字段，用来让程序读取“刚才发生了什么”：上一条语句是否成功、当前循环走到哪里、SQL 处理了多少行、当前消息是什么。初学者最先要记住的不是字段清单，而是三条规则：只读不写、在设置它的语句之后立刻读取、不要把旧的 sy 值当成永远可靠的状态。 正文 ABAP 里有一个预定义结构 sy。它的很多组件就是常说的 system fields，例如 sy subrc、sy tabix、sy index、sy dbcnt、sy"
  },
  {
    "title": "String processing 字符串处理",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-028-string-processing-6715ed4e.html",
    "excerpt": "本节结论 String processing 字符串处理 是把业务数据变成可读消息、接口字段、日志文本和检索条件的基础。Day 04 不追求背完所有语句，而是先掌握四件事：string 与 fixed length character 的差异、&& 和 string template 的组合方式、常用搜索/替换/分割/去空格操作，以及不要把字符串处理当成随意改业务字段格式的工具。 正文 ABAP 项目里到处都有字符串：错误消息、日志、OData response message、ALV 显示文本、文件名、接口字段、"
  },
  {
    "title": "Date arithmetic 日期计算",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-029-date-arithmetic-d02254d5.html",
    "excerpt": "本节结论 Date arithmetic 日期计算 是用 ABAP 正确处理“今天、到期日、有效期间、相差天数”的基础。Day 04 要先掌握 TYPE d 的内部格式、日期加减天数、两个日期相减得到天数、有效期判断，以及一个重要边界：月份、工作日、节假日、时区和 timestamp 不能只靠简单 + 1 或字符串截取解决。 正文 SAP 项目里日期无处不在：订单日期、交货日期、有效开始日、有效结束日、价格条件期间、合同到期日、批处理基准日、测试数据日期、接口文件名日期、OData filter 日期。初学者容易把"
  },
  {
    "title": "Time and timestamp 时间戳",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-030-time-and-timestamp-43cc512e.html",
    "excerpt": "本节结论 Time and timestamp 时间戳 是把“几点几分几秒”和“某个全球唯一时刻”分清楚的基础。Day 04 要先掌握三条边界：TYPE t 只是一天内的 local time，sy uzeit / sy timlo 只适合读懂旧代码，跨时区、审计日志、接口时间戳和持续时间计算要用 UTC timestamp / utclong 思维。 正文 上一节 Date arithmetic 日期计算 讲的是日期：今天、到期日、有效期间。时间和 timestamp 解决的是另一类问题：程序什么时候开始、什么时"
  },
  {
    "title": "Runtime error and short dump 运行时错误",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-031-runtime-error-and-short-dump-b6d3f032.html",
    "excerpt": "原子笔记入口：Runtime error and short dump 运行时错误 本节结论 Runtime error and short dump 运行时错误 是 ABAP 程序在运行中“已经无法继续执行”时留下的技术诊断入口。Day 04 要掌握的不是背 ST22 画面，而是理解：未处理异常、失败的 ASSERT、RAISE SHORTDUMP、MESSAGE TYPE 'X' 等情况会终止程序、回滚当前仍打开的 LUW，并生成 short dump；开发者要能从 short dump 找到发生时间、用户、程"
  },
  {
    "title": "DDIC database table 字典表",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-032-ddic-database-table-e05a6263.html",
    "excerpt": "32.1 一句话结论 DDIC database table 字典表 是 ABAP Dictionary 中对持久化数据库表的统一元数据定义。它不是“随便建一张 SQL 表”，而是把表名、字段、主键、client dependency、data element、背后的 domain、数据维护方式、delivery class、activation 和 transport 管理串在一起，成为 ABAP 程序、ABAP SQL、CDS/RAP、数据浏览和项目交付共同依赖的基础对象。 32.2 到底学什么 Day 05 "
  },
  {
    "title": "Table field 字段定义",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-033-table-field-953fa24a.html",
    "excerpt": "本节结论 Table field 字段定义，是 ABAP Dictionary database table 的列级定义。它不只是“字段名 + 数据类型”，而是同时决定字段是否属于 key、直接使用 built in dictionary type 还是引用 data element、是否需要 not null、是否带 currency / quantity reference、会如何影响 ABAP SQL、Data Preview、RAP/CDS、测试数据和日本项目设计审查。 学习要点 上一节已经把 DDIC d"
  },
  {
    "title": "Data element 数据元素",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-034-data-element-d9e0093a.html",
    "excerpt": "34.1 一句话结论 Data element 数据元素，是 ABAP Dictionary 中“给字段和程序变量复用的语义类型入口”。它不只是字段的中文名，也不只是 domain 的外壳；它把技术类型、字段标签、说明、翻译、可能的 search help / 参数语义，以及背后的 Domain 域对象 连接起来，让 table field、structure component、ABAP 变量、CDS/RAP/OData 元数据和项目文档能说同一种业务语言。 34.2 到底学什么 上一节已经看到 Table fi"
  },
  {
    "title": "Domain 域对象",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-035-domain-c11d9bf1.html",
    "excerpt": "35.1 一句话结论 Domain 域对象，是 ABAP Dictionary 中给 data element 复用的底层类型和值域基础。它不是字段的业务说明书，也不是可以直接写在 ABAP DATA 或 database table field 后面的类型名；它更像“这个字段在技术上长什么样、允许哪些小范围取值、显示/转换时有什么规则”的共享定义。 本节要学的是：读懂 field Data element 数据元素 domain 这条链路，知道 domain 负责 data type、length、decimal"
  },
  {
    "title": "DDIC structure 字典结构",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-036-ddic-structure-824eed18.html",
    "excerpt": "36.1 一句话结论 DDIC structure 字典结构，是 ABAP Dictionary 中定义全局 structured type 的 repository object。它不会在数据库里创建物理表，也不能被 SELECT；它的价值是把一组属于同一业务或技术语义的 components 做成可复用的全局结构类型，用来给 ABAP 变量、method parameter、internal table line type、接口参数或其他 DDIC 对象提供一致的字段形状。 本节要学的是：把 Structure"
  },
  {
    "title": "DDIC view 传统视图",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-037-ddic-view-5437a298.html",
    "excerpt": "37.1 一句话结论 DDIC view 传统视图，是 ABAP Dictionary 里较早一代的 view 机制，用来把一个或多个 DDIC database tables 的列组合成面向应用的视图。它在遗留 ABAP、ECC、on premise S/4HANA 和日本 brownfield 项目里仍然可能出现，但已经不是现代数据建模、RAP/Fiori/OData 服务设计的主路径。 本节要学的是：看懂 classic DDIC view 在旧系统中的位置，能区分它和 CDS view entity 视图实"
  },
  {
    "title": "Foreign key 外键关系",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-038-foreign-key-d4b87c24.html",
    "excerpt": "38.1 一句话结论 Foreign key 外键关系，是 ABAP Dictionary 中用来描述两个 DDIC database tables 之间参照关系的元数据。它把一个 foreign key table 的字段组合，指向另一个 check table 的 primary key 字段组合，用来说明“这个字段值应参照哪张表的哪些 key”。 本节要学的是：读懂 foreign key table、check table、foreign key fields、check field、cardinality"
  },
  {
    "title": "Search help 搜索帮助",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-039-search-help-5766da52.html",
    "excerpt": "39.1 一句话结论 Search help 搜索帮助，是 ABAP Dictionary 中用于提供 input help / F4 help 的经典元数据对象。它帮助用户在输入字段时选择合法或有意义的值，尤其适合那些实际存储值是 formal key、但用户需要看描述文本才能判断的字段。 本节要学的是：读懂 elementary search help、collective search help、selection method、import/export parameters、hit list 和 sear"
  },
  {
    "title": "Lock object 锁对象",
    "chapter": "Chapter 01 - SAP 和 ABAP 基础",
    "url": "section-01-040-lock-object-c9c0e29f.html",
    "excerpt": "40.1 一句话结论 Lock object 锁对象，是 ABAP Dictionary 中用于定义 SAP logical lock 的 repository object。它告诉系统：当程序要保护某张业务表或某组业务 key 时，应该按哪些 table/key fields 组成 lock argument，并通过 SAP enqueue 机制协调多个用户、事务或程序对同一业务对象的并发访问。 本节要学的是：理解 lock object、enqueue server、lock entry、ENQUEUE ..."
  },
  {
    "title": "ABAP SQL overview",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-001-abap-sql-overview-3115f94b.html",
    "excerpt": "1.1 一句话结论 ABAP SQL 是 ABAP 程序访问 SAP 业务数据的主要语言：它不是直接把数据库厂商 SQL 写进程序，而是通过 ABAP 数据库接口，以相对数据库无关的方式访问 ABAP Dictionary 表、视图和 CDS 数据模型。初学者先要建立一个判断：看到 SELECT / INSERT / UPDATE / DELETE 时，不只是“在查数据库”，而是在 SAP 应用服务器、ABAP 类型系统、客户端处理、权限、事务和后续 RAP / Clean Core 约束之间工作。 1.2 到底学"
  },
  {
    "title": "SELECT statement 查询语句",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-002-select-statement-70a372d3.html",
    "excerpt": "2.1 一句话结论 SELECT 是 ABAP SQL 里读取数据的核心语句。学它不是背一条语法模板，而是学会把“从哪里读、读哪些列、按什么条件读、结果放到哪里、顺序是否稳定、没有结果怎么办、权限和事务在哪里处理”一次性想清楚。项目里很多 bug 并不是因为开发者不会写 SELECT，而是因为写出了“能跑、但业务语义不稳定”的 SELECT。 2.2 到底学什么 本节专讲读取语句本身。上一节 ABAP SQL overview 已经建立了 ABAP SQL 的大图；本节开始进入最常见的读数动作。后续 Host va"
  },
  {
    "title": "Host variables 宿主变量",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-003-host-variables-8a74508b.html",
    "excerpt": "3.1 一句话结论 Host variables 是 ABAP SQL 里连接“ABAP 程序变量”和“SQL 语句”的桥。现代 ABAP SQL 用官方称为 escape character 的 @ 前缀标出 ABAP data object，让读者和编译器都能看清：customer id = @lv customer id 左边是数据库字段，右边是 ABAP 程序中的变量；INTO TABLE @DATA(lt orders) 则表示数据库查询结果回到 ABAP 内表。学会 host variables，不是记"
  },
  {
    "title": "INTO vs INTO TABLE 结果接收",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-004-into-vs-into-table-78b8c171.html",
    "excerpt": "4.1 一句话结论 INTO 和 INTO TABLE 决定 ABAP SQL 的查询结果进入 ABAP 内存时是什么形状：INTO @DATA(ls order) 通常接收一行到结构或工作区，INTO TABLE @DATA(lt orders) 接收多行到内表。初学者要先建立这个判断：SELECT 不是“查完就结束”，它一定要把结果交给一个 ABAP data object；这个对象是单行结构还是 internal table，会直接影响后续循环、排序、查找、空结果处理和性能。 4.2 到底学什么 上一节 Ho"
  },
  {
    "title": "ORDER BY 排序确定性",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-005-order-by-bff6433a.html",
    "excerpt": "5.1 一句话结论 ORDER BY 是 ABAP SQL 里把“数据库返回顺序”变成“业务可解释顺序”的关键子句。不写 ORDER BY，多行结果的顺序就是未定义的；写了 ORDER BY 但排序字段不唯一，也只能保证这些字段的排序，不能保证 tie 之间谁先谁后。只要业务语义里出现“第一条、最后一条、最新一条、前 10 条、分页、优先级最高”，就必须把排序字段和 tie breaker 写清楚。 5.2 到底学什么 前面 SELECT statement 查询语句 讲了如何读取，INTO vs INTO TAB"
  },
  {
    "title": "JOIN in ABAP SQL",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-006-join-in-abap-sql-a7516ffc.html",
    "excerpt": "6.1 一句话结论 JOIN 是 ABAP SQL 里把多个数据源按关系组合成一个结果集的机制。它的价值不是“写得更高级”，而是避免在 ABAP 应用层循环里手工拼表，让数据库按明确的 ON 条件完成关联读取。但 JOIN 也不是魔法：它会受数据模型 cardinality、外连接 null、权限边界、client handling、性能和 Clean Core 访问规则影响。 6.2 到底学什么 在业务代码里，很少只读一张表。订单列表可能要带客户名称，明细行可能要带物料描述，库存数据可能要带工厂信息。初学者最容易"
  },
  {
    "title": "Aggregate functions 聚合函数",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-007-aggregate-functions-c767e82c.html",
    "excerpt": "7.1 一句话结论 Aggregate functions 是 ABAP SQL 里把多行数据汇总成统计值的机制，例如 COUNT( )、SUM( ... )、MIN( ... )、MAX( ... )、AVG( ... )。它的重点不是少写几行 LOOP，而是把“按数据库条件筛选、分组、汇总”的工作交给数据库完成，并让代码清楚表达结果粒度：到底返回一条总计，还是按客户、币种、状态等维度返回多条汇总。 7.2 到底学什么 从业务角度看，聚合函数回答的是“多少、合计、平均、最大、最小”这类问题： 这个客户有多少张订单"
  },
  {
    "title": "INSERT statement 新增数据",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-008-insert-statement-0beac323.html",
    "excerpt": "8.1 一句话结论 ABAP SQL 的 INSERT 用来把新行写入可写数据库对象，例如项目自有 DDIC table、可写 CDS entity 或其他被允许写入的持久化对象。它的关键不是“把一行塞进表里”这么简单，而是确认写入对象是否允许、主键是否唯一、重复键如何处理、实际插入了几行、谁来提交或回滚事务，以及这次写入是否符合权限、锁和 Clean Core 边界。 8.2 到底学什么 先把边界说清楚：本节讲的是 ABAP SQL INSERT，也就是写数据库持久化对象；它不是内部表的 INSERT 语句。内部"
  },
  {
    "title": "UPDATE statement 更新数据",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-009-update-statement-ab212d9f.html",
    "excerpt": "9.1 一句话结论 ABAP SQL 的 UPDATE 用来修改数据库中已经存在的行。学习重点不是“把字段改成新值”，而是确认要改哪些行、只改哪些字段、实际改了几行、并发下是否会覆盖别人更新、谁来提交或回滚，以及这次修改是否经过授权、锁、业务校验和 Clean Core 允许的写入路径。 9.2 到底学什么 UPDATE 和 INSERT 的语义不同：INSERT 是新增不存在的行，UPDATE 是修改已经存在的行。如果目标行不存在，UPDATE 不会帮你创建新行。这个差异在接口重试、批处理补偿、主数据维护、状态流"
  },
  {
    "title": "DELETE statement 删除数据",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-010-delete-statement-dc415594.html",
    "excerpt": "10.1 一句话结论 ABAP SQL 的 DELETE 用来从可写数据库对象中删除行。它是写入类语句里风险最高的一类：少一个 WHERE 可能删除整张表，条件过宽可能删除别的业务范围，直接物理删除可能破坏业务历史、审计、关联数据和 Clean Core 边界。学习 DELETE 的重点不是语法，而是删除范围、实际删除件数、事务回滚能力、业务保留规则、授权和官方写入路径。 10.2 到底学什么 先把边界说清楚：本节讲的是 ABAP SQL DELETE，也就是删除数据库持久化对象里的行；它不是内部表的 DELETE"
  },
  {
    "title": "MODIFY statement 修改语义",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-011-modify-statement-e9a9a916.html",
    "excerpt": "11.1 一句话结论 ABAP SQL 的 MODIFY 用来把来源行写入可写数据库对象：目标主键不存在时插入，目标主键已存在时覆盖既有行。它接近 upsert 语义，但不能把它理解成“省事版 UPDATE”。学习重点是确认业务是否真的允许“有则覆盖、无则新增”，来源结构是否完整可信，实际处理了几行，事务、锁、权限、Clean Core 和 RAP save sequence 是否都在正确边界内。 11.2 到底学什么 先把边界说清楚：本节讲的是 ABAP SQL MODIFY，也就是对数据库持久化对象执行插入或覆"
  },
  {
    "title": "SAP LUW 逻辑事务单元",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-012-sap-luw-704da272.html",
    "excerpt": "12.1 一句话结论 SAP LUW 是 SAP 应用层的 logical unit of work，用来表达“一组业务相关的数据变更必须一起成功或一起放弃”。它不是普通数据库连接上的一段 transaction，而是把 ABAP SQL 写入、update task、transactional buffer、enqueue lock、COMMIT WORK / ROLLBACK WORK、BAPI commit pattern 和 RAP save sequence 放在同一个业务一致性边界里理解。学习重点是判断"
  },
  {
    "title": "Database LUW 数据库事务",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-013-database-luw-f6a232eb.html",
    "excerpt": "13.1 一句话结论 Database LUW 是数据库层的 logical unit of work，也就是 database transaction：从一次数据库事务开始，到 database commit 或 database rollback 结束，中间的数据库修改要么整体持久化，要么整体撤销。在 ABAP 里学习 Database LUW，重点不是把它背成“数据库事务”四个字，而是理解它和 SAP LUW 的边界：database commit/rollback 会关闭 database cursor、释"
  },
  {
    "title": "SAP Transaction Boundary and LUW Model",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-014-sap-transaction-boundary-and-luw-model-3b5ad622.html",
    "excerpt": "14.1 一句话结论 SAP Transaction Boundary and LUW Model 是把 SAP LUW、Database LUW、COMMIT WORK、ROLLBACK WORK、BAPI commit pattern、update task、enqueue lock 和 RAP save sequence 放到同一张图里理解的事务边界模型。它回答的不是“commit 语句怎么写”，而是“谁拥有这次业务动作的提交权、失败时能回滚到哪里、哪些副作用已经无法撤回”。 14.2 到底学什么 初学 AB"
  },
  {
    "title": "Standard table 标准表",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-015-standard-table-1214200e.html",
    "excerpt": "15.1 一句话结论 Standard table 标准表，是 ABAP internal table 内部表的默认表类别：它用 primary table index 管理行，允许重复行，适合按顺序追加、遍历、临时承接查询结果和小规模处理；但如果主要需求是按 key 高频查找或保证唯一性，就要考虑 Sorted table 排序表、Hashed table 哈希表 或 Secondary table key 二级键。 15.2 到底学什么 先把 standard table 和数据库表分开。ABAP intern"
  },
  {
    "title": "Sorted table 排序表",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-016-sorted-table-2b234b33.html",
    "excerpt": "16.1 一句话结论 Sorted table 排序表，是 ABAP internal table 内部表的一种表类别：它按 primary table key 自动保持升序，支持 unique 或 non unique key，适合按 key 有序读取、范围读取、前缀 key 读取和需要稳定 key 顺序的场景；它不是“手动 SORT 过的 standard table”，而是表类型本身就带有排序和查找语义。 16.2 到底学什么 上一节学的 standard table 像一个顺序容器：适合追加、遍历、小规模临"
  },
  {
    "title": "Hashed table 哈希表",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-017-hashed-table-2689ed7d.html",
    "excerpt": "17.1 一句话结论 Hashed table 哈希表，是 ABAP internal table 内部表中面向 unique full key lookup 的表类别：它用 hash algorithm 通过唯一 key 管理行，适合大表中反复按完整 key 精确读取；但它不适合重复 key、顺序输出、范围读取、前缀 key 查询或依赖行号的处理。 17.2 到底学什么 如果 Standard table 标准表 像 ArrayList / list，Sorted table 排序表 像“按 key 保持顺序的索"
  },
  {
    "title": "Secondary table key 二级键",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-018-secondary-table-key-63fc7651.html",
    "excerpt": "18.1 一句话结论 Secondary table key 二级键，是 internal table 内部表上的额外命名访问路径：在 primary table key 之外，再为同一张内存表声明 sorted key 或 hashed key，让代码可以按另一组字段高效 READ TABLE、table expression 或 LOOP AT ... USING KEY。它像“内存表索引”，但不是数据库索引；它能改善访问性能，也会带来内存和维护成本。 18.2 到底学什么 前面三节讲的是 primary ta"
  },
  {
    "title": "READ TABLE 读取内部表",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-019-read-table-c16660cd.html",
    "excerpt": "19.1 一句话结论 READ TABLE 是 ABAP 读取 internal table 内部表单行的经典语句：可以按 index、primary key、secondary key 或 free key 读取，并通过 INTO、ASSIGNING、REFERENCE INTO、TRANSPORTING NO FIELDS 决定读取结果；真正要学的是“用哪个 key 读、是否只读一行、如何处理 sy subrc / sy tabix、何时改用 table expression 或 LOOP AT”。 19.2 "
  },
  {
    "title": "Table expression 表表达式",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-020-table-expression-15adfaac.html",
    "excerpt": "20.1 一句话结论 Table expression 表表达式，是现代 ABAP 用 itab[ ... ] 直接访问 internal table 某一行的表达式写法：它可以替代很多 READ TABLE 读取场景，也可以出现在赋值、构造表达式、line exists、line index、写位置中；但普通 table expression 不设置 sy subrc，未找到行时通常会抛出 CX SY ITAB LINE NOT FOUND。如果把 table expression 放在 ASSIGN 的源位置，"
  },
  {
    "title": "Field symbol 字段符号",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-021-field-symbol-201aafdf.html",
    "excerpt": "21.1 一句话结论 Field symbol 字段符号，是 ABAP 里一种“指向已有数据对象或 internal table 行的运行时别名”：它自己不保存业务值，而是在 ASSIGN、LOOP AT ... ASSIGNING、READ TABLE ... ASSIGNING 等语句成功后，像一个可直接读写的占位符一样访问被指向的内存区域。理解它的关键，不是把它背成“指针”，而是知道什么时候它避免了复制，什么时候它会直接改到原始数据，什么时候必须检查是否已经 assigned。 21.2 到底学什么 上一节 "
  },
  {
    "title": "FIELD-SYMBOL vs DATA reference",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-022-field-symbol-vs-data-reference-b4fb9e9a.html",
    "excerpt": "22.1 一句话结论 FIELD SYMBOL 和 DATA reference 都能让 ABAP 代码“不是复制值，而是指向已有数据”，但它们不是同一个东西：field symbol 是运行时临时别名，常用于局部循环、动态字段和直接修改当前 table row；data reference 是真正的数据引用变量，可以保存、传递、返回，也可以通过 CREATE DATA 指向匿名数据对象。初学者要学会用一句话区分：field symbol 更像“当前这段代码里的别名”，data reference 更像“一个变量里"
  },
  {
    "title": "LOOP AT ASSIGNING vs LOOP AT INTO",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-023-loop-at-assigning-vs-loop-at-into-2b43e554.html",
    "excerpt": "23.1 一句话结论 LOOP AT ... INTO 和 LOOP AT ... ASSIGNING 的差别，是 internal table 循环里“复制当前行到 work area”与“用 field symbol 直接指向当前行”的差别：INTO 更像拿一份副本来读写，修改后需要明确写回；ASSIGNING 直接操作原 table row，修改会立即反映到 internal table。选择哪一个，不是语法偏好，而是要看本次循环是只读、临时计算，还是要原地更新大量行。 23.2 到底学什么 前三节已经铺好了"
  },
  {
    "title": "Global class 全局类",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-024-global-class-66824a36.html",
    "excerpt": "24.1 一句话结论 Global class 全局类，是 ABAP repository 中可被多个程序、服务、RAP 对象、测试类复用的 OO ABAP 主力组织单元：它不是“写在某个 report 里的临时 class”，而是一个有包、激活、传输、可见性、public contract 和生命周期管理的 repository object。学会 global class，就是开始用 ABAP 的项目级方式组织业务逻辑、技术边界和可测试代码。 24.2 到底学什么 Day 10 已经讲完 internal ta"
  },
  {
    "title": "Local class 局部类",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-025-local-class-4c6dbe23.html",
    "excerpt": "25.1 一句话结论 Local class 局部类，是定义在某个 ABAP program、class pool 或当前开发对象局部上下文中的 class：它有 CLASS ... DEFINITION 和 CLASS ... IMPLEMENTATION，可以像普通 OO ABAP class 一样拥有 method、attribute、visibility section 和 test class，但它不是独立 ABAP repository object，不能被整个系统随意复用。它最适合放“只服务当前对象”"
  },
  {
    "title": "Method signature 方法签名",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-026-method-signature-78cdcab2.html",
    "excerpt": "26.1 一句话结论 Method signature 方法签名是一个 method 对外表达“你可以怎样调用我、要给我什么、我会还给你什么、我可能抛出什么错误”的契约。在 OO ABAP 里，它主要写在 METHODS 或 CLASS METHODS 声明中，由 method name、parameter interface、parameter typing、OPTIONAL / DEFAULT、RETURNING、RAISING 等部分组成。 初学者不要把 method signature 理解成“方法里面的代"
  },
  {
    "title": "Method visibility 可见性",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-027-method-visibility-944fe011.html",
    "excerpt": "27.1 一句话结论 Method visibility 可见性是 OO ABAP class definition 中用 PUBLIC SECTION、PROTECTED SECTION、PRIVATE SECTION 控制 method、attribute、type 等 class components 谁能访问的规则。它回答的不是“这个代码能不能运行”，而是“这个能力要不要成为外部 contract、子类 contract，还是只属于本类内部实现”。 初学者最重要的判断是：public 越多，外部依赖越多，后"
  },
  {
    "title": "Static vs instance 静态与实例",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-028-static-vs-instance-e9b8f033.html",
    "excerpt": "28.1 一句话结论 Static vs instance 静态与实例是 OO ABAP 里区分“属于 class 本身”与“属于某个 object instance”的基础规则。CLASS METHODS、CLASS DATA 是 static components，使用 class selector = 调用；METHODS、DATA 是 instance components，通常要先创建 object reference，再用 instance selector 调用。 初学者最重要的判断不是“static"
  },
  {
    "title": "Constructor 构造方法",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-029-constructor-d3a7146e.html",
    "excerpt": "29.1 一句话结论 Constructor 构造方法是 OO ABAP 中对象或 class 被初始化时由 runtime 自动调用的特殊 method。METHODS constructor 是 instance constructor，用来把一个 object instance 建成“可用且状态一致”的对象；CLASS METHODS class constructor 是 class constructor，用来初始化 class level static state。 初学者最重要的判断是：constru"
  },
  {
    "title": "Interface 接口定义",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-030-interface-95651eea.html",
    "excerpt": "30.1 一句话结论 Interface 接口定义是 OO ABAP 中用来表达“这个对象承诺提供哪些能力”的抽象契约。它不关心具体 class 如何实现，只规定调用者可以依赖哪些 method、type、constant 或 event。class 用 INTERFACES 声明自己实现某个 interface；调用者可以用 TYPE REF TO if xxx 持有 interface reference，只依赖 contract，不依赖具体实现类。 初学者最重要的判断是：interface 不是“把 clas"
  },
  {
    "title": "Inheritance 继承",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-031-inheritance-2b2c6749.html",
    "excerpt": "31.1 一句话结论 Inheritance 继承是 OO ABAP 中表达“一个 class 是另一个 class 的特殊版本”的机制。subclass 通过 INHERITING FROM 继承 superclass 的 public / protected contract，可以 redefine 允许重定义的方法，也可以新增自己的行为。它适合表达清楚的 is a / specialization 关系，不适合单纯为了复用几行 helper code。 初学者最重要的判断是：继承不是“代码复用快捷键”，而是长"
  },
  {
    "title": "Polymorphism 多态",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-032-polymorphism-889652ed.html",
    "excerpt": "32.1 一句话结论 Polymorphism 多态是 OO ABAP 中“同一个调用形式，根据运行时对象不同而执行不同实现”的机制。调用方可以持有 superclass reference 或 interface reference，只按父类或接口 contract 调用 method；实际执行哪个 class 的 implementation，由 runtime object 决定。 初学者最重要的判断是：多态不是“写很多 IF 判断 class 名称”，而是让调用方依赖稳定 contract，把具体实现推迟到"
  },
  {
    "title": "Exception class 异常类",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-033-exception-class-85670b42.html",
    "excerpt": "33.1 一句话结论 Exception class 异常类是 ABAP class based exception 的类型。它不是单纯的“报错文本”，而是一个 exception object：一边作为控制流信号告诉运行时“正常路径中断了”，一边作为错误 payload 携带 exception type、message text、业务 key、字段名、上一层异常等上下文。一个好的异常类会把“可能失败”变成 method signature 和调用链上的显式 contract：哪里会 raise、谁应该 catc"
  },
  {
    "title": "TRY CATCH exception handling",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-034-try-catch-exception-handling-1b6ab118.html",
    "excerpt": "34.1 一句话结论 TRY CATCH exception handling 是 ABAP 处理 class based exception 的控制结构。TRY 包住可能抛异常的代码，CATCH 按 exception class 类型处理错误，未被处理的异常会沿调用链继续传播；真正好的异常处理不是“把错误挡住”，而是把错误转换成调用方、用户、日志、测试或框架能理解的结果。 上一节 Exception class 异常类 讲的是“错误用什么类型表达”。本节讲的是“错误发生后控制流怎么走”。初学者要特别记住：TRY"
  },
  {
    "title": "ABAP Unit 单元测试基础",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-035-abap-unit-34ce915f.html",
    "excerpt": "35.1 一句话结论 ABAP Unit 是 ABAP 语言内建的单元测试框架，用来把“这个 method 应该怎样工作”写成可自动执行的测试。它不是画面测试，也不是完整集成测试；它最适合保护小而明确的业务规则、计算逻辑、字段映射、异常路径和 helper method。 初学者要先掌握一个判断：ABAP Unit 的核心不是“多写一些测试代码”，而是把可重复验证的业务约定放到系统里。手工点一次画面只能证明“刚才这个操作看起来通过”；ABAP Unit 可以在每次改代码、激活对象、执行质量检查或准备传输前，重新验证"
  },
  {
    "title": "ATC quality check 代码质量检查",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-036-atc-quality-check-5c4e095a.html",
    "excerpt": "36.1 一句话结论 ATC quality check 指 ABAP Test Cockpit 对 ABAP repository objects 运行的质量检查。它不是单纯的代码格式检查，而是 SAP 项目里的“开发质量门禁”：在代码进入后续测试、传输或上线前，用统一的 check variant 检查代码是否违反平台规则、项目规则、性能规则、安全规则、ABAP Cloud / Clean Core 约束、released API 边界，必要时还可以把 ABAP Unit 作为 ATC 检查运行的一部分。 初学"
  },
  {
    "title": "Inline declaration 内联声明",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-037-inline-declaration-d2da10ac.html",
    "excerpt": "37.1 一句话结论 Inline declaration 内联声明 是 Modern ABAP 里把变量声明放在“第一次需要它的 operand position / declaration position”上的写法。它的目标不是让 ABAP 变成动态类型语言，而是在编译期能静态推断类型的地方，用 DATA(...)、@DATA(...)、FIELD SYMBOL(...) 或 FINAL(...) 减少样板代码，让变量更靠近使用点。 最常见的例子是： 这些写法看起来像“临时变量随手创建”，但本质仍是静态类型 "
  },
  {
    "title": "VALUE expression 值构造表达式",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-038-value-expression-a0792b7e.html",
    "excerpt": "38.1 一句话结论 VALUE expression 值构造表达式 是 ABAP constructor expression 的一种，用 VALUE type( ... ) 或 VALUE ( ... ) 在表达式位置直接构造一个指定类型的值。它最常用于初始化 structure、构造 internal table、给 method 参数传入临时值、写 ABAP Unit test data，以及在 Modern ABAP 中减少重复的 CLEAR / component assignment / APPEND"
  },
  {
    "title": "CORRESPONDING expression 字段映射",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-039-corresponding-expression-74c9f3e8.html",
    "excerpt": "39.1 一句话结论 CORRESPONDING expression 字段映射 是 ABAP constructor expression 中用于“按 component 名称把一个结构/表行映射到另一个结构/表行”的写法。最基本的形式是 CORRESPONDING target type( source ) 或 CORRESPONDING ( source )：ABAP 会把 source 和 target 中同名 component 的值复制过去，目标中没有被填的 component 变成 initial v"
  },
  {
    "title": "COND expression 条件表达式",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-040-cond-expression-4810482a.html",
    "excerpt": "40.1 一句话结论 COND expression 条件表达式 是 ABAP conditional expression / conditional operator 中用于“根据条件产生一个值”的写法。它常和 VALUE、CORRESPONDING、SWITCH 等现代表达式写法一起学习，但在 ABAP Keyword Documentation 的分类里，COND 属于 conditional expressions，而不是 VALUE 那类 constructor expression。它把简单的 IF "
  },
  {
    "title": "SWITCH expression 多分支表达式",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-041-switch-expression-12d08ab5.html",
    "excerpt": "41.1 一句话结论 SWITCH expression 是 ABAP 的 conditional expression / conditional operator，用来根据“同一个 operand 的不同取值”构造一个结果值。它最适合小而稳定的 code to value mapping，例如把状态码、消息类型、操作符、枚举式代码转换成显示文本、分类值或测试期望值。 这段代码的核心不是“执行多个分支动作”，而是“产生一个值”。lv status 是被比较的 operand；每个 WHEN 都拿自己的候选值和这个"
  },
  {
    "title": "REDUCE expression 归约表达式",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-042-reduce-expression-f12baa21.html",
    "excerpt": "42.1 一句话结论 REDUCE expression 是 ABAP 的 reduction operator，用来把一次或多次 FOR iteration expression 的结果“折叠”为一个最终值。它最常见的用途是对已经在 ABAP 内部表中的数据做小型、纯粹、可读的汇总，例如求和、计数、拼接文本、构造一个 summary structure，或者在 ABAP Unit 中从测试输入算出期望值。 可以把它读成：先把 accumulator total 初始化为 0，然后逐行遍历 lt items，每一轮"
  },
  {
    "title": "sy-subrc discipline and silent failure patterns",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-043-sy-subrc-discipline-and-silent-failure-patterns-17a684f1.html",
    "excerpt": "43.1 一句话结论 sy subrc 是 ABAP system field 中最常见的返回码字段，用来表达“上一条会设置返回码的 ABAP 语句”执行后的语句级结果。所谓 sy subrc discipline，不是要求到处写 IF sy subrc = 0，而是要求先确认该语句是否真的设置 sy subrc，再在 READ TABLE、SELECT、动态 ASSIGN、AUTHORITY CHECK、经典 function module 调用等语句之后，立刻、按该语句的文档语义检查结果；否则程序可能不会 du"
  },
  {
    "title": "CORRESPONDING FIELDS and MOVE-CORRESPONDING risks",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-044-corresponding-fields-and-move-corresponding-risks-209a3881.html",
    "excerpt": "44.1 一句话结论 MOVE CORRESPONDING 和 ABAP SQL 的 INTO CORRESPONDING FIELDS 都是在“按同名字段 / 同名 component 对应”这个思想下减少手工赋值的工具；它们能避免位置错位，也能让结构映射更短，但风险同样明显：同名不等于同义，不同名不会自动映射，未匹配字段在不同语法中会被初始化、保留或忽略，类型转换可能静默发生，内表场景还会受到初始化、追加、KEEPING TARGET LINES、BASE、duplicate key、nested table "
  },
  {
    "title": "Message class and T100 messages",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-045-message-class-and-t100-messages-b8bfbd5f.html",
    "excerpt": "45.1 一句话结论 Message class and T100 messages 是 ABAP 里管理可复用、可翻译业务消息的基础机制。message class 提供 message ID 和 message number 对应的文本目录，T100 是这个经典消息表背后的关键词；MESSAGE statement 负责把这些消息按类型、占位符和运行时语境发出或格式化。初学者要学会区分三件事：消息文本从哪里来、消息类型如何影响控制流和 UI、消息如何与 exception class、BAPI/API 返回、R"
  },
  {
    "title": "Clean ABAP naming 命名规则",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-046-clean-abap-naming-955e5592.html",
    "excerpt": "46.1 一句话结论 Clean ABAP naming 命名规则，是在 ABAP 代码内部使用能表达意图、可搜索、可沟通、可维护的名字，让读代码的人不必靠猜。它不是“把名字写短一点”，也不是“看到旧代码里的 lv 、lt 就马上全部改掉”。本节要学的是：新写代码时尽量让名字说明业务或技术含义；维护遗留对象时尊重项目既有规范，避免在同一个 development object 里混用两套风格。 这里要先分清两类命名。第一类是 repository object 命名，例如 ZCL SD ORDER VALIDATO"
  },
  {
    "title": "Small methods 小方法原则",
    "chapter": "Chapter 02 - Core ABAP Programming",
    "url": "section-02-047-small-methods-35874e0f.html",
    "excerpt": "47.1 一句话结论 Small methods 小方法原则，是把一个 method 写成“只表达一个清楚意图、只下降一层抽象、容易测试和 review”的代码单元。它不是机械追求行数越少越好，而是让 method name、Method signature 方法签名 和 method body 三者说同一件事：这个 method 负责什么、需要什么输入、产生什么结果、失败时怎样表达。 在 ABAP 项目里，小方法尤其重要，因为一个大 method 很容易同时混入 SELECT、业务校验、权限判断、状态变更、mes"
  },
  {
    "title": "Why CDS 为什么需要 CDS",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-001-why-cds-cds-089bd732.html",
    "excerpt": "1.1 一句话结论 Why CDS 为什么需要 CDS，核心不是“SAP 又发明了一种 SQL 写法”，而是要理解 ABAP CDS 在 SAP 里承担的语义数据模型角色。传统表和 SQL 主要回答“数据从哪里取、怎样连接、怎样过滤”；CDS 进一步回答“这些数据在业务上是什么意思、怎样被关联、怎样被授权、怎样被 UI / API / RAP / OData 消费”。 在本教程里，CDS 是从 Week 2 的 ABAP SQL overview 进入现代 ABAP 应用开发的第一座桥。读完这一节，学习者应该能说清"
  },
  {
    "title": "CDS view entity 视图实体",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-002-cds-view-entity-c2c04c24.html",
    "excerpt": "2.1 一句话结论 CDS view entity 视图实体，是现代 ABAP CDS 中用 DEFINE VIEW ENTITY 定义的语义读模型。它把底层表或其他 CDS entity 组织成一个可复用、可激活、可被 ABAP SQL / RAP / OData / Fiori / analytics 消费的 repository object；它不是数据库表，也不是普通 SQL view，更不是完整的 RAP business object。 上一节 Why CDS 为什么需要 CDS 回答“为什么 SAP "
  },
  {
    "title": "CDS annotation 注解基础",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-003-cds-annotation-0061bb02.html",
    "excerpt": "3.1 一句话结论 CDS annotation 注解基础，是理解“元数据如何进入 CDS 模型”的入口。annotation 不是普通 comment，它是写在 CDS DDL / metadata extension 中、可被不同 SAP 框架或工具解释的 metadata：有的影响字段说明，有的影响 OData metadata，有的影响 Fiori Elements UI，有的影响 analytics，有的影响 access control 相关检查或运行时解释。 上一节 CDS view entity 视"
  },
  {
    "title": "CDS built-in functions 内置函数",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-004-cds-built-in-functions-86791175.html",
    "excerpt": "4.1 一句话结论 CDS built in functions 内置函数，是在 CDS DDL 中对字段值做派生、转换、格式整理和简单判断的表达工具。它让 CDS view entity 视图实体 不只是把底层表字段原样投影出来，也能在模型层表达一些稳定、可复用、读模型相关的计算结果。 本节要学的不是“把所有计算都塞到数据库侧”，而是理解：哪些派生字段适合放在 CDS 中，哪些业务规则应该留给 ABAP class、RAP behavior、DCL 或服务层。初学者只要记住一句话：CDS built in fun"
  },
  {
    "title": "CDS metadata extension and UI annotations",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-005-cds-metadata-extension-and-ui-annotations-f8eb5989.html",
    "excerpt": "5.1 一句话结论 CDS metadata extension and UI annotations，是把“服务和画面消费需要的 UI metadata”从核心 CDS 数据模型中分离出来的关键机制。它让 CDS view entity 视图实体 和 projection view 能继续表达业务数据语义，同时把 Fiori Elements、OData UI service、字段位置、facet、line item、identification、search、value help 等消费层元数据放到更合适的层。"
  },
  {
    "title": "Association 关联关系",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-006-association-ff10d65e.html",
    "excerpt": "6.1 一句话结论 Association 关联关系，是 CDS view entity 视图实体 用来表达“这个业务对象可以导航到另一个业务对象”的语义建模机制。它不是把 SQL join 换一个写法，也不是数据库外键本身；它是在 CDS 模型中声明 source entity 与 target entity 之间的关系，并让后续的 path expression、projection view、RAP/OData consumer 或 Data Preview 能按这个关系去取数或导航。 本节最重要的结论是：a"
  },
  {
    "title": "Join vs association 二者区别",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-007-join-vs-association-d3fb9ff7.html",
    "excerpt": "7.1 一句话结论 Join 和 association 都能表达“两个数据源之间有关联”，但它们解决的是不同层级的问题：join 是当前查询里立即组合数据源的 SQL 操作；association 是 CDS view entity 视图实体 中声明可复用、可导航关系的建模机制。Join 回答“这一次查询现在要把哪些行和字段合在一起”；association 回答“这个实体和另一个实体之间有什么关系，后续消费者是否可以沿着这个关系导航”。 本节最重要的结论是：不要用“性能好不好”或“写法新不新”来简单选择。需要当"
  },
  {
    "title": "Path expression 路径表达式",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-008-path-expression-a44162f7.html",
    "excerpt": "8.1 一句话结论 Path expression 路径表达式，是在 CDS 或 ABAP SQL 中沿着已暴露的 association 读取目标字段、继续导航到下一级 association，或在特定位置使用 association 作为数据源的语法。它不是普通的对象属性访问，也不是“免费取关联数据”；它是在消费 Association 关联关系，并且在数据库层通常会落实成由 association 的 ON condition 派生出来的 join。 本节最重要的结论是：path expression 是 a"
  },
  {
    "title": "Root view entity 根视图实体",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-009-root-view-entity-9a91965c.html",
    "excerpt": "9.1 一句话结论 Root view entity 根视图实体，是用 define root view entity 把一个 CDS view entity 声明为 RAP business object 的根节点。它不是“字段更多的 CDS view”，而是告诉 RAP：这个实体是一个业务对象的入口，后续 behavior definition、lock、authorization、composition child、projection view 和 OData 服务都要围绕它展开。 对初学者来说，可以先把它"
  },
  {
    "title": "Projection view 投影视图",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-010-projection-view-b2bacd1c.html",
    "excerpt": "10.1 一句话结论 Projection view 投影视图，是用 define [root] view entity ... as projection on ... 在 CDS/RAP 模型上建立一层面向服务或消费场景的裁剪层。它不是复制一份 root view entity，也不是前端页面配置文件；它决定某个 service consumer 能看到哪些字段、association、composition child、semantic alias 和可暴露的行为。 如果上一节 Root view entit"
  },
  {
    "title": "CDS access control 访问控制",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-011-cds-access-control-8ad2c0a0.html",
    "excerpt": "11.1 一句话结论 CDS access control 访问控制，是 ABAP CDS 用 DCL（Data Control Language）在读取 CDS entity 时自动追加访问条件的一套机制。它的目标是让同一个 CDS view entity 在被 ABAP SQL、SADL、RAP/OData 等消费时，只返回当前用户有权看到的数据行。 这句话有三个边界必须一起记住。第一，CDS access control 主要控制 read access，也就是“能看到哪些数据”。第二，它依赖 CDS rol"
  },
  {
    "title": "DCL role 访问规则",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-012-dcl-role-37c96020.html",
    "excerpt": "12.1 一句话结论 DCL role 访问规则，是 ABAP CDS 里用 define role / grant select on / where 把“谁能读到哪些行”写成声明式规则的对象。上一节 CDS access control 访问控制 讲的是机制和边界，本节要把它落到代码：DCL role 不是 PFCG role 本身，也不是 UI 权限；它是 CDS access control 的规则层，会在读取被保护 CDS entity 时参与结果过滤。 初学者要先记住一句项目话：@AccessContr"
  },
  {
    "title": "RAP business object 业务对象",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-013-rap-business-object-48b9db9e.html",
    "excerpt": "13.1 一句话结论 RAP business object（RAP BO，业务对象）是 ABAP RESTful Application Programming Model 里表达“一个可读、可改、可校验、可保存、可通过服务暴露的业务单元”的核心模型。它不是一张表，也不是一个 OData endpoint，而是由 CDS 数据模型、behavior definition、behavior implementation、service 暴露和运行时事务语义共同组成的业务能力边界。 本节要掌握的不是“怎么点向导生成 "
  },
  {
    "title": "Composition tree 组合树",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-014-composition-tree-8f6aae2e.html",
    "excerpt": "14.1 一句话结论 Composition tree（组合树）是 RAP business object 里表达 root entity、child entity、grandchild entity 生命周期依赖关系的结构。它告诉 RAP runtime：哪些节点共同组成一个业务对象，谁是入口，谁依附于谁，哪些数据应该作为一个事务边界一起创建、校验、保存、锁定和暴露。 初学者要先把它和普通 association 分开。Association 表达“可以导航到另一个实体”；composition 表达“这个 ch"
  },
  {
    "title": "Behavior definition 行为定义",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-015-behavior-definition-4ed7e723.html",
    "excerpt": "15.1 一句话结论 Behavior definition 行为定义，通常简称 BDEF，是 RAP business object 的事务契约：它说明这个业务对象允许哪些标准操作和自定义操作、哪些字段可以被修改、何时做校验和派生处理、如何加锁、如何做授权、是否支持 draft，以及这些行为由哪个 behavior pool 实现。 如果说 Root view entity 根视图实体 和 Composition tree 组合树 负责描述“这个业务对象长什么样、由哪些实体组成”，那么 behavior defi"
  },
  {
    "title": "SAP Locking Architecture Overview",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-016-sap-locking-architecture-overview-d3a88b67.html",
    "excerpt": "16.1 一句话结论 SAP Locking Architecture Overview 是本教程的锁机制总览图：它把 Lock object 锁对象、SAP enqueue、SELECT ... FOR UPDATE、RAP locking、ETag/乐观并发、幂等和事务边界放在同一张地图里，帮助读者判断“当前并发风险应该在哪一层控制”。 一句话记忆：SAP 锁不是一个按钮，而是一组分层机制。数据库锁保护数据库行，SAP enqueue 保护业务对象，RAP locking 保护 RAP business obj"
  },
  {
    "title": "Behavior pool 行为池",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-017-behavior-pool-8dc49ced.html",
    "excerpt": "17.1 一句话结论 Behavior pool 行为池 是 Behavior definition 行为定义 的 ABAP 实现容器：BDEF 声明 RAP business object 能做什么，behavior pool 里的本地 handler class 和 saver class 负责把这些行为真正实现出来。 初学者可以先记成一句话：BDEF 是契约，behavior pool 是实现；handler class 处理 interaction phase，saver class 处理 save seq"
  },
  {
    "title": "Managed RAP 管理式实现",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-018-managed-rap-833bfafa.html",
    "excerpt": "18.1 一句话结论 Managed RAP 管理式实现 是 RAP 中让框架承担大量标准事务行为的实现方式：开发者用 BDEF 声明业务对象行为，RAP runtime 管理 transactional buffer、标准 create/update/delete、managed save、锁和部分生命周期；开发者仍要实现业务规则、动作、校验、派生、授权、必要的扩展保存逻辑，并按各方法签名正确返回 failed、reported、mapped、result 等响应结构。 最重要的理解不是“managed 等于不用"
  },
  {
    "title": "Unmanaged RAP 非管理式实现",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-019-unmanaged-rap-21f0d377.html",
    "excerpt": "19.1 一句话结论 Unmanaged RAP 非管理式实现 是 RAP 中把更多事务实现责任交给开发者的实现方式：RAP runtime 仍提供 BO 调用框架和契约，但标准 CRUD、transactional buffer、锁、保存写库、key mapping、错误响应等核心逻辑主要由 Behavior pool 行为池 中的 handler class 和 saver class 实现。 如果说 Managed RAP 管理式实现 是“框架托管标准事务骨架，项目补业务规则”，那么 unmanaged RA"
  },
  {
    "title": "Managed Business Object with Unmanaged Save",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-020-managed-business-object-with-unmanaged-save-4bba2c3e.html",
    "excerpt": "20.1 一句话结论 Managed Business Object with Unmanaged Save 是 RAP 中介于 Managed RAP 管理式实现 和 Unmanaged RAP 非管理式实现 之间的一种实现方式：interaction phase 仍由 RAP managed runtime 管理，标准 create/update/delete/read、transactional buffer 和大部分 save sequence 仍走 managed 机制，但真正写入持久层的那一步由开发者在"
  },
  {
    "title": "Additional Save 附加保存",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-021-additional-save-3fe37ede.html",
    "excerpt": "21.1 一句话结论 Additional Save 附加保存 是 managed RAP BO 中用于增强标准保存流程的受控扩展点：RAP runtime 仍负责主业务数据的 managed save，项目只在同一个 save sequence 中追加必要的保存逻辑，例如写审计日志、change document、业务事件、扩展表或附属记录。 它的核心不是“保存时可以顺便做任何事”，而是“在 runtime 已经收集并准备保存 BO 修改之后，用 save modified 补充标准持久化之外的、必须与本次事务一"
  },
  {
    "title": "Handler class 处理器类",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-022-handler-class-36e88880.html",
    "excerpt": "22.1 一句话结论 Handler class 处理器类 是 RAP Behavior pool 行为池 中承载 BO 行为逻辑的 local class，通常继承 CL ABAP BEHAVIOR HANDLER，负责 action、determination、validation、authorization、feature control，以及在 unmanaged 场景中实现标准 operation；它不负责 save sequence 中的最终落库，那是 Saver class 保存器类 的边界。 一句话"
  },
  {
    "title": "Saver class 保存器类",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-023-saver-class-bd45280f.html",
    "excerpt": "23.1 一句话结论 Saver class 保存器类 是 RAP Behavior pool 行为池 中负责 save sequence 的 local class，通常继承 CL ABAP BEHAVIOR SAVER，处理最终保存、unmanaged save、additional save、late numbering、cleanup 等保存阶段逻辑；它和 Handler class 处理器类 的核心区别是：handler 处理 BO 行为和交互/保存前检查，saver 处理提交保存阶段。 一句话记忆：ha"
  },
  {
    "title": "EML Entity Manipulation Language",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-024-eml-entity-manipulation-language-546d081f.html",
    "excerpt": "24.1 一句话结论 EML Entity Manipulation Language 是 ABAP 中用于访问 RAP business object 的专用语言子集；它让 ABAP 程序、测试代码和 behavior implementation 用 READ ENTITIES、MODIFY ENTITIES、COMMIT ENTITIES 等语句按 RAP BO 契约读取、修改和提交业务对象，而不是绕过 BO 直接操作底层表。 一句话记忆：SQL 面向表，EML 面向 RAP BO；SQL 问“表里有什么”，"
  },
  {
    "title": "RAP draft handling",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-025-rap-draft-handling-1cd663ca.html",
    "excerpt": "25.1 一句话结论 RAP draft handling 是 RAP 为事务型 Fiori 应用提供的草稿机制：用户可以先把未完成或尚未通过校验的数据保存在 draft persistence 中，继续编辑、丢弃或激活；真正写入 active persistence 的动作由 RAP draft runtime、draft actions 和 save sequence 共同完成，而不是由开发者随手插一张“临时表”解决。 一句话记忆：draft 不是“未保存字段缓存”，而是 RAP BO 的受控生命周期；它让复杂"
  },
  {
    "title": "RAP feature control",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-026-rap-feature-control-ec5d5296.html",
    "excerpt": "26.1 一句话结论 RAP feature control 是 RAP 用来控制“某个操作或字段此刻是否可用”的机制：它可以让 update、delete、draft Edit、自定义 action、甚至部分字段，根据业务对象状态或全局条件在 Fiori / OData 消费中显示为 enabled、disabled、read only 等行为。 一句话记忆：authorization 问“你有没有权限”，feature control 问“这个功能现在该不该可用”。两者经常一起出现，但不能互相替代。 26.2 "
  },
  {
    "title": "RAP %control field-level change tracking",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-027-rap-control-field-level-change-tracking-bcc321a5.html",
    "excerpt": "27.1 一句话结论 RAP %control field level change tracking 是 RAP EML / behavior implementation 中用来说明“本次修改请求到底要改哪些字段”的字段级标记机制；它避免 update/create 请求把未修改字段也当成修改内容，从而降低静默覆盖、错误派生和旧逻辑误判的风险。 一句话记忆：字段值告诉 RAP “新值是什么”，%control 告诉 RAP “这个字段是不是本次请求要处理的字段”。没有 %control，很多 update 看起"
  },
  {
    "title": "Action 业务动作",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-028-action-9e9b0bf1.html",
    "excerpt": "28.1 一句话结论 Action 业务动作 是 RAP business object 中用于表达非标准 CRUD 的业务操作，例如审批、拒绝、取消、复制、重新计算、提交、生成后续对象等；它把“用户点按钮后发生的业务动作”显式建模在 behavior definition 和 behavior pool 中，而不是塞进普通 update、CDS 计算字段或前端按钮脚本里。 一句话记忆：CRUD 处理“增删改查”，Action 处理“业务动词”。如果需求说的是 accept、reject、cancel、submit"
  },
  {
    "title": "Validation 校验",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-029-validation-44a4b013.html",
    "excerpt": "29.1 一句话结论 Validation 校验 是 RAP business object 在保存前执行的业务一致性检查，用来判断一个 BO instance 是否允许进入持久化阶段；它不负责派生字段、不负责执行业务动作，也不负责最终保存，而是通过 failed / reported 把“哪里不合法、为什么不合法、消息应该显示在哪个字段上”交回 RAP runtime、OData consumer 和 Fiori UI。 一句话记忆：validation 是 RAP 的“保存闸门”。它不是前端输入框的简单必填提示"
  },
  {
    "title": "Determination 派生逻辑",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-030-determination-375d9597.html",
    "excerpt": "30.1 一句话结论 Determination 派生逻辑 是 RAP business object 中由框架自动触发的派生处理，用来根据当前业务对象状态计算、补齐或更新字段值；它的典型用途是创建时设置默认状态、字段变化后重算金额、保存前补齐派生值，而不是检查错误、执行业务按钮或最终落库。 一句话记忆：validation 问“这个数据能不能保存”，determination 问“系统能不能根据已有数据自动算出该有的值”。 30.2 概念说明 SAP Learning 对 determination 的定义可以拆"
  },
  {
    "title": "Idempotent determination 幂等 determination",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-031-idempotent-determination-determination-4f4ee5d0.html",
    "excerpt": "31.1 一句话结论 Idempotent determination 幂等 determination 指的是：同一个 RAP determination 即使因为相同输入或相同业务状态被触发多次，也应得到同样的业务对象结果，不应该产生重复累计、重复插入、重复消息或不可解释的副作用。 好的 determination 像“根据当前状态重新计算正确结果”；坏的 determination 像“在旧结果上再加一次”。在 RAP 中，determination 可能在 create、update、draft、save "
  },
  {
    "title": "Numbering 编号策略",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-032-numbering-42f19ede.html",
    "excerpt": "32.1 一句话结论 Numbering 编号策略 是 RAP business object 在 create 场景中决定“谁提供最终 key、什么时候提供、如何从临时实例映射到正式实例”的设计。它不只是生成一个号码，而是影响 create API、draft、save sequence、并发、回滚、业务单号是否允许跳号，以及 EML/OData consumer 如何拿到最终 key。 一句话记忆：numbering 解决的是“新对象还没有正式 key 时，RAP 如何安全地创建、跟踪、保存和返回它”。 32."
  },
  {
    "title": "Save sequence 保存序列",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-033-save-sequence-e31c34d1.html",
    "excerpt": "33.1 一句话结论 Save sequence 保存序列 是 RAP runtime 在 COMMIT ENTITIES 或 OData 保存请求之后，把 transactional buffer 中的 BO 变更检查、编号、保存、清理的一串受控流程；它回答的是“哪些逻辑还只是缓冲区变化，哪些逻辑已经进入真正保存，什么时候不能再安全回头”。 一句话记忆：interaction phase 是“先把意图放进 RAP buffer”，save sequence 才是“检查通过后真正提交这次 BO 变更”。 33.2 "
  },
  {
    "title": "RAP early numbering vs late numbering",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-034-rap-early-numbering-vs-late-numbering-05dccf21.html",
    "excerpt": "34.1 一句话结论 RAP early numbering vs late numbering 讲的是 RAP create 场景中最终 key 的分配时机：early numbering 在 create/modify 阶段就给新实例分配 key，late numbering 则等到 save sequence 中、接近最终保存时才分配 key。这个差异会影响 %cid / mapped、草稿、action、validation、业务单号是否跳号、以及 consumer 什么时候能拿到正式编号。 一句话记忆：e"
  },
  {
    "title": "RAP Interaction Phase vs Save Sequence",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-035-rap-interaction-phase-vs-save-sequence-ed29f259.html",
    "excerpt": "35.1 一句话结论 RAP Interaction Phase vs Save Sequence 是 RAP 事务模型中最重要的职责分界：interaction phase 处理 consumer 请求、BO 行为、transactional buffer 和可提前反馈的业务规则；save sequence 在保存触发后处理保存前检查、late numbering、最终持久化、附加保存和 cleanup。不能把两者都笼统叫“save phase”，否则很容易把逻辑放错位置。 一句话记忆：interaction p"
  },
  {
    "title": "RAP save_modified implementation",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-036-rap-save-modified-implementation-84f70d3a.html",
    "excerpt": "36.1 一句话结论 RAP save modified implementation 是 RAP saver class 中最容易被误用的方法之一：在 with unmanaged save 中，save modified 负责替代 managed runtime 的主保存；在 with additional save 中，save modified 只负责在 managed runtime 主保存之外追加附加逻辑。方法名相同，职责完全不同，必须先看 BDEF 的保存选项再读代码。 一句话记忆：save modi"
  },
  {
    "title": "COMMIT WORK restriction in RAP",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-037-commit-work-restriction-in-rap-7a133cb1.html",
    "excerpt": "37.1 一句话结论 COMMIT WORK restriction in RAP 指的是：在 RAP behavior implementation 的 handler、validation、determination、saver 等受控生命周期中，项目代码不能把 COMMIT WORK / ROLLBACK WORK 当成普通保存按钮来使用。RAP runtime 才是事务边界的 owner；外部 RAP BO consumer 应通过 EML Entity Manipulation Language 的 CO"
  },
  {
    "title": "RAP Action Handler Anti-Pattern: Direct INSERT",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-038-rap-action-handler-anti-pattern-direct-insert-7325d509.html",
    "excerpt": "38.1 一句话结论 RAP Action Handler Anti Pattern: Direct INSERT 指的是：在 RAP action handler 中为了“让按钮立刻生效”，直接对持久表执行 INSERT / UPDATE / DELETE，甚至再写 COMMIT WORK。这是一种典型反模式，因为 action handler 属于 RAP 生命周期中的交互处理位置，不应该绕过 business object、transactional buffer、validation、save sequen"
  },
  {
    "title": "Service definition 服务定义",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-039-service-definition-0138b5dc.html",
    "excerpt": "39.1 一句话结论 Service definition 服务定义 是 ABAP RESTful Application Programming Model 中定义“这个业务服务要暴露哪些 CDS/RAP entity”的 repository object。它不决定最终使用 OData V2、OData V4、UI service 还是 Web API；它先把可暴露的业务对象、projection entity、association、action/function 选出来，形成 API facing cont"
  },
  {
    "title": "Service binding 服务绑定",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-040-service-binding-c23e7cdd.html",
    "excerpt": "40.1 一句话结论 Service binding 服务绑定 是把 Service definition 服务定义 发布成可消费服务的 repository object。Service definition 先声明“暴露什么 entity 和行为”，service binding 再声明“用什么 binding type / protocol / consumption scenario 暴露”，例如 OData V4 UI、OData V4 Web API 或 OData V2。 一句话记忆：service "
  },
  {
    "title": "OData V2 基础差异",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-041-odata-v2-9ff5a688.html",
    "excerpt": "41.1 一句话结论 OData V2 基础差异 是学习 SAP OData 时必须认识的旧生态基础：很多 ECC、SAP Gateway、早期 Fiori、既有接口和客户扩展仍在使用 OData V2。现代 RAP 新开发通常更偏向 OData V4，尤其是 OData V4 UI / Web API binding；但项目现场仍需要读懂 V2 的 URL、metadata、batch、CSRF token、Gateway error 和兼容限制。 一句话记忆：OData V2 不是“应该新学的唯一方向”，而是“"
  },
  {
    "title": "OData V4 基础差异",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-042-odata-v4-8703e611.html",
    "excerpt": "42.1 一句话结论 OData V4 基础差异 是现代 RAP 服务暴露中最重要的协议方向之一。和 OData V2 基础差异 相比，V4 更适合新的 RAP business service、Fiori Elements UI、Web API、action/function、metadata driven consumption 和事务型 BO 暴露；但它不是“更高版本所以所有旧服务都自动替换”，仍要看消费者、系统版本、binding type 和项目兼容性。 一句话记忆：OData V4 是新 RAP 服务的"
  },
  {
    "title": "UI service vs Web API",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-043-ui-service-vs-web-api-eae9e36c.html",
    "excerpt": "43.1 一句话结论 UI service vs Web API 是 RAP/OData 服务设计中的消费方边界：UI service 主要服务 Fiori Elements / SAPUI5 页面，强调 annotation、draft、side effects、value help 和用户交互；Web API 主要服务外部系统或技术集成，强调稳定 contract、payload、HTTP 状态、认证授权、版本兼容和可自动化测试。 一句话记忆：UI service 是“给页面用的业务服务”，Web API 是“"
  },
  {
    "title": "Service preview 服务预览",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-044-service-preview-1b5668a5.html",
    "excerpt": "44.1 一句话结论 Service preview 服务预览 是在 ADT / RAP 开发中快速确认服务已发布、metadata 可读取、基本 UI 或 OData 调用可启动的最短验证路径。它适合开发早期排查 service definition、service binding、publish、metadata 和基本页面问题；但它不是完整 API 测试，也不能替代权限、错误、并发、性能、QAS/PRD 和外部消费者测试。 一句话记忆：preview 是“先看服务活没活”，不是“证明服务可上线”。 在学习 R"
  },
  {
    "title": "API testing workflow 接口测试流",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-045-api-testing-workflow-0438366f.html",
    "excerpt": "45.1 一句话结论 API testing workflow 接口测试流 是把 RAP/OData 服务从“preview 能打开”推进到“可以交付”的固定验证流程。它要求把 metadata、成功请求、失败请求、权限、并发、重复请求、错误 payload、目标系统验证和证据归档都做成可重复动作，而不是临时点几下页面。 一句话记忆：API 测试不是证明“能通一次”，而是证明“按契约成功、按契约失败、换用户换系统仍可解释”。 在一本实战书里，API testing workflow 要回答的不是“用 Postman"
  },
  {
    "title": "CDS table function vs CDS view entity",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-046-cds-table-function-vs-cds-view-entity-048e0553.html",
    "excerpt": "46.1 一句话结论 CDS table function vs CDS view entity 的核心判断是：大多数 ABAP CDS 建模应优先使用 CDS view entity；只有当逻辑无法用普通 CDS view entity、association、path expression、built in function、ABAP SQL 或 RAP 层清楚表达，并且确实需要数据库端复杂计算时，才考虑 CDS table function。Table function 通常绑定 AMDP 实现，能力强，但代"
  },
  {
    "title": "OData V4 expand and navigation properties",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-047-odata-v4-expand-and-navigation-properties-28c33331.html",
    "excerpt": "47.1 一句话结论 OData V4 expand and navigation properties 讲的是：CDS/RAP 中的 association 或 composition 经过 projection、service definition、service binding 暴露后，会在 OData V4 metadata 中形成 navigation property；消费者可以用 $expand 在一次请求中带出关联对象。它不是“随便把 join 结果塞进 JSON”，而是 metadata driv"
  },
  {
    "title": "RAP business events",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-048-rap-business-events-fd3eab08.html",
    "excerpt": "48.1 一句话结论 RAP business events 是 RAP business object 在业务状态发生重要变化时，对外发布“发生了什么”的事件机制。它适合把“主业务保存成功后需要通知、集成、异步处理”的场景从 action handler 和 save logic 中解耦出来；但它不是 validation、determination、action、additional save 或接口调用的替代品，也不是初学 RAP 必须第一天掌握的核心语法。 一句话记忆：business event 是“保存"
  },
  {
    "title": "RAP extensibility",
    "chapter": "Chapter 03 - CDS、RAP、OData",
    "url": "section-03-049-rap-extensibility-a515afa6.html",
    "excerpt": "49.1 一句话结论 RAP extensibility 是指在不破坏标准对象和 Clean Core 的前提下，对 RAP business object、CDS projection、behavior、UI/API 暴露和字段语义进行受控扩展。它的核心不是“想改哪里就改哪里”，而是先确认 SAP 是否提供 released API、extension include、metadata extension、behavior extension、custom field、BAdI 或 side by side 扩展"
  },
  {
    "title": "AUTHORITY-CHECK 经典授权检查",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-001-authority-check-1ee5b7b8.html",
    "excerpt": "1.1 一句话结论 AUTHORITY CHECK 是经典 ABAP 里最直接的应用层授权检查语句：程序拿当前用户、授权对象和字段值去问 SAP 授权系统“这个用户是否允许做这件事”，然后用 sy subrc 决定继续、报错或拒绝请求。 对初学者来说，本节先建立一个核心判断：授权不是“画面上有没有按钮”，而是“后端代码、数据访问和业务动作是否真的被保护”。如果一个用户不能修改某个公司代码的数据，ABAP 程序不能只依赖 Fiori / SAP GUI 的按钮隐藏，也不能只相信前端传来的参数；在进入敏感读取、创建、修"
  },
  {
    "title": "SAP Authorization Architecture Overview",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-002-sap-authorization-architecture-overview-e17826e1.html",
    "excerpt": "2.1 一句话结论 SAP authorization architecture 不是一个单点开关，而是一组分层机制：用户通过 role 获得 authorization object / field value，ABAP 代码可以用 AUTHORITY CHECK 经典授权检查 做显式检查，CDS 可以用 CDS Access Control DCL 行级访问控制 限制读取结果，RAP 可以用 RAP global authorization 全局授权 和 RAP instance authorization 实"
  },
  {
    "title": "CDS Access Control DCL 行级访问控制",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-003-cds-access-control-dcl-e736fc1e.html",
    "excerpt": "3.1 一句话结论 CDS Access Control，也就是 DCL，是 ABAP CDS 里的声明式读取授权机制：它把“当前用户可以读到哪些行”写在 CDS access control object 里，让被保护的 CDS entity 在读取时自动受到访问规则影响。 在 Week 3，DCL role 访问规则 已经讲过 define role、grant select on、where 和 aspect pfcg auth(...) 这类语法。本节放到 Week 4，是为了从项目交付角度回答另一个问题："
  },
  {
    "title": "RAP global authorization 全局授权",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-004-rap-global-authorization-16745110.html",
    "excerpt": "4.1 一句话结论 RAP global authorization 是 RAP behavior 层的“操作级授权”入口：它回答的是“当前用户是否总体允许执行某类操作”，例如是否允许创建、更新、删除或执行某个 action，而不是回答“当前用户能看到哪些数据行”或“这一个具体实例是否可操作”。 在授权地图里，它位于 CDS Access Control (DCL) 行级访问控制 和 RAP instance authorization 实例授权 之间。DCL 更偏读取结果过滤；global authorizati"
  },
  {
    "title": "RAP instance authorization 实例授权",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-005-rap-instance-authorization-6183d5b9.html",
    "excerpt": "5.1 一句话结论 RAP instance authorization 是 RAP behavior 层的“对象实例级授权”：它回答的是“当前用户是否允许对这一条具体业务对象实例执行某个操作”，例如某张单据、某个上传批次、某条申请、某个状态下的对象是否允许当前用户 update、delete、approve 或 cancel。 它和 RAP global authorization 全局授权 的差异在于：global authorization 先判断用户是否总体具备某类操作资格；instance authori"
  },
  {
    "title": "Precheck 预检查",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-006-precheck-937e701e.html",
    "excerpt": "6.1 一句话结论 Precheck 是“尽早拒绝明显不应继续的请求”的设计动作：在进入昂贵计算、锁定、编号、保存、外部调用或不可回滚副作用之前，先检查请求是否缺少必要数据、是否明显违反状态规则、是否没有基本操作资格，或者是否会造成后续流程必然失败。 它不是 RAP global authorization 全局授权、RAP instance authorization 实例授权、validation 或 lock 的替代品。更准确地说，precheck 是把“越早知道一定失败的事情，越早返回清楚错误”作为交付原则"
  },
  {
    "title": "SU53 and authorization trace workflow",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-007-su53-and-authorization-trace-workflow-ba8e9841.html",
    "excerpt": "7.1 一句话结论 SU53 和 authorization trace 是授权失败排查的证据工具：它们帮助团队看到最近一次或特定范围内的授权检查失败信息，但它们不是授权机制本身，也不能替代对 AUTHORITY CHECK 经典授权检查、CDS Access Control DCL 行级访问控制、RAP global authorization 全局授权、RAP instance authorization 实例授权 和 role 配置的分析。 初学者要先记住：SU53 常用于“用户刚刚操作失败后，截图给权限/开"
  },
  {
    "title": "SAP role profile authorization object hierarchy",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-008-sap-role-profile-authorization-object-hierarchy-547b4ecb.html",
    "excerpt": "8.1 一句话结论 SAP 授权不是“给用户一个权限名”这么简单，而是从 user 到 role、profile、authorization object、authorization field、field value 的层级授予结构。ABAP 里的 AUTHORITY CHECK 经典授权检查、CDS DCL 的 PFCG 条件、RAP 授权实现和 SU53/trace 证据，最终都要落回“用户到底被授予了哪些对象和字段值”来解释。 本节先建立层级图，下一节 PFCG role basics for develo"
  },
  {
    "title": "PFCG role basics for developers",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-009-pfcg-role-basics-for-developers-705939eb.html",
    "excerpt": "9.1 一句话结论 PFCG role basics for developers 是 ABAP 开发者理解 SAP 授权落地方式的基础：开发者通常不负责在生产系统维护角色，但必须读懂 PFCG role、authorization object、authorization field、field value、organizational value / organizational level、generated profile、role assignment 和 SU53 / trace 证据，才能把代码里的授"
  },
  {
    "title": "Enqueue locking 加锁设计",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-010-enqueue-locking-d5a35a82.html",
    "excerpt": "10.1 一句话结论 SAP enqueue locking 是 SAP 应用层的业务对象锁机制，用来防止多个用户或进程同时修改同一业务对象。它解决的是“并发修改导致覆盖、重复处理或状态错乱”的问题，不等同于数据库层的 SELECT ... FOR UPDATE，也不等同于幂等、授权或 validation。 初学者可以先记住一句项目话：如果两个用户可能同时处理同一张单据、同一个上传批次、同一个主数据对象或同一段业务状态，就要考虑 SAP enqueue / lock object / lock function "
  },
  {
    "title": "Transaction boundary 事务边界",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-011-transaction-boundary-b94ac411.html",
    "excerpt": "11.1 一句话结论 Transaction boundary 是一次业务动作从“开始收集变更”到“统一提交或回滚”的一致性边界。ABAP 项目里不能只把它理解成数据库事务；还要同时区分 SAP LUW 逻辑事务单元、Database LUW 数据库事务、update task、enqueue lock、BAPI commit pattern、RAP transactional buffer 和 Save sequence 保存序列。 一句话判断：谁拥有 transaction boundary，谁才有资格决定 C"
  },
  {
    "title": "SELECT FOR UPDATE vs SAP enqueue",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-012-select-for-update-vs-sap-enqueue-17d18ae8.html",
    "excerpt": "12.1 一句话结论 SELECT ... FOR UPDATE 是数据库层的行锁思路，SAP enqueue 是 SAP 应用层的业务对象锁思路。二者都和并发控制有关，但保护范围、生命周期、可见性和项目用途不同：数据库锁更接近当前数据库事务里的行级保护；SAP enqueue 更适合表达“某个业务对象正在被 SAP 会话或流程处理，其他人不要同时改”。 在 SAP 项目中，不能因为熟悉 SQL 的 SELECT FOR UPDATE 就跳过 Enqueue locking 加锁设计。如果业务要保护的是单据、上传批"
  },
  {
    "title": "Application Log 应用日志",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-013-application-log-17b32fe8.html",
    "excerpt": "13.1 一句话结论 Application Log 应用日志 是 SAP 应用程序为业务处理过程留下的可查询、可追踪、可交付的处理记录。它回答的问题不是“程序有没有写过日志”，而是“某一次接口、批处理、后台 job 或业务动作到底处理了什么、在哪一步失败、失败后能不能重跑、运维和开发如何定位”。 在 SAP 项目中，很多问题不是在前台按钮点击的一瞬间解决的，而是在后台作业、接口调用、批量导入、异步处理和上线后故障调查中解决的。Application Log 的价值就在这里：它让一次业务处理从“口头说失败了”变成一"
  },
  {
    "title": "Security Audit Log 安全审计日志",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-014-security-audit-log-d91a6c87.html",
    "excerpt": "14.1 一句话结论 Security Audit Log 安全审计日志 是 SAP 系统层面记录安全相关事件的审计证据入口；它帮助团队回答“谁在什么时间、从哪里、以什么身份，触发了哪些安全相关行为”。它和 Application Log 应用日志 不同：Application Log 主要解释业务处理过程和应用错误，Security Audit Log 主要服务于安全、合规、审计和异常访问调查。 初学 ABAP 时很容易把所有“日志”混成一个词。项目现场实际会区分多类证据：业务处理失败先看 Application"
  },
  {
    "title": "Read Access Logging 读取访问日志",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-015-read-access-logging-3f099ea9.html",
    "excerpt": "15.1 一句话结论 Read Access Logging 读取访问日志 是 SAP 用来记录敏感数据“被读取”这一事实的合规证据；在本教程里要学的是：它和 Security Audit Log 安全审计日志、Application Log 应用日志 不同，重点不是业务处理是否成功，而是谁在什么时候通过什么入口看到了哪些受保护数据。 很多初学者会以为“只读数据没有改动，所以风险小”。在企业系统里，这个判断不成立。工资、个人身份信息、银行账号、客户隐私、医疗信息、供应商敏感资料、价格条件、财务明细等数据，即使没有被"
  },
  {
    "title": "Error message design 错误消息设计",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-016-error-message-design-c05159c6.html",
    "excerpt": "16.1 一句话结论 Error message design 错误消息设计 是把错误信息设计成“可判断、可处理、可追踪”的项目交付能力；在本教程里要学的是：错误消息不只是给用户看的文字，而是调用方、测试、运维和开发共同使用的诊断接口。 一个坏错误消息只说 处理失败、System error、不正な値です。这种消息看似提醒了用户，实际没有告诉任何人下一步该做什么：是输入数据错了？没有权限？对象被锁？配置缺失？系统异常？网络超时？还是已经处理过不能重复执行？如果调用方无法判断问题类型，就无法决定是否重试、是否修正数据"
  },
  {
    "title": "Exception vs message 异常与消息",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-017-exception-vs-message-414fed45.html",
    "excerpt": "17.1 一句话结论 Exception vs message 异常与消息 的核心，是区分“程序是否还能继续执行”和“人或调用方应该看到什么反馈”；在本教程里要学的是：异常用于控制错误路径，消息用于表达可理解的业务结果，两者要配合，而不是互相替代。 在 ABAP 项目里，很多代码坏味道都来自这个边界不清。有人把所有业务校验都写成技术异常，结果用户看到一堆内部错误；有人把严重技术错误吞掉，只返回一条 处理失败，结果开发者无法追踪；也有人在深层工具类里直接 MESSAGE e...，导致方法无法复用、无法测试、也无法被"
  },
  {
    "title": "ABAP Unit for service logic",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-018-abap-unit-for-service-logic-23443f8e.html",
    "excerpt": "18.1 一句话结论 ABAP Unit for service logic 是把服务背后的业务规则、错误映射和边界条件写成可自动回归的单元测试；在本教程里要学的是：不要只证明 API 或画面“现在能跑”，而要证明核心逻辑“以后改了也不容易坏”。 SAP 项目中很多缺陷并不是语法错，而是规则改动后旧场景被破坏。例如 precheck 原来能拦住重复请求，后来重构后漏掉；错误消息原来能区分权限错误和业务校验，后来都变成 System error；批量上传原来能逐行返回错误，后来只返回整体失败。这些问题靠手工点画面或临"
  },
  {
    "title": "OO Test Double Framework",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-019-oo-test-double-framework-15937e9d.html",
    "excerpt": "19.1 一句话结论 OO Test Double Framework 是 ABAP Unit 中用来替换面向对象依赖的测试替身能力；在本教程里要学的是：当 service logic 依赖数据库、外部系统、权限检查、时间或其他类时，如何用可控替身让测试稳定、快速、可验证。 上一节 ABAP Unit for service logic 讲的是要把业务规则写成可回归测试。但现实服务逻辑很少完全纯粹：它可能要读数据库、调用远程接口、取得当前用户、检查权限、写应用日志、读取系统时间。如果每个单元测试都依赖这些真实对象，"
  },
  {
    "title": "ABAP SQL Test Double Framework",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-020-abap-sql-test-double-framework-54bfde0c.html",
    "excerpt": "20.1 一句话结论 ABAP SQL Test Double Framework 是在 ABAP Unit 中隔离 ABAP SQL（旧资料常称 Open SQL，类名中也常出现 OSQL）数据库依赖的测试能力。本教程里要学的是：让读取数据库的业务逻辑可以用受控测试数据验证，而不是依赖当前系统里“刚好存在”的真实业务数据。 上一节 OO Test Double Framework 讲的是替换面向对象依赖，比如权限检查器、外部 API adapter、clock provider。ABAP SQL Test Dou"
  },
  {
    "title": "CDS Test Double Framework",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-021-cds-test-double-framework-9dce73f3.html",
    "excerpt": "21.1 一句话结论 CDS Test Double Framework 是在 ABAP Unit 中隔离 CDS 读取依赖的测试能力；在本教程里要学的是：当业务逻辑依赖 CDS view entity、association、projection 或 CDS based query 时，如何用受控测试数据验证语义，而不是依赖真实系统数据。 ABAP SQL Test Double Framework 更偏向 ABAP SQL（旧资料和类名中也常写作 Open SQL / OSQL）表访问和查询逻辑；CDS Tes"
  },
  {
    "title": "Authority Check Test Helper",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-022-authority-check-test-helper-e8ca4248.html",
    "excerpt": "22.1 一句话结论 Authority Check Test Helper 是把授权相关分支设计成可测试逻辑的辅助层；在本教程里要学的是：真实授权要由 SAP 角色、授权对象、DCL、RAP authorization 和系统 trace 验证，但服务逻辑中“有权限/无权限时应该怎么处理”也必须能用 ABAP Unit 稳定回归。 授权测试常见误区是只准备一个“有权限用户”点通画面，或者只在 UI 隐藏按钮。这样不能证明 API、后台 job、OData、RAP action 或批处理入口是安全的。另一个误区是单"
  },
  {
    "title": "Background job and SUBMIT basics",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-023-background-job-and-submit-basics-11cfa86d.html",
    "excerpt": "23.1 一句话结论 Background job and SUBMIT basics 是理解 SAP 后台批处理运行、排障和证据链的基础；在本教程里要学的是：一个 ABAP 报表或处理程序如何在后台按计划运行，失败时从 job log、spool、variant、Application Log 应用日志 和输入条件追到原因。 SAP 项目里很多处理不是用户前台点按钮完成的，而是在夜间、月末、接口批次或大量数据处理时由 background job 执行。比如批量同步主数据、导入外部文件、生成结算数据、定期清理临时"
  },
  {
    "title": "BAPI usage pattern and BAPI_TRANSACTION_COMMIT",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-024-bapi-usage-pattern-and-bapi-transaction-commit-f86f44ce.html",
    "excerpt": "24.1 一句话结论 BAPI usage pattern and BAPI TRANSACTION COMMIT 是经典 ABAP 集成和批处理中调用标准业务 API 的基本事务模式；在本教程里要学的是：调用 BAPI 后必须检查 RETURN 消息，再由正确的事务拥有者决定 BAPI TRANSACTION COMMIT 或 rollback，不能把 commit 当成“固定收尾代码”随便写。 BAPI 可以理解为 SAP 对外或对内稳定暴露的一类业务函数接口。很多标准业务对象，例如客户、物料、销售订单、会计凭"
  },
  {
    "title": "ATC check set 质量门禁",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-025-atc-check-set-68824dd3.html",
    "excerpt": "25.1 一句话结论 ATC check set 质量门禁 是把 ABAP Test Cockpit 的检查结果纳入开发、review、移送和上线判断的质量机制；在本教程里要学的是：ATC 不是“跑一下工具”，而是用一组项目认可的检查项持续发现语法、性能、安全、Clean Core、released API 和可维护性风险。 Week 2 的 ATC quality check 代码质量检查 更偏初学者认识 ATC；本节更偏项目交付：什么检查必须跑，什么 finding 阻塞移送，什么 finding 可以申请豁免"
  },
  {
    "title": "SQL Trace performance analysis",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-026-sql-trace-performance-analysis-42456acb.html",
    "excerpt": "26.1 一句话结论 SQL Trace performance analysis 是用运行时证据定位数据库访问瓶颈的方法；在本教程里要学的是：当 ABAP 程序、CDS、OData 或后台作业变慢时，不靠感觉猜 SQL 问题，而是用 trace 看实际执行了哪些 SQL、执行了多少次、花了多久、读了多少数据。 ATC check set 质量门禁 可以静态提示潜在性能风险，例如循环里 SELECT、缺少 WHERE、未使用 key 等；SQL Trace 关注实际运行时。它回答的是：这一段操作真实发出了哪些数据库"
  },
  {
    "title": "ABAP Profiler performance analysis",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-027-abap-profiler-performance-analysis-54d1e482.html",
    "excerpt": "27.1 一句话结论 ABAP Profiler performance analysis 是用运行时调用栈和耗时数据定位 ABAP 应用层瓶颈的方法。当前一节 SQL Trace performance analysis 没有发现明显慢 SQL，或 SQL 只是整体慢的一部分时，Profiler 帮助开发者回答：到底是哪个 method、loop、formatting、conversion、authorization check、logging、framework callback 或 service logic"
  },
  {
    "title": "SQL Monitor 生产级 SQL 观察",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-028-sql-monitor-sql-4fef5db4.html",
    "excerpt": "28.1 一句话结论 SQL Monitor 生产级 SQL 观察 是从系统或较长时间窗口观察 ABAP 程序实际 SQL 使用情况的性能分析方法；在本教程里要学的是：如何从真实工作负载中找出执行次数多、总耗时高、读数异常或调用位置可疑的 SQL，再决定是否进入 SQL Trace、ABAP Profiler 或代码重构。 上一节 ABAP Profiler performance analysis 关注 ABAP 应用层调用路径：哪个方法耗时、调用多少次、热点在业务逻辑还是框架回调。SQL Monitor 关注的"
  },
  {
    "title": "Clean Core extensibility",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-029-clean-core-extensibility-e0cf8c9c.html",
    "excerpt": "29.1 一句话结论 Clean Core extensibility 是在不破坏 SAP 标准核心、尽量使用 released API 和官方扩展点的前提下实现业务差异化的设计原则；在本教程里要学的是：当业务提出“标准不够”时，如何选择配置、key user extension、developer extensibility、side by side extension 或受控增强，而不是直接改标准或依赖未释放对象。 Clean Core 不是“不许开发”，也不是“所有自开发都放到 BTP”。它的核心问题是：这次"
  },
  {
    "title": "Released API dependency check",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-030-released-api-dependency-check-14931541.html",
    "excerpt": "30.1 一句话结论 Released API dependency check 是在设计、编码、review 和上线前确认自开发对象是否依赖 SAP 官方允许使用的 API、对象或扩展点的检查动作。它不是为了阻止开发，而是为了把 SAP 标准依赖从“看起来能用”推进到“有官方证据、可升级、可审计、可交付”。 在 Clean Core 语境下，最危险的依赖往往不是明显的错误代码，而是那些短期能跑、长期不稳的调用：直接读写 SAP 标准表、调用未释放的 class/function module、使用内部 CDS v"
  },
  {
    "title": "Production hardening checklist",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-031-production-hardening-checklist-6ba1110a.html",
    "excerpt": "31.1 一句话结论 Production hardening checklist 是把一个“能在开发机跑通”的 ABAP/RAP/OData/后台处理，整理成“可以进入生产系统、可以被运维、可以被审计、可以回退”的上线前检查清单；在本教程里要学的是：从 POC 走向项目交付时，必须补齐哪些证据。 POC 的目标是证明技术路线可行，生产交付的目标是让真实用户、真实数据、真实权限、真实负载和真实故障场景下也可控。一个接口在 service preview 里能打开，不代表授权正确；一个 job 在小数据量下能跑，不代"
  },
  {
    "title": "Classic enhancement options awareness",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-032-classic-enhancement-options-awareness-fc045290.html",
    "excerpt": "32.1 一句话结论 Classic enhancement options awareness 是「棕地 SAP 项目识别能力」中的补充知识点；在本教程里要学的是：能识别 BAdI、Enhancement Framework、user exit、customer exit 等经典扩展点，并知道它们与 Clean Core、released API、ABAP Cloud 的边界。 这一节的重点不是教初学者马上去新增 classic exit，而是让读者进入日本 SAP 棕地项目时不会“看不懂现场语言”。很多 S/4"
  },
  {
    "title": "Classic integration interfaces awareness",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-033-classic-integration-interfaces-awareness-a838d9eb.html",
    "excerpt": "33.1 一句话结论 Classic integration interfaces awareness 是「棕地 SAP 项目识别能力」中的补充知识点；在本教程里要学的是：能识别 IDoc/ALE、RFC、Function Module、BAPI 等经典接口形态，并知道它们与 RAP/OData、Clean Core 和 released API 的边界。 这一节的目标不是把 IDoc、RFC、BAPI 都学成开发专家，而是让读者在日本 SAP 项目现场看到“既存IF”“RFC連携”“IDocエラー”“BAPI呼出"
  },
  {
    "title": "Classic reporting forms and migration awareness",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-034-classic-reporting-forms-and-migration-awareness-8fcbd306.html",
    "excerpt": "34.1 一句话结论 Classic reporting forms and migration awareness 是「棕地 SAP 项目识别能力」中的补充知识点；在本教程里要学的是：能识别 ALV、classic forms、Migration Cockpit、LSMW 等现场常见对象，并知道它们只是 awareness，不是本课程的主线开发方向。 这一节的重点是“识别与边界”，不是把课程改造成 ALV、表单和数据迁移大全。日本 SAP 棕地项目里，经常会遇到旧 ABAP report、ALV grid、SAP"
  },
  {
    "title": "SAP Note and OSS note workflow",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-035-sap-note-and-oss-note-workflow-0e2994f8.html",
    "excerpt": "35.1 一句话结论 SAP Note and OSS note workflow 是 SAP 项目中处理标准产品缺陷、已知问题、修正说明和官方支持沟通的工作流；在本教程里要学的是：如何检索 SAP Note，判断它是否适用于当前系统，如何安全实施或转交 Basis/负责团队，并把判断、测试、transport 和客户沟通留下证据。 SAP Note 不是普通博客，也不是看到相似报错就可以直接套用的补丁。它通常由 SAP 官方发布，可能包含问题描述、适用组件、release/support package 条件、前"
  },
  {
    "title": "Japanese SAP deliverable documents",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-036-japanese-sap-deliverable-documents-b08681d5.html",
    "excerpt": "36.1 一句话结论 Japanese SAP deliverable documents 是「测试、质量与上线准备」中的一个核心知识点；在本教程里要学的是：理解基本設計書、詳細設計書、単体テスト仕様書、結合テスト仕様書与 ABAP 对象的关系。 在日本 SAP 项目里，代码只是交付物的一部分。一个 ABAP 对象要进入生产，通常还要能对应到設計書、テスト仕様書、移送申請（现场也常说移送依頼）、障害票、課題管理表、運用手順、リリース判定資料等文档。个别问题单可以被称为課題票，汇总管理表通常叫課題管理表。读者需要知道"
  },
  {
    "title": "Change request and incident workflow",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-037-change-request-and-incident-workflow-00ea541f.html",
    "excerpt": "37.1 一句话结论 Change request and incident workflow 是把“发现问题或提出变更”转化为“可追踪、可评审、可测试、可移送、可关闭”的项目流程；在本教程里要学的是：日本 SAP 项目里变更申请、障害票、課題票、审批、测试、移送和关闭之间如何连接 ABAP 开发工作。 上一节 Japanese SAP deliverable documents 讲了设计、测试、移送、运维文档；本节讲这些文档在真实流程中如何流动。一个 bug 不只是“修一下代码”，它可能从障害票开始，经过原因分析"
  },
  {
    "title": "SAP Solution Manager and Cloud ALM basics",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-038-sap-solution-manager-and-cloud-alm-basics-b405f8ae.html",
    "excerpt": "38.1 一句话结论 SAP Solution Manager and Cloud ALM basics 是理解 SAP 项目生命周期管理工具的入门知识；在本教程里要学的是：SolMan / Cloud ALM 不是 ABAP 编辑器，而是把需求、变更、测试、移送、监控、运维和障害管理连接起来的项目与运维平台。 上一节 Change request and incident workflow 讲了票据和流程；本节讲这些流程可能落在哪类 SAP ALM 工具中。很多老项目使用 SAP Solution Manager"
  },
  {
    "title": "AC0567C POC architecture replay",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-039-ac0567c-poc-architecture-replay-be4cadf1.html",
    "excerpt": "39.1 一句话结论 AC0567C POC architecture replay 是把本教程中的 AC0567C batch upload API POC 当作一个小型真实 SAP 项目来复盘：从业务场景、数据模型、RAP business object 业务对象、Service definition 服务定义、Service binding 服务绑定、OData API、authorization、idempotency、保存阶段、日志、测试证据、性能和上线准备一路串起来，确认读者不只是“看过代码”，而是能说"
  },
  {
    "title": "AC0567C authorization replay",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-040-ac0567c-authorization-replay-626f837b.html",
    "excerpt": "40.1 一句话结论 AC0567C authorization replay 是把 AC0567C batch upload API POC 放回 SAP 授权体系中复盘：一个 API 不是只要能被调用就算完成，还要能说明谁能上传、谁能查询、无权限如何被拒绝、错误如何返回、证据如何保存，以及哪些授权缺口必须在生产化前补齐。 本节最重要的结论是：AC0567C POC 已经有一个真实的 ABAP 授权检查点，ExecuteImport 会在写入前执行 AUTHORITY CHECK OBJECT 'F BKPF B"
  },
  {
    "title": "AC0567C idempotency replay",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-041-ac0567c-idempotency-replay-b22fe515.html",
    "excerpt": "41.1 一句话结论 AC0567C idempotency replay 不是泛泛讲“接口要防重复”，而是用本地 POC 证据复盘：同一个 AC0567C batch upload 请求被重复执行时，当前实现如何用 ImportId 派生业务 key、如何在写入前查 ZCOM B ACTT397、如何返回 CONFLICT，以及这个 POC 设计距离生产级幂等还差哪些锁、唯一约束、request log 和 application log。 一句话记忆：AC0567C 当前已经证明了“重复同一 ImportId "
  },
  {
    "title": "AC0567C RAP saver replay",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-042-ac0567c-rap-saver-replay-19af2964.html",
    "excerpt": "一句话结论 AC0567C RAP saver replay 是用本地 POC 复盘 RAP 保存阶段的责任边界：ExecuteImport action 负责校验、授权、重复检查和 staging；真正的 INSERT zcom b actt397 FROM TABLE @lt insert 放在 behavior saver 的 save 方法中执行。这是 AC0567C 从“action handler 直接写表”修正为“RAP save phase 写表”的关键设计点。 一句话记忆：AC0567C 当前的保"
  },
  {
    "title": "AC0567C API evidence replay",
    "chapter": "Chapter 04 - Project Delivery And Production Readiness",
    "url": "section-04-043-ac0567c-api-evidence-replay-8901680e.html",
    "excerpt": "43.1 一句话结论 AC0567C API evidence replay 是把 AC0567C POC 的 API 行为整理成可复盘、可审查、可交付的证据包。它不是说“Swagger 能打开”或“我本地调通过”，而是把 endpoint、request、response、后台结果、重复调用、错误路径和剩余风险串起来，让 reviewer 能判断这个接口到底证明了什么、还没有证明什么。 当前本地 POC 的证据很清楚：03 api docs/AC0567C ENDPOINTS.md 定义了 5 个 AC0567C"
  }
];
