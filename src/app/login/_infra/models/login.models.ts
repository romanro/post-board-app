import { IBaseRestResponce } from '@core/models';

export interface ILoginResponce extends IBaseRestResponce {
  token?: string;
  message?: string;
}

export interface ILoginData {
  username: string;
  password: string;
}
