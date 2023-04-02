<template>
  <div class="technical">
    <el-row :gutter="10" style="margin: 0px 0px 10px" class="technical-main">
      <el-col :span="24">
        {{ getTimeOfDay() }}
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin: 10px 0">
      <el-col :span="16">
        <base-card :title="'通知'">
          <template #main>
            <div v-if="inform">
              <el-timeline v-for="item in inform" :key="item.id">
                <el-timeline-item
                  :timestamp="flitTime(item.date_created)"
                  placement="top"
                >
                  <el-card>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.info }}</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
            <div v-else>暂无通知内容</div>
          </template>
        </base-card>
      </el-col>
      <el-col :span="8" style="margin: 0">
        <el-row :gutter="10" style="margin: 0">
          <el-col :span="24" style="height: 300px">
            <base-card :title="'日历'">
              <template #main>
                <div class="calendar">
                  <el-calendar v-model="calendar"> </el-calendar>
                </div>
              </template>
            </base-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import baseCard from '@/components/base-card/src/base-card.vue'
import dayjs from 'dayjs'
export default {
  components: { baseCard },
  data() {
    return {
      calendar: new Date(),
      inform:
        this.$store.getters['inform/getNowInform'].result.slice(0, 5) ?? []
    }
  },
  watch: {
    'store.state.inform.nowInform': {
      function() {
        this.inform = this.$store.getters['inform/getNowInform'].result.slice(
          0,
          5
        )
      },
      deep: true
    }
  },
  methods: {
    getTimeOfDay() {
      let now = new Date()
      let hour = now.getHours()
      let msg = this.$store.getters['getUserInfo'].nickname
      if (hour >= 4 && hour < 12) {
        return `早上好, ${msg}!`
      } else if (hour >= 12 && hour < 18) {
        return `中午好, ${msg}!`
      } else {
        return `晚上好, ${msg}!`
      }
    },
    flitTime(date) {
      return dayjs(date).format('YYYY年MM月DD日 HH:mm')
    }
  },
  created() {}
}
</script>

<style lang="less" scoped>
.technical-main {
  padding: 8px 10px;
  font-size: 18px;
  line-height: 1.4em;
  background-color: #fff;
  box-shadow: 0px 1px 2px #00000033;
}
.calendar {
  width: 100%;
  font-size: 14px;
}
.el-button {
  width: 100%;
  height: 120px;
  margin: 0px;
  font-size: 24px;
  i {
    font-size: 46px;
    margin-bottom: 10px;
    display: inline-block;
  }
}
</style>
