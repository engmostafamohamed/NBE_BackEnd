export interface CreateCustNidTelSrcDto {
  nationalId: string;
  phoneNumber: string;
}

export interface UpdateCustNidTelSrcDto {
  nationalId?: string;
  phoneNumber?: string;
}
