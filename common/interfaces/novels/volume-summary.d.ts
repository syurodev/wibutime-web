export interface VolumeSummary {
  id: number;
  title: string;
  cover_image_url: string;
  volume_number: number;
  release_date: string;
  chapters: {
    id: number;
    title: string;
    index: number;
    created_at: string;
  }[];
}
