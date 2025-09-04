import { ICustNidTelSrc } from '../../interfaces/ICustNidTelSrc';

export interface nidTelSrcResourceData {
  id: number;
  nationalId: number;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
}
export class NidTelSrcResource {
  static single(data: ICustNidTelSrc): nidTelSrcResourceData {
    return {
      id: data.id ?? 0,
      nationalId: data.nationalID,
      phoneNumber: data.phoneNumber,
      createdAt: data.createdAt ? data.createdAt.toISOString() : '',
      updatedAt: data.updatedAt ? data.updatedAt.toISOString() : '',
    };
  }

  static collection(data: ICustNidTelSrc[]): nidTelSrcResourceData[] {
    return data.map(item => this.single(item));
  }
}