<template>
  <a-table :columns="columns" :dataSource="data">
    <a slot="name" slot-scope="text" href="javascript:;">{{text}}</a>
    <span slot="customTitle">
      <a-icon type="smile-o" />Name
    </span>
    <span slot="tags" slot-scope="tags">
      <a-tag v-for="tag in tags" color="blue" :key="tag">{{tag}}</a-tag>
    </span>
    <span slot="action">
      <a href="javascript:;">Time in</a>
      <a-divider type="vertical" />
      <a href="javascript:;">View</a>
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "Fullname",
    dataIndex: "name",
    key: "name",
    // slots: { title: 'customTitle' },
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Programmes",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" }
  },
  {
    title: "Package Type",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Membership",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Valid until",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Session",
    children: [
      {
        title: "Used Session",
        dataIndex: "companyAddress",
        key: "companyAddress"
      },
      {
        title: "Total Session",
        dataIndex: "companyName",
        key: "companyName"
      }
    ]
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co'
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    tags: ["cool", "teacher"]
  }
];

export default {
  data() {
    return {
      data,
      columns
    };
  }
};
</script>
