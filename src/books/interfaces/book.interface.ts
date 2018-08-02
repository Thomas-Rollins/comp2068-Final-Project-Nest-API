import { Document } from 'mongoose';

export interface Book extends Document {
  readonly title: string;
  readonly author: string;
  readonly genres: string[];
  readonly publishdate: Date;
  readonly isbn10: string;
  readonly isbn13: string;
  readonly pagecount: number;
  readonly rating: number;
}