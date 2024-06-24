<template>
  <ElContainer>
    <Banner />
  </ElContainer>
  <ElContainer>
    <ElMain>
      <div class="markdown-content">
        <ContentDoc path="/about" v-slot="{ doc }">
          <ContentRenderer :value="doc">
            <ElText tag="h1">{{ doc.title }}</ElText>
            <ContentRendererMarkdown :value="doc" />
          </ContentRenderer>
        </ContentDoc>
      </div>
    </ElMain>
  </ElContainer>
</template>

<style>
  @import url('/assets/markdown.css');
</style>