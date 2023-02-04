import { AxiosError } from 'axios';

export default class ResponseError {
  message: string;

  code: number;

  constructor({ response, isAxiosError }: AxiosError | any) {
    const text = response?.data?.message as string;
    const message = text || 'An error has occurred, please try again.';

    this.message = isAxiosError ? message : '';
    this.code = response?.status || 0;
  }
}
