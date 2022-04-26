import moment from "moment-timezone";

export class User {
  private _id: number;
  private _email: string;
  private _password: string;
  private _createdAt: moment.Moment;
  private _updatedAt: moment.Moment;

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get createdAt(): moment.Moment {
    return this._createdAt;
  }

  getUTCCreatedAt(): string {
    if (this._createdAt) {
      return this._createdAt.utc().format("YYYY-MM-DD HH:mm:ss");
    }
    return null;
  }

  set createdAt(t: moment.Moment) {
    this._createdAt = t;
  }

  get updatedAt(): moment.Moment {
    return this._updatedAt;
  }

  getUTCUpdatedAt(): string {
    if (this._updatedAt) {
      return this._updatedAt.utc().format("YYYY-MM-DD HH:mm:ss");
    }
    return null;
  }

  set updatedAt(t: moment.Moment) {
    this._updatedAt = t;
  }

  constructor(email: string = null, password: string = null) {
    this._email = email;
    this._password = password;
  }
}
