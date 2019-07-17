<template>
  <div class="table">
    <a-layout>
      <a-layout-header></a-layout-header>
      <a-layout-content>
        <a-card title="DOJO Customer Information">
          <div>
            <a-button class="editable-add-btn" @click="handleAdd">Add Customer</a-button>
          </div>
          <br />
          <a-table :dataSource="data" :columns="columns">
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
                <span v-if="record.editable">
                  <a-popconfirm title="Sure to Login?" @confirm="() => save(record.key)">
                    <a>Save</a>
                  </a-popconfirm>
                  <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                    <a>Cancel</a>
                  </a-popconfirm>
                </span>
                <span v-else>
                  <a @click="() => edit(record.key)">Login</a>
                </span>
              </div>
            </template>
          </a-table>
        </a-card>
      </a-layout-content>
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
const data = [
  {
    key: "1",
    name: "John Brown",
    type: "Dojo",
    remain: "1/10",
    valid: "July 12, 2019",
    login: "10:00AM"
  },
  {
    key: "2",
    name: "Joe Black",
    type: "Boxing",
    remain: "1/10",
    valid: "July 1, 2019",
    login: "8:00AM"
  },
  {
    key: "3",
    name: "Jim Green",
    type: "Dojo",
    remain: "5/10",
    valid: "July 3, 2019",
    login: "9:00AM"
  },
  {
    key: "4",
    name: "Elsa Wick",
    type: "Boxing",
    remain: "3/10",
    valid: "July 9, 2019",
    login: "11:00AM"
  }
];

export default {
  data() {
    return {
      data,
      searchText: "",
      searchInput: null,
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
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
          title: "Type",
          dataIndex: "type",
          key: "type",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
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
          title: "Remaining Session",
          dataIndex: "remain",
          key: "remain",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
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
          title: "Valid Until",
          dataIndex: "valid",
          key: "valid",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
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
          title: "Login Time",
          dataIndex: "login",
          key: "login",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
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
          key: "opeartion",
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
        }
      ]
    };
  },
  methods: {
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
    save(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        delete target.editable;
        this.data = newData;
        this.cacheData = newData.map(item => ({ ...item }));
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
    handleAdd() {
      this.$router.push("/register");
      // const { count, dataSource } = this;
      // const newData = {
      //   key: count,
      //   name: `Edward King ${count}`,
      //   age: 32,
      //   address: `London, Park Lane no. ${count}`
      // };
      // this.dataSource = [...dataSource, newData];
      // this.count = count + 1;
    }
  }
};
</script>
<style scoped>
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
</style>
