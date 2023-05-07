<template>
    <div class="wrapper">
        <div class="search">
            <div class="search__back iconfont">
                &#xe6f2;
            </div>
            <div class="search__content">
                <span class="search__content__icon iconfont">&#xe62d;</span>
                <input class="search__content__input" placeholder="请输入商品名称" />
            </div>
        </div>
        <ShopInfo :item="item" />
        <!-- <Content :shopName="item.name" /> -->
        <!-- <Cart /> -->
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { get } from '@/lib/ajax';
import { ref } from 'vue';
import ShopInfo from '../../components/ShopInfo.vue'


export default {
    name: 'shop',
    components: {
        ShopInfo
    },
    setup() {
        const { params } = useRoute();
        const item = ref({})
        const getDataInfo = async () => {
            const result = await get(`/api/shop/${params.id}`)
            item.value = result.data;

        }

        getDataInfo();
        return { item }

    }
}
</script>
<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
    padding: 0 .18rem;
}

.search {
    display: flex;
    margin: .14rem 0 .04rem 0;
    line-height: .32rem;

    &__back {
        width: .3rem;
        font-size: .24rem;
        color: #B6B6B6;
    }

    &__content {
        display: flex;
        flex: 1;

        border-radius: .16rem;

        &__icon {
            width: .44rem;
            text-align: center;

        }

        &__input {
            display: block;
            width: 100%;
            padding-right: .2rem;
            border: none;
            outline: none;
            background: none;
            height: .32rem;
            font-size: .14rem;
            color: $content-fontcolor;

            &::placeholder {
                color: $content-fontcolor;
            }
        }
    }
}
</style>