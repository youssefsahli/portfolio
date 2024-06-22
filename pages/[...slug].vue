<template>
  <ElContainer>
  <ElMain>
    <ElAside>
    </ElAside>
    <ElCard>
      <template #header>
        <span>Card name</span>
      </template>
      <ContentDoc>
        <template #not-found>
          Nothing is there
        </template>
      </ContentDoc>
      <template #footer>Footer content</template>
    </ElCard>
  </ElMain>
</ElContainer>
</template>