import {
    trigger, // 动画封装触发，外部的触发器
    state, // 转场状态控制
    style, // 用来书写基本的样式
    transition, // 用来实现css3的 transition
    animate, // 用来实现css3的animations
    keyframes // 用来实现css3 keyframes的
} from '@angular/animations';


export const fadeIn =
    trigger('fadeIn', [
        state('none', style({display: 'none', opacity: '0'})), // 默认元素不展开
        state('block', style({display: 'block', opacity: '1'})),
        transition("none <=> block", animate(100))
    ]);