<template>
  <div class="dashboard">
    <a-layout>
      <a-layout-header></a-layout-header>
      <a-layout-content>
        <a-layout>
          <a-card title="DOJO Customer Information">
            <a-table :columns="columns" :dataSource="data" bordered>
              <template
                v-for="col in ['name', 'type', 'remain', 'valid', 'login']"
                :slot="col"
                slot-scope="text, record"
              >
                <div :key="col">
                  <a-input
                    v-if="record.editable"
                    style="margin: -5px 0"
                    :value="text"
                    @change="e => handleChange(e.target.value, record.key, col)"
                  />
                  <template v-else>{{text}}</template>
                </div>
              </template>
              <template slot="operation" slot-scope="text, record">
                <div class="editable-row-operations">
                  <span v-if="record.editable">
                    <a @click="() => save(record.key)">Save</a>
                    <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                      <a>Cancel</a>
                    </a-popconfirm>
                  </span>
                  <span v-else>
                    <a @click="() => edit(record.key)">Edit</a>
                  </span>
                </div>
              </template>
              <template slot="login" slot-scope="text, record">
                <div class="editable-row-operations1">
                  <span v-if="record.editable">
                    <a @click="() => save(record.key)">Save</a>
                    <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                      <a>Cancel</a>
                    </a-popconfirm>
                  </span>
                  <span v-else>
                    <a @click="() => edit(record.key)">Login</a>
                    <a-popconfirm title="Sure to Login?" @confirm="() => cancel(record.key)"></a-popconfirm>
                  </span>
                </div>
              </template>
            </a-table>
          </a-card>
        </a-layout>
      </a-layout-content>
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: "25%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Type",
    dataIndex: "type",
    width: "15%",
    scopedSlots: { customRender: "type" }
  },
  {
    title: "Remaining",
    dataIndex: "remain",
    width: "40%",
    scopedSlots: { customRender: "remain" }
  },
  {
    title: "Validity",
    dataIndex: "valid",
    width: "40%",
    scopedSlots: { customRender: "valid" }
  },
  {
    title: "Login",
    dataIndex: "login",
    scopedSlots: { customRender: "login" }
  },
  {
    title: "operation",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" }
  }
];

const data = [
  {
    key: "1",
    Name: "John Brown",
    Type: "Boxing",
    Remaining: "1/10",
    Validity: "July 1, 2019",
    Login: "8:00AM"
  },
  {
    key: "2",
    Type: "Boxing",
    Remaining: "3/10",
    Validity: "July 1, 2019",
    Login: "9:00AM"
  },
  {
    key: "3",
    name: "Jim Green",
    Type: "Boxing",
    Remaining: "3/10",
    Validity: "July 1, 2019",
    Login: "11:00AM"
  },
  {
    key: "4",
    name: "Jim Red",
    Type: "Dojo",
    Remaining: "3/10",
    Validity: "July 1, 2019",
    Login: "10:00AM"
  }
];
export default {
  data() {
    this.cacheData = data.map(item => ({ ...item }));
    return {
      data,
      columns
    };
  },
  methods: {
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
    }
  }
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
