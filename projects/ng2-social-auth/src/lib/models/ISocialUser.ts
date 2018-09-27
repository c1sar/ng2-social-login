export interface ISocialUser {
  id: string;
  name: string;
  email: string;
  profileImg: string;
  firstName?: string;
  lastName?: string;
  accessToken: string;
  idToken?: string;
}
