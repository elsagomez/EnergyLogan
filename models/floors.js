module.exports = function(sequelize, DataTypes) {
  var Floors = sequelize.define("Floors", {
    floor_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    floor_number: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    project_id: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  }
  );
  return Floors;
};
