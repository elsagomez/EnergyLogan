module.exports = function(sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", {

            project_id: {
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
                type: DataTypes.STRING,
                allowNull: true
            },

            floors: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },

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
                  // Associating Projects with surveys
                  // When an Projects is deleted, also delete any associated surveys
                  Projects.hasMany(models.Surveys, {
                      onDelete: "cascade"
                  });
                  Projects.hasMany(models.Floors, {
                      onDelete: "cascade"
                  });
              }
          }
      });

return Projects;
};
