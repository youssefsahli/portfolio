<template>
  <ElAside width="200px" v-if="visible">
      <ElScrollbar>
        <ContentList v-slot="{ list }">
          <ElMenu>
            <ElMenuItem v-for="article in list" 
              :key="article._path" 
              @click="navigateTo(article._path)">
              {{ article.title }}
            </ElMenuItem>
          </ElMenu>
        </ContentList>
      </ElScrollbar>
    </ElAside>
</template>

<script>
  const visible = ref(false)
</script>