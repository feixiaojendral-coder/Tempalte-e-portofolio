export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  iconLink?: string;
  size?: string;
  modifiedTime: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

export interface DriveFolderContent {
  files: DriveFile[];
  nextPageToken?: string;
}
