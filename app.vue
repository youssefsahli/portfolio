<template>
  <Html :class="getLightMode"
  />
  <Head>
    <Title>
      Youssef Sahli
    </Title>
  </Head>
  <Navigation />
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
  <ElBacktop/>
</template>

<script setup lang="ts">
  const lightMode: Ref<boolean> = useState('LightMode')
  const getLightMode = computed(() => {
    return lightMode.value == true ? "light" : "dark"
  })
</script>