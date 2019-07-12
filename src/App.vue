<template>
  <div id="app">
    <a-layout>
      <a-layout-sider>
        <a-menu
          @click="handleClick"
          style="width: 256px"
          :defaultSelectedKeys="['1']"
          :openKeys.sync="openKeys"
          theme="dark"
          mode="inline"
        >
          <a-sub-menu key="sub1" @titleClick="titleClick">
            <span slot="title">
              <a-icon type="mail" />
              <span>Navigation One</span>
            </span>
            <a-menu-item-group key="g1">
              <template slot="title">
                <a-icon type="qq" />
                <span>Item 1</span>
              </template>
              <a-menu-item key="1">Option 1</a-menu-item>
              <a-menu-item key="2">Option 2</a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group key="g2" title="Item 2">
              <a-menu-item key="3">Option 3</a-menu-item>
              <a-menu-item key="4">Option 4</a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu key="sub2" @titleClick="titleClick">
            <span slot="title">
              <a-icon type="appstore" />
              <span>Navigation Two</span>
            </span>
            <a-menu-item key="5">Option 5</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
            <a-sub-menu key="sub3" title="Submenu">
              <a-menu-item key="7">Option 7</a-menu-item>
              <a-menu-item key="8">Option 8</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title">
              <a-icon type="setting" />
              <span>Navigation Three</span>
            </span>
            <a-menu-item key="9">Option 9</a-menu-item>
            <a-menu-item key="10">Option 10</a-menu-item>
            <a-menu-item key="11">Option 11</a-menu-item>
            <a-menu-item key="12">Option 12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout>
          <a-layout>
            <a-layout-header>
              <a-row type="flex" align="middle" justify="end">
                <a-input-search
                  placeholder="input search text"
                  style="width: 200px;     height: max-content;"
                  @search="onSearch"
                />
                <a-col :span="2" :pull="23">CCCI</a-col>
              </a-row>
            </a-layout-header>
            <a-layout>
              <a-layout-content>
                <!-- <a-row type="flex" align="middle" :gutter="16" style="height:100%; width:100%">
                  <a-col :span="12" style="color: black;">
                    <div style="border:1px solid black;">SPAN1</div>
                  </a-col>
                  <a-col :span="12" style="color: black;">
                    <div style="border: 1px solid black;">SPAN2</div>
                  </a-col>
                </a-row>-->
                <a-steps :current="current">
                  <a-step v-for="item in steps" :key="item.title" :title="item.title" />
                </a-steps>
                <div class="steps-content">{{steps[current].content}}</div>
                <div class="steps-action">
                  <a-button v-if="current < steps.length - 1" type="primary" @click="next">Next</a-button>
                  <a-button
                    v-if="current == steps.length - 1"
                    type="primary"
                    @click="$message.success('Processing complete!')"
                  >Done</a-button>
                  <a-button v-if="current>0" style="margin-left: 8px" @click="prev">Previous</a-button>
                </div>
              </a-layout-content>
              <a-layout-sider>Sider2</a-layout-sider>
            </a-layout>
          </a-layout>
          <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "app",
      current: ["mail"],
      openKeys: ["sub1"],
      current: 0,
      steps: [
        {
          title: "First",
          content: "First-content"
        },
        {
          title: "Second",
          content: "Second-content"
        },
        {
          title: "Last",
          content: "Last-content"
        }
      ]
    };
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    },
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    }
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5ea7f0;
}
#app .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#app .ant-layout-footer {
  line-height: 1;
  background: #059185;
}
#app .ant-layout-content {
  background: rgb(156, 181, 235);
  color: rgb(81, 219, 243);
  min-height: 120px;
  height: 485px;
}
.app .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
.steps-content {
  margin-top: 10px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
  width: -80% !important;
}

.steps-action {
  margin-top: 44px !important;
}
.ant-steps {
  font-size: 14px;
  font-variant: tabular-nums;
  color: rgba(0, 0, 0, 0.65);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  list-style: none;
  font-size: 0;
  width: 78% !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.ant-menu-root.ant-menu-inline {
  width: 201px !important;
}
</style>
