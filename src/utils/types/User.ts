export type User = {
  _id: string,
  name: string;
  userName: string;
  surname: string;
  email: string;
  picture: string;
  phone: string;
  password: string;
  passwordResetToken: string;
  purchaseHistoric: Array<string>;
  participatingList: Array<string>;
  favoriteList: Array<string>;
};
