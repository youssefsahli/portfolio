<template>
  <div class="wrapper">
    <ElSpace style="justify-content: center; display: flex;">
      <h1 class="page-title">
        Youssef <br>
        Sahli <br>
      </h1>
      <Banner style="padding-top: 30px;" />
    </ElSpace>
  </div>
  <ElMain style="padding-top: 0;">
    <div class="markdown-content">
      <ContentDoc path="/about" v-slot="{ doc }">
        <ContentRenderer :value="doc">
          <ContentRendererMarkdown :value="doc" />
        </ContentRenderer>
      </ContentDoc>
    </div>
  </ElMain>
</template>

<style>
@import url('/assets/markdown.css');

.page-title {
  font-family: SvBasic;
  font-size: 3rem;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.light .wrapper {
  background: linear-gradient(135deg, #f0f0f0 25%, transparent 25%, transparent 50%, #f0f0f0 50%, #f0f0f0 75%, transparent 75%, transparent);
}

.dark .wrapper {
  background: linear-gradient(135deg, #858585 25%, transparent 25%, transparent 50%, #616161 50%, #838383 75%, transparent 75%, transparent);
}
</style>
