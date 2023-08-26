package main

import (
	"github.com/lyft/clutch/backend/gateway"

	"github.com/SparrowLabsCo/echo-demo/backend/cmd/assets"
	"github.com/SparrowLabsCo/echo-demo/backend/module/echo"
)

func main() {
	flags := gateway.ParseFlags()

	components := gateway.CoreComponentFactory

	// Add custom components.
	components.Modules[echo.Name] = echo.New

	gateway.Run(flags, components, assets.VirtualFS)
}
