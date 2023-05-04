<template>
    <div class="docker">
        <div v-for="(item, index) in dockerItem" :class="{ 'docker__item': true, 'docker__item--active': index === 0 }"
            :key="item">
            <div class="iconfont" v-html="item.icon" />
            <div class="docker__title">{{ item.value }}</div>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    name: 'Docker',
    setup() {
        const dockerItem = reactive([
            { icon: '&#xe6f3;', value: '首页' },
            { icon: '&#xe7e5;', value: '购物车' },
            { icon: '&#xe61e;', value: '订单' },
            { icon: '&#xe660;', value: '我的' }
        ]);
        return {
            dockerItem
        }
    }
}
</script>

<style lang="scss" >
@import '../style/viriables.scss';
@import '../style/mixins.scss';

.docker {
    display: flex;
    box-sizing: border-box;
    position: absolute;
    padding: 0 .18rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .49rem;
    border-top: .01rem solid $content-bgColor;
    color: $content-fontcolor;

    &__item {
        flex: 1;
        text-align: center;

        .iconfont {
            margin: .07rem 0 .02rem 0;
            font-size: .18rem;
        }

        &--active {
            color: #1FA4FC;
        }
    }

    &__title {
        font-size: .2rem;
        transform: scale(.5, .5);
        transform-origin: center top;
    }
}
</style>