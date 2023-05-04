<template>
    <div class="wrapper">
        <h1>登录</h1>
        <form @submit.prevent="handleSubmit">
            <div class="form_items">
                <input type="text" placeholder="请输入用户名" name="user">
            </div>
            <div class="form_items">
                <input type="password" placeholder="请输入密码" name="password">
            </div>
            <div class="form_submit">
                <button type="submit">登录</button>
            </div>
        </form>
    </div>
</template>

<script>

import { useRouter } from 'vue-router'

export default {
    name: 'LogIn',
    setup() {
        const router = useRouter();
        const handleSubmit = () => {
            console.log('first');
            localStorage.setItem('LoginUser', true)
            router.push({ name: 'Home' })
        }
        return {
            handleSubmit
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