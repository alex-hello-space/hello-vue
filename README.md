# Vue Tutorial

[**Vue**](https://cn.vuejs.org/guide/scaling-up/sfc.html)：我们可以使用一种类似 HTML 格式的文件来书写 Vue
组件，它被称为单文件组件 (也被称为 \*.vue 文件，英文 Single-File Components，缩写为 SFC)。顾名思义，Vue
的单文件组件会将[一个组件的逻辑 (JavaScript)，模板 (HTML) 和样式 (CSS) ](https://cn.vuejs.org/api/sfc-spec.html)
封装在同一个文件里。

## 创建应用

todo 删除原来自带的vue，按照教程一步步来

### 应用实例

每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例：

```js
import {createApp} from "vue";

const app = createApp({
    /* 根组件选项 */
});
```

### 根组件

我们传入 createApp 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件。
如果你使用的是单文件组件，我们可以直接从另一个文件中导入根组件。

```js
import {createApp} from "vue";
// 从一个单文件组件中导入根组件
import App from "./App.vue";

const app = createApp(App);
```

### 挂载应用

应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：

```html

<div id="app"></div>
```

```js
app.mount("#app");
```

应用根组件的内容将会被渲染在容器元素里面。容器元素自己将不会被视为应用的一部分。

.mount() 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。

### 应用配置​
应用实例会暴露一个 .config 对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，用来捕获所有子组件上的错误：

```js
app.config.errorHandler = (err) => {
  /* 处理错误 */
}
```
应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件：

```js
app.component('TodoDeleteButton', TodoDeleteButton)
```

确保在挂载应用实例之前完成所有应用配置！

## 模板语法
> Vue 使用一种基于 HTML 的模板语法，使我们能够声明式地将其组件实例的数据绑定到呈现的 DOM 上。所有的 Vue 模板都是语法层面合法的 HTML，可以被符合规范的浏览器和 HTML 解析器解析。

### 文本插值
最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)：
```template
<span>Message: {{ msg }}</span>
```
双大括号标签会被替换为相应组件实例中 msg 属性的值。同时每次 msg 属性更改时它也会同步更新。

### Attribute 绑定​
双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 v-bind 指令：

```template
<div v-bind:id="dynamicId"></div>
```
v-bind 指令指示 Vue 将元素的 id attribute 与组件的 dynamicId 属性保持一致。如果绑定的值是 null 或者 undefined，那么该 attribute 将会从渲染的元素上移除。

因为 v-bind 非常常用，我们提供了特定的简写语法：
```template
<div :id="dynamicId"></div>
```
开头为 : 的 attribute 可能和一般的 HTML attribute 看起来不太一样，但它的确是合法的 attribute 名称字符，并且所有支持 Vue 的浏览器都能正确解析它。