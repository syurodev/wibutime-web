export interface EditorContentChild {
  text: string;
  italic?: boolean;
  bold?: boolean;
}

export interface EditorContent {
  id: string;
  type: string;
  url?: string;
  children: EditorContentChild[];
}
