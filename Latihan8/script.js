Vue.component('kendaraan', {
  props: ['brand', 'cartype', 'seats', 'index', 'judultype'],
  template:
    `<div>
      <span>{{ brand }}</span> <button @click="btnClick(index)">-</button><br>
      <p>{{ judultype }}: {{ cartype }} - Seats: {{ seats }}</p>
    </div>
    `,
  methods: {
    btnClick(index) {
      this.$emit('removecar', index)
    }
  }
})

Vue.component('tr-kendaraan', {
  props: ['brand', 'cartype', 'seats'],
  template:
    `
      <td>{{ brand }}</td>
      <td>{{ cartype }}</td>
      <td>{{ seats }}</td>
    
    `,
  methods: {
    btnClick(index) {
      this.$emit('removecar', index)
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    greeting: 'Hello Ari!',
    judul: 'Ini Tombol',
    isMuncul: false,
    isShown: false,
    isMsgShown: false,
    carInput: {
      brand: '',
      type: '',
      seats: ''
    },
    carFilterParams: '',
    karyawan: ['Nazar', 'Taslim', 'Fakhrul', 'Andre'],
    cars: [
      {
        brand: 'Toyota',
        type: 'Nav1',
        seats: 7,
      },
      {
        brand: 'Suzuki',
        type: 'Baleno',
        seats: 4
      },
      {
        brand: 'Porsche',
        type: 'X1',
        seats: 2
      },
      {
        brand: 'Esemka',
        type: 'Ghaib',
        seats: 15
      },
    ]
  },
  methods: {
    btnOnClick() {
      this.isMuncul = !this.isMuncul
    },
    removeCar(index) {
      this.cars.splice(index, 1)
    },
    addCar() {
      // Memutus reference
      const data = JSON.parse(JSON.stringify(this.carInput))
      // Masukkan data
      this.cars.push(data)
      // Reset form
      this.carInput.brand = ''
      this.carInput.type = ''
      this.carInput.seats = ''
      // Tampilkan msg sukses selama 5 detik
      this.isMsgShown = true
      setTimeout(() => {
        this.isMsgShown = false
      }, 5000)
    }
  },
  computed: {
    carsComputed() {
      return this.cars
    },
    carsFiltered() {
      return this.cars.filter(car => {
        return (car.brand.includes(this.carFilterParams) ||
        car.type.includes(this.carFilterParams) ||
        car.seats.toString().includes(this.carFilterParams))
      })
    }
  }
})