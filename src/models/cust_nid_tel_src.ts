// models/cust_nid_tel_src.ts
import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/database"; // adjust path

// Define attributes
interface CustNidTelSrcAttributes {
  id: number;
  nationalId: string;
  phoneNumber: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// For creation (id auto-increment)
interface CustNidTelSrcCreationAttributes
  extends Optional<CustNidTelSrcAttributes, "id"> {}

// Extend Sequelize Model
class CustNidTelSrc
  extends Model<CustNidTelSrcAttributes, CustNidTelSrcCreationAttributes>
  implements CustNidTelSrcAttributes
{
  public id!: number;
  public nationalId!: string;
  public phoneNumber!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Init model (link with DB table)
CustNidTelSrc.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nationalId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "CustNidTelSrc",
    tableName: "cust_nid_tel_src", // matches your table name
    timestamps: true,
  }
);

export default CustNidTelSrc;
