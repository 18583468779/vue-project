<template>
    <div class="nearby">
        <h3 class="nearby__title">附近店铺</h3>
        <router-link v-for="item in  nearbyList " :key="item._id" :to="`/shop/${item._id}`">
            <ShopInfoVue :item="item" />
        </router-link>
    </div>
</template>

<script>
import { get } from '@/lib/ajax';
import { ref } from 'vue';

import ShopInfoVue from '../../components/ShopInfo.vue';
const useNearbyListEffect = () => {
    const nearbyList = ref([]);
    const getNearbyList = async () => {
        const result = await get('/api/shop/hot-list');
        if (result?.errno === 0 && result?.data?.length) {
            nearbyList.value = result.data
        }
    }

    return { nearbyList, getNearbyList }
}

export default {
    name: 'nearby',
    components: {
        ShopInfoVue
    },
    setup() {
        const { nearbyList, getNearbyList } = useNearbyListEffect();
        getNearbyList();
        return {
            nearbyList

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

.nearby {
    &__title {
        margin: .16rem 0 .02rem 0;
        font-size: .18rem;
        font-weight: normal;
        color: $content-fontcolor;
    }

    &__item {
        display: flex;
        padding-top: .12rem;

        &__img {
            margin-right: .16rem;
            width: .56rem;
            height: .56rem;
        }
    }

    &__content {
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

}
</style>