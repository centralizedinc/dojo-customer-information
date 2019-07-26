<template>
  <a-layout id="customer-info" class="layout">
    <a-layout-header :style="{ width: '100%' }">
      <div class="logo" />
      <p
        style="color: white; fontSize: font-size: 44px !important; text-align: center; font-style: oblique"
      >DOJO SUPREMO “UNLEASHED YOUR GREATNESS”</p>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: ' 0px' }">
      <br />
      <p
        style="fontSize: 24px;color: rgba(0, 0, 0, 0.85); marginBottom: 16px;fontWeight: 500"
      >DOJO Customer Information</p>
      <div :style="{ background: '#fff', padding: '40px', minHeight: '400px' }">
        <div>
          <a-button
            :size="size"
            class="editable-add-btn"
            type="primary"
            ghost
            @click="handleAdd"
          >Add Customer</a-button>
        </div>
        <br />
        <a-table :dataSource="customers" :columns="columns" bordered size="middle">
          <template slot="last_login" slot-scope="last_login">{{formatDate(last_login)}}</template>
          <template slot="validity_until" slot-scope="validity_until">{{Dateformat(validity_until)}}</template>
          <template slot="time_in" slot-scope="time_in">{{formatDate(time_in)}}</template>
          <div
            slot="filterDropdown"
            slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
            class="custom-filter-dropdown"
          >
            <a-input
              v-ant-ref="c => searchInput = c"
              :placeholder="`Search ${column.dataIndex}`"
              :value="selectedKeys[0]"
              @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
              @pressEnter="() => handleSearch(selectedKeys, confirm)"
              style="width: 188px; margin-bottom: 8px; display: block;"
            />
            <a-button
              type="primary"
              @click="() => handleSearch(selectedKeys, confirm)"
              icon="search"
              size="small"
              style="width: 90px; margin-right: 8px"
            >Search</a-button>
            <a-button
              @click="() => handleReset(clearFilters)"
              size="small"
              style="width: 90px"
            >Reset</a-button>
          </div>
          <a-icon
            slot="filterIcon"
            slot-scope="filtered"
            type="search"
            :style="{ color: filtered ? '#108ee9' : undefined }"
          />
          <template slot="customRender" slot-scope="text">
            <span v-if="searchText">
              <template
                v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
              >
                <mark
                  v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                  :key="i"
                  class="highlight"
                >{{fragment}}</mark>
                <template v-else>{{fragment}}</template>
              </template>
            </span>
            <template v-else>{{text}}</template>
          </template>
          <template slot="operation" slot-scope="text, record">
            <div class="editable-row-operations">
              <a-popconfirm title="Sure to Login?" @confirm="save(record)">
                <a>Time In</a>
              </a-popconfirm>
            </div>
          </template>
          <template slot="view" slot-scope="text, record">
            <div>
              <span>
                <a @click="showDrawer(record)">View</a>
              </span>
              <!-- VIEW -->
              <a-drawer
                width="640"
                title="Customer Details"
                placement="right"
                :closable="false"
                @close="onClose"
                :visible="visible"
              >
                <a-card class="test03">
                  <!-- <a-col :span="4" :offset="11"> -->
                  <a-col :span="4">
                    <a-avatar
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YTbzfa8-0pOEGrEcZhXCLrbHE0BgNwDMM90vw1MzhTUXM5Kc"
                      shape="square"
                      class="avatar"
                    />
                  </a-col>
                  <!-- <a-row>
                    <a-col :span="0"></a-col>
                    <img :src="dojo" width="300" height="200"/>
                  </a-row><br>-->
                  <!-- <p :style="[pStyle, pStyle2]">User Profile</p>
                  <p :style="pStyle">Personal</p>-->
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <a-row>
                    <a-col :span="12">
                      <p
                        :style="pStyle"
                      >Fullname: {{customer.name.first_name}} {{customer.name.middle_name}} {{customer.name.last_name}}</p>
                    </a-col>
                    <a-col :span="12">
                      <p :style="pStyle">Membership ID: {{customer.membership_no}}</p>
                      <p :style="pStyle"></p>
                    </a-col>
                    <!-- <a-col :span="8">
                        <p :style="pStyle">Middlename: {{customer.name.middle_name}}</p>
                      </a-col>
                      <a-col :span="8">
                        <p :style="pStyle">Lastname: {{customer.name.last_name}}</p>
                    </a-col>-->
                  </a-row>
                  <a-row>
                    <a-col :span="12">
                      <p :style="pStyle">Membership: {{customer.membership}}</p>
                      <p :style="pStyle"></p>
                    </a-col>
                    <a-col :span="12">
                      <p :style="pStyle">Course: {{customer.programmes}}</p>
                    </a-col>
                  </a-row>
                  <a-row>
                    <a-col :span="12">
                      <p :style="pStyle">Gender: {{customer.gender}}</p>
                    </a-col>
                  </a-row>

                  <a-row>
                    <a-col :span="8">
                      <p :style="pStyle">Status: {{customer.status}}</p>
                    </a-col>

                    <a-col :span="8"></a-col>
                  </a-row>

                  <a-row>
                    <a-col :span="24">
                      <p :style="pStyle">Birthday: {{Dateformat(customer.birthday)}}</p>
                    </a-col>
                  </a-row>
                  <a-row>
                    <a-col :span="24">
                      <p :style="pStyle">Address: {{customer.address}}</p>
                    </a-col>
                  </a-row>
                  <a-row>
                    <a-col :span="24">
                      <p :style="pStyle">Email Address: {{customer.email}}</p>
                    </a-col>
                  </a-row>

                  <!-- <p :style="pStyle">Type: {{customer.type}}</p> -->
                  <a-row>
                    <a-col :span="24">
                      <p :style="pStyle">Valid Until: {{formatDate(customer.validity_until)}}</p>
                    </a-col>
                  </a-row>
                  <a-row>
                    <a-col :span="24">
                      <p :style="pStyle">Last Time-in: {{formatDate(customer.last_login)}}</p>
                    </a-col>
                    <a-col :span="24">
                      <p :style="pStyle">Time-in: {{formatDate(customer.time_in)}}</p>
                    </a-col>
                  </a-row>
                </a-card>
                <!-- <img :src="dojo" width="300" height="200"/> -->
              </a-drawer>
            </div>
          </template>
        </a-table>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">DOJO SUPREMO ©2018 Created by DOJO TEAM</a-layout-footer>
  </a-layout>
</template>
<script>
import axios from "axios";
import dojo from "../assets/dojo.png";
export default {
  data() {
    return {
      dojo: dojo,
      customer: {
        name: { first_name: "", middle_name: "", last_name: "" },
        membership_no: ""
      },
      validity_until: "",

      visible: false,
      size: "large",
      data: [],
      searchText: "",
      searchInput: null,
      pStyle: {
        fontSize: "16px",
        color: "rgba(0,0,0,0.85)",
        lineHeight: "24px",
        display: "block",
        marginBottom: "16px"
      },
      pStyle2: {
        marginBottom: "24px"
      },
      columns: [
        {
          title: "Firstname",
          dataIndex: "name.first_name",
          key: "name.first_name",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.name.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          }
        },

        {
          title: "Middlename",
          dataIndex: "name.middle_name",
          key: "name.middle_name",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.name.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          }
        },

        {
          title: "Lastname",
          dataIndex: "name.last_name",
          key: "name.last_name",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.name.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          }
        },

        {
          title: "Courses",
          dataIndex: "programmes",
          key: "programmes",
          scopedSlots: {
            customRender: "customRender",
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon"
          },
          onFilter: (value, record) =>
            record.name.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          }
        },
        {
          title: "Membership ID",
          dataIndex: "membership_no",
          key: "membership_no",
          scopedSlots: {
            customRender: "customRender",
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon"
          },
          onFilter: (value, record) =>
            record.age.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "Membership",
          dataIndex: "membership",
          key: "membership",
          scopedSlots: {
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.age.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "Session",
          children: [
            {
              title: "Remaining Session",
              dataIndex: "session.remaining_session",
              key: "session.remaining_session",
              scopedSlots: {
                customRender: "customRender"
              }
            },
            {
              title: "Total Session",
              dataIndex: "session.total_session",
              key: "session.total_session",
              scopedSlots: {
                customRender: "customRender"
              }
            }
          ],
          key: "session",
          onFilter: (value, record) =>
            record.address.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "Valid Until",
          dataIndex: "validity_until",
          key: "validity_until",
          scopedSlots: {
            customRender: "validity_until"
          },
          onFilter: (value, record) =>
            record.address.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "Last Time-in",
          dataIndex: "last_login",
          key: "last_login",
          scopedSlots: {
            customRender: "last_login"
          },
          onFilter: (value, record) =>
            record.address.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "Time In",
          dataIndex: "time_in",
          key: "time_in",
          scopedSlots: {
            customRender: "time_in"
          },
          onFilter: (value, record) =>
            record.address.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "Operations",
          dataIndex: "operation",
          key: "operation",
          scopedSlots: { customRender: "operation" },
          onFilter: (value, record) =>
            record.address.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        },
        {
          title: "Details",
          dataIndex: "view",
          key: "view",
          scopedSlots: { customRender: "view" },
          onFilter: (value, record) =>
            record.address.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              });
            }
          }
        }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      //vues store
      // this.data = this.$store.state.customers;

      //invoke apis
      axios.get("https://dojo-cis.herokuapp.com").then(result => {
        console.log("INIT ::: ", JSON.stringify(result.data.model));
        // this.data = result.data.model;
        this.$store.commit("SET_CUSTOMERS", result.data.model);
      });
    },
    handleSearch(selectedKeys, confirm) {
      confirm();
      this.searchText = selectedKeys[0];
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = "";
    },

    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },

    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    showDrawer(record) {
      //  this.$store.commit("SELECT_CUSTOMER", record);
      this.customer = record;
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    save(record) {
      // this.$store.commit("LOGIN", new Date());
      // console.log("Time in: ", this.$store.state.time_in);

      console.log(JSON.stringify(record.last_login));
      record.last_login = record.time_in;
      record.time_in = new Date();
      record.session.remaining_session--;

      if (record.session.remaining_session < 0) {
        record.session.remaining_session = 0;
        this.$notification.warning({
          message: "Login Warning!",
          description: "No more Remaining Session",
          style: {
            width: "600px",
            marginLeft: `${335 - 600}px`
          }
        });
      } else {
        // this.$$notification.success("This is a Login of success");
        console.log(record.session.remaining_session);
        var _self = this;
        axios
          .post("https://dojo-cis.herokuapp.com/" + record._id, record)
          .then(result => {
            console.log("RESULT:::", JSON.stringify(result));
            _self.$notification.success({
              message: "Login Success",
              description: "Login Successful!",
              style: {
                width: "600px",
                marginLeft: `${335 - 600}px`
              }
            });
          });
      }
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter(item => key === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    },
    handleView(index) {
      // alert(JSON.stringify(index))
      this.$store.commit("SELECT_CUSTOMER", index);
      this.$router.push("/view");
    },
    handleAdd() {
      this.$router.push("/register");
    },
    time_in() {
      this.$store.commit("LOGIN", new Date());
      console.log("Time in: ", this.$store.state.time_in);
    },
    time_out() {
      this.$store.commit("LOGOUT", new Date());
      console.log("Time in: ", this.$store.state.time_out);
    },
    formatDate(date, type) {
      if (!date) {
        return "";
      }
      var format = type
        ? type
        : {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
          };
      var dt = new Date(date).toLocaleString("en-US", format);
      return dt;
    },
    Dateformat(date, type) {
      if (!date) {
        return "";
      }
      var format = type
        ? type
        : {
            day: "numeric",
            month: "long",
            year: "numeric"
          };
      var dt = new Date(date).toLocaleString("en-US", format);
      return dt;
    }
  },
  computed: {
    customers() {
      console.log(this.$store.state.customers);
      return this.$store.state.customers;
    },
    items() {
      return this.$store.state.time_in;
    },
    items1() {
      return this.$store.state.time_out;
    }
  }
};
</script>
<style>
.custom-filter-dropdown {
  padding: 8px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}

.editable-row-operations a {
  margin-right: 8px;
}

th.columns,
td.columns {
  text-align: center !important;
}
.avatar {
  height: 150px !important;
  width: 170px !important;
  margin: 0px !important;
}
.test03 {
  margin: 0px !important;
  /* background: rgb(15, 15, 16) !important; */
}
#customer-info .logo {
  width: 120px;
  height: 31px;
  background: rgb(0, 21, 41);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>

