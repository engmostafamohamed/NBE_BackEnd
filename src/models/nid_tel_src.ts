// models/nid_tel_src.ts
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database";

interface NidTelSrcAttributes {
  id: number;
  nationalId: string;
  phoneNumber: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface NidTelSrcCreationAttributes
  extends Optional<NidTelSrcAttributes, "id"> {}

class NidTelSrc
  extends Model<NidTelSrcAttributes, NidTelSrcCreationAttributes>
  implements NidTelSrcAttributes
{
  public id!: number;
  public nationalId!: string;
  public phoneNumber!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

NidTelSrc.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nationalId: {
      type: DataTypes.STRING(14),
      allowNull: false,
      unique: true,
      field: "national_id",
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      field: "phone_number",
    },
  },
  {
    sequelize,
    modelName: "NidTelSrc",
    tableName: "nid_tel_src",
    timestamps: true,
    underscored: true,
  }
);

export default NidTelSrc;
