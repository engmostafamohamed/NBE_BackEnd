import { ICustNidTelSrc } from '../../interfaces/ICustNidTelSrc';

export interface CustNidTelSrcResourceData {
  id: number;
  nationalId: number;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}
export class CustNidTelSrcResource {
  static single(data: ICustNidTelSrc): CustNidTelSrcResourceData {
    return {
      id: data.id ?? 0,
      nationalId: data.nationalID,
      phoneNumber: data.phoneNumber,
      createdAt: data.createdAt ? data.createdAt.toISOString() : '',
      updatedAt: data.updatedAt ? data.updatedAt.toISOString() : '',
    };
  }

  static collection(data: ICustNidTelSrc[]): CustNidTelSrcResourceData[] {
    return data.map(item => this.single(item));
  }
}