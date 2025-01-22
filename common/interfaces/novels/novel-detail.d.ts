import { Author } from '@/common/interfaces/author';
import { Artist } from '@/common/interfaces/artist';
import { EditorContent } from '@/common/interfaces/editor';
import { Genre } from '@/common/interfaces/genre';
import { VolumeSummary } from '@/common/interfaces/novels/volume-summary';

export interface NovelDetail {
  id: number;
  title: string;
  cover_image_url: string;
  summary: EditorContent[];
  author: Author;
  artist: Artist;
  status: number;
  average_score: number;
  vote_count: number;
  genres: Genre[];
  type: number;
  alternative_names: string[];
  word_count: number;
  volumes: VolumeSummary[];
  user: {
    id: number;
    name: string;
    avatar: string;
  };
}
