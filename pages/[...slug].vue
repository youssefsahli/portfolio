<template>
  <ElContainer>
    <PostSideBar />
    <ElContainer>
      <ElMain>
        <ContentDoc>
          <template  v-slot="{ doc }">
            <article>
              <ContentRenderer :value="doc" />
            </article>
          </template>
          <template #empty>
            <el-skeleton :rows="5" animated/>
          </template>
          <template #not-found>
            <Empty />
          </template>
        </ContentDoc>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>