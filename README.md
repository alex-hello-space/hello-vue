# Vue Tutorial

[**Vue**](https://cn.vuejs.org/guide/scaling-up/sfc.html)：我们可以使用一种类似 HTML 格式的文件来书写 Vue 组件，它被称为单文件组件 (也被称为 \*.vue 文件，英文 Single-File Components，缩写为 SFC)。顾名思义，Vue 的单文件组件会将[一个组件的逻辑 (JavaScript)，模板 (HTML) 和样式 (CSS) ](https://cn.vuejs.org/api/sfc-spec.html)封装在同一个文件里。

## 创建应用
todo 删除原来自带的vue，按照教程一步步来

### 应用实例

每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例：

```js
import { createApp } from "vue";
const app = createApp({
  /* 根组件选项 */
});
```

### 根组件

​
我们传入 createApp 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。
如果你使用的是单文件组件，我们可以直接从另一个文件中导入根组件。

```js
import { createApp } from "vue";
// 从一个单文件组件中导入根组件
import App from "./App.vue";
const app = createApp(App);
```

### 挂载应用 ​

应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：

```html
<div id="app"></div>
```

```js
app.mount("#app");
```

应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。

.mount() 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。

## 模板语法
