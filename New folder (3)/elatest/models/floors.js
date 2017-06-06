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
    }
  },
    {
      // We're saying that we want our Projects to have Floors
      classMethods: {
        associate: function(models) {
          // A Projects (foreignKey) is required or a Floors can't be made
          Floors.belongsTo(models.Projects, {
            foreignKey: {
              allowNull: false
            }
          });
          Floors.hasMany(models.Surveys, {
                      onDelete: "cascade"
          });
        }
      }
    }
  );
  return Floors;

};

