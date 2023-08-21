<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__logo-box">
        <logo/>
        <p class="footer__company-year">
          © alpha, 2023
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from './Logo.vue';

export default {
    name: 'Footer',
    components: { Logo }
}
</script>

<style>
    
</style>