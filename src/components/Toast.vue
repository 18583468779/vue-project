<template>
    <div class="toast">
        {{ message }}
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export const useToastEffect = () => {
    const data = reactive({
        show: false,
        toastMessage: ''
    });
    const showToast = (message) => {
        data.show = true;
        data.toastMessage = message
        setTimeout(() => {
            data.show = false;
        }, 2000);
    }
    const { show, toastMessage } = toRefs(data);
    return { show, toastMessage, showToast }
}


export default {
    name: 'Toast',
    props: ['message'],
    setup() {

    }
}
</script>

<style lang="scss">
.toast {
    padding: 10px 30px;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .2);
    border-radius: 3px;
    position: fixed;
    top: 10px;
}
</style>