<template>
  <q-page padding>
    <div class="text-h5">회원가입</div>
    <q-form @submit="save" class="q-gutter-y-md">
      <q-input
        type="text"
        label="이메일"
        v-model="form.mb_email"
        :rules="rules.email(false)"
      ></q-input>

      <InputPassword
        label="비밀번호"
        v-model="form.mb_password"
        show-info
        :rules="rules.password()"
      ></InputPassword>

      <InputPassword
        label="비밀번호 확인"
        v-model="checkPassword"
        :rules="[rules.matchValue(form.mb_password)]"
      ></InputPassword>

      <q-input
        label="이름"
        v-model="form.mb_name"
        :rules="rules.name(true, 2)"
      ></q-input>

      <InputPhone
        type="tel"
        label="전화번호"
        v-model="form.mb_hp"
        :rules="rules.phone()"
      ></InputPhone>

      <q-btn
        type="submit"
        label="회원가입"
        class="full-width"
        color="primary"
      ></q-btn>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import validateRules from "src/util/validateRules";
import InputPassword from "components/inputs/InputPassword.vue";
import InputPhone from "src/components/inputs/InputPhone.vue";
import authApi from "src/apis/authApi";

export default defineComponent({
  components: { InputPassword, InputPhone },
  name: "JoinPage",
  data() {
    return {
      form: {
        mb_email: "",
        mb_password: "",
        mb_name: "",
        mb_hp: "",
      },
      checkPassword: "",
    };
  },
  computed: {
    rules: () => validateRules,
    // next() {
    //   return this.$route.query.next || "/";
    // },
  },
  methods: {
    async save() {
      // console.log(this.form);
      this.$q.loading.show();
      const data = authApi.join(this.form);
      if (data) {
        this.$q.notify({
          type: "info",
          message: `${this.form.mb_name}님 회원가입하셧습니다.`,
        });
        this.$router.push({ name: "login", query: this.$route.query });
      }
      this.$q.loading.hide();
    },
  },
});
</script>

<style lang='scss' scoped>
</style>