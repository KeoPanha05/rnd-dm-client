<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <!-- Admin Chart -->
<<<<<<< HEAD
      <v-flex lg6 sm12>
        <v-card dark color="indigo">
          <v-card-title>
            <div class="layout row ma-0">
              <div class="subheading">Admin Growth</div>
              <v-spacer></v-spacer>
              <div class="caption">
                <v-icon>trending_up</v-icon>20%
              </div>
            </div>
          </v-card-title>
          <v-responsive class="white--text">
            <e-chart
              ref="chart"
              :path-option="[
                ['dataset.source', dataset.adminStackData],
                ['grid.bottom', '10%'], // margin buttom of the bar
                ['grid.top', '5%'],     // margin top of the bar
                ['xAxis.show', false],
                ['yAxis.show', false],
                ['series[0].type', 'bar'],
                ['series[0].barGap', '-100%'],
                ['series[0].itemStyle.normal.color', 'rgba(0,0,0,0.1)'],
                ['series[0].barWidth', '50%'],
                ['series[1].barWidth', '50%'],
                ['series[1].type', 'bar'],
                ['series[1].itemStyle.normal.color', color.shades.white],
                ]"
              height="200px"
              width="100%"
            ></e-chart>
          </v-responsive>
          <v-card-text class="white">
            <div class="layout row align-center ma-0">
              <div class="grey--text">
                <div class="caption" style="color: black">Total</div>
                <div class="subheading mt-2">
                  <h2>
                    <b style="color: #3F51B5">3,109,794,092</b> Admins
                  </h2>
                </div>
              </div>
              <v-spacer></v-spacer>
              <div class>
                <v-progress-circular
                  :size="100"
                  :width="15"
                  :rotate="270"
                  :value="22"
                  color="indigo"
                >22</v-progress-circular>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

      <!-- User Chart -->
      <v-flex lg6 sm12>
        <v-card dark color="blue">
          <v-card-title>
            <div class="layout row ma-0">
              <div class="subheading">User Growth</div>
              <v-spacer></v-spacer>
              <div class="caption">
                <v-icon>trending_up</v-icon>20%
              </div>
            </div>
          </v-card-title>
          <v-responsive class="white--text">
            <e-chart
              ref="chart"
              :path-option="[
                ['dataset.source', dataset.userStackData],
                ['grid.bottom', '10%'],
                ['grid.top', '5%'],
                ['xAxis.show', false],
                ['yAxis.show', false],
                ['series[0].type', 'bar'],
                ['series[0].barGap', '-100%'],
                ['series[0].itemStyle.normal.color', 'rgba(0,0,0,0.1)'],
                ['series[0].barWidth', '50%'],
                ['series[1].barWidth', '50%'],
                ['series[1].type', 'bar'],
                ['series[1].itemStyle.normal.color', color.shades.white],
                ]"
              height="200px"
              width="100%"
            ></e-chart>
          </v-responsive>
          <v-card-text class="white">
            <div class="layout row align-center ma-0">
              <div class="grey--text">
                <div class="caption">MAXIMUM BOUNCE</div>
                <div class="subheading mt-2">2500</div>
              </div>
              <v-spacer></v-spacer>
              <div class>
                <v-progress-circular
                  :size="100"
                  :width="15"
                  :rotate="360"
                  :value="10"
                  color="blue"
                >10</v-progress-circular>
              </div>
            </div>
          </v-card-text>
        </v-card>
=======
      <v-flex lg6 sm12 class="post--item">
        <nuxt-link to="/usermanagement/admin-listing">
          <v-card dark color="indigo" class="card-scale">
            <v-card-title>
              <div class="layout row ma-0">
                <div class="subheading">Admin Growth</div>
                <v-spacer></v-spacer>
                <div class="caption">
                  <v-icon>trending_up</v-icon>20%
                </div>
              </div>
            </v-card-title>
            <v-responsive class="white--text">
              <e-chart
                ref="chart"
                :path-option="[
                  ['dataset.source', dataset.adminStackData],
                  ['grid.bottom', '10%'], // margin buttom of the bar
                  ['grid.top', '5%'],     // margin top of the bar
                  ['xAxis.show', false],
                  ['yAxis.show', false],
                  ['series[0].type', 'bar'],
                  ['series[0].barGap', '-100%'],
                  ['series[0].itemStyle.normal.color', 'rgba(0,0,0,0.1)'],
                  ['series[0].barWidth', '50%'],
                  ['series[1].barWidth', '50%'],
                  ['series[1].type', 'bar'],
                  ['series[1].itemStyle.normal.color', color.shades.white],
                  ]"
                height="200px"
                width="100%"
              ></e-chart>
            </v-responsive>
            <v-card-text class="white">
              <div class="layout row align-center ma-0">
                <div class="grey--text">
                  <div style="color: black; font-size: 20px">Total</div>
                  <div class="subheading mt-2">
                    <h2>
                      <b style="color: #3F51B5">3,109,794,092</b> Admins
                    </h2>
                  </div>
                </div>
                <v-spacer></v-spacer>
                <div class>
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="270"
                    :value="22"
                    color="indigo"
                  >22</v-progress-circular>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </nuxt-link>
      </v-flex>

      <!-- User Chart -->
      <v-flex lg6 sm12 class="post--item">
        <nuxt-link to="/usermanagement/admin-listing">
          <v-card dark color="blue" class="card-scale">
            <v-card-title>
              <div class="layout row ma-0">
                <div class="subheading">User Growth</div>
                <v-spacer></v-spacer>
                <div class="caption">
                  <v-icon>trending_down</v-icon>50%
                </div>
              </div>
            </v-card-title>
            <v-responsive class="white--text">
              <e-chart
                ref="chart"
                :path-option="[
                  ['dataset.source', dataset.userStackData],
                  ['grid.bottom', '10%'],
                  ['grid.top', '5%'],
                  ['xAxis.show', false],
                  ['yAxis.show', false],
                  ['series[0].type', 'bar'],
                  ['series[0].barGap', '-100%'],
                  ['series[0].itemStyle.normal.color', 'rgba(0,0,0,0.1)'],
                  ['series[0].barWidth', '50%'],
                  ['series[1].barWidth', '50%'],
                  ['series[1].type', 'bar'],
                  ['series[1].itemStyle.normal.color', color.shades.white],
                  ]"
                height="200px"
                width="100%"
              ></e-chart>
            </v-responsive>
            <v-card-text class="white">
              <div class="layout row align-center ma-0">
                <div class="grey--text">
                  <div style="color: black; font-size: 20px">Total</div>
                  <div class="subheading mt-2">
                    <h2>
                      <b style="color: #2196F3">3,109,794,092</b> Users
                    </h2>
                  </div>
                </div>
                <v-spacer></v-spacer>
                <div class>
                  <v-progress-circular
                    :size="100"
                    :width="15"
                    :rotate="360"
                    :value="10"
                    color="blue"
                  >10</v-progress-circular>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </nuxt-link>
>>>>>>> aacfb46f39629aba679afad3a060ddc1755406f5
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EChart from "@/components/chart/echart";
<<<<<<< HEAD
import {
  StackData,
  SinData,
  monthVisitData,
  campaignData,
  locationData,
  AdminStackData,
  UserStackData
} from "@/api/chart";
=======
import { AdminStackData, UserStackData } from "@/api/chart";
>>>>>>> aacfb46f39629aba679afad3a060ddc1755406f5

import Material from "vuetify/es5/util/colors";

export default {
  layout: "dashboard",
  components: {
    EChart
  },
  data() {
    return {
      selectedTab: "tab-1",
      option: null,
      dataset: {
<<<<<<< HEAD
        sinData: SinData,
        monthVisit: monthVisitData,
        campaign: campaignData,
        location: locationData,
        stackData: StackData,
=======
>>>>>>> aacfb46f39629aba679afad3a060ddc1755406f5
        adminStackData: AdminStackData,
        userStackData: UserStackData
      },
      color: Material
    };
  },
  created() {
    console.log(this.$refs.chart);
  }
  // methods: {
  //   handleTabChange(val, e) {
  //     // make sure the chart resized while parent from hidden to show
  //     window.dispatchEvent(new Event("resize"));
  //   }
  // }
};
<<<<<<< HEAD
</script>
=======
</script>

<style scoped>
.post--item a {
  text-decoration: none;
}
.card-scale:hover {
  transform: scale(1.025);
  transition: 0.5s;
}
</style>
>>>>>>> aacfb46f39629aba679afad3a060ddc1755406f5
