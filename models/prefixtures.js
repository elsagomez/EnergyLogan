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

    
 
   
  }
  );
  return Prefixtures;
};