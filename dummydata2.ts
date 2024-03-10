interface Teacher {
  teacherId: number;
  firstName: string;
  lastName: string;
  Email: string;
  password: number;
  block: boolean;
  dob: string;
  languageId: string;
  qualification: number;
  doj: string;
  experience: number;
  role: string;
  profilePicture: string;
}

const teachers: Teacher[] = [
  {
    teacherId: 1,
    firstName: "Alex",
    lastName: "Smith",
    Email: "alex.smith@example.com",
    password: 654321,
    block: false,
    dob: "1988-05-20",
    languageId: "en_US",
    qualification: 6,
    doj: "2019-02-15",
    experience: 4,
    role: "teacher",
    profilePicture: "http://example.com/alex.jpg",
  },
  {
    teacherId: 2,
    firstName: "Jessica",
    lastName: "Brown",
    Email: "jessica.brown@example.com",
    password: 987654,
    block: false,
    dob: "1992-09-10",
    languageId: "en_US",
    qualification: 7,
    doj: "2017-08-01",
    experience: 5,
    role: "teacher",
    profilePicture: "http://example.com/jessica.jpg",
  },
  {
    teacherId: 3,
    firstName: "Ryan",
    lastName: "Johnson",
    Email: "ryan.johnson@example.com",
    password: 123789,
    block: false,
    dob: "1983-03-15",
    languageId: "en_US",
    qualification: 8,
    doj: "2015-06-20",
    experience: 10,
    role: "teacher",
    profilePicture: "http://example.com/ryan.jpg",
  },
  {
    teacherId: 4,
    firstName: "Emma",
    lastName: "Wilson",
    Email: "emma.wilson@example.com",
    password: 456123,
    block: false,
    dob: "1995-11-25",
    languageId: "en_US",
    qualification: 9,
    doj: "2014-03-10",
    experience: 7,
    role: "staff",
    profilePicture: "http://example.com/emma.jpg",
  },
  {
    teacherId: 5,
    firstName: "Daniel",
    lastName: "Martinez",
    Email: "daniel.martinez@example.com",
    password: 789456,
    block: false,
    dob: "1980-07-05",
    languageId: "en_US",
    qualification: 10,
    doj: "2013-09-05",
    experience: 15,
    role: "teacher",
    profilePicture: "http://example.com/daniel.jpg",
  },
];

console.log(teachers);
