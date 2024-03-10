export interface TeacherModel {
  block: boolean;
  dob: Date;
  doj: Date;
  email: null | string;
  experience: number;
  firstName: string;
  languageId: LanguageID;
  lastName: string;
  password: number | null;
  profilePicture: string;
  qualification: null | string;
  role: null | string;
  teacherId: number;
}

export enum LanguageID {
  EnUS = "en_US",
}
