// Array operations
const students = [
  {
    name: 'Nazar',
    age: 18
  },
  {
    name: 'Taslim',
    age: 22
  },
  {
    name: 'Fahrul',
    age: 16
  },
  {
    name: 'Andre',
    age: 32
  },
]

// for each loop
students.forEach((student, index) => {
  // console.log('Nama Siswa Nomor ' + (index+1) + ' adalah ' + student.name)
  // console.log(`Nama Siswa Nomor ${ index+1 } adalah ${ student.name }`)
  const studentInfo = 'Nama Siswa Nomor '.concat(index+1).concat(' adalah ').concat(student.name)
  // console.log(studentInfo)
})

// array map
const newStudentsData = students.map((student, index) => {
  const studentInfo = `Nama Siswa Nomor ${ index+1 } adalah ${ student.name }`
  return studentInfo
})

const newStudentsData1 = students.map((student, index) => {
  const studentInfo = {
    nama: student.name,
    umur: student.age
  }
  return studentInfo
})

const newStudentsData2 = students.map((student, index) => {
  return {
    nama: student.name,
    umur: student.age
  }
})

// console.log(newStudentsData2)
// Array Filter
const filteredStudentList = students.filter(student => {
  return student.age < 20
})

// Array filter + map
const filteredStudentList1 = students
  .filter(student => student.age < 20)
  .map(student => ({ nama: student.name }))

// console.log(filteredStudentList1)


function filterStudent(student) {
  return student.age < 20
}

const filteredStudentList2 = students.filter(filterStudent)
console.log(filteredStudentList2)