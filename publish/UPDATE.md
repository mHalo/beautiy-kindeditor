# 更新日志
### v4.4.22 (2024-11-08)  
1. BUG修复

---
### v4.4.21 (2024-11-07)  
1. 插入代码插件更新，在v4.4.19的基础上，支持编辑器内引入prism插件进行高亮转换（此种情况下编辑器将只储存高亮转换后的结果），具体使用请参考[ReadMe文档](https://github.com/mHalo/mhalo.kindeditor?tab=readme-ov-file#%E7%89%B9%E7%82%B9)。
2. 一些优化更新

---
### v4.4.19 (2024-11-06)  
1. 插入程序代码插件更新（优化结构以适配prismjs，感谢[@hulang](https://github.com/hulang)提供的代码修改）  

---
### v4.4.18 (2024-11-05)  
1. 插入程序代码插件弹窗宽度调整  
2. 一些优化更新 

---
### v4.4.16 (2024-09-25)
1. 优化了一些样式

---
### v4.4.15 (2023-05-08)
1. 工具栏图标文件本地化，图标字体路径: themes -> default -> fonts/*，图标样式包含在default.css文件中

---
### v4.4.13 (2023-04-11)
优化程序代码插件：
1. 当光标在代码块内部时，自动选中代码内容，点击工具栏中的插入代码图标，自动填充代码输入框（此变更避免在某些情况下编辑器无法获取到当前pre的Node信息）；
2. 优化代码插入逻辑，避免编辑提交后产生代码嵌套，优化编辑时语言栏选中状态

---
### v4.4.11 (2023-04-09)  
1. 插入程序代码插件优化修改：当光标在已插入的代码块内部时，点击工具栏中的代码插入图标，自动填充代码输入框。

---
### v4.4.10 (2023-03-17)  
STUPID BUG🐛 Fixed 🙈

---
### v4.4.9 (2023-03-17)  
1. MultiImageUploader上传接口中返回数据格式处理逻辑BUG修复(保持kindeditor默认格式处理)；
关联[v4.4.8](https://github.com/mHalo/mhalo.kindeditor/blob/main/UPDATE.md#v448-2023-03-09)更新
2. README.md中增加自定义图标的配置方法

---
### v4.4.8 (2023-03-09)  
上传类接口返回数据格式处理逻辑更新(保持kindeditor默认格式处理)； 
如遇到接口返回数据格式不同的情况，可以增加uploadResponseFilter参数配置进行处理：
```
> options 

uploadJson: '/handler/upload-test',
uploadHeader:{
    corefx: 'mhalo'
},
extraFileUploadParams:{
    data: 'demo'
},
uploadFileSizeLimit: '5MB',
uploadFileTypeLimit: '*.jpg;*.gif;*.png;*.jpeg,*.bmp',
filePostName: 'imgFile',

// upload新增配置参数
uploadResponseFilter: function(response){
    return response.data
},
```

---
### v4.4.7 (2023-03-08)  
1. 图片编辑窗内，属性编辑的逻辑优化 
2. 地图组件BUG修复（iframe方式引入可交互地图的更新已包含在计划中，暂只支持图片的引入方式） 
3. 一些优化更新 

---
### v4.4.6 (2023-02-24)
1. 调整emoji/symbol插件样式结构

---
### v4.4.3 (2023-02-22)  
1. 增加symbols(特殊字符)插件，**K.Tools.Normal** 配置中已默认包含此插件。symbols信息可按照以下方案进行配置：
```
K.create('#editor', {
    symbolConfig:function(symbols, page){
        page.cols = 9
    },
});
```

---
### v4.4.1 (2023-02-22)  
1. 修复quote插件工具栏中hover提示undefined
2. 源码增加dist文件夹（/publish/dist），可直接下载使用
3. 将[kindsoft/kindeditor#54](https://github.com/kindsoft/kindeditor/issues/54)中bugfix的处理方式扩展为可配置，默认情况下，设置样式或上传编辑图片时，编辑器不再自动滚动至将编辑内容所在的位置。如需保持原逻辑，可通过一下方式开启：
```
K.create('#editor', {
    scrollToEditingTarget: true,
});
```
4. 增加emoji插件，**K.Tools.Normal** 配置中已默认包含此插件。emoji信息可按照以下方案进行配置：
```
K.create('#editor', {
    emojiConfig:function(emojis, page){
        page.cols = 12
    },
});
```
5. 更新部分样式

---
### v4.4.0 (2022-11-03)  
1. 修复批量上传图片bug

---
### v4.3.8 (2022-11-03)  
1. 优化包静态资源引用（emoji表情插件已弃用，filemanager静态资源未进行优化），无用资源文件删除，减小包体积
2. 地图插件优化
3. 编辑器界面美化、弹窗样式美化
4. 默认工具栏配置更新

---
### v4.3.5 (2022-11-02)  
1. 修复WebUploader引用bug

---
### v4.3.0 (2022-11-01)  
1. 修复fixToolBar功能，增加[fixToolBarWatchRef]参数，可以指定滚动时监听的对象  
示例 options ->：
```
fixToolBar: true,
fixToolBarWatchRef: '#wrapper',
```

2. 移除flash相关模块
3. 移除部分无用的文件
