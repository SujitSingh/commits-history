export interface CommitModel {
  author: any,
  commit: any,
  committer: any,
  files?: Array<any>,
  html_url: string,
  sha: string,
  stats?: {
    additions: number,
    deletions: number,
    total: number
  },
  url: string,
};