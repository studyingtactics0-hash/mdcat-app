export interface Lecture {
    id: number;
    title: string;
    subject: string;
    chapter: string;
    videoId: string;
    description?: string;
  }
  
  export const lectures: Lecture[] = [
    {
      id: 1,
      title: "Introduction to Biology",
      subject: "Biology",
      chapter: "Introduction",
      videoId: "fFFRySz78Kw",
      description: "MDCAT Biology lecture by Studying Tactics.",
    },
  
    {
      id: 2,
      title: "Cell Structure",
      subject: "Biology",
      chapter: "Cell Biology",
      videoId: "YOUR_VIDEO_ID_HERE",
      description: "Complete MDCAT lecture on cell structure.",
    },
  ];