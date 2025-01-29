// sessions

export interface SessionType {
  title: string;
  instructor: string;
  date?: string;
  time?: string;
  flyer?: string;
  videoURL?: string;
  isUpcoming: boolean;
  slidesURL?: string;
  resourcesURL?: string;
  images?: string[];
  type: SessionTypeEnum | undefined;
}

export enum SessionTypeEnum {
  PODCAST = "PODCAST",
  WORKSHOP = "WORKSHOP",
  INFO = "INFO",
}
