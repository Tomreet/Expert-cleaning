export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface BeforeAfterSlide {
  id: number;
  before: string;
  after: string;
}