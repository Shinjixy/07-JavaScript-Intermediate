// SOAL NOMOR 1
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
const obj = {
    fun1: function () {
        console.log("fun1", this);
    },
    fun2: () => {
        console.log("fun2", this);
    }
};

obj.fun1();
obj.fun2();
// JAWAB
// 1. yang terjadi adalah seperti berikut fun1 { fun1: [Function: fun1], fun2: [Function: fun2] }
// fun2 {}
// 2. tidak sama karena hasil fun2 merupakan objek kosong
// 3. Karena fun2 menggunakan arrow function sehingga isi dari fun2 adalah object kosong


//SOAL NOMOR 2
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?

// JAWAB
// 1. Pembatasan akses properti pada class OOP yang dibuat untuk antisipasi UPDATE dari luar.
// 2. Menyembunyikan detail tanpa mengetahui isi dari class yang dibuat.
// 3. Penurunan properti dan method dari parent ke class child dibuat untuk memudahkan pembuatan class selanjutnya tanpa membuat class dari kosong.
// 4. Penurunan atau pewarisan behaviour sesuai dengan child classnya untuk memudahkan tanpa membuat method baru.


// SOAL NOMOR 3
class Phone {
    constructor(brand, storage, ram) {

        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
    }

    getBrandName() {
        return `${this.brand}`
    }

    setBrandName(brand) {
        this.brand = brand;
    }

    printSpecification() {
        return console.log(`Ponsel ini memiliki storage: ${this.storage} dan ram: ${this.ram}`)
    }

    setSpecification(storage, ram) {
        this.storage = storage
        this.ram = ram;
    }


}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();



// SOAL NOMOR 4
class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courseOfferings = [];
    }
  
    takeNewCourse(course) {
      if (this.courseOfferings.length === 0) {
        const courseOffering = new CourseOffering(course);
        this.courseOfferings = [courseOffering];
        course.decreaseQuota();
      } else {
        const isAlreadyExist = this.courseOfferings.find(
          (courseOffering) =>
            courseOffering.course.getSubject() === course.getSubject()
        );
  
        if (isAlreadyExist === undefined) {
          const courseOffering = new CourseOffering(course);
          this.courseOfferings = [...this.courseOfferings, courseOffering];
          course.decreaseQuota();
        }
      }
    }
  
    takeATest(course) {
      const idx = this.courseOfferings.findIndex(
        (courseOffering) =>
          courseOffering.course.getSubject() === course.getSubject()
      );
      if (this.courseOfferings[idx].attendance >= course.getAttendance()) {
        this.courseOfferings[idx].grade = Math.floor(Math.random() * 100);
      } else {
        console.log(
          `please fill your absen ${course.getSubject()}`
        );
      }
    }
  
    courseAttendance(course) {
      const idx = this.courseOfferings.findIndex(
        (courseOffering) =>
          courseOffering.course.getSubject() === course.getSubject()
      );
      this.courseOfferings[idx].attendance += 1;
    }
  }
  
  class CourseOffering {
    constructor(course) {
      this.course = course;
      this.attendance = 0;
      this.grade = 0;
    }
  }
  
  class Course {
    constructor(subject, quota, attendance) {
      this.subject = subject;
      this.quota = quota;
      this.attendance = attendance;
    }
  
    getSubject() {
      return this.subject;
    }
  
    getAttendance() {
      return this.attendance;
    }
  
    decreaseQuota() {
      this.quota -= 1;
    }
  }
  
  const biology = new Course('biology', 10, 3);
  const physics = new Course('physics', 10, 2);
  
  const johnWatson = new Student('john watson', 'male');
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);