<template>
  <a-layout id="customer-info">
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
      >Customer Information</p>
      <div :style="{ padding: '24px', minHeight: '380px' }">
        <a-card>
          <br />
          <a-form>
            <a-form-item label="Firstname" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-input
                placeholder="Please input your Firstname"
                v-model="customer.name.first_name"
              />
            </a-form-item>
            <a-form-item label="Middlename" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-input
                placeholder="Please input your Middlename"
                v-model="customer.name.middle_name"
              />
            </a-form-item>
            <a-form-item label="Lastname" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-input placeholder="Please input your Lastname" v-model="customer.name.last_name" />
            </a-form-item>
            <a-form-item label="Address" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-input v-model="customer.address" placeholder="Please input your Address" />
            </a-form-item>
            <a-form-item label="Phone number" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-input v-model="customer.contact" placeholder="Please input your Phone Number" />
            </a-form-item>
            <a-form-item
              label="Your Weight(lbs)"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 12 }"
            >
              <a-input v-model="customer.weight" placeholder="Please input your Weight" />
            </a-form-item>
            <a-form-item
              label="Your Height(cm)"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 12 }"
            >
              <a-input v-model="customer.height" placeholder="Please input your Height" />
            </a-form-item>
            <a-form-item label="Membership" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-select v-model="customer.membership" placeholder="Please select your membership">
                <a-select-option value="non_member">Non-Member</a-select-option>
                <a-select-option value="member">Member</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Programmes" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-select
                mode="multiple"
                placeholder="Please select programmes"
                :value="selectedItems"
                @change="handleChange"
                style="width: 100%"
              >
                <a-select-option v-for="item in filteredOptions" :key="item" :value="item">{{item}}</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Package Type" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-select v-model="customer.package" placeholder="Please select Package Type">
                <a-select-option value="one_session">(1)One Session</a-select-option>
                <a-select-option value="ten_session">(10)Ten Session</a-select-option>
                <a-select-option value="thirty">(30)Thirty Session</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Total Amount" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-input defaultValue="3,500" />
            </a-form-item>
            <a-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-select v-model="customer.gender" placeholder="Please select gender">
                <a-select-option value="male">Male</a-select-option>
                <a-select-option value="female">Female</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Status" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-select v-model="customer.status" placeholder="Please select status">
                <a-select-option value="single">Single</a-select-option>
                <a-select-option value="married">Married</a-select-option>
                <a-select-option value="divorced">Divorced</a-select-option>
                <a-select-option value="widowed">Widowed</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="E-mail Address"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 12 }"
            >
              <a-input v-model="customer.email" placeholder="Please input your Email Address" />
            </a-form-item>
            <a-form-item label="Birthday" :label-col="{ span: 5 }" :wrapper-col="{ span: 8 }">
              <a-date-picker v-model="customer.birthday" />
            </a-form-item>
          </a-form>
          <a-row>
            <a-col :span="8" :style="{ textAlign: 'right' }">
              <a-button type="primary" @click="Submit">Submit</a-button>
              <a-button :style="{ marginLeft: '8px' }" @click="Cancel">Back</a-button>
            </a-col>
          </a-row>
        </a-card>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">DOJO SUPREMO ©2018 Created by DOJO TEAM</a-layout-footer>
  </a-layout>
</template>
<script>
import axios from "axios";
// import dojo from "../assets/dojo.png"
const OPTIONS = [
  "JUDO",
  "BOXING",
  "IWAMA AIKIDO",
  "ARNIS",
  "BRAZILIAN LUTA LIVRE",
  "MUAY THAI",
  "MIXED MARTIAL ARTS",
  "TAEKWONDO",
  "AEROBICS",
  "YOGA",
  "ZUMBA"
];
export default {
  data() {
    return {
      // dojo: dojo,
      selectedItems: [],
      customer: {
        name: {
          first_name: "",
          middle_name: "",
          last_name: ""
        },
        membership_no: "",
        address: "",
        contact: "",
        weight: "",
        height: "",
        gender: "",
        status: "",
        email: "",
        birthday: null,
        membership: "",
        time_in: "",
        time_out: "",
        last_login: "",
        session: {
          remaining_session: "",
          total_session: ""
        },
        validity_until: ""
      },
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }
    };
  },
  watch: {
    customer(val) {
      console.log("val :", val);
    }
  },
  created() {
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        this.$emit("change", changedFields);
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            value: this.username
          })
        };
      },
      onValuesChange: (_, values) => {
        console.log(values);
        // Synchronize to vuex store in real time
        // this.$store.commit('update', values)
      }
    });
  },
  computed: {
    filteredOptions() {
      return OPTIONS.filter(o => !this.selectedItems.includes(o));
    }
  },
  methods: {
    handleChange(selectedItems) {
      this.selectedItems = selectedItems;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, fieldsValue) => {
        if (err) {
          return;
        }

        // Should format date value before submit.
        const rangeValue = fieldsValue["range-picker"];
        const rangeTimeValue = fieldsValue["range-time-picker"];
        const values = {
          ...fieldsValue,
          "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
          "date-time-picker": fieldsValue["date-time-picker"].format(
            "YYYY-MM-DD HH:mm:ss"
          ),
          "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
          "range-picker": [
            rangeValue[0].format("YYYY-MM-DD"),
            rangeValue[1].format("YYYY-MM-DD")
          ],
          "range-time-picker": [
            rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
            rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss")
          ],
          "time-picker": fieldsValue["time-picker"].format("HH:mm:ss")
        };
        console.log("Received values of form: ", values);
      });
    },
    Submit() {
      // vuex
      // this.$store.commit("ADD_CUSTOMER", this.customer);
      //for testing purposes
      this.customer.session = {};
      this.customer.session.remaining_session = 10;
      this.customer.session.total_session = 10;
      var date = new Date();
      this.customer.validity_until = new Date(
        date.setMonth(date.getMonth() + 1)
      );
      axios
        .post("https://dojo-cis.herokuapp.com", this.customer)
        .then(result => {
          console.log(":::", JSON.stringify(result));
          this.$store.commit("ADD_CUSTOMER", result.data.model);
        });

      console.log("Customer Details: " + JSON.stringify(this.customer));
      this.$message.success("Successful Add Customer");
      this.$router.push("/");
    },
    Cancel() {
      this.$router.push("/");
    }
  }
};
</script>
<style>
#customer-info .logo {
  width: 120px;
  height: 31px;
  background: rgb(0, 21, 41);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>

