// Frameworks & Driversレイヤー

package infrastructure

import (
	gin "github.com/gin-gonic/gin"

	"ca/src/interfaces/controllers"
)

var Router *gin.Engine

func init() {
	router := gin.Default()

	userController := controllers.NewUserController(NewSqlHandler())
	taskController := controllers.NewTaskController(NewSqlHandler())

	router.POST("/users", func(c *gin.Context) { userController.CreateUser(c) })
	router.GET("/users", func(c *gin.Context) { userController.IndexUser(c) })
	router.GET("/users/:id", func(c *gin.Context) { userController.ShowUser(c) })
	router.GET("/tasks", func(c *gin.Context) { taskController.IndexTask(c) })
	router.POST("/tasks", func(c *gin.Context) { taskController.CreateTask(c) })
	router.GET("/tasks/:id", func(c *gin.Context) { taskController.ShowTask(c) })

	Router = router
}
