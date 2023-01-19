<template>
  <div class="data">
    <el-row :gutter="20" class="tag">
      <el-col :span="6" v-for="item in tagData" :key="item.title">
        <base-card :title="item.title">
          <template #main>
            <div>{{ item.num }}</div>
          </template>
        </base-card>
      </el-col>
    </el-row>
    <el-row :gutter="18" class="ECharts">
      <el-col :span="16">
        <base-card :title="'订单分析'">
          <template #main>
            <base-echarts :setting="echarts.datas"></base-echarts>
          </template>
        </base-card>
      </el-col>
      <el-col :span="8">
        <base-card :title="'图表分析'">
          <template #main>
            <base-echarts :setting="echarts.order"></base-echarts>
          </template>
        </base-card>
      </el-col>
      <el-col :span="24" style="margin-top: 10px">
        <base-card :title="'订单曲线'">
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
      tagData: {
        vips: {
          title: '会员数',
          num: 1
        },
        orders: {
          title: '总订单数',
          num: 1
        },
        ongoing: {
          title: '进行中',
          num: 1
        },
        newOrder: {
          title: '今日新增订单数',
          num: 1
        }
      },
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
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
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
          tooltip: {},
          legend: {
            data: ['销量'],
            right: 'right'
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
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
              data: [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月',
                '八月',
                '九月',
                '十月',
                '十一月',
                '十二月'
              ]
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: 'Email',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'Union Ads',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: 'Video Ads',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: 'Direct',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: 'Search Engine',
              type: 'line',
              stack: 'Total',
              label: {
                show: true,
                position: 'top'
              },
              areaStyle: {},
              emphasis: {
                focus: 'series'
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        }
      }
    }
  },
  mounted() {}
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
