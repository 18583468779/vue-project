<template>
    <div class="content">
        <div class="category">
            <div v-for="(item, index) in category" :key="item.name"
                :class="item.active ? 'category__item category__item--active' : 'category__item'"
                @click="changeCategory(index)">
                {{ item.name }}
            </div>
        </div>
        <div class="product">
            <div class="product__item" v-for="item in products" :key="item._id">
                <img class="product__item__img" :src="item.imgUrl" />
                <div class="product__item__detail">
                    <h4 class="product__item__title">{{ item.name }}</h4>
                    <p class="product__item__sales">月售 {{ item.sales }} 件</p>
                    <p class="product__item__price">
                        <span class="product__item__yen">&yen;</span>{{ item.price }}
                        <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
                    </p>
                </div>
                <div class="product__number">
                    <span class="product__number__minus iconfont"
                        @click="() => handleChangeCount(item._id, item, -1)">&#xe691;</span>
                    {{ cartState?.[params.id]?.[item._id]?.count || 0 }}
                    <span class="product__number__plus iconfont"
                        @click="() => handleChangeCount(item._id, item, +1)">&#xe668;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


import { get } from '@/lib/ajax';
import { ref, toRefs, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const useCategoryEffect = () => {
    const { params } = useRoute();
    const products = ref([]);
    const tab = ref('all');
    const category = ref([
        { name: '全部商品', tab: 'all', active: true },
        { name: '秒杀', tab: 'seckill', active: false },
        { name: '新鲜水果', tab: 'fruit', active: false }
    ]);
    const changeCategory = (index) => {
        category.value.map(item => item.active = false);
        category.value[index].active = true;
        tab.value = category.value[index].tab
    }
    const getContentData = async () => {
        const result = await get(`/api/shop/${params.id}/products`, { tab: tab.value });
        if (result.errno == 0) {
            products.value = result.data;
        }
    }
    return { changeCategory, getContentData, category, products, params }
}

const useCartEffect = (params) => {
    //获取商品的数量
    const store = useStore();
    const handleChangeCount = (productId, item, change) => {
        store.commit('changeCartState', { shopId: params.id, productId, item, change });
    }
    const { cartState } = toRefs(store.state);
    return { cartState, handleChangeCount }
}
export default {
    name: 'shopContent',
    setup() {
        const { changeCategory, getContentData, category, products, params } = useCategoryEffect()
        watchEffect(() => getContentData());
        //cart
        const { cartState, handleChangeCount } = useCartEffect(params);
        return {
            category, changeCategory, products, handleChangeCount, cartState, params
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5rem;
    bottom: .5rem;
}

.category {
    overflow-y: scroll;
    height: 100%;
    width: .76rem;
    background: $search-bgColor;

    &__item {
        line-height: .4rem;
        text-align: center;
        font-size: .14rem;
        color: #333;

        &--active {
            background: $bgColor;
        }
    }
}

.product {
    overflow-y: scroll;
    flex: 1;

    &__item {
        position: relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solid $content-bgColor;

        &__detail {
            overflow: hidden;
        }

        &__img {
            width: .68rem;
            height: .68rem;
            margin-right: .16rem;
        }

        &__title {
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $content-fontcolor;
            @include ellipsis;
        }

        &__sales {
            margin: .06rem 0;
            font-size: .12rem;
            color: $content-fontcolor;
        }

        &__price {
            margin: 0;
            line-height: .2rem;
            font-size: .14rem;
            color: $hightlight-fontColor;
        }

        &__yen {
            font-size: .12rem;
        }

        &__origin {
            margin-left: .06rem;
            line-height: .2rem;
            font-size: .12rem;
            color: $light-fontColor;
            text-decoration: line-through;
        }

        .product__number {
            position: absolute;
            right: 0;
            bottom: .12rem;
            line-height: .18rem;

            &__minus {
                position: relative;
                top: .02rem;
                color: $medium-fontColor;
                margin-right: .05rem;
            }

            &__plus {
                position: relative;
                top: .02rem;
                color: $btn-bgColor;
                margin-left: .05rem;
            }
        }
    }

}
</style>
