export type Experience = {
  id: string;
  position: string;
  company: string;
  company_url: string;
  company_logo: string;
  from_date: string;
  description: string;
};

export type TimelineContentProps = {
  content: Experience;
};
