module.exports = function(sequelize, DataTypes){
	var Projects = sequelize.define("Projects",{

		project_id:{
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},

		project_name: {
			type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
  },
  		customer: {
  			type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

  }, 
  		address: {
  			type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

  }, 
  		contact_name: {
  			type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

  }, 
  		contact_number: {
  			type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }

  }, 
  		account_number: {
  			type: DataTypes.INTEGER,
      allowNull: true
      },

 
 		num_floors: {
  			type: DataTypes.INTEGER,
      allowNull: false
      },


    other: DataTypes.STRING,

    scheduled_date: {
        type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
  },
    comments: DataTypes.STRING

  },

      {
      // We're saying that we want our Projects to have Surveys
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          // When an Author is deleted, also delete any associated Posts
          Projects.hasMany(models.Surveys, {
            onDelete: "cascade"
          });
        }
      }
    });

	return Projects;
};