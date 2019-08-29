<template>
  <div class="user-privacy">
    <div>hhhhhh</div>
    <Group>
      <Datetime></Datetime>
    </Group>
  </div>
</template>

<script>
    import { Group, Datetime} from 'vux'
    export default {
        name: "privacyPolicy",
        components: {
            Datetime,
            Group
        }
    }
</script>

<style scoped lang="less">
  .user-privacy{
    padding: .2rem;
  }
</style>
