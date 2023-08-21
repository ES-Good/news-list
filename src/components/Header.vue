<template>
    <header class="header">
        <div class="header__top">
            <Logo/>
        </div>

        <div class="header__info">
            <div class="container">
                <div class="header__text-block">
                    <h1 class="header__title">
                        Новости
                    </h1>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from './Logo.vue';

export default {
    name: 'Header',
    components: { 
        Logo 
    }
}
</script>

<style>

</style>