<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          outlined
          placeholder="Email"
          v-model="email"
          :rules="[rules.email]"
        />
      </v-col>
      <v-col>
        <span :class="kelas">{{ cekEmail }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          outlined
          placeholder="ACID"
          v-model="fpl.acid"
          :rules="[rules.acid]"
          maxlength="7"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    fpl: {
      acid: ''
    },
    email: '',
    rules: {
      email: value => value.match(/^\w*@\w*\.\w{2,10}$/) || 'Format email salah',
      acid: value => value.match(/^[A-Z]{1}[A-Z0-9]{3,6}$/) || 'ACID invalid'
    }
  }),
  computed: {
    cekEmail() {
      // Cek apakah belum diisi
      if (this.email.length === 0) return ''
      // Cek apakah email valid
      const rslt = this.email.match(/^\w*@\w*\.\w{2,10}$/)
      // Jika Valid gak muncul apa2
      if (rslt) return ''
      // jika tidak valid, warning
      return 'Format isian salah'
    }
  }
}
</script>
