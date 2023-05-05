<template>
    <div class="wrapper">
        <h1>登录</h1>
        <form @submit.prevent="handleSubmit">
            <div class="form_items">
                <input type="text" placeholder="请输入用户名" name="user" v-model="username">
            </div>
            <div class="form_items">
                <input type="password" placeholder="请输入密码" name="password" v-model="password">
            </div>
            <div class="form_submit">
                <button type="submit">登录</button>
            </div>
        </form>
        <Toast v-if="show" :message="toastMessage" />
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue';
import { post } from '../../lib/ajax'
import Toast, { useToastEffect } from '../../components/Toast.vue';

const useLoginEffect = (showToast) => {
    const router = useRouter();

    const data = reactive({
        username: '',
        password: '',
    });

    const handleSubmit = async () => {
        try {
            const result = await post('/api/user/login', { username: data.username, password: data.password });
            if (result.errno === 0) {
                showToast('登录成功')
            } else {
                showToast('登录失败')

            }
            // localStorage.setItem('LoginUser', true)
            // router.push({ name: 'Home' })
        } catch (error) {
            console.log(error)
        }

    }
    const { username, password } = toRefs(data);
    return { username, password, handleSubmit }
}


export default {
    name: 'LogIn',
    components: {
        Toast
    },
    setup() {
        const { show, toastMessage, showToast } = useToastEffect();
        const { username, password, handleSubmit } = useLoginEffect(showToast)
        return {
            handleSubmit, username, password, show, toastMessage
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    max-width: 94%;
    margin: 0 auto;
    text-align: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;

    h1 {
        color: rgb(173, 194, 230);
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 100%;

        .form_items {
            display: flex;
            flex-direction: column;
            text-align: left;
            height: 40px;
            border: 2px solid rgb(173, 194, 230);
            border-radius: 5px;

            input {
                height: 100%;
                border-radius: 5px;
            }
        }

        .form_submit {
            margin-top: 60px;
            width: 100%;

            button {
                width: 100%;
                background: rgb(173, 194, 230);
                color: white;
                height: 40px;
                border-radius: 5px;
                font-size: 16px;
            }
        }
    }
}
</style>