# CSS Layout
CSS Layout 是对上下左右布局的一个简单封装，主要针对自己项目里面方便使用。  
坚持组合大于继承的原则，复杂的布局也是由简单布局组成的。 
所以不习惯margin/padding-top/right/bottom/left-*的同学可以忽略。  
大家可以使用免费cdn 做测试： https://gitcdn.xyz/repo/wz2cool/css_layout/0.1/dist/layout.min.css

## .fill
填充父节点全部空间。

## .fill-height
填充父节点高度空间。

## .fill-width
填充父节点宽度空间。

## .float-right
向右浮动。

## .float-left
向左浮动。

## .horizontal-container
### .fill-right
![](https://raw.githubusercontent.com/wz2cool/markdownPhotos/master/res/fill-right.png)
```html
<div class="horizontal-container fill-right" style="height: 100px;">
    <div class="left-panel fill-height" style="background: #EE91AD; width: 150px;">
        left panel (auto)
    </div>
    <div class="right-panel fill-height" style="background: #7171D1;">
        right panel (fill rest)
    </div>
</div>
```

### .fill-left
![](https://raw.githubusercontent.com/wz2cool/markdownPhotos/master/res/fill-left.png)
```html
<div class="horizontal-container fill-left" style="height: 100px;">
    <div class="right-panel fill-height" style="background: #7171D1;  width: 150px;">
        right panel (auto)
    </div>
    <div class="left-panel fill-height" style="background: #EE91AD;">
        left panel (fill rest)
    </div>
</div>
```

## .vertical-container
### .fill-bottom
![](https://raw.githubusercontent.com/wz2cool/markdownPhotos/master/res/fill-bottom.png)
```html
<div class="vertical-container fill-bottom" style="height: 400px;">
    <div class="top-panel" style="background: #EE91AD; height: 100px;">
        top panel (auto)
    </div>
    <div class="bottom-panel" style="background: #7171D1;">
        bottom panel (fill rest)
    </div>
</div>
```

### .fill-top
![](https://raw.githubusercontent.com/wz2cool/markdownPhotos/master/res/fill-top.png)
```html
<div class="vertical-container fill-top" style="height: 400px;">
    <div class="top-panel" style="background: #EE91AD; ">
        top panel (fill rest)
    </div>
    <div class="bottom-panel" style="background: #7171D1;height: 100px;">
        bottom panel (auto)
    </div>
</div>
```

## complex hor-ver layout
![](https://raw.githubusercontent.com/wz2cool/markdownPhotos/master/res/complex-layout.png)
```html
<div class="vertical-container fill-bottom" style="height:300px;">
    <div class="top-panel">
        top (auto)
    </div>
    <div class="bottom-panel">
        <!-- need fill height width -->
        <div class="vertical-container fill-top fill">
            <div class="top-panel">
                <div class="left-panel fill-height">
                    left (auto)
                </div>
                <div class="right-panel fill-height">
                    <div class="horizontal-container fill-left fill">
                        <div class="right-panel fill-height">
                            right(auto)
                        </div>
                        <div class="left-panel fill-height">
                            center
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-panel">
            bottom panel (auto)
        </div>
    </div>
</div>
```

## .center-container
### .center-horizontal
![](https://raw.githubusercontent.com/wz2cool/markdownPhotos/master/res/hor-center.png)
```html
<div class="center-container center-horizontal" style="background: #EE91AD; width: 200px; height: 50px">
    <div class="center-panel">
        center item
    </div>
</div>
```

### .center-vertical
![](https://raw.githubusercontent.com/wz2cool/markdownPhotos/master/res/hor-center.png)
```html
<div class="center-container center-vertical" style="background: #EE91AD; width: 200px; height: 50px">
    <div class="center-panel">
        center item
    </div>
</div>
```

## ver-hor center
![](https://raw.githubusercontent.com/wz2cool/markdownPhotos/master/res/ver-hor-center.png)
```html
<div class="center-container center-vertical" style="background: #EE91AD; width: 200px; height: 50px">
    <div class="center-panel">
        <div class="center-container center-horizontal">
            <div class="center-panel">
                <span>*</span> center item
            </div>
        </div>
    </div>
</div>
```