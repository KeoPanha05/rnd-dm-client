<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
<<<<<<< HEAD
                  <img src="../static/rnd.png" alt="Vue Material Admin" height="120" />
                  <h1 class="flex my-4 primary--text">
                    <b>RnD Data Management</b>
                  </h1>
                </div>
                <v-form>
                  <v-text-field
=======
                  <img src="../static/rnd.png" alt="Vue Material Admin" height="120"/>
                  <h1 class="flex my-4 primary--text"><b>RnD Data Management</b></h1>
                </div>
                <v-form>
                  <v-text-field 
>>>>>>> aacfb46f39629aba679afad3a060ddc1755406f5
                    append-icon="person"
                    name="login"
                    label="Username / Email"
                    type="text"
<<<<<<< HEAD
                    placeholder="Input your username/email"
                    v-model="model.username"
                    :rules="[v => !!v || 'username/email is required',
                    v => (v && v.length >= 8) || 'username/email must have 8+ characters' ]"
                    required
=======
                    v-model="model.username"
>>>>>>> aacfb46f39629aba679afad3a060ddc1755406f5
                  ></v-text-field>
                  <v-text-field
                    append-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
<<<<<<< HEAD
                    placeholder="Input your Password"
                    v-model="model.password"
                    :rules="[v => !!v || 'password is required',
                    v => (v && v.length >= 8) || 'Password must have 8+ characters' ]"
                    required
=======
                    v-model="model.password"
>>>>>>> aacfb46f39629aba679afad3a060ddc1755406f5
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn icon>
                  <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="red">fa fa-google fa-lg</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                  block
                  color="primary"
                  @click="userLogin"
                  :loading="loading"
                  :disabled="!isValid"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  layout: "default",
  data: () => ({
    loading: false,
    model: {
<<<<<<< HEAD
      username: "",
      password: "",
      isValid: true
=======
      username: "admin@example.com",
      password: "password"
>>>>>>> aacfb46f39629aba679afad3a060ddc1755406f5
    }
  }),

  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push("/dashboard");
      }, 1);
    }
  }
};
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
