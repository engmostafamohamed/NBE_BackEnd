import { CreateCustNidTelSrcDto, UpdateCustNidTelSrcDto } from "../dtos/auth/nidTelSrcDto";

export interface ICustNidTelSrc {
  id?: number;
  nationalID: number;
  phoneNumber: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// export interface ICustNidTelSrcService {
//   create(data: CreateCustNidTelSrcDto): Promise<ICustNidTelSrc>;
//   findById(id: number): Promise<ICustNidTelSrc | null>;
//   findByNationalId(nationalId: string): Promise<ICustNidTelSrc | null>;
//   findByPhoneNumber(phoneNumber: string): Promise<ICustNidTelSrc | null>;
//   findAll(): Promise<ICustNidTelSrc[]>;
//   update(id: number, data: UpdateCustNidTelSrcDto): Promise<ICustNidTelSrc | null>;
//   delete(id: number): Promise<boolean>;
// }