<template>
  <div class="data">
    <el-row :gutter="20" class="tag">
      <el-col :span="6" v-for="(value, key) in tagData" :key="key">
        <base-card :title="key">
          <template #main>
            <div>{{ value }}</div>
          </template>
        </base-card>
      </el-col>
    </el-row>
    <el-row :gutter="18" class="ECharts">
      <el-col :span="16">
        <base-card :title="'近七日收、取衣情况'">
          <template #main>
            <base-echarts :setting="echarts.datas"></base-echarts>
          </template>
        </base-card>
      </el-col>
      <el-col :span="8">
        <base-card :title="'近一周订单情况'">
          <template #main>
            <base-echarts :setting="echarts.order"></base-echarts>
          </template>
        </base-card>
      </el-col>
      <el-col :span="24" style="margin-top: 10px">
        <base-card :title="'年订单曲线'">
          <template #main>
            <base-echarts :setting="echarts.curve"></base-echarts>
          </template>
        </base-card>
      </el-col>
    </el-row>
    <el-backtop
      target=".page-component__scroll .el-scrollbar__wrap"
    ></el-backtop>
  </div>
</template>

<script>
import baseCard from '@/components/base-card/src/base-card.vue'
import BaseEcharts from '@/components/base-echarts/src/base-echarts.vue'
export default {
  components: { baseCard, BaseEcharts },
  data() {
    return {
      tagData: this.$store.getters.getSum,
      echarts: {
        order: {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            bottom: 'bottom'
          },
          series: [
            {
              name: '近一周',
              type: 'pie',
              radius: '50%',
              data: [
                { value: this.weekData().outCount, name: '已完成' },
                { value: this.weekData().getCount, name: '进行中' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },
        datas: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          legend: {
            data: ['收衣数', '取衣数'],
            bottom: 'bottom'
          },
          xAxis: [
            {
              type: 'category',
              data: Object.keys(this.weekData().getData).reverse(),
              axisPointer: {
                type: 'shadow'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '件数',
              interval: 5
            }
          ],
          series: [
            {
              name: '取衣数',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + '件'
                }
              },
              data: Object.values(this.weekData().outData).reverse()
            },
            {
              name: '收衣数',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' 件'
                }
              },
              data: Object.values(this.weekData().getData).reverse()
            }
          ]
        },
        curve: {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['总订单', '收衣数', '取衣数']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: Object.keys(this.yearData().count)
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '总订单',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: Object.values(this.yearData().count)
            },
            {
              name: '收衣数',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: Object.values(this.yearData().getData)
            },
            {
              name: '取衣数',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: Object.values(this.yearData().outData)
            }
          ]
        }
      }
    }
  },
  watch: {
    'store.state.data': {
      function() {
        this.tagData = this.$store.getters.getSum
      },
      deep: true
    }
  },
  methods: {
    weekData() {
      let getData = {}
      let outData = {}
      let currentDate = new Date()
      let get = this.$store.state.data.weekData.get
      let out = this.$store.state.data.weekData.out
      for (let i = 0; i < 7; i++) {
        currentDate.setDate(currentDate.getDate() - 1)
        getData[new Date(currentDate).toISOString().slice(0, 10)] = 0
        outData[new Date(currentDate).toISOString().slice(0, 10)] = 0
      }
      get.forEach((e) => {
        getData[e.day.slice(0, 10)] = e['count']
      })
      out.forEach((e) => {
        outData[e.day.slice(0, 10)] = e['count']
      })
      let getCount = Object.values(getData).reduce((v, sum) => {
        return (sum += v)
      }, 0)
      let outCount = Object.values(outData).reduce((v, sum) => {
        return (sum += v)
      }, 0)
      return { getData, outData, getCount, outCount }
    },
    yearData() {
      let getData = {}
      let outData = {}
      let count = {}
      let get = this.$store.state.data.yearData.get
      let out = this.$store.state.data.yearData.out
      for (let i = 1; i < 13; i++) {
        getData[i + '月'] = 0
        outData[i + '月'] = 0
        count[i + '月'] = 0
      }
      get.forEach((e) => {
        getData[e.month + '月'] = e['month']
      })
      out.forEach((e) => {
        outData[e.month + '月'] = e['month']
      })
      Object.keys(count).forEach((e) => {
        count[e] = getData[e] + outData[e]
      })
      console.log(count)
      return { getData, outData, count }
    }
  },
  created() {
    this.$store.dispatch('data/setupStore').then(() => {
      this.tagData = this.$store.getters.getSum
    })
    this.yeraData()
  }
}
</script>

<style lang="less" scoped>
.data {
  padding: 10px;
  .tag {
    text-align: center;
  }
  .ECharts {
    margin-top: 10px;
  }
}
.options {
  width: 100%;
  height: 400px;
}
</style>
