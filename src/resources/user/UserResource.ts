import { IUser } from '../../interfaces/user/IUser';

export class UserResource {
  static single(user: IUser) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  static collection(users: IUser[]) {
    return users.map(UserResource.single);
  }
}