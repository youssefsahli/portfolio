<template>
  <Html :class="getLightMode" />
  <Head>
    <Title>
      Youssef Sahli
    </Title>
  </Head>
  <!-- <Banner /> -->
  <Navigation />
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
  <ElBacktop/>
</template>

<script setup lang="ts">
  const lightMode = useState('LightMode', () => true)
  const getLightMode = computed(() => {
    return lightMode.value ? 'light' : 'dark'
  })
  import 'element-plus/theme-chalk/dark/css-vars.css'
</script>