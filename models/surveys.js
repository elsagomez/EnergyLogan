module.exports = function(sequelize, DataTypes) {
  var Surveys = sequelize.define("Surveys", {
    survey_id: {
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
    room: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
    },
    fixture: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
  },
    {
      // We're saying that we want our Projects to have Surveys
      classMethods: {
        associate: function(models) {
          // A Projects (foreignKey) is required or a Surveys can't be made
          Surveys.belongsTo(models.Projects, {
            foreignKey: {
              allowNull: false
            }
          });
          Surveys.belongsTo(models.Floors, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  );
  return Surveys;
};
