import { Author } from '@/common/interfaces/author';
import { Artist } from '@/common/interfaces/artist';
import { Genre } from '@/common/interfaces/genre';
import { CONTENT_TYPE } from '@/common/constants/content-type.enum';

export interface NovelSummary {
  id: number;
  type: CONTENT_TYPE;
  title: string;
  cover_image_url: string;
  latest_chapter_date: string;
  views: number;
  average_score: number;
  vote_count: number;
  author: Author;
  artist: Artist;
  genres: Genre[];
  content: {
    id: number;
    index: number;
    title: string;
    created_at: string;
  } | null;
}
