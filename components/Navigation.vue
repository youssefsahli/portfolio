<template>
  <ElMenu :default-active="activeIndex" @select="" :ellipsis="false" mode="horizontal">
    <ElMenuItem index="0" @click="navigateTo('/')">
      <Icon name="ph:house-fill" />
    </ElMenuItem>
      <ElMenuItem index="1" @click="navigateTo('/posts')">
        <Icon name="ph:book-open-fill" />
      </ElMenuItem>
      <div class="flex-grow"></div>
      <div class="flex-center">
        <ElInput v-model="searchBox" placeholder="Search posts">
          <template #prepend>
            <Icon name="ph:projector-screen-chart-fill" />
          </template>
        </ElInput>
      </div>
      <div class="flex-grow"></div>
    <ElSpace>
      <ElSwitch v-model="lightMode" :active-action-icon="ElIconSunny" :inactive-action-icon="ElIconMoon" />
    </ElSpace>
  </ElMenu>
</template>

<script lang="ts" setup>
const lightMode = useState('LightMode', () => true)
const activeIndex: Ref<string> = useState('TabDisplay', () => '0')
const searchBox = ref('')
</script>

<style>
.flex-grow {
  flex-grow: 0.5;
}
.flex-center {
  width: 60%;
  place-self: center center;
  justify-content: center;
}
</style>
