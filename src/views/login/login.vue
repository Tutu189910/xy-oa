<template>
  <div class="login">
    <template class="login-main">
      <login-main></login-main>
    </template>
    <vue-particles
      class="particles"
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
import loginMain from './cpns/login-main.vue'
export default {
  components: { loginMain }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: no-repeat center/100% 100% url('@/assets/img/bg.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .login-main {
    z-index: 2;
  }
  .particles {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }
}
</style>
