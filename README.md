# mobilePassword

#### 介绍
手机端的密码输入控件

#### 参数说明
##### 参数皆非必填
 - @param size                  number        需要输入密码的长度
 - @param title                 string        密码框弹起的标题
 - @param forget                string        是否显示 “忘记密码”    参数 ： 'show' 显示    'hide' 隐藏
 - @funtion forgetAction                      点击忘记密码的事件
 - @funtion callback => (res)                 输入密码完成后回调
  - res                                       返回的输入的密码


#### 函数说明(实例化之后才可用)
 - @rise    显示密码输入框
 - @drop    关闭密码输入框
 

#### 额外说明
 1. 组件蒙版层 `z-index` 为500
 2. 组件密码层 `z-index` 为1000

#### 文件结构
|----------------------------------------------------------------------
|- rem  主要为手机端用了rem的适配，（默认fontsize = 46.875 效果最佳） 
|--- mobilePassword.js    核心JS文件
|--- mobilePassword.less  样式相关less文件 
|- demo 简单粗暴的演示文档
|- mobilePassword.js    核心JS文件 
|- mobilePassword.less  样式相关less文件
|- mobilePassword.css   样式相关css文件