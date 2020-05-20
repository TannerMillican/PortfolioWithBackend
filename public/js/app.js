$(document).foundation(() => {
    $("#offCanvasProjects").on("click", () => {
        $.get("/api/projects", (res) => {
            console.log(res)
        })
    })
})