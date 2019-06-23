export interface Post {
    postId: number;
    postType: number;

    postText: string;
    link: string;
    sharedBy: string;
    date: string;

    sharedWith: string;

    vote: number;
  }