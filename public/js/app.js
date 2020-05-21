$(document).ready(() => {
    $("#loadProjects").on("click", () => {
        $.get("/api/projects", (res) => {
            console.log(res)
        })
    })
})