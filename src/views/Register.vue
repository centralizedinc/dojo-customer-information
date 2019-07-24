<template>
  <div class="register" id="components-form-demo-vuex">
    <a-layout>
      <a-layout-header class="test">
        DOJO SUPREMO   “UNLEASHED YOUR GREATNESS”</a-layout-header> 
      <a-layout-content>
        <a-card>
          <a-form :form="form" @submit="handleSubmit">
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
            <a-form-item label="Membership" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-select v-model="customer.membership" placeholder="Please input your Lastname" >
                <a-select-option value="non_member">Non-Member</a-select-option>
                <a-select-option value="member">Member</a-select-option>
                <a-select-option value="walkin">Walkin</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="Programmes" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
              <a-select v-model="customer.programmes" placeholder="Please select programmes">
                <a-select-option value="dojo">DOJO</a-select-option>
                <a-select-option value="boxing">BOXING</a-select-option>
                <a-select-option value="aikido">IWAMA AIKIDO</a-select-option>
                <a-select-option value="arnis">ARNIS</a-select-option>
                <a-select-option value="luta_livre">BRAZILIAN LUTA LIVRE</a-select-option>
                <a-select-option value="muay_thai">MUAY THAI</a-select-option>
                <a-select-option value="martial_arts">MIXED MARTIAL ARTS</a-select-option>
                <a-select-option value="taekwondo">TAEKWONDO</a-select-option>
                <a-select-option value="aerobics">AEROBICS</a-select-option>
                <a-select-option value="yoga">YOGA</a-select-option>c
                <a-select-option value="zumba">ZUMBA</a-select-option>
              </a-select>
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
      </a-layout-content>
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import axios from "axios";
// import dojo from "../assets/dojo.png"
export default {
  data() {
    return {
      // dojo: dojo,
      customer: {
        name: {
          first_name: "",
          middle_name: "",
          last_name: ""
        },
        address: "",
        contact: "",
        gender: "",
        status: "",
        email: "",
        birthday: "",
        programmes: "",
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
  // computed: {
  //   username() {
  //     return this.$store.state.username;
  //   }
  // },
  // watch: {
  // //   username(val) {
  // //     console.log("this.$store.state.username: ", val);
  // //     this.form.setFieldsValue({ username: val });
  // //   }
  // // },
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
  methods: {
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$store.commit("update", values);
        }
      });
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
          console.log("RESULT: ", JSON.stringify(result));
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
#components-form-demo-vuex .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
#components-form-demo-vuex .ant-layout-content {
  background: rgb(235, 204, 156);
  color: rgb(243, 81, 94);
  min-height: 100px;
  height: 400px !important;
}
#components-form-demo-vuex .ant-layout-footer {
  line-height: 60;
  background: rgba(34, 8, 0, 0.2);
}
.test{
  color: white !important; 
  font-size: 40px !important;
  text-align: center !important;
  font-style: oblique !important;
  
}
</style>