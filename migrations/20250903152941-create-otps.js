"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("otps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      custNidTelSrcId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        field: "cust_nid_tel_src_id",
        references: {
          model: "cust_nid_tel_src",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      otp: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });

    await queryInterface.addIndex("otps", ["cust_nid_tel_src_id"]);
    await queryInterface.addIndex("otps", ["otp"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("otps");
  },
};
