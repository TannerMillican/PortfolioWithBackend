module.exports = (sequelize, DataTypes) => {
    var Repos = sequelize.define("repos", {
        repo_name: DataTypes.STRING,
        repo_link: DataTypes.STRING,
        deployed_link: DataTypes.STRING,
        
    }, {
        timestamps: false
    });

    return Repos;
}