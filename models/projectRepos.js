module.exports = (sequelize, DataTypes) => {
    var Projects = sequelize.define("Repos", {
        repo_name: DataTypes.STRING,
        repo_link: DataTypes.STRING,
        deployed_link: DataTypes.STRING
    });

    return Projects;
}