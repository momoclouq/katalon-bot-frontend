export type ChatResponse = {
  isBot: boolean;
  sentence: string;
  recommendations?: Recommendation[]
}

export type UserResponse = ChatResponse;

export type Recommendation = {
  title: string;
  subtitle?: string;
  url: string;
}