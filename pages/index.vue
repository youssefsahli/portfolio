<template>
  <ElContainer>
    <Banner />
  </ElContainer>
  <ElContainer>
    <ElMain>
      <ContentDoc path="/about" v-slot="{ doc }">
        <ContentRenderer :value="doc">
          <ElText tag="h1">{{ doc.title }}</ElText>
          <ContentRendererMarkdown :value="doc" />
        </ContentRenderer>
      </ContentDoc>
    </ElMain>
  </ElContainer>
</template>

<script setup>

</script>