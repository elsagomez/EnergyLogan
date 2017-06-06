module.exports = function(sequelize, DataTypes) {
  var Prefixtures = sequelize.define("Prefixtures", {
    preFixID: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    pre_lampCode: DataTypes.STRING,

    pre_type: DataTypes.STRING,

    pre_desccription: DataTypes.STRING,

    pre_ballast: DataTypes.STRING, 
      
    pre_lampNum: DataTypes.INTEGER, 

    pre_watts: DataTypes.INTEGER, 

    pre_wattsPerFix: DataTypes.INTEGER

    
 
   
  },
    {
      // We're saying that we want our Projects to have Surveys
      classMethods: {
        associate: function(models) {
          // A Projects (foreignKey) is required or a Surveys can't be made
          Prefixtures.hasMany(models.Surveys, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
    // {
    //   //for join? don't want to put survey id into fixutures table per se via association
    //   fixture_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     len: [1]
    //    }
    //   // // We're saying that we want our Fixtures to have Surveys
    //   // classMethods: {
    //   //   associate: function(models) {
    //   //     // A Fixtures (foreignKey) is required or a Surveys can't be made
    //   //     Surveys.belongsTo(models.Fixtures, {
    //   //       foreignKey: {
    //   //         allowNull: false
    //   //       }
    //   //     });
    //   //   }
    //   // }
    // },
    // {
    //   quantity: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     len: [1]
    //    }
   
  );
  return Prefixtures;
};