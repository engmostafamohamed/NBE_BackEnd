import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface OtpAttributes {
  id: number;
  phoneNumber: string;
  otp: string;
  expiresAt: Date;
  isVerified: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface OtpCreationAttributes extends Optional<OtpAttributes, "id" | "isVerified"> {}

class Otp extends Model<OtpAttributes, OtpCreationAttributes>
  implements OtpAttributes {
  public id!: number;
  public phoneNumber!: string;
  public otp!: string;
  public expiresAt!: Date;
  public isVerified!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Otp.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "phone_number",
    },
    otp: {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "expires_at",
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: "is_verified",
    },
  },
  {
    sequelize,
    modelName: "Otp",
    tableName: "otps",
    timestamps: true,
    underscored: true,
  }
);

export default Otp;
