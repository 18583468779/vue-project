<template>
    <div>shop</div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    name: 'shop',
    setup() {
        const { params } = useRoute();
        console.log(params)
    }
}
</script>

<style></style>