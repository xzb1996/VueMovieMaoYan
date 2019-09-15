# 技术栈
- `vue-router`
- `Vuex`
- `axios` 二次封装
- `路有守卫` 
- `路由懒加载`
- `JS组件封装`
- `UI组件封装`
- `图片懒加载`
- `本地存储（localStorage sessionStorage）`
- `better-scroll`
- `swiper`
- `Token验证`
- `vue-loader`
- `vue-touch` 移动端手指事件

### 项目依赖
```javascript
yarn add vue-router axios vuex swiper better-scroll vue-loader vue-lazyload
```
### 项目启动
```
npm install
npm run dev
```

# 思路
### 1、项目搭建
- `npm install @vue/cli -g`  全局安装Vue CLI
- `vue create myapp`   脚手架创建项目myapp

### 2、环境配置
- `vue create myapp` 创建项目
	1、Manually select features  自己配置
	2、安装依赖，Babel、Router、Vuex、CSS，之后用到什么再装什么即可
	3、是否使用history路由？N
	4、Sass/SCSS(with dart-sass)
	5、将配置项保存在package.json中
	6、是否保存配置项？ N
	7、用什么安装？ yarn  npm都可以

### 3、完成项
- 路由搭建
- tabBar搭建
- axios + loading
- 页面布局
- 城市列表
- 首页
- 详情页
- 搜索页面
- `待完善`