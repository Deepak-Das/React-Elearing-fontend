export interface CourseModel {
  isBlock: boolean;
  category: string;
  categoryId: number;
  courseId: number;
  createDate: Date;
  description: string;
  language: string;
  languageId: number;
  title: string;
  courseImg: string;
  videos: any[];
}
