<template>
  <ElMenu :default-active="activeIndex" @select="" mode="horizontal">
    <ElMenuItem index="0" @click="navigateTo('/')">
      <Icon name="ph:house" />
    </ElMenuItem>
    <ElMenuItem index="1" @click="navigateTo('/posts')">
      <Icon name="ph:book-open-fill" />
    </ElMenuItem>
    <ElSwitch v-model="lightMode" inline-prompt active-text="Light" inactive-text="Dark"
      :active-action-icon="ElIconSunny" :inactive-action-icon="ElIconMoon" />
  </ElMenu>
</template>

<script lang="ts" setup>
const lightMode = useState('LightMode', () => true)
const activeIndex: Ref<string> = useState('TabDisplay', () => '0')
</script>

<style></style>