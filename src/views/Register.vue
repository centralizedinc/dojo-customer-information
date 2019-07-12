<template>
  <div class="register" id="components-form-demo-vuex">
    <a-card>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Username">
          <a-input
            v-decorator="[
            'username',
            {
              rules: [{ required: true, message: 'Username is required!' }],
            }
          ]"
          />
        </a-form-item>
        <a-form-item label="Fullname">
          <a-input
            v-decorator="[
            'fullname',
            {
              rules: [{ required: true, message: 'Fullname is required!' }],
            }
          ]"
          />
        </a-form-item>
        <a-form-item label="Address">
          <a-input
            v-decorator="[
            'address',
            {
              rules: [{ required: true, message: 'Address is required!' }],
            }
          ]"
          />
        </a-form-item>
        <a-form-item label="Mobile Number">
          <a-input
            v-decorator="[
            'mobile',
            {
              rules: [{ required: true, message: 'Mobile Number is required!' }],
            }
          ]"
          />
        </a-form-item>
        <a-form-item label="Gender">
          <a-input
            v-decorator="[
            'gender',
            {
              rules: [{ required: true, message: 'Gender is required!' }],
            }
          ]"
          />
        </a-form-item>
        <a-form-item label="Status">
          <a-input
            v-decorator="[
            'status',
            {
              rules: [{ required: true, message: 'Status is required!' }],
            }
          ]"
          />
        </a-form-item>
        <a-form-item label="Email">
          <a-input
            v-decorator="[
            'email',
            {
              rules: [{ required: true, message: 'Email is required!' }],
            }
          ]"
          />
        </a-form-item>
        <a-form-item label="Birthday">
          <a-input
            v-decorator="[
            'birthday',
            {
              rules: [{ required: true, message: 'Birthday is required!' }],
            }
          ]"
          />
        </a-form-item>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form>
    </a-card>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.state.username;
    }
  },
  watch: {
    username(val) {
      console.log("this.$store.state.username: ", val);
      this.form.setFieldsValue({ username: val });
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
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$store.commit("update", values);
        }
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