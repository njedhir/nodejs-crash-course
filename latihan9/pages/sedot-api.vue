<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title><v-icon>mdi-api</v-icon>Sedooot API</v-card-title>
          <v-card-text>
            <v-row>
              <v-spacer />
              <v-col cols="auto">
                <v-btn
                  small
                  outlined
                  color="green"
                  @click="sedotData"
                  :loading="isLoading"
                >Sedot Karyawan</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Nama</th>
                      <th>Tempat Lahir</th>
                      <th>Tanggal Lahir</th>
                      <th>Gaji</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="karyawan in listKaryawan"
                    >
                      <td>
                        <span
                          v-show="!isEditMode"
                          @click="isEditMode = !isEditMode"
                        >{{ karyawan.email }}</span>
                        <v-text-field
                          dense
                          outlined
                          v-model="karyawan.email"
                          v-show="isEditMode"
                        />
                      </td>
                      <td>{{ karyawan.nama }}</td>
                      <td>{{ karyawan.tempatLahir }}</td>
                      <td>{{ karyawan.tanggalLahir }}</td>
                      <td>{{ karyawan.gaji }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    listKaryawan: [],
    isLoading: false,
    isEditMode: false
  }),
  methods: {
    sedotData() {
      // tombol loading
      this.isLoading = true
      // ambil data
      this.$axios.get('/karyawan')
        .then(response => {
          // masukkan kedalam list karyawan
          this.listKaryawan = response.data
          // tombol berhenti loading
          this.isLoading = false
        }).catch(err => {
          // handle error
          console.error(err.message)
          this.isLoading = false
        })
    }
  }
}

</script>
