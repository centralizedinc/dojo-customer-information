<template>
  <div class="register" id="components-form-demo-vuex">
    <a-card>
      <a-form :form="form" @submit="handleSubmit">
        <!-- <a-form-item label="Username" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
            'username',
            {
              rules: [{ required: true, message: 'Username is required!' }],
            }
          ]"
          />
        </a-form-item>-->
        <a-form-item label="Fullname" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            placeholder="Firstname, Middlename , Surname"
            v-decorator="[
            'fullname',
            {
              rules: [{ required: true, message: 'Fullname is required!' }],
            }
          ]"
          />
        </a-form-item>
        <a-form-item label="Address" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
            'address',
            {
              rules: [{ required: true, message: 'Address is required!' }],
            }
          ]"
          />
        </a-form-item>
        <a-form-item
          v-bind="formItemLayout"
          label="Phone Number"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 12 }"
        >
          <a-input
            v-decorator="[
          'phone',
          {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          }
        ]"
            style="width: 100%"
          >
            <a-select
              slot="addonBefore"
              v-decorator="[
            'prefix',
            { initialValue: '86' }
          ]"
              style="width: 70px"
            >
              <a-select-option value="86">+86</a-select-option>
              <a-select-option value="87">+87</a-select-option>
            </a-select>
          </a-input>
        </a-form-item>
        <a-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
            placeholder="Please select gender"
            @change="handleSelectChange"
          >
            <a-select-option value="male">male</a-select-option>
            <a-select-option value="female">female</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Status" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-select
            v-decorator="[
          'status',
          {rules: [{ required: true, message: 'Please select your status!' }]}
        ]"
            placeholder="Please select status"
            @change="handleSelectChange"
          >
            <a-select-option value="single">Single</a-select-option>
            <a-select-option value="married">Married</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          v-bind="formItemLayout"
          label="E-mail"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 12 }"
        >
          <a-input
            v-decorator="[
          'email',
          {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }]
          }
        ]"
          />
        </a-form-item>
        <a-form-item label="Birthday" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-date-picker
            v-decorator="['date-picker', {rules: [{ required: true, message: 'Birthday is required!' }]}]"
          />
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
          <a-checkbox v-decorator="['agreement', {valuePropName: 'checked'}]">
            I have read the
            <a href>agreement</a>
          </a-checkbox>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
</style>