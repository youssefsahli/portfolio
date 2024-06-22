<template>
  <div>
    <ElMenu :default-active="activeIndex" 
      :ellipsis="false"
      @select="handleSelect"
      mode="horizontal">
      <ElMenuItem index="0">
        <Icon name="ph:house" />
      </ElMenuItem>
      <ElMenuItem index="1">
        <Icon name="ph:book-open-fill" />
      </ElMenuItem>
      <ElSpace direction="horizontal"/>
      <ElMenuItem>
        <ElSwitch
        v-model="lightMode"
        :active-icon="ElIconSunny"
        :inactive-icon="ElIconMoon"
        />
      </ElMenuItem>
    </ElMenu>
  </div>
</template>

<script lang="ts" setup>
const activeIndex: Ref<string> = useState('TabDisplay', () => '0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
};
const lightMode: Ref<boolean> = useState('LightMode', () => true)
</script>