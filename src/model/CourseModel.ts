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
  videos: Video[];
}

export interface Video {
  fileName: string;
  isBlock: boolean;
  thumbnail: string;
  title: string | null;
  videoId: number;
}
