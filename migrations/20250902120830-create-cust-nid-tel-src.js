"use strict";

/** @type {import('sequelize-cli').Migration} */
import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable("cust_nid_tel_src", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      nationalId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "national_id", 
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "phone_number",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "updated_at",
      },
    });

    // Add indexes for better performance
    await queryInterface.addIndex("cust_nid_tel_src", ["national_id"]);
    await queryInterface.addIndex("cust_nid_tel_src", ["phone_number"]);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable("cust_nid_tel_src");
  },
};
