module.exports = (sequelize, DataTypes) => {
    var Projects = sequelize.define("Repos", {
        repo_name: DataTypes.STRING,
        repo_link: DataTypes.String,
        deployed_link: DataTypes.STRING
    });

    return Projects;
}