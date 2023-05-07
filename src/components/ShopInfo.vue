<template>
    <div class="nearby__item">
        <img :src="item.imgUrl" class="nearby__item__img">
        <div class="nearby__content">
            <div class="nearby__content__title">{{ item.name }}</div>
            <div class="nearby__content__tags">
                <span class="nearby__content__tag">{{ item.name }}</span>
                <span class="nearby__content__tag">月售{{ item.sales }}+</span>
                <span class="nearby__content__tag">月售{{ item.sales }}+</span>
            </div>
            <p class="nearby__content__highlight">{{ item.slogan }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopInfo',
    props: ['item']
}
</script>

<style lang="scss">
@import '../style/viriables.scss';

.nearby__item {
    display: flex;
    padding-top: .12rem;

    &__img {
        margin-right: .16rem;
        width: .56rem;
        height: .56rem;
    }
}

.nearby__content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgColor;

    &__title {
        line-height: .22rem;
        font-size: .16rem;
        color: $content-fontcolor;
    }

    &__tags {
        margin-top: .08rem;
        line-height: .18rem;
        font-size: .13rem;
        color: $content-fontcolor;
    }

    &__tag {
        margin-right: .16rem;
    }

    &__highlight {
        margin: .08rem 0 0 0;
        line-height: .18rem;
        font-size: .13rem;
        color: #E93B3B;
    }
}
</style>